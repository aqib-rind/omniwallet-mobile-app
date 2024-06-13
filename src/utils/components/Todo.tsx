import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Pressable } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    source: ImageSourcePropType;
    name: string;
    rating: string;
    price: string;
    onPress: any | undefined;  
}

const Todo: React.FC<Props> = ({ source, name, rating, price, onPress,  }) => {


    return (
        <Pressable style={styles.activity} onPress={onPress}>
            <View style={styles.ImageView}>
                <Image source={source} style={styles.activityImage} />
            </View>
            <Text style={styles.activityName}>{name}</Text>
            <View style={styles.starView}>
                <Image source={require('../assets/rating.png')} style={styles.star} />
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
                <Text style={styles.priceText}>from ${price} per adult</Text>
        </Pressable>
    );
};

export default Todo;

const styles = StyleSheet.create({
    activity: {
        flex: 1,
        width:vw(40),
        marginHorizontal: vw(2.5),
        marginTop: vh(1.5),
        marginBottom: vh(3),
    },
    ImageView: {
        height: 150,
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
    },
    activityImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    activityName: {
        minHeight: vh(6),
        color: '#130138',
        fontSize: 15,
        fontFamily: 'Quicksand-Bold',
        textAlign: 'left',
        paddingTop: vh(1),
    },
    starView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingVertical: vh(0.5),
    },
    star: {
        height: vh(2.5),
        width: vh(10),
        resizeMode: 'contain',
    },
    ratingText: {
        color: '#130138',
        fontSize: 13,
        fontFamily: 'Quicksand-SemiBold',
        paddingHorizontal: vw(2),
    },
    priceText: {
        color: '#130138',
        fontSize: 14,
        fontFamily: 'Rubik-Bold',
        paddingVertical: vh(0.5),
    },
  

});
