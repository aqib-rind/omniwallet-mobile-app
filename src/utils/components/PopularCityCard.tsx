import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function PopularCityCard() {
    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        const words = text.split(' ');
        const truncatedText = words.slice(0, maxLength).join(' ');
        return `${truncatedText}...`;
    };
    const truncatedText = truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper diam acegestas fermentum.", 6);    
    return(

        <TouchableOpacity  className=" w-[300] h-[250px] flex-col border border-primary rounded-2xl mr-4 " style={{overflow:'hidden'}}>
            <View className="p-3">
                <Text className="text-primary lg:text-[20px] text-[13px] leading-5" style={{fontFamily:'Rubik-Regular'}}>TRAVEL GUIDE</Text>
                <Text className="text-primary text-[18px] leading-5" style={{fontFamily:'Rubik-Medium'}}>New York City</Text>
                <Text className="text-primary text-[13px] leading-5" style={{fontFamily:'Rubik-Regular'}}>{truncatedText}</Text>
            </View>
            <Image className={"justify-end h-full w-full"} resizeMode="cover" source={{uri:'https://plus.unsplash.com/premium_photo-1682629789675-5a2ecb3db5c9?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>

        </TouchableOpacity>
    )
}