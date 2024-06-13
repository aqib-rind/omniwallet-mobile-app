import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';

interface Props {
    isNew: boolean;
}

const Notification: React.FC<Props> = ({ isNew }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleNotification = () => {
        setIsOpened(!isOpened);
    };

    return (
        <View style={styles.container}>
            {isNew && <View style={styles.newDot} />}
            <View style={styles.dateTimeRow}>
                <Text style={styles.dateTimeText}>29 June 2021, 7.14 PM</Text>
            </View>
            <View style={styles.Notification}>
                <Text style={styles.notificationText} numberOfLines={isOpened ? undefined : 2}>
                    You received Rp 100.000 from Alexandr Gibson Jogja
                </Text>
                <TouchableOpacity onPress={toggleNotification}>
                    <Image source={isOpened ? require('../assets/notification-up.png') : require('../assets/notification-down.png')} style={styles.notificationIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.dateTimeRow}>
                <Text style={styles.dateTimeText}>‘Pay debt’</Text>
            </View>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: vw(5),
        backgroundColor: '#fff',
        paddingHorizontal: vw(5),
        paddingVertical: vh(1),
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginBottom: vh(3),
        shadowOpacity: 0.29,
        shadowRadius: 4,
        elevation: 4,
        position: 'relative',
    },
    newDot: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        position: 'absolute',
        top: -2,
        right: 10,
        borderRadius: 5,
    },
    Notification: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: vh(1),
        justifyContent: 'space-between',
    },
    notificationText: {
        color: '#130138',
        fontSize: vh(2),
        fontFamily: 'Quicksand-Medium',
        paddingRight: vw(4),
        textAlign: 'left',
    },
    notificationIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
    },
    dateTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateTimeText: {
        color: '#BDBDBD',
        fontSize: vh(1.7),
        fontFamily: 'Quicksand-Medium',
        textAlign: 'center',
    },
});
