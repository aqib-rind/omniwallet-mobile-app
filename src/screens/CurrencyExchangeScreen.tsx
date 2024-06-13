import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import { s as tw } from 'react-native-wind';
import { TextInput } from 'react-native-gesture-handler';
import ExchangeFrom from '../utils/components/ExchangeFrom';
import ExchangeTo from '../utils/components/ExchangeTo';

const { width, height } = Dimensions.get('window');
console.log(width, height);


export default function CurrencyExchangeScreen() {
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
                    <Text style={styles.activityHeading}>Exchange</Text>

                    <ExchangeFrom/>
                    <View style={styles.unitExchange}>
                        <Image source={require('../utils/assets/left-right-arrow.png')} style={styles.exchangeIcon} />
                        <Text style={styles.unitExchangeText}>1 USD = 0.85 EUR</Text>
                    </View>
                    <ExchangeTo/>

                   

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
        paddingHorizontal: vw(5),
    },
    activityHeading: {
        color: '#130138',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingBottom: vh(5),
    },
    unitExchange: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: vh(1),
    },
    unitExchangeText: {
        color: '#130138',
        fontSize: vh(2),
        fontFamily: 'Rubik-Regular',
    },
    exchangeIcon: {
        height: vh(2.5),
        width: vh(2.5),
        resizeMode: 'contain',
        marginRight: vw(2),
    },
});
