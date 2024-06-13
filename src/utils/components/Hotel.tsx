import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    source: ImageSourcePropType;
    name: string;
    rating: string;
    location: string;
    price: string;
    weblink: any | undefined;
    dealLink: any | undefined;
    
}

const Hotel: React.FC<Props> = ({ source, name, rating, location,price, weblink, dealLink }) => {


    return (
        <View style={styles.hotel}>
            <View style={styles.ImageView}>
                <Image source={source} style={styles.hotelImage} />
            </View>
            <Text style={styles.hotelName}>{name}</Text>
            <View style={styles.starView}>
                <Image source={require('../assets/rating.png')} style={styles.star} />
                <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <View style={styles.locationView}>
                <Text style={styles.locationText}>{location}</Text>
                <TouchableOpacity style={styles.linkView} onPress={weblink}>
                    <Text style={styles.linkText}>Visit website</Text>
                    <Image source={require('../assets/goto.png')} style={styles.link} />
                </TouchableOpacity>
            </View>
            <View style={styles.priceView}>
                <Text style={styles.priceText}>${price}</Text>
                <TouchableOpacity style={styles.dealView} onPress={dealLink}>
                    <Text style={styles.dealText}>View Deal</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Hotel;

const styles = StyleSheet.create({
    hotel: {
        flex: 1,
        flexDirection: 'column',
        marginTop: vh(1.5),
        marginBottom: vh(3),
    },
    ImageView: {
        height: vh(25),
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
        
    },
    hotelImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    hotelName: {
        color: '#130138',
        fontSize: vh(3.5),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'left',
        paddingHorizontal: vw(2),
        paddingTop: vh(2),
    },
    starView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: vw(2),
        alignContent: 'center',
    },
    star: {
        height: vh(3.5),
        width: vh(12),
        resizeMode: 'contain',
    },
    ratingText: {
        color: '#130138',
        fontSize: vw(3.5),
        fontFamily: 'Quicksand-SemiBold',
        paddingHorizontal: vw(2),
    },
    locationView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: vw(2),
        alignContent: 'center',
    },
    locationText: {
        color: '#130138',
        fontSize: vw(3.5),
        fontFamily: 'Quicksand-Bold',
        paddingBottom: vh(0.5),
    },
    linkView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
    linkText:{
        color: '#130138',
        fontSize: vw(3.5),
        fontFamily: 'Quicksand-Bold',
        textDecorationLine: 'underline',
        paddingBottom: vh(0.5),
    },
    link:{
        height: 10,
        width: 10,
        resizeMode: 'contain',
        marginLeft: vw(1),
    },
    hotelText: {
        color: '#130138',
        fontSize: vw(3),
        fontFamily: 'Quicksand-SemiBold',
        paddingHorizontal: vw(2),
    },
    priceView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: vh(2),
        paddingHorizontal: vw(2),
        alignContent: 'center',
    },
    priceText: {
        color: '#130138',
        fontSize: vw(3.8),
        fontFamily: 'Rubik-Bold',
    },
    dealView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#7A7ADD',
        borderRadius: 20,
        paddingHorizontal: vw(3),
        paddingVertical: vh(0.2),


  
    },
    dealText: {
        color: '#fff',
        fontSize: vw(3.3),
        fontFamily: 'Quicksand-SemiBold',
        paddingBottom: vh(0.2),
    },

});
