import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'react-native-splash-screen';
import { AuthenticatedStackNavigator } from './src/utils/components/AuthenticatedStackNavigator';
import { vh } from 'react-native-css-vh-vw';
import { NativeBaseProvider } from 'native-base';


const slides = [
  {
    key: '1',
    title: 'Manage Travel',
    text: 'OmniWallet is designed to be your one-stop\n solution for managing your finances and travel arrangements conveniently on your mobile devices. With seamless integration with trusted third-party services, OmniWallet is poised to make your life easier.',
    image: require('./src/utils/assets/slide01.png'),
    backgroundColor: '#0C0C3A',
  },
  {
    key: '2',
    title: 'Manage Travel',
    text: 'OmniWallet is designed to be your one-stop\n solution for managing your finances and travel arrangements conveniently on your mobile devices. With seamless integration with trusted third-party services, OmniWallet is poised to make your life easier.',
    image: require('./src/utils/assets/slide01.png'),
    backgroundColor: '#0C0C3A',
  },
  {
    key: '3',
    title: 'Manage Travel',
    text: 'OmniWallet is designed to be your one-stop\n solution for managing your finances and travel arrangements conveniently on your mobile devices. With seamless integration with trusted third-party services, OmniWallet is poised to make your life easier.',
    image: require('./src/utils/assets/slide01.png'),
    backgroundColor: '#0C0C3A',
  }
];

const AppIntro = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  useEffect(() => {
    // Hide the splash screen when the component mounts
    SplashScreen.hide();
  }, []);
  

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.TextView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
  const renderDoneButton = () => {
    return (

        <Text style={styles.buttonText}>Done</Text>
    );
  }
  const renderNextButton = () => {
    return (
        <Text style={styles.buttonText}>Next</Text>
    );
  }
  const renderPrevButton = () => {
    return (
        <Text style={styles.buttonText}>Prev</Text>
    );
  }
  const renderSkipButton = () => {
    return (
        <Text style={styles.buttonText}>Skip</Text>
    );
  }

  const onDone = () => {
    // User finished the introduction. Set state to show the real app.
    setShowRealApp(true);
  };

  if (showRealApp) {
    // Render your main app component or navigation stack here.
    return (
      <NativeBaseProvider>
      <NavigationContainer>

        <AuthenticatedStackNavigator />
      </NavigationContainer>
      </NativeBaseProvider>
    );
  } else {
    // Show the app intro slider until the user finishes it.
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showSkipButton={true}
        showPrevButton={true}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderSkipButton={renderSkipButton}
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    paddingTop: vh(15),
    backgroundColor: '#0C0C3A',
  },
  TextView: {
    flex: 1,
    gap: 10,
    marginTop: vh(5),
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 30,
    color: '#fff',
  },
  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'contain',
    width: "100%", // Adjust the width and height as needed
    height: vh(30),
  },
  mainAppContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    color: '#fff',
  },

});

export default AppIntro;
