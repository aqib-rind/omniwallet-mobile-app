import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface FlightCardProps {
    imageSource: string;
    title: string;
    description: string;
    onPress: () => void;
    }
const FlightCard:React.FC<FlightCardProps> = ({ imageSource, title, description, onPress }) => {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('FlightDetailsScreen')} className={"flex-1 flex-row w-full border-primary border rounded-2xl p-2 justify-between mb-3  "}>
            <View >
                <Text className="text-primary text-[15px]" style={{fontFamily:'Rubik-Medium'}}>11:05am - 6:55pm</Text>
                <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>Dublin (DUB) - New York (JFK){'\n'}12:50m (1 stop){'\n'}1h 30m in MAD</Text>
                <View className={"flex-row  justify-start items-center"}>
                <Image source={require('../assets/american-airline.png')} className={"h-6 w-6"}/>
                    <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>American Airlines</Text>
                </View>

            </View>
            <View className={"flex-1 items-end"}>
                <Text className="text-primary text-[15px]" style={{fontFamily:'Rubik-Bold'}}>$716</Text>
                <Text className="text-primary text-[11px]" style={{fontFamily:'Rubik-Regular'}}>Round Trip per Traveler</Text>
            </View>
            <View></View>

        </TouchableOpacity>

    )
}
export default FlightCard;