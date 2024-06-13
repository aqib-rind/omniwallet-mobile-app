import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground, Pressable } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import SettingsNav from '../utils/components/SettingsNav';


export default function ProfileScreen() {
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
                    <View style={styles.TopView}>
                        <ImageBackground source={require('../utils/assets/white-man.jpg')} style={styles.ProfilePicture}>
                            <Text style={styles.changePhotoText}>change</Text>
                        </ImageBackground>
                        <View style={styles.nameView}>
                            <Text style={styles.ProfileName}>John Doe</Text>
                            <Image source={require('../utils/assets/edit-icon.png')} style={styles.EditIcon} />
                        </View>

                    </View>
                    <Pressable style={styles.setting}>
                            <Text style={styles.settingText}>Connected Account</Text>
                            <Image source={require('../utils/assets/arrow-right.png')} style={styles.arrowIcon} />
                    </Pressable>
                    <Pressable style={styles.setting}>
                            <Text style={styles.settingText}>Privacy and security</Text>
                            <Image source={require('../utils/assets/arrow-right.png')} style={styles.arrowIcon} />
                    </Pressable>
                    <Pressable style={styles.setting}>
                            <Text style={styles.settingText}>Login settings</Text>
                            <Image source={require('../utils/assets/arrow-right.png')} style={styles.arrowIcon} />
                    </Pressable>
                    <Pressable style={styles.setting}>
                            <Text style={styles.settingText}>Services center</Text>
                            <Image source={require('../utils/assets/arrow-right.png')} style={styles.arrowIcon} />
                    </Pressable>

                    <Pressable style={styles.bottomView}>
                        <View style={styles.LogoutIconView}>
                            <Image source={require('../utils/assets/delete-icon.png')} style={styles.LogoutIcon} />
                        </View>
                        <Text style={styles.LogoutText}>Delete Account</Text>
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
    TopView: {
        flex: 1,
        width: '100%',
        paddingTop: vh(3),
        paddingBottom: vh(5),
        paddingHorizontal: vw(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    ProfilePicture: {
        height: vh(15),
        width: vh(15),
        resizeMode: 'cover',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    changePhotoText: {
        position: 'absolute',
        bottom: 0,
        color: '#fff',
        fontSize: vh(2),
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        backgroundColor:'rgba(47, 17, 85, 0.7)',
        width:'100%',
        height:vh(3.5),
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: vh(1),
    },
    ProfileName: {
        color: '#130138',
        fontSize: vh(3),
        fontFamily: 'Rubik-SemiBold',
        textAlign: 'center',
    },
    EditIcon: {
        height: vh(2.5),
        width: vh(2.5),
        resizeMode: 'contain',
        marginLeft: vw(2),
    },
    setting: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: vw(5),
        marginBottom: vh(4),
    },
    settingText: {
        color: '#130138',
        fontSize: vw(4.5),
        fontFamily: 'Quicksand-SemiBold',
        textAlign: 'center',
    },
    arrowIcon: { 
        height: vh(1.5), 
        width: vh(1.5), 
        resizeMode: 'contain',
        marginRight:vw(3), 
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