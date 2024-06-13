import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    source: ImageSourcePropType;
    city: string | undefined;
    country: string | undefined;    
    onPress: any | undefined;
}


const PopularCity: React.FC<Props> = ({ source, city, country, onPress }) => {
    return (
        <TouchableOpacity style={styles.Box} onPress={onPress}>
            <View style={styles.IconView}>
                <Image source={source} style={styles.BoxIcon} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.cityName}>{city}</Text>
                <Text style={styles.BoxText}>{country}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularCity;

const styles = StyleSheet.create({
    Box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: vw(5),
        marginBottom: vh(1.5),
    },
    textView:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
    },
    cityName: {
        color: '#8E8E8E',
        fontSize: vh(2),
        fontFamily: 'Quicksand-SemiBold',
        textAlign: 'center',
        paddingHorizontal: vw(5),
    },
    BoxText: {
        color: '#8E8E8E',
        fontSize: vh(2),
        fontFamily: 'Quicksand-Regular',
        textAlign: 'left',
        paddingHorizontal: vw(5),
    },
    IconView:{
        height: vh(8),
        width: vh(8),
        backgroundColor: '#7A7ADD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    BoxIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
        tintColor: '#fff',
    },
});
