import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType, PixelRatio } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-css-vh-vw";

interface WalletServiceProps {
    text: string;
    icon: ImageSourcePropType;
    onPress?: () => void | undefined;
}
const scaleFactor = PixelRatio.get();
const WalletService:React.FC<WalletServiceProps> = ({ text, icon, onPress}) => {
    return(
        <View style={styles.WservicesView} >
            <TouchableOpacity style={styles.WservicesIconView} onPress={onPress}>
                <Image source={icon} style={styles.WservicesIcon} />
            </TouchableOpacity>
            <Text style={styles.WservicesText}>{text}</Text>
        </View>

    )
}
export default WalletService;
const styles = StyleSheet.create({
    WservicesView: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: vh(1),
    },
    WservicesIconView: {
        height: vh(7),
        width: vh(7),
        borderRadius: scaleFactor > 2 ? (scaleFactor < 3 ? 20 : 25) : 35,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#272246',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: vh(2),
        elevation: 5,
        marginBottom: vh(1),

    },
    WservicesIcon: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain',
    },
    WservicesText: {
        color: '#7A7ADD',
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
        textAlign: 'left',
    },
})