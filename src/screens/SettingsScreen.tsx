import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground, Pressable } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import SettingsNav from '../utils/components/SettingsNav';


export default function SettingsScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.HeadingView}>
                        <Text style={styles.Heading}>Settings</Text>
                    </View>
                    <SettingsNav source={require('../utils/assets/profile-icon.png')} name="Profile" onPress={()=>navigation.navigate('ProfileScreen')} />             
                    <SettingsNav source={require('../utils/assets/notification-icon.png')} name="Notification" onPress={()=>navigation.navigate('NotificationScreen')} />             
                    <SettingsNav source={require('../utils/assets/wallet-icon.png')} name="Wallet" onPress={()=>navigation.navigate('WalletHomeScreen')} />             
                    <SettingsNav source={require('../utils/assets/key-icon.png')} name="Login Settings" onPress={undefined} />             
                    <SettingsNav source={require('../utils/assets/call-icon.png')} name="Service Center" onPress={undefined} />             

                    <Pressable style={styles.bottomView} onPress={()=>navigation.navigate('LoginScreen')}>
                        <View style={styles.LogoutIconView}>
                            <Image source={require('../utils/assets/logout-icon.png')} style={styles.LogoutIcon} />
                        </View>
                        <Text style={styles.LogoutText}>Log In</Text>
                    </Pressable>
                    <View style={{ width: '100%', height: 100 }}>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#f5f5f5',
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
    HeadingView: {
        flex: 1,
        width: '100%',
        paddingTop: vh(1),
        paddingBottom: vh(5),
        paddingHorizontal: vw(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Heading: {
        color: '#130138',
        fontSize: vh(3.5),
        fontFamily: 'Rubik-SemiBold',
        textAlign: 'center',
    },
    bottomView: {
        flex: 1,
        paddingTop: vh(1),
        paddingBottom: vh(5),
        paddingHorizontal: vw(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    LogoutIconView: {
        height: vh(8),
        width: vh(8),
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#E0E0E0',
    },
    LogoutIcon: {
        height: vh(5),
        width: vh(5),
        resizeMode: 'contain',
        marginRight: vw(1.5),
    },
    LogoutText: {
        color: '#7A7ADD',
        fontSize: vh(2.5),
        fontFamily: 'Rubik-SemiBold',
        textAlign: 'center',
    },
 
 

});