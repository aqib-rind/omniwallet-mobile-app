import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import {  Divider } from "react-native-paper";
import { Checkbox } from "native-base";
import SeatCard from "../utils/components/SeatCard";

export default function FlightDetalsScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [isChecked, setChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setChecked(!isChecked);
    };

    const [showDetails, setShowDetails] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const handleSeeAllClick = () => {
      setShowDetails(!showDetails);
      Animated.timing(fadeAnim, {
        toValue: showDetails ? 0 : 1,
        duration: 300, // Adjust the duration as needed
        useNativeDriver: true, // Set to true if possible
      }).start();
    };

    return (
        <SafeAreaView className="flex-1 h-full w-full bg-white items-center">
            <View className=" flex-row h-16 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Select fare to New York</Text>
            </View>
            <View className="w-full flex-1 px-3">
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View >
                        <Text className="text-primary text-[15px]" style={{ fontFamily: 'Rubik-Medium' }}>11:05am - 6:55pm (1h 30m 1 stop)</Text>
                        <View className="flex-row items-center">
                            <Image source={require('../utils/assets/american-airline.png')} resizeMode="contain" className="h-6 w-6" />
                            <Text className="text-primary text-[12px] leading-5 pr-2" style={{ fontFamily: 'Rubik-Regular' }}>American Airlines</Text>
                            <GIcon name="wifi" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                            <GIcon name="power" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                        </View>

                        <TouchableOpacity className="flex-row items-center py-2" onPress={handleSeeAllClick}>
                            <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>See Details  </Text>
                            <IonIcon name={showDetails ? "chevron-up-sharp" : "chevron-down-sharp"} size={13} color="#7a7add" />
                        </TouchableOpacity>

                        <Animated.View style={{ opacity: fadeAnim }}>

                        {showDetails && (
                        

                        <View>
                            <View>
                                <View className=" flex-row items-center ">
                                    <View className="w-8 ">
                                        <GIcon name="flight-takeoff" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                                    </View>
                                    <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>10:50am - Dubai{'\n'}Dubai Intl. (DXB)</Text>
                                </View>
                                <View className="pl-8 pb-2">
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>1h 35m flight</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>American Airlines 723</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Boeing 787-8</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Economy/Coach (Y)</Text>
                                </View>
                            </View>

                            <View className=" flex-row items-center ">
                                <View className="w-8 ">
                                    <GIcon name="flight-land" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>12:10pm - Doha{'\n'}Hamad Intl. (DOH)</Text>
                            </View>

                            <Divider style={{ backgroundColor: '#0c0c3a', height: 0.5 }} />
                            <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Layover: 3h 20m in Philadelphia</Text>

                            <View>
                                <View className=" flex-row items-center ">
                                    <View className="w-8 ">
                                        <GIcon name="flight-takeoff" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                                    </View>
                                    <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>3:30pm - Doha{'\n'}Hamad Intl. (DOH)</Text>
                                </View>
                                <View className="pl-8 pb-2">
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>1h 3m flight</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>American Airlines 4494 operated by Republic Airways As American Eagle</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Embraer 175</Text>
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Economy/Coach (Y)</Text>
                                </View>
                            </View>

                            <View className=" flex-row items-center ">
                                <View className="w-8 ">
                                    <GIcon name="flight-land" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>4:33pm - New York{'\n'}LaGuardia (LGA)</Text>
                            </View>


                            <View className=" flex-row items-center ">
                                <View className="w-8 ">
                                    <GIcon name="wifi" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Wi-Fi</Text>
                            </View>
                            <View className=" flex-row items-center ">
                                <View className="w-8 ">
                                    <GIcon name="power" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                </View>
                                <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>In-seat power outlet</Text>
                            </View>
                        </View>
                        )}
                        </Animated.View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{width:'100%'}} >
                        <SeatCard/>
                        <SeatCard/>
                        <SeatCard/>

                        </ScrollView>
                        
                        <Text className="text-primary text-[13px] text-justify" style={{fontFamily:'Rubik-Regular'}}>
                        Baggage fees reflect the airline's standard fees based on the selected fare class. Fees may vary based on size and weight restrictions as well as loyalty
                         programs and other promotions. For more information, check with Saudia .
                         {'\n'} {'\n'}
                         You can purchase checked bags from Saudia or through the link in your confirmation or check-in emails.
                        </Text>






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
