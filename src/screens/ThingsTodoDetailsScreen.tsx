import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GIcon from 'react-native-vector-icons/MaterialIcons';
import RoomCard from "../utils/components/RoomCard";
import { Divider } from "react-native-paper";
import ThingsTodoInnerCard from "../utils/components/ThingsTodoInnerCard";
import { useNavigation } from '@react-navigation/native';


export default function ThingsTodoDetailsScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [images, setImages] = React.useState([
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ]);
    return (
        <View className="flex-1 h-full w-full">
            <View className=" flex-row h-16 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Activity</Text>
            </View>
            <ScrollView >
                <SliderBox
                    images={images}
                    sliderBoxHeight={300}
                    onCurrentImagePressed={(index: any) => console.warn(`image ${index} pressed`)}
                    dotColor="#0C0C3A"
                    inactiveDotColor="#7a7add"
                    paginationBoxVerticalPadding={20}
                    // autoplay
                    circleLoop
                    disableOnPress={false}
                    circleLoopRadius={5}
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                    }}
                    dotStyle={{
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                    inactiveDotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 10,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}




                    ImageComponentStyle={{ width: '100%' }}
                    imageLoadingColor="#7a7add"
                />
                <View className="flex-1  px-4 py-4">
                    <View className="flex-col">
                        <Text className="text-primary text-[20px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Burj Khalifa 124th & 125th Floor Observation Deck Tickets</Text>
                        <View className="flex-row items-center pt-1">
                            <Text className="text-primary text-[20px] leading-7" style={{ fontFamily: 'Rubik-Medium' }}>$49</Text>
                            <Text className="text-primary text-[10px] leading-7 px-1" style={{ fontFamily: 'Rubik-Regular' }}>per adult</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-1 border-slate-500 border px-4 py-2">
                    <View className="flex-row items-center">
                        <Text className="text-primary text-[17px] leading-7" style={{ fontFamily: 'Rubik-Medium' }}>4.3/5</Text>
                        <Text className="text-primary text-[11px] leading-7 px-1" style={{ fontFamily: 'Rubik-Regular' }}>3,765 verified reviews</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center" >
                        <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>See Details  </Text>
                        <IonIcon name={"chevron-down-sharp"} size={13} color="#7a7add" />
                    </TouchableOpacity>
                </View>

                <View className="flex-1 border-slate-500 border-r border-l border-b   px-4 py-2">
                    <View className=" flex-row items-center pb-1 ">
                        <View className="w-8 ">
                            <GIcon name="check" size={25} color="#7a7add" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-secondary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Fee Cancellation</Text>
                    </View>
                    <View className=" flex-row items-center pb-1  ">
                        <View className="w-8 ">
                            <GIcon name="update" size={25} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>1h 30m</Text>
                    </View>
                    <View className=" flex-row items-center pb-1  ">
                        <View className="w-8 ">
                            <GIcon name="print" size={25} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Printed Voucher</Text>
                    </View>
                </View>


                <View className="flex-1 w-full border-slate-500 border-r border-l border-b   px-4 py-2">
                    <Text className="text-primary text-[16px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Overview</Text>
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
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Up to $75,000 in primary coverage with $0 deductible</Text>
                    </View>
                    <View className=" flex-row items-center  ">
                        <View className="w-6 ">
                            <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Have a free time on two observation deck 124th -125th floor</Text>
                    </View>
                    <View className=" flex-row items-center  ">
                        <View className="w-6 ">
                            <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Multimedia displays & special virtual reality telescopes</Text>
                    </View>
                    <View className=" flex-row items-center  ">
                        <View className="w-6 ">
                            <GIcon name="circle" size={5} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Views of dancing fountains, Downtown Dubai & the Gulf</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center justify-end py-1" >
                        <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>See Details </Text>
                        <GIcon name={"chevron-right"} size={15} color="#7a7add" />
                    </TouchableOpacity>                     
                </View>
                <View className="flex-1 w-full">
                    <Image source={require('../utils/assets/map.png')} resizeMode="contain" className="h-44 w-full" />
                    <View className="flex-1  px-4 py-2">
                        <Text className="text-primary text-[16px] pt-2 pb-1 leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Activity Location</Text>
                        <Text className="text-primary text-[12px] py-1 leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard Dubai{'\n'}Dubai, United Arab Emirates</Text>
                        
                        <Text className="text-primary text-[16px] pt-2 pb-1 leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Meeting/Redemption Point</Text>
                        <Text className="text-primary text-[12px] py-1 leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa, 1 Sheikh Mohammed bin Rashid Boulevard Dubai{'\n'}Dubai, United Arab Emirates</Text>
                    </View>
                </View>
                <View className="flex-1 w-full border-slate-500 border px-4 py-2">
                    <View className="flex-1 flex-row items-center justify-between ">
                        <Text className="text-primary text-[16px] pt-2 pb-1 leading-5" style={{ fontFamily: 'Rubik-Medium' }}>What's Included</Text>
                        <Icon name={"chevron-down"} size={15} color="#0c0c3a" />
                    </View>
                    <View className="flex-row items-center pb-1 ">
                        <View className="w-8 pt-2 ">
                            <GIcon name="check" size={15} color="#7a7add" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Admission to the At The Top 124th-floor observation deck at Burj Khalifa</Text>
                    </View>
                </View>

                <View className="flex-1 border-slate-500 border-r border-l border-b px-4 py-2">
                    <View className="flex-1 flex-row items-center justify-between ">
                        <Text className="text-primary text-[16px] pt-2 pb-1 leading-5" style={{ fontFamily: 'Rubik-Medium' }}>What's Excluded</Text>
                        <Icon name={"chevron-down"} size={15} color="#0c0c3a" />
                    </View>
                    <View className=" flex-row items-center pb-1 ">
                        <View className="w-8 ">
                            <GIcon name="close" size={25} color="#7a7add" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Transfer</Text>
                    </View>
                    <View className=" flex-row items-center pb-1 ">
                        <View className="w-8 ">
                            <GIcon name="close" size={25} color="#7a7add" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Souvenirs and photographs</Text>
                    </View>
                </View>

                <View className="flex-1 border-slate-500 border-r border-l border-b px-4 py-2">
                    <View className="flex-1 flex-row items-center justify-between ">
                        <Text className="text-primary text-[16px] pt-2 pb-1 leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Know before you book</Text>
                        <Icon name={"chevron-down"} size={15} color="#0c0c3a" />
                    </View>
                    <View className=" flex-row items-center pb-1 ">
                        <View className="w-6 ">
                            <GIcon name="circle" size={5} color="#0c0c3a" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Children 4 and younger are complimentary.</Text>
                    </View>
                    <View className=" flex-row items-start pb-1 jus ">
                        <View className="w-6 pt-2 ">
                            <GIcon name="circle" size={5} color="#0c0c3a" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>You will receive an electronic copy of your tickets to print along with your exact timed-entry time after your booking is confirmed.</Text>
                    </View>
                </View>

                <ThingsTodoInnerCard/>
                <ThingsTodoInnerCard/>
                <ThingsTodoInnerCard/>
                <ThingsTodoInnerCard/>

                




            </ScrollView>
            <View style={{ width: '100%', height: 100 }}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 5,
    }
})