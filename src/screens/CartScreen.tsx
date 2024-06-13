import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GIcon from 'react-native-vector-icons/MaterialIcons';
import RoomCard from "../utils/components/RoomCard";
import { Divider } from "react-native-paper";
import ThingsTodoInnerCard from "../utils/components/ThingsTodoInnerCard";
import HotelCard from "../utils/components/HotelCard";
import tw from 'twrnc';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";



export default function CartScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return (
        <SafeAreaView className="flex-1 h-full w-full bg-white">
            <View className=" flex-row h-14 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Cart</Text>
            </View>
            <View className="w-full flex-1 px-3">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex-1 w-full border-0.5 border-primary py-3 px-3  rounded-xl my-2">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-primary text-[20px] leading-5  " style={{ fontFamily: 'Rubik-SemiBold' }}>Items</Text>
                            <Text className="text-primary text-[20px] leading-5  " style={{ fontFamily: 'Rubik-SemiBold' }}>Total</Text>
                        </View>
                        
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>Hotel Booking</Text>
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>$74.60</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>Flight Booking</Text>
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>$1,016.60</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>Car Booking</Text>
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>$1,351.64</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>Activity Booking</Text>
                            <Text className="text-[#353535] text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Regular' }}>$49.00</Text>
                        </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <Text className="text-primary text-[20px] leading-5  text-right" style={{ fontFamily: 'Rubik-SemiBold' }}>2,491.64</Text>

                        <TouchableOpacity onPress={()=>navigation.navigate('CheckoutScreen')}>
                            <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-4 " style={{ fontFamily: 'Rubik-Medium' }}>Checkout</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <HotelCard imageSource={'https://images.trvl-media.com/lodging/2000000/1740000/1738600/1738573/e7bb2d5d.jpg?impolicy=resizecrop&rw=1200&ra=fit'} title="Rove Downtown" description="Dubai" onPress={() => navigation.navigate('HotelDetailsScreen')} /> */}


                    <TouchableOpacity className="flex-1 w-full border-0.5 border-primary py-3 px-3  rounded-xl my-2" style={styles.card}>
                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{fontFamily:'Rubik-Medium'}}>Rove Downtown</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>9/10 Wonderful (599 Reviews)</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}><Text style={{fontFamily:'Rubik-Medium'}}>1 Room: </Text>Deluxe Room, 1 King Bed</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Non Refundable</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Check-in: Sat, Dec 9</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Check-out: Sat, Dec 13</Text>
                        <Text className={'text-[11px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>4-night stay</Text>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />
                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{fontFamily:'Rubik-Medium'}}>Price Details</Text>
                        <View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>1 room x 4 nights</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>$1331.64</Text>
                            </View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Taxes & Fees</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>$21.00</Text>
                            </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-xl text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Medium'}}>Total</Text>
                                <Text className={'text-xl text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Bold' }}>$1351.64</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity className="flex-1 w-full border-0.5 border-primary py-3 px-3  rounded-xl my-2" style={styles.card}>
                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{ fontFamily: 'Rubik-Medium' }}>Dubai to New York</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>10:30pm 9:00am 19h 30m, 1 stop</Text>
                        <View className={'flex-row items-center '}>
                            <Image source={require('../utils/assets/american-airline.png')} resizeMode="contain" className="h-6 w-6" /> 
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>American Airlines</Text>
                        </View>
                        <View className=" flex-row items-center  ">
                        <View className="w-6 ">
                            <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                            </View>
                            <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Mon, Dec 11</Text>
                        </View>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}><Text style={{ fontFamily: 'Rubik-Medium' }}>1 Seat: </Text>Economy</Text>

                        <Text className={'text-[15px] text-[#0C0C3A] py-2 '} style={{ fontFamily: 'Rubik-Medium' }}>Estimated bag fees</Text>
                        <View className={'flex-row items-center justify-between'}>
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Carry-on:</Text>
                            <Text className={'text-[13px] text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Regular' }}>Included up to 15 lb</Text>
                        </View>
                        <View className={'flex-row items-center justify-between'}>
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Ist checked bag:</Text>
                            <Text className={'text-[13px] text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Regular' }}>Included up to 50 lb</Text>
                        </View>
                        <View className={'flex-row items-center justify-between'}>
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>2nd checked bag:</Text>
                            <Text className={'text-[13px] text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Regular' }}>Included up to 50 lb</Text>
                        </View>

                        <Text className={'text-[13px] text-[#0C0C3A] py-2 text-justify '} style={{ fontFamily: 'Rubik-Regular' }}>Baggage fees reflect the airline's standard fees based on the selected fare class. Fees may vary based on size and weight
                            restrictions as well as loyalty programs and other promotions. For more information, check with Kuwait Airways You can purchase checked bags from Kuwait Airways
                            or through the link in your confirmation or check-in emails.</Text>

                        <View className={'flex-row items-center justify-between'}>
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Cancellation</Text>
                            <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>$55</Text>
                        </View>

                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{ fontFamily: 'Rubik-Medium' }}>Price Details</Text>
                        <View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}><Text style={{ fontFamily: 'Rubik-Medium' }}>Traveler 1: </Text>Adult</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>$771.60</Text>
                            </View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Taxes & Fees</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>$245.00</Text>
                            </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-xl text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Medium'}}>Total</Text>
                                <Text className={'text-xl text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Bold' }}>$1,016.60</Text>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-1 w-full border-0.5 border-primary py-3 px-3  rounded-xl my-2" style={styles.card}>
                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{fontFamily:'Rubik-Medium'}}>Burj Khalifa 124th & 125th Floor Observation Deck Tickets</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Dubai</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Regular'}}>Mon, Dec 11</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>1 Adult</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa (09:00 AM - 2:30 PM)</Text>
                        <View className=" flex-row items-center  ">
                            <View className="w-6 ">
                                <GIcon name="schedule" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                            </View>
                            <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Duration 1 hour 30 minutes</Text>
                        </View>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Activity location</Text>
                        <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa</Text>
                        {/* <Text className={'text-[11px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>4-night stay</Text> */}
                        
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-xl text-[#0C0C3A]  '} style={{fontFamily:'Rubik-Medium'}}>Total</Text>
                                <Text className={'text-xl text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Bold' }}>$49</Text>
                            </View>
                        
                    </TouchableOpacity>


                    <View className="flex-1 w-full border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                        
                            <View className="flex-1 items-center ">
                                <Image source={require('../utils/assets/carimage.png')} resizeMode="contain" className="h-36 w-36" />
                            </View>
                            <Text className="text-primary text-[25px] " style={{ fontFamily: 'Rubik-Medium' }}>Midsize SUV</Text>
                            <Text className="text-primary text-[13px] leading-4" style={{ fontFamily: 'Rubik-Regular' }}>Nissan X trail or Similar</Text>
                            <View >

                                <View className="flex-row items-center pt-2 ">
                                    <View className=" flex-row items-center w-[150px] ">
                                        <View className="w-6 ">
                                            <Icon name="user" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>5 passenger</Text>
                                    </View>
                                    <View className=" flex-row items-center ">
                                        <View className="w-6 ">
                                            <Icon name="cogs" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Automatic</Text>
                                    </View>
                                </View>
                                <View className="flex-row items-center pt-2 ">
                                    <View className=" flex-row items-center w-[150px] ">
                                        <View className="w-6 ">
                                            <GIcon name="ac-unit" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Air Conditioning</Text>
                                    </View>
                                    <View className=" flex-row items-center ">
                                        <View className="w-6 ">
                                            <Icon name="car" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>4 Doors</Text>
                                    </View>
                                </View>
                                <View className="flex-row items-center pt-2 ">
                                    <View className=" flex-row items-center w-[150px] ">
                                        <View className="w-6 ">
                                            <GIcon name="speed" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>125 free miles/total</Text>
                                    </View>
                                    <View className=" flex-row items-center ">
                                        <View className="w-6 ">
                                            <GIcon name="local-gas-station" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                        </View>
                                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Fuel: full to full</Text>
                                    </View>
                                </View>
                            </View>
                        {/* <View className="flex-1 w-full border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <View className="flex-row items-end justify-between">
                                <View>
                                    <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Traveler ratings</Text>
                                    <Text className="text-primary text-[13px] leading-4" style={{ fontFamily: 'Rubik-Regular' }}>49% positive ratings{'\n'}Vehicle rating and price as expected</Text>
                                </View>
                                <Image source={{uri:'https://cdn2.rcstatic.com/sp/images/suppliers/17_logo_200.png'}} className="h-10 w-10" resizeMode="contain"/>
                            </View>
                        </View>


                        <View className="flex-1 w-full flex-row items-center border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <GIcon name='event-available' size={50} color="#0C0C3A" style={styles.vectorIcon} />
                            <View className="px-2">
                                    <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Free cancellation</Text>
                                    <Text className="text-primary text-[13px] leading-4" style={{ fontFamily: 'Rubik-Regular' }}>Lock in this price today, cancel free of charge anytime. Reserve now and pay at pick-up.</Text>
                            </View>
                        </View> */}
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                        <View className="">
                            <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Car rental location</Text>
                            <Text className="text-primary text-[15px] leading-4" style={{ fontFamily: 'Rubik-Regular' }}>Pick-up & Drop-off</Text>
                            <View className=" flex-row items-center pt-1 ">
                                <View className="w-6 ">
                                    <GIcon name="today" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Mon, Dec 11, 10:30am - Tue, Dec 12, 10:30am</Text>
                            </View>
                            <View className=" flex-row items-start pt-1 ">
                                <View className="w-6 pt-1">
                                    <GIcon name="flight-takeoff" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>DXB Airport{'\n'}Dubai Intl Airport Terminal 1 67 Airport Road, Dubai, ARE 21971</Text>
                            </View>

                            <View className=" flex-row items-start pt-1 ">
                                <View className="w-6 pt-2">
                                    <GIcon name="schedule" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Hours of operation{'\n'}Mon 12:00am - 11:59pm{'\n'}Tue 12:01am - 11:59pm</Text>
                            </View>
                            
                            <View className=" flex-row items-start pt-1 ">
                                <View className="w-6 pt-2">
                                    <GIcon name="airport-shuttle" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Counter and car in terminal{'\n'}Rental car counter and car in the airport.</Text>
                            </View>
                        </View>
                        <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                        <Text className={'text-[20px] text-[#0C0C3A] '} style={{ fontFamily: 'Rubik-Medium' }}>Price Details</Text>
                        <View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Car Rental fee x 1 dayAdult</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>$74.60</Text>
                            </View>
                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>Taxes & Fees</Text>
                                <Text className={'text-[13px] text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Regular' }}>included</Text>
                            </View>
                            <Divider style={{ backgroundColor: '#bdbdbd', height: 1, marginVertical: 10 }} />

                            <View className={'flex-row items-center justify-between'}>
                                <Text className={'text-xl text-[#0C0C3A]  '} style={{ fontFamily: 'Rubik-Medium' }}>Total</Text>
                                <Text className={'text-xl text-[#0C0C3A]   '} style={{ fontFamily: 'Rubik-Bold' }}>$74.60</Text>

                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
            <View style={{ width: '100%', height: 100 }}>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 5,
    },
    card: {
        overflow: 'hidden',
    },
    cardImage: {

    },
    cardContent: {

    },
    cardTitle: {
        fontFamily: 'Quicksand-SemiBold',
    },
    city: {
        fontFamily: 'Rubik-Regular',
    },
})