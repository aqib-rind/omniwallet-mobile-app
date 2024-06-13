import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground,PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import { s as tw } from 'react-native-wind';

const scaleFactor = PixelRatio.get();
console.log(scaleFactor);

export default function ActivityScreen() {
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
                    <Text style={styles.activityHeading}>Detail Card</Text>
                    <View style={styles.ImageView}>
                        <Image source={require('../utils/assets/horizontal-card.png')} style={styles.WalletBG}  />
                    </View>  
                    <View style={styles.TextContainer}>
                        <View style={styles.TextRow}>
                            <Text style={styles.nameText}>Name:</Text>
                            <Text style={styles.descText}>John Doe</Text>
                        </View>
                        <View style={styles.TextRow}>
                            <Text style={styles.nameText}>Bank:</Text>
                            <Text style={styles.descText}>Omni</Text>
                        </View>
                        <View style={styles.TextRow}>
                            <Text style={styles.nameText}>Card Number:</Text>
                            <Text style={styles.descText}>**** **** **** 3456</Text>
                        </View>
                        <View style={styles.TextRow}>
                            <Text style={styles.nameText}>CVV</Text>
                            <Text style={styles.descText}>***</Text>
                        </View>
                        <View style={styles.TextRow}>
                            <Text style={styles.nameText}>Expiry</Text>
                            <Text style={styles.descText}>02/27</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="mx-4 my-8"  onPress={()=>navigation.navigate('AddCardScreen')}>
                                    <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-2" style={{ fontFamily: 'Rubik-Medium' }}>Add Card</Text>
                                </TouchableOpacity>
                    <View style={{ width: '100%', height: 100 }}>

                    </View>

                </ScrollView>
            </View>
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

    header: {
        height: vh(10),
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        paddingBottom: vh(2),
    },
    ImageView:{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    WalletBG:{
        resizeMode:'contain',
        height: scaleFactor > 2 ? (scaleFactor < 3 ? 215 : 235) : 400,
        width: scaleFactor > 2 ? (scaleFactor < 3 ? 300 : 327) : 570,  
    },
    TextContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        marginTop:vh(2),
    },
    TextRow:{
        width:scaleFactor > 2 ? (scaleFactor < 3 ? 200 : 280) : 570,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        paddingVertical:vh(1),
    },
    nameText: {
        color: '#bdbdbd',
        fontSize:vw(4),
        fontFamily: 'Quicksand-Medium',
        width:scaleFactor > 2 ? (scaleFactor < 3 ? 100 : 150) : 200,
        // textAlign: 'center',
    },
    descText: {
        color: '#130138',
        fontSize: vw(4.2),
        fontFamily: 'Quicksand-Medium',
        textAlign: 'left',
    },
});