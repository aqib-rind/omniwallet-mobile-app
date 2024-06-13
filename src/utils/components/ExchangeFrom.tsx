import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity,PixelRatio, TextInput } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    source: ImageSourcePropType;
    name: string;
    onPress: () => void | undefined;
}
const scaleFactor = PixelRatio.get();

const ExchangeFrom: React.FC<Props> = ({ source, name, onPress }) => {
    return (
        <View style={styles.exchangeContainer}>
        <View style={styles.TopCol}>
            <View style={styles.LeftCol}>

                <Image source={require('../../utils/assets/flag-01.png')} style={styles.flag} />

            </View>
            <View style={styles.RightCol} >
                <Text style={styles.exchangeCurrencyText}>USD</Text>
                <TextInput
                    style={styles.AmountInput}
                    placeholder='0.00'
                    placeholderTextColor={'#130138'}
                />

            </View>
        </View>
        <View style={styles.BottomCol}>
            <Text style={styles.balanceText}>Balance: USD 15960.65</Text>
        </View>



    </View>
    );
};

export default ExchangeFrom;

const styles = StyleSheet.create({
    exchangeContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    // LeftCol: {
    //     flex: 1,    
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    // },
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
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: vw(7),
    },
    exchangeCurrencyText: {
        color: '#130138',
        paddingRight: vw(5),
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
        width: '70%',
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
