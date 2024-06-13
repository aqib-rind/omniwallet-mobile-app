import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity, Pressable, PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

const scaleFactor = PixelRatio.get();

interface Props {
    source: ImageSourcePropType;
    name: string;
    onPress: any | undefined;
}


const SettingsNav: React.FC<Props> = ({ source, name, onPress }) => {
    return (
        <Pressable style={styles.setting} onPress={onPress}>
            <View style={styles.settingIconView}>
                <Image source={source} style={styles.settingIcon} />
            </View>
            <View style={styles.settingTextView}>
                <Text style={styles.settingText}>{name}</Text>
                <Image source={require('../assets/arrow-right.png')} style={styles.arrowIcon} />
            </View>
        </Pressable>
    );
};

export default SettingsNav;

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: vw(5),
        marginBottom:scaleFactor > 2 ? (scaleFactor < 3 ? vw(5) : vw(7)) : vw(5),
    },
    settingIconView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4,
        elevation: 3,
    },
    settingIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',

    },
    settingTextView: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(7), 
        marginRight: vw(3)

    },
    settingText: {
        color: '#130138',
        fontSize: scaleFactor > 2 ? (scaleFactor < 3 ? vh(3) : vh(2.5)) : vh(2),
        fontFamily: 'Quicksand-SemiBold',
        textAlign: 'center',
    },
    arrowIcon: { 
        height: vh(1.5), 
        width: vh(1.5), 
        resizeMode: 'contain' }
});
