import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import Hotel from '../utils/components/Hotel';
import Todo from '../utils/components/Todo';
import ThingsTodoCard from '../utils/components/ThingsTodoCard';


export default function ThingsTodoScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>
            <View className=" flex-row h-16 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Things Todo</Text>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                  
                    <ThingsTodoCard/>
                    <ThingsTodoCard/>
                    <ThingsTodoCard/>
                    <ThingsTodoCard/>
                    <ThingsTodoCard/>
              
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
    goBack: {

    },
    goBackImg: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain'
    },
    HeadingView: {
        flex: 1,
        width: '100%',
        gap: vh(1),
        paddingVertical: vh(4),
        paddingHorizontal: vw(8),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    Heading: {
        color: '#130138',
        fontSize: vh(3),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
    },
    subHeading: {
        color: '#130138',
        fontSize: vh(2),
        fontFamily:'Quicksand-SemiBold',
        textAlign: 'center',
    },
    scrollView: {
        width: '100%',

    },
    exploreText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Rubik-Medium',
        paddingLeft: vw(5),
    },

});