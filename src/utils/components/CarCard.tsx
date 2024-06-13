import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

interface FlightCardProps {
    imageSource: string;
    title: string;
    description: string;
    onPress: () => void;
    }
const CarCard:React.FC<FlightCardProps> = ({ imageSource, title, description, onPress }) => {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('CarDetailsScreen')} className={"flex-1 flex-row w-full border-primary border rounded-2xl p-2 justify-between mb-3  "}>
            <View >
                <Text className="text-primary text-[18px]" style={{ fontFamily: 'Rubik-SemiBold' }}>MidSize SUV</Text>
                <Text className="text-primary text-[13px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Nissan X trail or Similar</Text>
                <View className={"flex-row  justify-start items-center mt-2"}>
                    <Icon name="user" size={15} color="#353535" style={styles.vectorIcon} solid/>
                    <Text className="text-primary text-[12px] leading-5 mr-2" style={{ fontFamily: 'Rubik-Regular' }}>5</Text>
                    <View className={"flex-row  justify-start items-center"}>
                        <Icon name="cogs" size={15} color="#353535" style={styles.vectorIcon} solid />
                        <Text className="text-primary text-[12px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Automatic</Text>
                    </View>
                </View>
                <View className={"flex-row  justify-start items-center"}>
                     <Icon name="tachometer-alt" size={15} color="#353535" style={styles.vectorIcon}/>
                    <Text className="text-primary text-[12px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Unlimited mileage</Text>
                </View>
                <View className={"flex-row  justify-start items-center"}>
                     <Icon name="plane-departure" size={15} color="#353535" style={styles.vectorIcon}/>
                    <Text className="text-primary text-[12px] leading-5" style={{ fontFamily: 'Rubik-Regular' }}>Counter and car in Terminal</Text>
                </View>
                <Text className="text-secondary text-[12px] leading-5 mt-3" style={{ fontFamily: 'Rubik-Regular' }}>Free Cancellation{'\n'}Online check-in{'\n'}Pay at pick-up{'\n'}Reserve without a credit card</Text>
                <View className={"flex-row  justify-start items-center "}>
                     <Image source={require('../assets/sixt.png')}resizeMode='contain' className={"h-8 w-8"}/>
                    <Text className="text-primary text-[12px] leading-5 pl-2" style={{ fontFamily: 'Rubik-Medium' }}>74% Positive</Text>
                </View>
            </View>

            <View className={"flex-1 items-end justify-between h-full"}>
                <Image source={require('../assets/carimage.png')} className={"h-20 w-20"}/>
                <View className={" items-end "}>
                    <Text className="text-primary text-[25px] text-right" style={{ fontFamily: 'Rubik-Bold' }}>$48{'\n'}
                    <Text className="text-primary text-[11px]" style={{ fontFamily: 'Rubik-Regular' }}>per day</Text>
                    </Text>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default CarCard;
const styles = StyleSheet.create({
    vectorIcon: {
        marginRight: 10,
        color: '#0C0C3A',
    },
})
