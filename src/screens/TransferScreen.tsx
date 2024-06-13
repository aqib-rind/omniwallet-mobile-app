import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import TransferMethod from '../utils/components/TransferMethod';
import { s as tw } from 'react-native-wind';
import { TextInput } from 'react-native-gesture-handler';
import ExchangeFrom from '../utils/components/ExchangeFrom';
import ExchangeTo from '../utils/components/ExchangeTo';

const { width, height } = Dimensions.get('window');
console.log(width, height);


export default function TransferScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    


    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1, }} showsVerticalScrollIndicator={false}>
                    <Text style={styles.activityHeading}>Transfer</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardView}>
                            <TouchableOpacity style={styles.card}>
                                <Image source={require('../utils/assets/transfercard01.png')} style={styles.cardImage} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Image source={require('../utils/assets/transfercard02.png')} style={styles.cardImage} />
                            </TouchableOpacity>
                        </ScrollView>
                    <TransferMethod source={require('../utils/assets/bank-icon.png')} name="Send to yourself" text="Send money from your omni balance to your card or bank account." onPress={() => navigation.navigate('SendtoYourselfScreen')} />
                    <TransferMethod source={require('../utils/assets/omni-icon.png')} name="Omni to Omni" text="Send to anyone on Omni. if they don’t have account. we’ll send a link to register" onPress={() => navigation.navigate('ExploreHotelsScreen')} />
                    <TransferMethod source={require('../utils/assets/interntional-transfer.png')} name="International Transfer" text="Send from your bank or card to a bank account abroad. No transfer fee and great exchange rates." onPress={() => navigation.navigate('ExploreHotelsScreen')} />
                    <TransferMethod source={require('../utils/assets/interntional-transfer.png')} name="Request money" text="Request from anyone even if they don't have omni account yet, send them a link to pay." onPress={() => navigation.navigate('ExploreHotelsScreen')} />
                        



                    
                   

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
    container: {
        flex: 1,
        width: '100%',
    },
    activityHeading: {
        color: '#130138',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingBottom: vh(5),
    },
    cardView: {
        width: '100%',
        height: vh(25),
        marginTop: vh(2),
        paddingHorizontal: vw(5),
    },
    card: { 
        width: vw(70),
        height: vh(22),
        borderRadius: 10,
        marginRight: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
