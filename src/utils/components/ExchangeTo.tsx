import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity,PixelRatio, TextInput } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import SelectDropdown from 'react-native-select-dropdown';

interface Props {
    source: ImageSourcePropType;
    name: string;
    onPress: () => void | undefined;
}
const scaleFactor = PixelRatio.get();

const ExchangeTo: React.FC<Props> = ({ source, name, onPress }) => {
    const Currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'CHF', 'MYR', 'JPY', 'CNY'];
    return (
        <View style={styles.exchangeContainer}>
        <View style={styles.TopCol}>
            <View style={styles.LeftCol}>

                <Image source={require('../../utils/assets/flag-01.png')} style={styles.flag} />

            </View>
            <View style={styles.RightCol} >
                <SelectDropdown
                data={Currencies}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                defaultButtonText={'EUR'}
                buttonStyle={{backgroundColor:'transparent',borderWidth:0,alignItems:'center',justifyContent:'center',width:100}}
                buttonTextStyle={{color:'#130138',fontSize:vh(2.5),fontFamily:'Quicksand-Medium'}}
                dropdownStyle={{backgroundColor:'#fff',borderRadius:10}}
                rowStyle={{backgroundColor:'#fff',borderRadius:10}}
                rowTextStyle={{color:'#130138',fontSize:vh(2.5),fontFamily:'Quicksand-Medium'}}
                renderDropdownIcon={isOpened => (
                    <Image  source={isOpened ? require('../assets/dropup.png') : require('../assets/dropdown.png')} resizeMode='contain' style={{ height: 10, width: 10 }} />
                  )}

                />

                <Text style={styles.exchangeCurrencyText}>0.00</Text>
            </View>
        </View>
        <View style={styles.BottomCol}>
            <Text style={styles.balanceText}>Balance: USD 15960.65</Text>
        </View>



    </View>
    );
};

export default ExchangeTo;

const styles = StyleSheet.create({
    exchangeContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    LeftCol: {
        flex: 1,    
        justifyContent: 'flex-end',
        width: '20%',
    },
    TopCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        verticalAlign: 'middle',
        paddingTop: vh(2),
        paddingBottom: vh(1),
        paddingHorizontal: vw(5),
    },
    RightCol: {
        width: '85%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    exchangeCurrencyText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Medium',
    },
    flag: {
        height: vh(5),
        width: vh(5),
        resizeMode: 'contain',
    },
    AmountInput: {
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Medium',
        color: '#130138',
        textAlign: 'right',
        width: '80%',
        marginRight: vw(5),
    },
    BottomCol:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: vh(1),
        paddingHorizontal: vw(5),
    },
    balanceText: {
        color: '#130138',
        fontSize: vh(1.8),
        fontFamily: 'Rubik-Regular',
    },
});
