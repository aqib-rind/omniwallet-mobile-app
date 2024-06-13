import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, PixelRatio, Pressable } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';

const scaleFactor = PixelRatio.get();

export default function AddCardScreen() {
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
                        <Text style={styles.Heading}>Add Card</Text>
                                         
                    </View>
                    <View style={styles.ImageView}>
                            <Image source={require('../utils/assets/add-card.png')} style={styles.WalletBG}  />
                        </View>  
                        <Text style={styles.bottomText} onPress={()=>navigation.navigate('DebitCardScreen')}>Add a new card on your wallet for easy life</Text>
                    
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
        paddingBottom: vh(3),
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
    ImageView:{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical:vh(3),
    },
    WalletBG:{
        resizeMode:'contain',
        width: scaleFactor > 2 ? (scaleFactor < 3 ? 215 : 285) : 400,
        height: scaleFactor > 2 ? (scaleFactor < 3 ? 300 : 407) : 570,   
    },
    bottomText:{
        color: '#130138',
        fontSize: scaleFactor > 2 ? (scaleFactor < 3 ? vw(5) : vw(5)) : vw(3),
        fontFamily: 'Quicksand-SemiBold',
        textAlign: 'center',
        paddingHorizontal: scaleFactor > 2 ? (scaleFactor < 3 ? vw(20) : vw(20)) : vw(10),
        paddingVertical: vh(1),
    },


});