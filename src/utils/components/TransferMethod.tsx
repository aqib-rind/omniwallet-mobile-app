import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity,PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    source: ImageSourcePropType;
    name: string;
    text: string;
    onPress: () => void | undefined;
}
const scaleFactor = PixelRatio.get();

const TransferMethod: React.FC<Props> = ({ source, name, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.activity} onPress={onPress}>
            <Image source={source} style={styles.activityIcon} />
            <View style={styles.TextView}>
                <Text style={styles.activityHeading}>{name}</Text>
                <Text style={styles.activityText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TransferMethod;

const styles = StyleSheet.create({
    activity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: vw(5),
        backgroundColor: '#EAEAEA',
        paddingHorizontal: vw(5),
        borderRadius: 15,
        marginVertical: vh(1),
    },
    TextView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: vh(1),
    },
    activityHeading: {
        color: '#130138',
        fontSize: vh(2.3),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'left',
        paddingHorizontal: vh(2),
    },
    activityText: {
        color: '#130138',
        fontSize: vw(3.2),
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        paddingHorizontal: vh(2),
    },
    activityIcon: {
        height: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(8)) : vh(4),
        width: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(8)) : vh(4),
        resizeMode: 'contain',
        marginVertical: vh(1.5)
    },
});
