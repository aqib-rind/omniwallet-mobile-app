import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, TextInput, ScrollView,  } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';
import City from '../utils/components/City';
import Activity from '../utils/components/Activity';
import Hotel from '../utils/components/Hotel';
import HotelCard from '../utils/components/HotelCard';

interface Props {
    navigation: any;
    route: any;
}


const HotelsListScreen:React.FC<Props> = ({route}) => {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const {adults, kids, startDate, endDate} =route.params;

    return (
        <SafeAreaView style={styles.Body}>
           <View className=" flex-row h-16 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Hotels</Text>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                    
                    <TouchableOpacity style={styles.DatePickerView}>
                        <View style={styles.DatePickerTextView}>
                            <Text style={styles.DPTopText}>Select Dates</Text>
                            <Text style={styles.DPBottomText}>{startDate} - {endDate}</Text>
                        </View>
                        <View style={styles.DatePickerTextView}>
                            <Text style={styles.DPTopText}>Travellers</Text>
                            <Text style={styles.DPBottomText}>{adults} Adult, {kids} Childern, 1 room  </Text>
                        </View>

                    </TouchableOpacity>
                    
                    <View style={styles.HotelView}>
                        <HotelCard imageSource={'https://images.trvl-media.com/lodging/2000000/1740000/1738600/1738573/e7bb2d5d.jpg?impolicy=resizecrop&rw=1200&ra=fit'} title="Rixos Premium Dubai JBR" description="Dubai" onPress={() => navigation.navigate('HotelDetailsScreen')} />
                        <HotelCard imageSource={'https://images.trvl-media.com/lodging/2000000/1740000/1738600/1738573/e7bb2d5d.jpg?impolicy=resizecrop&rw=1200&ra=fit'} title="Rixos Premium Dubai JBR" description="Dubai" onPress={() => navigation.navigate('HotelDetailsScreen')} />
                        <HotelCard imageSource={'https://images.trvl-media.com/lodging/2000000/1740000/1738600/1738573/e7bb2d5d.jpg?impolicy=resizecrop&rw=1200&ra=fit'} title="Rixos Premium Dubai JBR" description="Dubai" onPress={() => navigation.navigate('HotelDetailsScreen')} />
                    </View>
                    <View style={{ width: '100%', height: 150 }}>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default HotelsListScreen;

const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
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
    HeadingView: {
        flex: 1,
        height: vh(15),
        width: '100%',
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
    HotelView: {
        paddingHorizontal: vw(5),

    },
    DatePickerTextView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingLeft: vw(2),
        width: '50%',
    },
    DPTopText: {
        color: '#130138',
        fontSize: vw(3),
        fontFamily: 'Rubik-Regular',
    },
    DPBottomText: {
        color: '#130138',
        fontSize: vw(3),
        fontFamily: 'Rubik-Regular',
    },  
    DatePickerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: vw(5),
        paddingVertical: vh(1),
        borderRadius: 15,
        backgroundColor: '#EAEAEA',
        // borderColor: '#130138',
        marginBottom: vh(2),
        // marginRight: vw(2),
        
    },
    calendarIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
        tintColor: '#130138',
    },

});