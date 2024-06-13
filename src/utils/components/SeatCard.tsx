import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import {  Divider } from "react-native-paper";
import {useNavigation} from '@react-navigation/native';


export default function SeatCard(){
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return(
        <TouchableOpacity className=" flex-1 w-full  flex-col border-0.5 border-primary rounded-2xl mr-4 mb-3 " style={{ overflow: 'hidden' }}>

                            <View className="flex-1 p-2">
                                <Text className="text-primary  text-[25px] leading-5 pt-2 " style={{fontFamily:"Rubik-SemiBold"}}>$1629</Text>
                                <Text className="text-primary text-[10px] " style={{ fontFamily: 'Rubik-Regular' }}>$1,628.10 roundtrip for 1 traveler</Text>

                                <Text className='text-primary text-[15px]  leading-4 pt-3' style={{fontFamily:'Rubik-Medium'}}>Main Cabin</Text>
                                <Text className='text-primary text-[13px]  leading-4' style={{fontFamily:'Rubik-Regular'}}>Cabin: Economy</Text>

                                <Text className='text-primary text-[15px]  leading-4 pt-3 pb-1' style={{fontFamily:'Rubik-Medium'}}>Seat</Text>
                                <View className="flex flex-row items-center py-1">
                                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Seat choice included</Text>
                                </View>


                                <Text className='text-primary text-[15px]  leading-4 pt-3 pb-2' style={{fontFamily:'Rubik-Medium'}}>Bags</Text>
                                <View className="flex flex-row items-center ">
                                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[13px] leading-5 pb-1" style={{ fontFamily: 'Rubik-Regular' }}>Personal item included</Text>
                                </View>
                                <View className="flex flex-row items-center ">
                                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[13px] leading-5 pb-1" style={{ fontFamily: 'Rubik-Regular' }}>Carry-on bag included</Text>
                                </View>
                                <View className="flex flex-row items-center ">
                                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[13px] leading-5 pb-1" style={{ fontFamily: 'Rubik-Regular' }}>1st checked bag included**</Text>
                                </View>


                                <Text className='text-primary text-[15px]  leading-4 pt-3 pb-2' style={{fontFamily:'Rubik-Medium'}}>Flexibility</Text>
                                <View className="flex flex-row items-center justify-between ">
                                    <View className="flex flex-row items-center ">
                                        <GIcon name="monetization-on" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                        <Text className="text-primary text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Cancelation fee</Text>
                                    </View>
                                    <Text className="text-[11px] text-slate-400" style={{fontFamily:'Rubik-Regular'}}>$250</Text>
                                </View>
                                <View className="flex flex-row items-center ">
                                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>No change fees</Text>
                                </View>
                                <Divider style={{ backgroundColor: 'black', marginVertical: 20 }} />

                                <View className="flex flex-row items-center ">
                                    <GIcon name="shield" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                    <Text className="text-primary text-[15px] leading-5" style={{ fontFamily: 'Rubik-Medium ' }}>Price Drop Protection</Text>
                                </View>
                                <Text className="text-primary text-[10px] " style={{ fontFamily: 'Rubik-Regular' }}>We’ll refund the difference if the price drops before you fly.</Text>
                                {/* <Checkbox.Item label="Item" status="checked" /> */}
                                <TouchableOpacity onPress={()=>navigation.navigate('CarsListScreen')}>
                                    <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-2" style={{ fontFamily: 'Rubik-Medium' }}>Reserve Now</Text>
                                </TouchableOpacity>

                              

                            </View>
                        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 5,
    },
})
