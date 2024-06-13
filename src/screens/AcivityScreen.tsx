import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import PopularCityCard from '../utils/components/PopularCityCard';
import PopularDestination from '../utils/components/PopularDestination';


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
                    <Text style={styles.activityHeading}>Explore</Text>
                    <View className={ 'flex-1 mx-5  mb-2 '}>
                        <View className={'flex-row'}>
                            <TouchableOpacity className={' flex-1 w-full flex-row py-3 px-2 bg-[#eaeaea] shadow rounded-2xl mr-2 items-center '} style={styles.Box}  onPress={() => navigation.navigate('ExploreHotelsScreen')}>
                                <Image className={'h-7 w-7 '} resizeMode='contain' source={require('../utils/assets/bed-icon.png')}/>
                                <Text className={'px-2 text-primary text-[17px]'} style={{ fontFamily: 'Rubik-Regular' }}>Hotels</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={'flex-1 w-full flex-row py-3 px-2 bg-[#eaeaea] shadow rounded-2xl ml-1 items-center '} style={styles.Box} onPress={()=>navigation.navigate('ExploreFlightsScreen')}>
                                <Image className={'h-7 w-7 '} resizeMode='contain' source={require('../utils/assets/flight-icon.png')} />
                                <Text className={'px-2 text-primary text-[17px]'} style={{ fontFamily: 'Rubik-Regular' }}>Flights</Text>
                            </TouchableOpacity>
                        </View>
                        <View className={'flex-1 flex-row'}>
                        <TouchableOpacity className={'flex-1 w-full flex-row py-3 px-2 bg-[#eaeaea] shadow rounded-2xl mr-2 items-center '} style={styles.Box} onPress={() => navigation.navigate('ExploreThingsToDoScreen')}>
                                <Image className={'h-7 w-7 '} resizeMode='contain' source={require('../utils/assets/to-do.png')}  />
                                <Text className={'px-2 text-primary text-[17px]'} style={{ fontFamily: 'Rubik-Regular' }}>Things to do</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className={'flex-1 w-full flex-row py-3 px-2 bg-[#eaeaea] shadow rounded-2xl ml-1 items-center '} style={styles.Box} onPress={()=>navigation.navigate('ExploreCarsScreen')}>
                                <Image className={'h-7 w-7 '} resizeMode='contain' source={require('../utils/assets/car-icon2.png')}  />
                                <Text className={'px-2 text-primary text-[17px]'} style={{ fontFamily: 'Rubik-Regular' }}>Cars</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <Activity source={require('../utils/assets/bed-icon.png')} name="Hotels" onPress={() => navigation.navigate('ExploreHotelsScreen')} />
                    <Activity source={require('../utils/assets/to-do.png')} name="Things to do" onPress={() => navigation.navigate('ThingsTodoScreen')} />
                    <Activity source={require('../utils/assets/fork-icon.png')} name="Restaurants" onPress={() => navigation.navigate('ExploreHotelsScreen')} /> */}
                     <Text style={styles.exploreText}>Explore stays in Popular Cities</Text>
                    <View  style={{marginHorizontal:vw(2.5), marginBottom:vh(1)}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.citiesView}>
                        <PopularDestination/> 
                        <PopularDestination/>
                        <PopularDestination/>
                        <PopularDestination/>
                        <PopularDestination/>
                    </ScrollView>
                    </View>
                    <Text style={styles.exploreText}>Popular cities to explore</Text>
                    <View  style={{marginHorizontal:vw(2.5)}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.citiesView}>
                        <PopularCityCard/> 
                        <PopularCityCard/>
                        <PopularCityCard/>
                        <PopularCityCard/>
                        <PopularCityCard/>
                    </ScrollView>
                    </View>
                    {/* Banner */}
                    <ImageBackground source={{uri:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={styles.banner} >
                        <View style={styles.bannerInner}>
                            <Text style={styles.bannerHeading}>Big Saving For Limited Time</Text>
                            <Text style={styles.bannerText}>save 20% or more on thousands of hotels when you book by Sept 24* as member.</Text>
                        </View>
                    </ImageBackground>
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

    activityHeading: {
        color: '#130138',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingVertical: vh(5),
    },
    exploreText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Rubik-Medium',
        paddingLeft: vw(5),
    },
    citiesView: {
        width: '100%',
        marginTop: vh(2),

    },
    banner: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        height: vh(35),
        marginVertical: vh(2),
        alignItems: 'center',
    },
    bannerInner: {
        flex: 1,
        width: '100%',
        height: vh(35),
        gap: vh(2),
        paddingHorizontal: vw(14),
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    bannerHeading: {
        color: '#fff',
        textAlign: 'center',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        width: '100%',
    },
    bannerText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: vh(2.5),
        fontFamily: 'Rubik-Regular',
    },
    Box:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginBottom: vh(2),
        shadowOpacity: 0.29,
        shadowRadius: 4,
        elevation: 4,


    }
});