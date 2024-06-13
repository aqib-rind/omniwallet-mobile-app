import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-paper";
// import { Checkbox } from "native-base";
import SeatCard from "../utils/components/SeatCard";

export default function CarDetailsScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const handleCheck1 = () => {
        setChecked1(!checked1)
    }
    const handleCheck2 = () => {
        setChecked2(!checked2)
    }


    return (
        <SafeAreaView className="flex-1 h-full w-full bg-white items-center">
            <View className=" flex-row h-14 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Car Rental</Text>
            </View>
            <View className="w-full flex-1 px-3">
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View >
                        <View className="flex-1 w-full border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <View className="flex-1 items-center ">
                                <Image source={require('../utils/assets/carimage.png')} resizeMode="contain" className="h-24 w-24" />
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
                            
                        </View>
                        <View className="flex-1 w-full border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
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
                        </View>

                        <View className="flex-1 w-full  border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
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

                        <View className="flex-1 w-full  border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <View className="flex-1 flex-row weitems-center pt-1 w-full justify-between">
                                <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Get a rental car insurance</Text>
                                <View className="w-20  ">
                                    <GIcon name="verified-user" size={35} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                            </View>
                            <View className=" flex-row items-center  ">
                                <View className="w-6 ">
                                    <GIcon name="check" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Covers your rental car from collision damage, theft and vandalism</Text>
                            </View>
                            <View className=" flex-row items-start  ">
                                <View className="w-6 pt-1">
                                    <GIcon name="check" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Up to $75,000 in primary coverage with $0 deductible</Text>
                            </View>
                            <View className=" flex-row items-start  ">
                                <View className="w-6 pt-1">
                                    <GIcon name="check" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Get yourdelf access to 24/7 emergency travel assistance</Text>
                            </View>
                            <Divider style={{ backgroundColor: '#0c0c3a', height: 0.5, marginVertical:10 }} />
                            <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Interested? Just add it on the next step.</Text>
                        </View>

                        <View className="flex-1 w-full  border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Minimal contact with option to check-in online</Text>
                            <View className=" flex-row items-center  ">
                                <View className="w-6 ">
                                    <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Up to $75,000 in primary coverage with $0 deductible</Text>
                            </View>
                            <View className=" flex-row items-center  ">
                                <View className="w-6 ">
                                    <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>No paper-work required during pick-up</Text>
                            </View>
                            <View className=" flex-row items-center  ">
                                <View className="w-6 ">
                                    <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Minimize contact and save time at the pick-up counter</Text>
                            </View>
                        </View>

                        <View className="flex-1 w-full  border-0.5 border-secndary py-3 px-3  rounded-xl my-2">
                            <Text className="text-primary text-[20px] " style={{ fontFamily: 'Rubik-Medium' }}>Extras</Text>
                            <Text className="text-primary text-[12px] " style={{ fontFamily: 'Rubik-Regular' }}>Requests cannot be guaranteed as they are subject to availability. Payment due at pick-up.</Text>
                            
                            <View className=" flex-1 justify-between flex-row items-center  ">
                                <View className="flex-1 flex-row items-center">
                                    <TouchableOpacity className="w-6 " onPress={handleCheck1}>
                                        <GIcon name={checked1 ? "check-box" : "check-box-outline-blank"} size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                    </TouchableOpacity>
                                    <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Infant Seat</Text>
                                </View>
                                <View className="">
                                    <Text className="text-primary text-[12px] py-1 text-right" style={{ fontFamily: 'Rubik-Medium' }}>$8{'\n'}
                                    <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>per day</Text></Text>
                                </View>
                            </View>

                            <View className=" flex-1 justify-between flex-row items-center  ">
                                <View className="flex-1 flex-row items-center">
                                    <TouchableOpacity className="w-6 " onPress={handleCheck2}>
                                        <GIcon name={checked2 ? "check-box" : "check-box-outline-blank"} size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                    </TouchableOpacity>
                                    <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Infant Seat</Text>
                                </View>
                                <View className="">
                                    <Text className="text-primary text-[12px] py-1 text-right" style={{ fontFamily: 'Rubik-Medium' }}>$8{'\n'}
                                    <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>per day</Text></Text>
                                </View>
                            </View>
                           
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('ThingsTodoScreen')}>
                                    <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-2" style={{ fontFamily: 'Rubik-Medium' }}>Reserve Now</Text>
                                </TouchableOpacity>
                    </View>
                </ScrollView>
                <View className="w-full h-[100px]"></View>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 5,
    },
})
