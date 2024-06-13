import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import Input, { PasswordInput } from '../utils/components/Input';


export default function RegisterScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View> */}
            
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.HeadingView}>
                    <Text style={styles.Heading}>Immediately feel the </Text>
                    <Text style={styles.Heading}> ease of transacting just </Text>
                    <Text style={styles.Heading}> by registering</Text>
                    </View>
                    <Text style={styles.text}>Sign up with  </Text>
                    {/* Banner */}
                    <View style={styles.OptionsView}>
                        <TouchableOpacity style={[styles.OptionsContainer, styles.googleContainer]}>
                            <Image source={require('../utils/assets/google.png')} style={styles.OptionsIcon} />
                            <Text style={[styles.OptionsText, styles.googleText]}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.OptionsContainer, styles.FacecookContainer]}>
                            <Image source={require('../utils/assets/facebook.png')} style={styles.OptionsIcon} />
                            <Text style={[styles.FacecookText, styles.OptionsText]}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Input placeholder="Username" source={require('../utils/assets/profile-icon.png')} />
                    <Input placeholder="Email" source={require('../utils/assets/username-icon.png')} />
                    <PasswordInput placeholder="Password" source={require('../utils/assets/key-icon.png')} />

                    <TouchableOpacity style={styles.LoginButton}>
                        <Text style={styles.LoginText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Already have an account! <Text style={{color:'#81C2FF'}} onPress={()=>navigation.navigate('LoginScreen')}>Login</Text></Text>

                    <View style={{ width: '100%', height: 150 }}>

                    </View>
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
        backgroundColor: '#F5F5F5',
        paddingHorizontal: vw(5),
    },
    HeadingView:{
        flex:1,
        alignItems:'center',
        marginTop:vh(8),
        marginBottom:vh(4),

    },
    Heading: {
        color: '#130138',
        fontSize: vh(3.5),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        lineHeight:vh(4.5),

    },
    text: {
        color: '#BDBDBD',
        fontSize: vh(1.8),
        fontFamily: 'Quicksand-Medium',
        paddingLeft: vw(5),
        //textAlign:'center',
    },
    OptionsView: {
        flex: 1,
        marginTop: vh(2),
        marginBottom: vh(2),
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: vw(5),
    },
    OptionsContainer: {
        flex: 1,
        marginHorizontal: vw(4),
        flexDirection: 'row',
        width:  vw(38),
        paddingVertical: vh(2),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: vw(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    googleContainer: {
        backgroundColor: '#fff',
    },
    OptionsIcon: {
        height: vh(3),
        width: vh(3),
        marginHorizontal: vw(2),
        resizeMode: 'contain',
    },
    OptionsText: {
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
        paddingBottom: 3,
    },
    googleText: {
        color: '#BDBDBD',
    },
    FacecookContainer: {
        backgroundColor: '#4368C7',
    },
    FacecookText: {
        color: '#fff',
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