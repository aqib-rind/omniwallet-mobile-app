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

        <TouchableOpacity  className=" flex-1 w-[300px]  flex-col border border-primary rounded-2xl mr-4 " style={{overflow:'hidden'}}>
            <Image className={"justify-end h-[180px] w-full"} resizeMode="cover" source={{uri:'https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>

            <View className="flex-1 p-2">
                {/* <Text className="text-primary text-[13px] leading-5" style={{fontFamily:'Rubik-Regular'}}>TRAVEL GUIDE</Text> */}
                <Text className="text-primary text-[15px] leading-5" style={{fontFamily:'Rubik-Medium'}}>New York City</Text>
                <Text className="text-primary text-[12px] leading-5" style={{fontFamily:'Rubik-Regular'}}>United States of America</Text>
            </View>

        </TouchableOpacity>
    )
}