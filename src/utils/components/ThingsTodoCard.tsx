import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function ThingsTodoCard() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ThingsTodoDetailsScreen')} className={"flex-1 flex-col  border-primary border-primary border rounded-2xl  justify-between mb-3 mx-5  "} style={{ overflow: 'hidden' }}>

            <ImageBackground className={"flex-1 justify-end h-32 w-full"} source={{ uri: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} >
                {/* <Icons name="heart" size={15} style={styles.heartIcon} /> */}
                <Image source={require('../assets/gradient.png')} tintColor={"#000"} style={{ position: 'absolute', bottom: 0 }} className={"h-full w-full"} />
                <View className={"px-2 py-1"}>
                    <Text className={"text-white text-[14px]"} style={{ fontFamily: 'Rubik-Medium' }}>Burj Khalifa 124th & 125th Floor Observation Deck Tickets</Text>
                </View>

            </ImageBackground>

            <View className={"flex-1 flex-row w-full items-start justify-between px-2 py-2"}>
                <View >
                    <View className={"flex-1  justify-center items-start"}>
                        <View className={"flex-row"}>
                            <Icons name="clock" size={15} color="#353535" style={styles.vectorIcon} />
                            <Text className="text-primary text-[13px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>1h 30m</Text>
                        </View>
                        <Text className="text-primary text-[12px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>4.3/5 - Great</Text>
                        <Text className="text-primary text-[12px] leading-5" style={{ fontFamily: 'Rubik-Medium' }}>(3,764 reviews)</Text>
                    </View>
                </View>

                <View className={"flex-1  "}>
                    <Text className="text-primary text-right text-[22px]" style={{ fontFamily: 'Rubik-Bold' }}>$49{"\n"}
                        <Text className="text-primary text-[11px]" style={{ fontFamily: 'Rubik-Regular' }}>per adult</Text></Text>
                    <Text className="text-secondary text-right text-[11px]" style={{ fontFamily: 'Rubik-Regular' }}>Free cancellation</Text>
                </View>
                <View>

                </View>

            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 10,
        color: '#0C0C3A',
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        marginRight: 10,
        backgroundColor: '#000000a6',
        // height: 20,
        // width: 20,
        color: '#fff',
        borderRadius: 10,
        padding: 5,
        textAlign: 'center',
    },
})
