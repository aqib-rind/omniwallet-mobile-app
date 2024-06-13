import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import PopularCity from '../utils/components/PopularCity';


export default function ExploreHotelsScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchView} >
                    <View><Image source={require('../utils/assets/search-icon.png')} style={styles.searchIcon} /></View>
                    <TextInput placeholder="Where to" style={styles.searchInput} placeholderTextColor={"#8E8E8E"} cursorColor={'#0C0C3A'} />
                </TouchableOpacity>

            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.Box} onPress={undefined}>
                        <View style={styles.IconView}>
                            <Image source={require('../utils/assets/location.png')} style={styles.BoxIcon} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.BoxText}>Hotels nearby</Text>
                        </View>
                    </TouchableOpacity>



                    <Text style={styles.exploreText}>Popular destination</Text>
                    <PopularCity source={require('../utils/assets/pin.png')} city="New York City" country='United States of America' onPress={()=>navigation.navigate('HotelsListScreen')} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="London" country='England, United Kingdom' onPress={undefined} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="Paris" country='France' onPress={undefined} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="Rome" country='Italy' onPress={undefined} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="Dubai" country='Emirates of Dubai, United Arab Emirated' onPress={undefined} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="Istanbul" country='Turkiye, Europe' onPress={undefined} />
                    <PopularCity source={require('../utils/assets/pin.png')} city="Prague" country='Czech Republic' onPress={undefined} />



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
    goBack: {

    },
    goBackImg: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain'
    },
    searchView: {
        flex: 1,
        height: vh(6),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginLeft: vw(5),
        backgroundColor: '#EAEAEA',
        paddingHorizontal: vw(5),
        borderRadius: 30,
    },
    searchInput: {
        color: '#130138',
        fontSize: vh(2),
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        paddingHorizontal: vw(5),
        paddingVertical: vh(1),
    },
    searchIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        width: '100%',
    },
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: vw(5),
        marginBottom: vh(1),
    },
    textView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
    },
    BoxText: {
        color: '#8E8E8E',
        fontSize: vh(2),
        fontFamily: 'Quicksand-Regular',
        textAlign: 'left',
        paddingHorizontal: vw(5),
    },
    IconView: {
        height: vh(8),
        width: vh(8),
        backgroundColor: '#7A7ADD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    BoxIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',

    },
    exploreText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Bold',
        paddingLeft: vw(5),
        paddingTop: vh(2),
        paddingBottom: vh(1),
    },
});