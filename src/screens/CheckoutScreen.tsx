import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Animated, Pressable, PixelRatio } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { vh, vw } from "react-native-css-vh-vw";

const scaleFactor = PixelRatio.get();


export default function CheckoutScreen() {

    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [showDetails, setShowDetails] = useState(false);
    const [text, setText] = React.useState("");

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const handleSeeAllClick = () => {
      setShowDetails(!showDetails);
      Animated.timing(fadeAnim, {
        toValue: showDetails ? 0 : 1,
        duration: 600, // Adjust the duration as needed
        useNativeDriver: true, // Set to true if possible
      }).start();
    };
    return (
        <SafeAreaView className="flex-1 h-full w-full bg-white">
            <View className=" flex-row h-14 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[15px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Checkout</Text>
            </View>
            <View className="w-full flex-1 px-3">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex-1 w-full border-0.5 border-primary py-3 px-3  rounded-xl my-2">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-primary text-[17px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Items</Text>
                            <Pressable onPress={handleSeeAllClick}>
                            <IonIcon name={showDetails ? "chevron-up" : "chevron-down"} size={20} color="#0c0c3a" />
                            </Pressable>
                        </View>
                        <Animated.View style={{ opacity: fadeAnim, height: showDetails?'auto':15 }} >
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

                            </Animated.View>
                            <View className="flex-row items-center justify-between">
                                <Text className="text-primary text-[20px] leading-5  text-right" style={{ fontFamily: 'Rubik-SemiBold' }}>Total</Text>
                                <Text className="text-primary text-[20px] leading-5  text-right" style={{ fontFamily: 'Rubik-SemiBold' }}>$2,491.64</Text>
                        </View>
                    </View>
                    {/* <Input placeholder="Street Address" source={require('../utils/assets/address-icon.png')} /> */}
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'First Name'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Last Name'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Email'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Phone'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Street Address'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Country'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'State'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />  
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'City'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'ZIP Code'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <Divider style={{ backgroundColor: '#bdbdbd', height: 2, marginVertical: 20 }} />
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Name on Card'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View style={styles.InputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder={'Card Number'}
                            placeholderTextColor="#828282"
                            cursorColor={'#000'}
                            value={undefined}
                        />
                    </View>
                    <View className="flex-row items-center justify-between">
                        <View style={styles.InputView} className="mr-2">
                            <TextInput
                                style={styles.TextInput}
                                placeholder={'Expiration Date'}
                                placeholderTextColor="#828282"
                                cursorColor={'#000'}
                                value={undefined}
                            />
                        </View>
                        <View style={styles.InputView} className="ml-2">
                            <TextInput
                                style={styles.TextInput}
                                placeholder={'CVV'}
                                placeholderTextColor="#828282"
                                cursorColor={'#000'}
                                value={undefined}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('WalletHomeScreen')}>
                        <Text className="text-white bg-primary px-3 py-2 rounded-md text-[13px] mt-4 " style={{ fontFamily: 'Rubik-Medium' }}>Pay now</Text>
                    </TouchableOpacity>



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
    InputView: {
        flex: 1,
        overflow: 'hidden',
        paddingVertical: scaleFactor > 2 ? (scaleFactor < 3 ? vw(1) : vh(1)) : vh(1),
        marginTop: vh(2),
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: vw(3),
    },
    InputIcon: {
        height: vh(2.5),
        width: vh(2.5),
        marginHorizontal: vw(5),
        tintColor: '#828282',
        resizeMode: 'contain',
    },
    TextInput: {
        flex: 1,
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
        color: '#000',

    },
    eyeIcon: {
        height: vh(3),
        width: vh(3),
        marginHorizontal: vw(5),
        resizeMode: 'contain',
    },
    containerStyle: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
        height: vh(6),
        flex: 1,
    },
    textContainerStyle:{
        backgroundColor: 'transparent',  
      },
    textInpuStyle: { 
        backgroundClor: 'yellow', 
        fontFamily: 'Quicksand-Medium', 
        fontSize: vh(2),
        color: '#828282', 
        height: vh(6),
    },
    countryPickerButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        height: vh(6),
        width: vw(10),
    },
    codeTextStyle:{
        fontFamily: 'Quicksand-Medium', 
        color: '#828282', 
        fontSize: vh(2),
        paddingLeft: 0, 
        marginLeft: -10,

        
    }
})