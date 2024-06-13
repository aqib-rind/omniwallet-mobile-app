import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GIcon from 'react-native-vector-icons/MaterialIcons';
import RoomCard from "../utils/components/RoomCard";
import { Divider } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


export default function HotelDetailsScreen() {
    const navigation = useNavigation<any>(); 
    const [images, setImages] = React.useState([
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    ]);
    return (
        <View className="flex-1 h-full w-full">
            <View className=" flex-row h-16 w-full justify-start items-center">
                <TouchableOpacity className="h-14 w-14 justify-center items-center" onPress={() => navigation.goBack()}>

                    <Image source={require('../utils/assets/goback.png')} resizeMode="contain" className="h-8 w-8 mx-3" />
                </TouchableOpacity>
                <Text className="text-primary text-[18px] leading-5  " style={{ fontFamily: 'Rubik-Medium' }}>Hotel</Text>
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
                        <Text className="text-primary text-[20px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Rixos Premium Dubai JBR</Text>
                        <View className="flex-row items-center">
                            <IonIcon name="star" size={15} color="#bdbdbd" />
                            <IonIcon name="star" size={15} color="#bdbdbd" />
                            <IonIcon name="star" size={15} color="#bdbdbd" />
                            <IonIcon name="star" size={15} color="#bdbdbd" />
                        </View>
                        <Text className="text-primary text-[13px] leading-7" style={{ fontFamily: 'Rubik-Regular' }}>4 star hotel, walk to Dubai Mall</Text>
                    </View>

                    <View className="flex-1 flex-row py-2">
                        <View className="flex-row w-[150px]">
                            <IonIcon name="checkmark-outline" size={15} color="#7a7add" style={styles.vectorIcon} />
                            <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Fully Refundable</Text>
                        </View>
                        <View className="flex-row">
                            <IonIcon name="checkmark-outline" size={15} color="#7a7add" style={styles.vectorIcon} />
                            <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Reserve Now, pay Later</Text>
                        </View>
                    </View>
                    <Text className="text-primary text-[18px]" style={{ fontFamily: 'Rubik-Medium' }}>9.0/10 Wonderful</Text>
                    <TouchableOpacity className="flex-row items-center">
                        <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>See all 949 reviews  </Text>
                        <IonIcon name="chevron-forward" size={13} color="#7a7add" />
                    </TouchableOpacity>
                    
                    <View className="py-2">
                        <Text className="text-primary text-[18px]" style={{ fontFamily: 'Rubik-Medium' }}>Popular amenities</Text>


                        <View className="flex-1 flex-row py-1">
                            <View className="flex-row w-[150px]">
                                <IonIcon name="restaurant" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Restaurant</Text>
                            </View>
                            <View className="flex-row">
                                <IonIcon name="wine" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Bar</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row py-1">
                            <View className="flex-row w-[150px]">
                                <Icon name="concierge-bell" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Room Service</Text>
                            </View>
                            <View className="flex-row">
                                <Icon name="swimmer" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Pool</Text>
                            </View>
                        </View>
                        <View className="flex-1 flex-row py-1">
                            <View className="flex-row w-[150px]">
                                <IonIcon name="wifi-sharp" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free Wifi</Text>
                            </View>
                            <View className="flex-row">
                                <IonIcon name="cafe" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Breakfast Available</Text>
                            </View>
                        </View>
                        <TouchableOpacity className="flex-row items-center">
                            <Text className="text-secondary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>See all </Text>
                            <IonIcon name="chevron-forward" size={13} color="#7a7add" />
                        </TouchableOpacity>
                    </View>
                    <View className="py-2">
                        <Text className="text-primary text-[18px] pb-2" style={{ fontFamily: 'Rubik-Medium' }}>Explore the Area</Text>
                        <View className="flex-1 flex-row py-1 justify-between">
                            <View className=" flex-row ">
                                <Icon name="map-marker-alt" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5 px-2" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Mall</Text>
                            </View>
                            <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>7 min walk</Text>
                        </View>
                        <View className="flex-1 flex-row py-1 justify-between">
                            <View className=" flex-row ">
                                <Icon name="map-marker-alt" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5 px-2" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Fountain</Text>
                            </View>
                            <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>8 min walk</Text>
                        </View>
                        <View className="flex-1 flex-row py-1 justify-between">
                            <View className=" flex-row ">
                                <Icon name="map-marker-alt" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5 px-2" style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa</Text>
                            </View>
                            <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>7 min walk</Text>
                        </View>
                        <View className="flex-1 flex-row py-1 justify-between">
                            <View className=" flex-row ">
                                <Icon name="map-marker-alt" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                                <Text className="text-primary  text-[13px] leading-5 px-2" style={{ fontFamily: 'Rubik-Regular' }}>Dubai (DXB-Dubai Intl.)</Text>
                            </View>
                            <Text className="text-primary  text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>18 min drive</Text>
                        </View>
                    </View>
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <Divider style={{ backgroundColor: '#0c0c3a', height: 0.5 }} />
                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>About this area</Text>
                    <Text className="text-primary text-[15px] text-justify leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Dubai</Text>
                    <Text className="text-primary text-[10px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Downtown Dubai is recognized for its skyscrapers and dancing fountains, and visitors here can see top sights like Dubai Fountain and Burj Khalifa. This scenic neighborhood in Dubai is well-known for its aquarium, restaurants, and cafés.</Text>

                    <Image source={require('../utils/assets/map.png')} resizeMode="cover" className="w-full h-20 rounded-lg my-1" />
                    <TouchableOpacity className="flex-row items-center ">
                        <Text className="text-secondary  text-[12px] leading-5 " style={{ fontFamily: 'Rubik-Medium' }}>View in map  </Text>
                        <Icon name="chevron-right" size={11} color="#7a7add" style={styles.vectorIcon} />
                    </TouchableOpacity>


                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="map-marker-alt" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[18px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>What's nearby</Text>
                    </View>
                    <View className="pl-8">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Mall - 7 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Fountain - 8 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Aquarium & Underwater Zoo - 15 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Burj Khalifa - 19 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dubai International Convention and Exhibition Centre - 7 min drive</Text>
                    </View>
                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="car" size={23} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[18px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Getting around</Text>
                    </View>
                    <View className="pl-8">
                        <View className=" flex-row items-center ">
                            <View className="w-5 ">
                                <IonIcon name="bus" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                            </View>
                            <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Trolly Station 2 Tram Station - 1 min walk</Text>
                        </View>
                        <View className=" flex-row items-center ">
                            <View className="w-5 ">
                                <IonIcon name="airplane" size={15} color="#0C0C3A" style={styles.vectorIcon} />
                            </View>
                            <Text className="text-primary text-[12px] py-1" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Trolly Station 2 Tram Station - 1 min walk</Text>
                        </View>
                    </View>
                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="restaurant" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[18px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Restaurants</Text>
                    </View>
                    <View className="pl-8">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>The Courtyard - 1 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Mezza House - 4 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dubai Aquarium & Underwater Zoo - 15 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>كرك هاوس - 1 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Arabeska Restaurant - 4 min walk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>1 - ستاربكس min walk</Text>
                    </View>

                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>About this property</Text>
                    <Text className="text-primary text-[14px] pb-2 text-justify leading-5" style={{ fontFamily: 'Rubik-Medium' }}>Manzil Downtown by Vida</Text>
                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Upscale hotel near Dubai Mall{'\n'} {'\n'}
                        Located close to Dubai Fountain and Burj Khalifa, Manzil Downtown by Vida provides a free daily manager's reception, a terrace, and a coffee shop/cafe. Stay connected with free in-room WiFi, and guests can find other amenities such as dry cleaning/laundry services and a bar.{'\n'}{'\n'}
                        Other perks at this hotel include:{'\n'}
                        </Text>
                    <FlatList
                        data={[
                            { key: 'An outdoor pool' },
                            { key: 'Free self parking and valet parking' },
                            { key: 'Buffet breakfast (surcharge), a roundtrip airport shuttle (surcharge), and a front-desk safe' },
                            { key: 'A 24-hour front desk, concierge services, and coffee/tea in the lobby' },
                            { key: 'Guest reviews speak highly of the helpful staff and location' },
                        ]}
                        renderItem={({ item }) => {
                            return (
                                <View className="">
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>{`\u2022 ${item.key}`}{item.key}</Text>
                                </View>
                            );
                        }}
                    />
                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Room features{'\n'}{'\n'}
                        All 197 rooms include comforts such as 24-hour room service and premium bedding, as well as perks like air conditioning and bathrobes.{'\n'}{'\n'}

                        Extra amenities include:{'\n'}</Text>
                        <FlatList
                        data={[
                            { key: 'LED light bulbs and eco-friendly cleaning products' },
                            { key: 'Eco-friendly toiletries, tubs or showers, and hair dryers' },
                            { key: 'TVs with satellite channels' },
                            { key: 'Wardrobes/closets, free infant beds, and electric kettles' },
                        ]}
                        renderItem={({ item }) => {
                            return (
                                <View className="">
                                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>{`\u2022 ${item.key}`}{item.key}</Text>
                                </View>
                            );
                        }}
                    />
                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>Languages</Text>
                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>English, Arabic, Hindi, Urdu, </Text>

                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>Property amenities</Text>
                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="wifi-sharp" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Internet</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>The Courtyard - 1 min walkAvailable in all rooms: Free WiFi</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Available in some public areas: Free WiFi and wired internet</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="parking" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Parking and transportation</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>24-hour roundtrip airport shuttle (surcharge)</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free self parking on site</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free valet parking on site</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible parking available</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="restaurant" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Food and drink</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Daily buffet breakfast available for a fee: AED 125 per person</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>A bar/lounge</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>A coffee shop/cafe</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>A restaurant</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Coffee and tea in common areas</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free daily manager's reception</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="list" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Things to do</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Health club</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Outdoor pool</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="users" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Family friendly</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free crib</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Laundry facilities</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Outdoor poolies</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <GIcon name="local_convenience_store" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Conveniences</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>24-hour front desk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Laundry facilities</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Luggage storage</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Safe at front desk</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="concierge-bell" size={20} color="#0C0C3A" style={styles.vectorIcon}  solid/>
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Guest services</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Concierge services</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Daily housekeeping</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Dry cleaning/laundry service</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Porter/bellhop</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Turndown service</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="briefcase" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Business services</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Business center</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Meeting rooms</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <GIcon name="deck" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Outdoors</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Terrace</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="checkmark-sharp" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>More</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>At least 80% lighting from LEDs</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Comprehensive food waste policy</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Comprehensive recycling policy</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Local artist showcase</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Local culture and ecosystem education</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Locally-owned and organized tours and activities</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Smoke-free property</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Vegan dining options</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Vegetarian breakfast available</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Vegetarian dining options</Text>
                    </View>
                    
                    <Divider style={{ backgroundColor: '#0c0c3a', height: 0.5 }} />

                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>Room amenities</Text>
                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="bed" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Bedroom</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free crib</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Premium bedding</Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <GIcon name="bed" size={20} color="#0C0C3A" style={styles.vectorIcon} />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Bathroom</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Bathrobes</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Bathtub or shower</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free toiletries</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Slippers</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Towels</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}></Text>
                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="checkmark-sharp" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Entertainment</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>TV with satellite channels</Text>

                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <IonIcon name="restaurant" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Food and drink</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>24-hour room service</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Coffee/tea maker</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Electric kettle</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Free bottled water</Text>

                    </View>


                    <Text className="text-primary text-[18px] py-2" style={{ fontFamily: 'Rubik-Medium' }}>Accessibility</Text>
                    <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking.</Text>



                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <GIcon name="apartment" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Common areas</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair accessible (may have limitations)</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Elevator</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Valet for wheelchair-equipped vehicles</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible concierge desk</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible parking</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible path of travel</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible path to elevator</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible pool</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible public washroom</Text>
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Wheelchair-accessible registration desk</Text>

                    </View>

                    <View className=" flex-row items-center ">
                        <View className="w-8 ">
                            <Icon name="door-open" size={20} color="#0C0C3A" style={styles.vectorIcon}  />
                        </View>
                        <Text className="text-primary text-[15px] py-1" style={{ fontFamily: 'Rubik-Medium' }}>Rooms</Text>
                    </View>
                    <View className="pl-8 pb-2">
                        <Text className="text-primary text-[11px] text-justify leading-5" style={{ fontFamily: 'Rubik-Regular' }}>In-room accessibility</Text>
                    </View>



                </View>


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