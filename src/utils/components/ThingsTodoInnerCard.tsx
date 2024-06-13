import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GIcon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function ThingsTodoInnerCard() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return (
        <View className="flex-1 border-slate-500 border rounded-xl px-2 py-4 m-8">
        <Text className="text-primary text-[20px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Burj Khalifa (09:00 AM - 2:30)</Text>
        <Text className="text-primary text-[13px]  pt-2 " style={{ fontFamily: 'Rubik-Regular' }}>Select this option to visit the Burj Khalifa between 7 PM and 11 PM. You will receive confirmation of your exact timed-ticket entry time after your booking is confirmed.</Text>
        <TouchableOpacity className=" border-slate-500 border rounded-xl px-2  my-8">
            <View className=" flex-row items-center  ">
                <View className="w-8 ">
                    <GIcon name="person" size={20} color="#0c0c3a" style={styles.vectorIcon} />
                </View>
                <Text className="text-primary text-[10px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Traveller{'\n'}
                    <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>1 Adult</Text></Text>
            </View>
        </TouchableOpacity>
        <Text className="text-primary text-[15px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Price details</Text>
        <View className="flex-row item-center justify-between ">
            <Text className="text-primary text-[13px]  pt-2 " style={{ fontFamily: 'Rubik-Regular' }}>$49 x 1Adult</Text>
            <Text className="text-primary text-[13px]  pt-2 " style={{ fontFamily: 'Rubik-Regular' }}>$49.00</Text>
        </View>
        <Divider style={{ backgroundColor: '#0c0c3a', height: 0.5, marginVertical: 10 }} />
        <View className="flex-row item-center justify-between ">
            <Text className="text-primary text-[15px]  pt-2 " style={{ fontFamily: 'Rubik-Medium' }}>Total</Text>
                <Text className="text-primary text-[17px]  pt-2 " style={{ fontFamily: 'Rubik-Medium' }}>$49.00</Text>
            </View>
            <Text className="text-primary text-[11px]  pt-2 text-right leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free Cancellation{'\n'}Untill Wed, Dec 18</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-2" style={{ fontFamily: 'Rubik-Medium' }}>Reserve Now</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 10,
        color: '#0C0C3A',
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        marginRight: 10,
        backgroundColor: '#000000a6',
        // height: 20,
        // width: 20,
        color: '#fff',
        borderRadius: 10,
        padding: 5,
        textAlign: 'center',
    },
})
