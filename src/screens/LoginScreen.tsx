import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import Input, { PasswordInput } from '../utils/components/Input';


export default function LoginScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>

           {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View> 
    */}
         
            
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.HeadingView}>
                    <Text style={styles.Heading}>Welcome back</Text>
                    <Text style={styles.Heading}>to Omni Wallet</Text>
                    </View>
                    <Text style={styles.text}>Sign in with  </Text>
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
                    <PasswordInput placeholder="Password" source={require('../utils/assets/key-icon.png')} />
                    <Text style={styles.ForgetPass}>Forgot Password?</Text>

                    <TouchableOpacity style={styles.LoginButton}>
                        <Text style={styles.LoginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Don't have an account yet? <Text onPress={()=>navigation.navigate('RegisterScreen')} style={{color:'#81C2FF'}}>Register</Text></Text>

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
        marginTop:vh(10),
        marginBottom:vh(5),

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
    ForgetPass: {
        color: '#BDBDBD',
        fontSize: vh(1.8),
        fontFamily: 'Quicksand-Medium',
        textAlign: 'right',
        width: '100%',
        paddingRight: vw(5),
        marginTop: vh(1),
        marginBottom: vh(4),
    },
    LoginButton: {
        width: vw(40),
        borderRadius: 15,
        backgroundColor: '#7A7ADD',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vh(2),
        paddingVertical: vh(2),

    },
    LoginText: {
        color: '#fff',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Bold',
    },  

   
});