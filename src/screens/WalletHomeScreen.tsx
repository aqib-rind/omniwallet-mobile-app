import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import WalletService from '../utils/components/WalletService';
import OmniService, { OmniCarService } from '../utils/components/OmniService';
import { G } from 'react-native-svg';
import GIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";


export default function WalletHomeScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation

    return (
        <SafeAreaView style={styles.Body}>
            {/* Header Starts */}
            <View style={styles.header}>
                <View style={styles.HeaderTextView}>
                    <Text style={styles.HeaderText}>Wallet</Text>
                    <Text style={styles.HeaderSubText}>Active</Text>
                </View>
                <View style={styles.HeaderImageView}>
                    <Image source={require('../utils/assets/white-man.jpg')} style={styles.HeaderImage} />
                </View>
            </View>
            {/* Header Ends */}


            <View style={styles.container}>
                {/* balance View Section Starts */}
                <ImageBackground source={require('../utils/assets/wallet-bg.png')} style={styles.WalletBG} >
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate('DebitCardScreen')}>
                    <View style={styles.InnerBalance}>
                        <View style={styles.BalanceLeft}>
                            <Text style={styles.balanceTop}>Balance</Text>
                            <Text style={styles.balanceText}>$ 0.00</Text>
                        </View>
                        <View style={styles.BalanceRight}>
                            <Text style={styles.balanceTop}>Card</Text>
                            <Text style={styles.balanceText}>Omni Bank</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.servicesContainer}>
                    <OmniService icon={require('../utils/assets/plane.png')} text='Flight Booking' />
                    <OmniService icon={require('../utils/assets/hotel-icon.png')} text='Hotel Booking' />
                    {/* <OmniService icon={require('../utils/assets/car-icon.png')} text='Rent a Car' /> */}
                    <OmniCarService icon={require('../utils/assets/car-icon.png')} text='Car Booking' />
                </View>

                <View style={styles.WServicesContainer}>
                    <WalletService icon={require('../utils/assets/home-icon01.png')} text='Convert'  onPress={()=>navigation.navigate('CurrencyExchangeScreen')}/>
                    <WalletService icon={require('../utils/assets/home-icon02.png')} text='Transfer' />
                    <WalletService icon={require('../utils/assets/home-icon03.png')} text='Payout' />
                    <WalletService icon={require('../utils/assets/home-icon04.png')} text='Top up' />

                </View>
                {/* balance View Section Ends */}

                {/* Last Transactions Section Starts */}
                <View style={styles.LastTransactionSection}>
                    <View className="flex-row w-full items-center justify-between">
                        <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>Last Transactions</Text>
                        <TouchableOpacity>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>View All</Text>
                        </TouchableOpacity>
                    </View>


                    <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>
                        <View className={"flex-row w-full items-center justify-between py-2"}>
                            <View className='flex-row items-center'>
                                <View className="w-8">
                                    <Image source={require('../utils/assets/netflix.png')} resizeMode="contain" className="h-10 w-10" />
                                </View>
                                <View className="pl-6">
                                    <Text className="text-primary text-[15px] leading-5 " style={{ fontFamily: 'Rubik-Regular' }}>Netflix{'\n'}<Text className=" text-[12px] " >Subscription</Text></Text>
                                </View>
                            </View>
                            <Text className="text-primary text-[15px] " style={{ fontFamily: 'Rubik-Regular' }}>$11.99</Text>

                        </View>

                        <View style={{ width: '100%', height: 100 }}>


                        </View>

                    </ScrollView>
                </View>
                {/* Last Transactions Section Ends */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#ffffff',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(5),
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: vh(2),

    },
    HeaderTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    HeaderText: {
        color: '#130138',
        fontSize: vh(3),
        fontFamily: 'Rubik-Medium',
    },
    HeaderSubText: {
        color: '#bdbdbd',
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
    },
    HeaderImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    HeaderImage: {
        height: vh(8),
        width: vh(8),
        resizeMode: 'contain',
        borderRadius: vh(5),
    },
    activityHeading: {
        color: '#130138',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingVertical: vh(5),
    },
    WalletBG: {
        width: '100%',
        flexDirection: 'row',
        height: vh(20),
        resizeMode: 'contain',
        borderRadius: 50,
        overflow: 'hidden',
        shadowColor: '#0C0C3A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: vh(5),
        elevation: 5,
    },
    InnerBalance: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: vw(10),
    },
    BalanceLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    balanceTop: {
        color: '#ffffff',
        fontSize: vh(2.2),
        fontFamily: 'Quicksand-SemiBold',
        textAlign: 'center',

    },
    balanceText: {
        color: '#ffffff',
        fontSize: vh(3.2),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'center',
    },
    BalanceRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: vh(2),

    },

    WServicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    LastTransactionSection: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vh(2),
    },

});