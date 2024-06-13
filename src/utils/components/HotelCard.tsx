import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import tw from 'twrnc';

interface HotelCardProps {
    imageSource: string;
    title: string;
    description: string;
    onPress: () => void;
    }

const HotelCard:React.FC<HotelCardProps> = ({ imageSource, title, description, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} className="flex-1 w-full flex-row items-center justify-center  rounded-2xl  border border-[#0C0C3A] my-2" style={styles.card}>
        <Image source={{ uri: imageSource }} resizeMode='cover' style={[tw`h-full w-30 ` ,styles.cardImage]} />
        
        <View className={'flex-1 py-2 px-2 h-[100%] justify-start'} style={styles.cardContent}>
          <Text className={'text-[16px] text-[#0C0C3A] '} style={styles.cardTitle}>{title}</Text>
          <Text className={'text-[12px] text-[#0C0C3A]  '} style={styles.city}>{description}</Text>
          <View className={'flex flex-row  py-1'}>
            <Image source={require('../assets/swimmer.png')} style={tw`h-5 w-5 `} />
            <Text className={'text-[12px] text-[#0C0C3A] px-1'} style={{fontFamily:'Quicksand-Medium'}}>Pool</Text>
          </View>
          <Text className={'text-[12px] text-secondary leading-4 w-40 '} style={{fontFamily:'Rubik-Regular', }}>Fully Refundable{'\n'}Reserve Now, Pay later</Text>
          <View className={'flex flex-row py-1 items-center'}>
            <View className={ '  bg-secondary h-6 w-8 justify-center items-center rounded-md '}>
                <Text className={'text-[13px] text-[#0C0C3A] text-center '} style={{fontFamily:'Quicksand-Medium'}}>9.2</Text>
            </View>
            <View className={'py-1 pl-2'}>
                <Text className={'text-[10px] text-[#0C0C3A] leading-3'} style={{fontFamily:'Rubik-Medium'}}>Excellent{'\n'}1000 reviews</Text>
            </View> 
          </View>
            <View className={'flex-1 justify-end items-start '}>
                <Text className={'text-2xl text-[#0C0C3A]   '} style={{fontFamily:'Rubik-Bold'}}>$790</Text>
                <Text className={'text-[12px]  text-[#0C0C3A] leading-4   '} style={{fontFamily:'Rubik-Medium'}}>$973 total{'\n'}Including Taxes & fees</Text>
            </View>
          

        </View>
      </TouchableOpacity>
    );
  };

    export default HotelCard;

  const styles = StyleSheet.create({

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
  });
  