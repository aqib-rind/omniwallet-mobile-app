import React from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, PixelRatio } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/ProfileScreen';
import ActivityScreen from '../../screens/AcivityScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ExploreHotelsScreen from '../../screens/ExploreHotelsScreen';
import HotelsListScreen from '../../screens/HotelsListScreen';
import ThingsTodoScreen from '../../screens/ThingsTodoScreen';
import LoginScreen from '../../screens/LoginScreen';
import FirstRegisterScreen from '../../screens/FirstRegisterScreen';
import WalletHomeScreen from '../../screens/WalletHomeScreen';
import AddCardScreen from '../../screens/AddCardScreen';
import DebitCardScreen from '../../screens/DebitCardScreen';
import CurrencyExchangeScreen from '../../screens/CurrencyExchangeScreen';
import TransferScreen from '../../screens/TransferScreen';
import SendtoYourselfScreen from '../../screens/SendtoYourselfScreen';
import SecondRegisterScreen from '../../screens/SecondRegisterScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExploreFlightsScreen from '../../screens/ExploreFlightsScreen';
import FlightsListScreen from '../../screens/FlightsListScreen';
import ExploreCarsScreen from '../../screens/ExploreCarsScreen'
import CarsListScreen from '../../screens/CarsListScreen';
import ExploreThingsToDoScreen from '../../screens/ExploreThingsToDoScreen';
import HotelDetailsScreen from '../../screens/HotelDetailsScreen';
import FlightDetailsScreen from '../../screens/FlightDetailsScreen';
import CarDetailsScreen from '../../screens/CarDetailsScreen'
import ThingsTodoDetailsScreen  from '../../screens/ThingsTodoDetailsScreen';
import CartScreen from '../../screens/CartScreen';
import CheckoutScreen from '../../screens/CheckoutScreen';

const scaleFactor = PixelRatio.get();

const AuthenticatedStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Your AuthenticatedStackNavigator remains the same
function AuthenticatedStackNavigatorContainer() {
  return (
    <AuthenticatedStack.Navigator initialRouteName='ActivityScreen'>
      <AuthenticatedStack.Screen name="ActivityScreen"  component={ActivityScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ProfileScreen"   component={ProfileScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ExploreHotelsScreen" component={ExploreHotelsScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="HotelsListScreen" component={HotelsListScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ThingsTodoScreen" component={ThingsTodoScreen} options={{ headerShown: false }} />   
      <AuthenticatedStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />  
      <AuthenticatedStack.Screen name="FirstRegisterScreen" component={FirstRegisterScreen} options={{ headerShown: false }} /> 
      <AuthenticatedStack.Screen name="WalletHomeScreen" component={WalletHomeScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="AddCardScreen" component={AddCardScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="DebitCardScreen" component={DebitCardScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="CurrencyExchangeScreen" component={CurrencyExchangeScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="TransferScreen" component={TransferScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="SendtoYourselfScreen" component={SendtoYourselfScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="SecondRegisterScreen" component={SecondRegisterScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ExploreFlightsScreen" component={ExploreFlightsScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="FlightsListScreen" component={FlightsListScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ExploreCarsScreen" component={ExploreCarsScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="CarsListScreen" component={CarsListScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="ExploreThingsToDoScreen" component={ExploreThingsToDoScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="HotelDetailsScreen" component={HotelDetailsScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="FlightDetailsScreen" component={FlightDetailsScreen} options={{ headerShown: false }} />
      <AuthenticatedStack.Screen name="CarDetailsScreen" component={CarDetailsScreen} options={{headerShown:false}}/>
      <AuthenticatedStack.Screen name="ThingsTodoDetailsScreen" component={ThingsTodoDetailsScreen} options={{headerShown:false}}/>
      <AuthenticatedStack.Screen name="CartScreen" component={CartScreen} options={{headerShown:false}}/> 
      <AuthenticatedStack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{headerShown:false}}/>
    </AuthenticatedStack.Navigator>
  );
}

// Create the bottom tab navigator
export function AuthenticatedStackNavigator() {
  return (
    <SafeAreaView
      style={{ flex: 1,}}
    >
      {/* Wrap Tab.Navigator with SafeAreaView */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: scaleFactor > 2 ? (scaleFactor < 3 ? 10 : 15) : 15,
            left: scaleFactor > 2 ? (scaleFactor < 3 ? 10 : 15) : 15,
            right:scaleFactor > 2 ? (scaleFactor < 3 ? 10 : 15) : 15,
            backgroundColor: '#0C0C3A',
            borderTopColor: 'transparent',
            height: scaleFactor > 2 ? (scaleFactor < 3 ? 70 : 80) : 90,
            borderRadius:scaleFactor > 2 ? (scaleFactor < 3 ? 25 : 30) : 30,
            shadowColor: "#0C0C3A",
            shadowOffset: {
              width: 15,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 15,               
          }
        }}
      >
        {/* Define your tab screens */}
        <Tab.Screen
          name="Dashboard"
          component={AuthenticatedStackNavigatorContainer}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../assets/wallet-icon.png')} tintColor={'#fff'} style={styles.BottomIcons} />;
            }
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../assets/bottom-icon02.png')} style={styles.BottomIcons} />;
            }
          }}
        />
         <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../assets/bottom-icon04.png')} style={styles.BottomIcons} />;
            }
          }}
        />
         <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../assets/bottom-icon03.png')} style={styles.BottomIcons} />;
            }
          }}
        />
        
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  BottomIcons: {
    height:scaleFactor > 2 ? (scaleFactor < 3 ? 25 : 28) : 35,
    width: scaleFactor > 2 ? (scaleFactor < 3 ? 25 : 28) : 35,
    resizeMode: 'contain',
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: '#0C0C3A',
    borderTopColor: 'transparent',
    height: 60,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});