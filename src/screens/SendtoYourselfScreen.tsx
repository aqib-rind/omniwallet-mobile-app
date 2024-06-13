import React, {  } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, ScrollView, PixelRatio } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { useNavigation } from '@react-navigation/native';

const scaleFactor = PixelRatio.get();


export default function SendtoYourselfScreen() {
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation



    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <ScrollView style={{ width: '100%', flex: 1, }} showsVerticalScrollIndicator={false}>
                    <Text style={styles.activityHeading}>Send to Yourself</Text>

                    <Text style={styles.subHeading}>Bank Accounts</Text>
                    <TouchableOpacity style={styles.activity} >
                        <Image source={require('../utils/assets/bank-icon.png')} style={styles.activityIcon} />
                        <View style={styles.TextView}>
                            <Text style={styles.Heading}>Standard Chartered Bank (Poland) Limited ***893</Text>
                            <Text style={styles.Text}>Limit: USD 0.00</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.subHeading}>Mobile Wallets</Text>
                    <TouchableOpacity style={styles.activity} >
                        <Image source={require('../utils/assets/mobile-icon.png')} style={styles.activityIcon} />
                        <View style={styles.TextView}>
                            <Text style={styles.Heading}>MNO 989-520-7915</Text>
                            <Text style={styles.Text}>Limit: USD 0.00</Text>
                        </View>
                    </TouchableOpacity>




                    <View style={{ width: '100%', height: 100 }}>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Body: {
        backgroundColor: '#f5f5f5',
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    goBack: {

    },
    goBackImg: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain'
    },

    header: {
        height: vh(10),
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: vw(5),
    },
    container: {
        flex: 1,
        width: '100%',
    },
    activityHeading: {
        color: '#130138',
        fontSize: vh(4),
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingBottom: vh(5),
    },
    subHeading: {
        color: '#130138',
        fontSize: vh(3),
        fontFamily: 'Rubik-Bold',
        textAlign: 'left',
        paddingHorizontal: vw(5),
        paddingBottom: vw(1),
    },
    cardView: {
        width: '100%',
        height: vh(25),
        marginTop: vh(2),
        paddingHorizontal: vw(5),
    },
    card: {
        width: vw(70),
        height: vh(22),
        borderRadius: 10,
        marginRight: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
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
    Heading: {
        color: '#130138',
        fontSize: vh(2.22),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'left',
        paddingHorizontal: vh(2),
    },
    Text: {
        color: '#130138',
        fontSize: vw(3.2),
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        paddingHorizontal: vh(2),
        paddingTop: vh(1),
    },
    activityIcon: {
        height: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(8)) : vh(4),
        width: scaleFactor > 2 ? (scaleFactor < 3 ? vh(5) : vh(8)) : vh(4),
        resizeMode: 'contain',
        marginVertical: vh(1.5)
    },
});
