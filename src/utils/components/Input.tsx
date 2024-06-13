import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import PhoneInput from 'react-native-phone-number-input';

const scaleFactor = PixelRatio.get();

interface InputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: any;
    secureTextEntry?: boolean | undefined;
    source?: any;
}


const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry, source }) => {
    return (
        <View style={styles.InputView}>
            <Image source={source} style={styles.InputIcon} />
            <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                placeholderTextColor="#828282"
                cursorColor={'#000'}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>

    );
}
const PasswordInput: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry, source }) => {

    const [hide, setHide] = useState(true);

    const hidePressed = () => {
        setHide(!hide);

    }
    return (
        <View style={styles.InputView}>
            <Image source={source} style={styles.InputIcon} />
            <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                placeholderTextColor="#828282"
                cursorColor={'#000'}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={hide}
            />
            <TouchableOpacity onPress={hidePressed}>
                <Image source={require('../assets/eye-icon.png')} style={styles.eyeIcon} tintColor={hide ? '#828282' : '#353535'} />
            </TouchableOpacity>
        </View>

    );
}

// const MyPhoneInput: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry, source }) => {

//     const [formattedValue, setFormattedValue] = useState('');
//     const [phone, setPhone] = useState('');
//     const phoneInput = React.useRef(null);

//     const formatPhoneNumber = (number: string) => {
//         const cleanedNumber = number.replace(/\D/g, ''); // Remove non-digit characters
//         const formattedNumber = cleanedNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); // Format as (123) 456-7890
    
//         setPhone(cleanedNumber);
//         setFormattedValue(formattedNumber);
//       };
    

//     return (
//         <View style={styles.InputView}>
//         <Image source={source} style={styles.InputIcon} />
//         <PhoneInput
//           ref={phoneInput}
//           defaultValue={formattedValue} // Use formattedValue here
//           defaultCode="US"
//           layout="second"

//           onChangeText={formatPhoneNumber}
//           onChangeFormattedText={formatPhoneNumber}
//           disableArrowIcon={true}
//           containerStyle={styles.containerStyle}
//           codeTextStyle={styles.codeTextStyle}
//           textContainerStyle={styles.textContainerStyle}
//           textInputStyle={styles.textInpuStyle}
//           countryPickerButtonStyle={styles.countryPickerButtonStyle}
//           countryPickerProps={{ withAlphaFilter: true }}
//           textInputProps={
//             phone.length > 0
//               ? { placeholderTextColor: '#353535A6', placeholder: '(000) 000-0000' }
//               : { placeholderTextColor: '#353535A6', placeholder: 'Phone' }
//           }
//         />
//       </View>


//     );
// }
export default Input;
export { PasswordInput };
const styles = StyleSheet.create({
    InputView: {
        flex: 1,
        overflow: 'hidden',
        marginHorizontal: vw(5),
        paddingVertical: scaleFactor > 2 ? (scaleFactor < 3 ? vw(1) : vh(1)) : vh(1),
        marginTop: vh(2),
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    InputIcon: {
        height: vh(2.5),
        width: vh(2.5),
        marginHorizontal: vw(5),
        tintColor: '#828282',
        resizeMode: 'contain',
    },
    TextInput: {
        flex: 1,
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
        color: '#000',

    },
    eyeIcon: {
        height: vh(3),
        width: vh(3),
        marginHorizontal: vw(5),
        resizeMode: 'contain',
    },
    containerStyle: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
        height: vh(6),
        flex: 1,
    },
    textContainerStyle:{
        backgroundColor: 'transparent',  
      },
    textInpuStyle: { 
        backgroundClor: 'yellow', 
        fontFamily: 'Quicksand-Medium', 
        fontSize: vh(2),
        color: '#828282', 
        height: vh(6),
    },
    countryPickerButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        height: vh(6),
        width: vw(10),
    },
    codeTextStyle:{
        fontFamily: 'Quicksand-Medium', 
        color: '#828282', 
        fontSize: vh(2),
        paddingLeft: 0, 
        marginLeft: -10,

        
    }

});