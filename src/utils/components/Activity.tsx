import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity,PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    source: ImageSourcePropType;
    name: string;
    onPress: () => void | undefined;
}
const scaleFactor = PixelRatio.get();

const Activity: React.FC<Props> = ({ source, name, onPress }) => {
    return (
        <TouchableOpacity style={styles.activity} onPress={onPress}>
            <Image source={source} style={styles.activityIcon} />
            <Text style={styles.activityText}>{name}</Text>
        </TouchableOpacity>
    );
};

export default Activity;

const styles = StyleSheet.create({
    activity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: vw(5),
        backgroundColor: '#EAEAEA',
        paddingHorizontal: vw(5),
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginBottom: vh(2),
        shadowOpacity: 0.29,
        shadowRadius: 4,
        elevation: 4,

    },
    activityText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Medium',
        textAlign: 'center',

    },
    activityIcon: {
        height: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(4)) : vh(4),
        width: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(4)) : vh(4),
        resizeMode: 'contain',
        marginVertical: vh(1.5)
    },
});
