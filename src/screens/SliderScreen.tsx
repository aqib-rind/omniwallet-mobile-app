import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SliderScreen = () => {
    const navigation = useNavigation<any>(); 
  return (
    <View>
      {/* Your slider content goes here */}
      <Text>Welcome to the App</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('MainApp')} />
    </View>
  );
};

export default SliderScreen;
