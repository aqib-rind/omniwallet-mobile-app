import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, PixelRatio, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import Input, { MyPhoneInput, PasswordInput } from '../utils/components/Input';
import { CountryPicker } from "react-native-country-codes-picker";
import PhoneInput from "react-native-phone-number-input";

const scaleFactor = PixelRatio.get();

const formatPhoneNumber = (phone: string) => {
    const cleanedInput = phone.replace(/\D/g, ''); // Remove non-digit characters
    const formattedInput = cleanedInput.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); // Format as (123) 456-7890

    return formattedInput;
  };

export default function SecondRegisterScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [phone, setPhone] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const inputRef = useRef(null);

    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.HeadingView}>
                        <Text style={styles.Heading}>Complete Your Account</Text>
                    </View>
                    {/* Banner */}
                    <Input placeholder="Street Address" source={require('../utils/assets/address-icon.png')} />
                    <Input placeholder="Country" source={require('../utils/assets/globe-icon.png')} />

                    <Input placeholder="State" source={require('../utils/assets/globe-icon.png')} />
                    <Input placeholder="City" source={require('../utils/assets/pin.png')} />
                    <Input placeholder="ZIP Code" source={require('../utils/assets/pin.png')} />
                    <MyPhoneInput placeholder="Phone Number" source={require('../utils/assets/phone-icon.png')} />

                    
                    <TouchableOpacity style={styles.LoginButton} >
                        <Text style={styles.LoginText}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', height: 120 }}></View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    goBack: {

    },
    goBackImg: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    header: {
        height: vh(10),
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: vw(5),
    },
    HeadingView: {
        flex: 1,
        alignItems: 'center',
        // marginTop: scaleFactor > 2 ? (scaleFactor < 3 ? vh(6) : vh(8)) : vh(8),
        marginBottom: scaleFactor > 2 ? (scaleFactor < 3 ? vw(4) : vw(6)) : vw(5),
        paddingHorizontal: scaleFactor > 2 ? (scaleFactor < 3 ? vw(22) : vw(22)) : vw(15),

    },
    Heading: {
        color: '#130138',
        fontSize: scaleFactor > 2 ? (scaleFactor < 3 ? vw(5) : vw(8)) : vw(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        lineHeight: vh(6),
    },
    text: {
        color: '#BDBDBD',
        fontSize: vh(1.8),
        fontFamily: 'Quicksand-Medium',
        paddingLeft: vw(5),
        //textAlign:'center',
    },


    LoginButton: {
        width: vw(40),
        borderRadius: 15,
        backgroundColor: '#7A7ADD',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(5),
        marginBottom: vh(2),
        paddingVertical: vh(2),

    },
    LoginText: {
        color: '#fff',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Bold',
    },


});