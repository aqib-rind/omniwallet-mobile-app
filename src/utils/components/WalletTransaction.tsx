import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity,PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    source: ImageSourcePropType;
    text: string;
    description: string;
    amount: string;
    onPress: () => void | undefined;
}
const scaleFactor = PixelRatio.get();

const WalletTransaction: React.FC<Props> = ({ source, text, description, amount,onPress }) => {
    
    return (
        <TouchableOpacity style={styles.activity} onPress={onPress}>
            <Image source={source} style={styles.merchantIcon} />
            <View style={styles.TextView}>
                <Text style={styles.nameText}>{text}</Text>
                <Text style={styles.descText}>{description}</Text>
            </View>
            <Text style={styles.amountText}>${amount}</Text>
        </TouchableOpacity>
    );
};

export default WalletTransaction;

const styles = StyleSheet.create({
    activity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        paddingVertical: vh(1),
    },
    merchantIcon: {
        height: vh(6),
        width: vh(6),
        resizeMode: 'contain',
    },
    TextView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: vw(3),
        alignItems: 'flex-start',
        // justifyContent: 'space-between',
    },
    nameText: {
        color: '#130138',
        fontSize: vw(4.5),
        fontFamily: 'Quicksand-Medium',
        // textAlign: 'left',

    },
    descText: {
        color: '#bdbdbd',
        fontSize:vw(4),
        fontFamily: 'Quicksand-Medium',
        // textAlign: 'center',

    },
    amountText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        marginLeft: vw(2.5),
    },
   
});
