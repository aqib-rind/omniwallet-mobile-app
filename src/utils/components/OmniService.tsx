import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-css-vh-vw";

interface OmniServiceProps {
    text: string;
    icon: ImageSourcePropType;
}

const OmniService:React.FC<OmniServiceProps> = ({ text, icon}) => {
    return(
        <TouchableOpacity style={styles.CarservicesView}>
            <Image source={icon} style={styles.servicesIcon} />
            <Text style={styles.CarservicesText}>{text}</Text>
        </TouchableOpacity>

    )
}
const OmniCarService:React.FC<OmniServiceProps> = ({ text, icon}) => {
    return(
        <TouchableOpacity style={styles.CarservicesView}>
            <Image source={icon} style={styles.CarservicesIcon} />
            <Text style={styles.CarservicesText}>{text}</Text>
        </TouchableOpacity>

    )
}
export {OmniCarService};
export default OmniService;
const styles = StyleSheet.create({
    servicesIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
    },
    CarservicesView: {
        width: vw(26),
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: vh(1),
        borderRadius: 15,
    },
    CarservicesIcon: {
        height: vh(3),
        width: vh(6),
        resizeMode: 'contain',
    },
    CarservicesText: {
        color: '#130138',
        fontSize: vh(1.8),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'left',
    },
})