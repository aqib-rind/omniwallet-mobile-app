import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import IonIcon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-paper";
import RadioButtonRN from 'radio-buttons-react-native'
import { useNavigation } from '@react-navigation/native';

export default function RoomCard() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        const words = text.split(' ');
        const truncatedText = words.slice(0, maxLength).join(' ');
        return `${truncatedText}...`;
    };
    const [selectExtras, setSelectExtras] = React.useState('First Class');
    const truncatedText = truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper diam acegestas fermentum.", 6); 
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
    const Extras = [
        {
            label: 'No Breakfast'
        },
        {
            label: 'Business'
        },
        {
            label: 'Premium Economy'
        },
        {
            label: 'Economy'
        },
    ];
    const FlightSelect = (selectedBtn: { label: string }) => {
        setSelectExtras(selectedBtn.label);
    }
    return(

        <TouchableOpacity  className=" flex-1 w-full  flex-col border border-primary rounded-2xl mr-4 mb-3 " style={{overflow:'hidden'}}>
            <SliderBox
                    images={images}
                    sliderBoxHeight={180}
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
            {/* <Image className={"justify-end h-[180px] w-full"} resizeMode="cover" source={{uri:'https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/> */}

            <View className="flex-1 p-2">
                {/* <Text className="text-primary text-[13px] leading-5" style={{fontFamily:'Rubik-Regular'}}>TRAVEL GUIDE</Text> */}
                <Text className="text-primary text-[15px] leading-5" style={{fontFamily:'Rubik-Medium'}}>Delux Room</Text>
                <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>8.7/10</Text>

                <View className="flex flex-row items-center py-1">
                    <IonIcon name="checkmark-outline" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Reserve Now, pay later</Text>
                </View>
                <View className="flex flex-row items-center py-1">
                    <Icon name="ruler-combined" size={11} color="#0c0c3a" style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>344 sq ft</Text>
                </View>

                <View className="flex flex-row items-center py-1">
                <IonIcon name="wifi-sharp" size={15} color="#0C0C3A"  style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Free Wifi</Text>
                </View>

                <View className="flex flex-row items-center py-1">
                    <Icon name="parking" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Free self parking</Text>
                </View>

                <View className="flex flex-row items-center py-1">
                    <IonIcon name="people" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Sleeps 3</Text>
                </View>

                <View className="flex flex-row items-center py-1">
                    <Icon name="bed" size={15} color="#0c0c3a" style={styles.vectorIcon} />
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Free self parking</Text>
                </View>
                <Text className="text-secondary text-[10px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Fully refundable</Text>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-secondary  text-[12px] leading-5 " style={{ fontFamily: 'Rubik-Medium' }}>More Details  </Text>
                    <Icon name="chevron-right" size={11} color="#7a7add"  style={styles.vectorIcon}/>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-secondary  text-[12px] leading-5 " style={{ fontFamily: 'Rubik-Medium' }}>More Details  </Text>
                    <Icon name="chevron-right" size={11} color="#7a7add"  style={styles.vectorIcon}/>
                </TouchableOpacity>



            </View>
            <Divider style={{ backgroundColor:'black' }}/>
            <View className="flex-1 p-2">
                
{/* 
                <RadioButtonRN
                    data={Extras}

                    selectedBtn={FlightSelect}
                    initial={0}
                    textStyle={{ fontFamily: 'Rubik-Regular', fontSize: 14, color: '#0C0C3A' }} // Adjust label style including fontFamily
                    circleSize={10}
                    activeColor={'#7a7add'}
                    textColor={'#0C0C3A'}
                    box={false}
                    style={{ paddingVertical: 10, flex: 1, justifyContent: 'space-between', }}
                /> */}

                <View className=" flex-row items-center  ">
                    <Text className="text-white bg-secondary px-3 py-2 rounded-md text-[11px]">40% off</Text>
                </View>
                <View className=" flex-col  px-3 pt-3  ">
                    <Text className="text-primary text-[20px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>$261  <Text className="line-through text-[13px] " >$435</Text></Text>
                    <Text className="text-primary text-[10px] " style={{fontFamily:'Rubik-Regular'}}>$324 total{'\n'}includes taxes & fees</Text>
                </View>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-secondary  text-[12px] leading-5 " style={{ fontFamily: 'Rubik-Medium' }}>Price details  </Text>
                    <Icon name="chevron-right" size={11} color="#7a7add"  style={styles.vectorIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('FlightsListScreen')}>
                    <Text className="text-white bg-primary px-3 py-2 rounded-md text-[11px] mt-2" style={{ fontFamily: 'Rubik-Medium' }}>Reserve Now</Text>
                </TouchableOpacity>




            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 10,
    }
})