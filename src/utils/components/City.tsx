import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, PixelRatio, Dimensions } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';


interface Props {
    source: ImageSourcePropType;
    name: string;
    text: string;
}
const scaleFactor = PixelRatio.get();
const { width,height } = Dimensions.get('window');


const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
    const words = text.split(' ');
    const truncatedText = words.slice(0, maxLength).join(' ');
    return `${truncatedText}...`;
};

const City: React.FC<Props> = ({ source, name, text }) => {
    const truncatedText = truncateText(text, 20);
    const fontSize = 8 * scaleFactor;

    return (


        <View style={styles.city}>
            <View style={styles.ImageView}>
            {/* <Image source={source} style={styles.ImageView} /> */}
                <Image source={source} style={styles.cityImage} />
            </View>
            <View style={styles.BottomView}>
                <Text style={styles.TopText}>TRAVEL GUIDE</Text>
                <Text style={styles.cityName} >{name}</Text>
                <Text style={styles.cityText}>{truncatedText}</Text>
            </View>
        </View>
    );
};

export default City;

const styles = StyleSheet.create({
    city: {
        flex: 1,
        height: scaleFactor > 2 ? (scaleFactor < 3 ? height / 3 : height /3.7) : height / 4.5,
        width:scaleFactor > 2 ? (scaleFactor < 3 ? 130 : 130) : 180,
        marginHorizontal:scaleFactor > 2 ? vw(2) : vw(1.5),
        marginTop: vh(1.5),
        marginBottom: vh(3),
    },
    ImageView: {
        height: scaleFactor > 2 ? (scaleFactor < 3 ? height / 6 : height /7) : height / 8,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
      },
    BottomView: {
        paddingVertical: vh(1),
    },
    cityImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    TopText: {
        color: '#130138',
        fontSize: scaleFactor > 2 ? vw(4) : vw(2),
        fontFamily: 'Quicksand-Medium',

    },
    cityName: {
        color: '#130138',
        fontSize: scaleFactor > 2 ? vw(4) : vw(2.5),
        fontFamily: 'Rubik-Bold',
        textAlign: 'left',
        paddingTop: scaleFactor > 2 ? vh(0.5) : 0,
    },
    cityText: {
        color: '#130138',
        fontSize:scaleFactor > 2 ? (scaleFactor < 3 ? 15 : 13) :  16,
        fontFamily: 'Quicksand-SemiBold',

    },
});
