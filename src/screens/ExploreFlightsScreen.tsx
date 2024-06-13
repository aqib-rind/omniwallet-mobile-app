import * as React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { Modal } from "react-native-paper";
// import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import { Tab, TabView } from '@rneui/themed';
import RadioButtonRN from 'radio-buttons-react-native';


export default function ExploreFlightsScreen() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const navigation = useNavigation<any>(); // Get the navigation object using useNavigation
    const [modalVisible, setModalVisible] = React.useState(false);
    const [calendarModal, setCalendarModal] = React.useState(false);
    const [adultCount, setAdultCount] = React.useState(1);
    const [kidsCount, setKidsCount] = React.useState(0);
    const [adults, setAdults] = React.useState(0);
    const [kids, setKids] = React.useState(0);
    const [classModalVisible, setClassModalVisible] = React.useState(false);
    const [selectFlightClass, setSelectFlightClass] = React.useState('Economy');
    

    const kidIncrement = (kidsCount: number) => {
        if (kidsCount < 6)
            setKidsCount(kidsCount + 1);
    }
    const kidDecrement = (kidsCount: number) => {
        if (kidsCount > 0)
            setKidsCount(kidsCount - 1);
    }
    const adultIncrement = (adultCount: number) => {
        setAdultCount(adultCount + 1);
    }
    const adultDecrement = (adultCount: number) => {
        if (adultCount > 0)
            setAdultCount(adultCount - 1);


    }

    const modalCancel = () => {
        setModalVisible(false)
        setClassModalVisible(false)
        return (setAdults(adultCount), setKids(kidsCount));
    }
    const AddRoomPressesd = () => { }
    
    const minDate = new Date(); // Today
    const maxDate = new Date(2026, 6, 3);
    const [selectedStartDate, setSelectedStartDate] = React.useState('DD/MM/YYYY')
    const [selectedEndDate, setSelectedEndDate] = React.useState('DD/MM/YYYY')
    const onDateChange = (date: any, type: string) => {
        console.log(JSON.stringify(date))
        const newDate = JSON.stringify(date);
        const newDate1 = newDate.substring(1, newDate.length - 1)
        const dates = newDate1.split("T")
        const date1 = dates[0].split("-")
        const day = date1[2]
        const month = date1[1]
        const year = date1[0]
        console.log(day + "-" + month + "-" + year)

        if (type == 'END_DATE') {
            if (day == undefined) {
                setSelectedEndDate('DD/MM/YYYY')
            } else {
                setSelectedEndDate(day + "/" + month + "/" + year)
            }
        } else {
            setSelectedStartDate(day + "/" + month + " /" + year)
        }
    }

    const onNextPress = () => {
        navigation.navigate('FlightsListScreen');
    }
    const FlightClass = [
        {
            label: 'First Class'
        },
        {
            label: 'Business'
        },
        {
            label: 'Premium Economy'
        },
        {
            label: 'Economy'
        },
    ];
    const FlightSelect = (selectedBtn: { label: string }) => {
        setSelectFlightClass(selectedBtn.label);
    }



    return (
        <SafeAreaView style={styles.Body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
                    <Image source={require('../utils/assets/goback.png')} style={styles.goBackImg} />
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={styles.exploreText}>Flights</Text>
                </View>
            </View>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: '#0C0C3A',
                    height: 3,
                }}
                variant="default"
            >
                <Tab.Item
                    title="Return"
                    titleStyle={{ fontSize: 15, fontFamily: 'Rubik-Regular', color: '#0C0C3A' }}
                />
                <Tab.Item
                    title="One-way"
                    titleStyle={{ fontSize: 15, fontFamily: 'Rubik-Regular', color: '#0C0C3A' }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={styles.container}>
                        <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                            <TouchableOpacity style={styles.searchView} >
                                <View><Image source={require('../utils/assets/flight-from.png')} style={styles.searchIcon} /></View>
                                <TextInput placeholder="Flight from" style={styles.searchInput} placeholderTextColor={"#8E8E8E"} cursorColor={'#0C0C3A'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchView} >
                                <View><Image source={require('../utils/assets/flight-to.png')} style={styles.searchIcon} /></View>
                                <TextInput placeholder="Flight to" style={styles.searchInput} placeholderTextColor={"#8E8E8E"} cursorColor={'#0C0C3A'} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.DatePickerView} onPress={() => setCalendarModal(true)} >
                                <View><Image source={require('../utils/assets/calender.png')} style={styles.calendarIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPTopText}>Select Dates</Text>
                                    <Text style={styles.DPBottomText}>{selectedStartDate} - {selectedEndDate}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.DatePickerView} onPress={() => setModalVisible(true)} >
                                <View><Image source={require('../utils/assets/profile-icon.png')} style={styles.calendarIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPTopText}>Travellers</Text>
                                    <Text style={styles.DPBottomText}>{adults} Adults, {kids} Childern  </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchView} onPress={()=>setClassModalVisible(true)}>
                                <View><Image source={require('../utils/assets/seat-icon.png')} style={styles.searchIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPBottomText}>{selectFlightClass} </Text>
                                </View>
                            </TouchableOpacity>
                            <Button className={'mt-10 rounded-full bg-secondary'} onPress={()=>navigation.navigate('FlightsListScreen',{startDate:selectedStartDate})}>
                                <Text className={'text-xl text-white dark:text-white'} style={{ fontFamily: 'Rubik-Regular' }}>Search</Text>
                            </Button>

                            <View style={{ width: '100%', height: 100 }}>

                            </View>

                        </ScrollView>


                        {/* Room Modal Start */}
                        <Modal
                            visible={modalVisible}
                            onDismiss={() => setModalVisible(false)}
                            contentContainerStyle={styles.modalStyle}>
                            <View style={styles.modalContainer} >

                                <Text style={styles.modalHeading}>Room 1</Text>
                                <View style={styles.modalContent}>
                                    {/* <Text style={styles.modalTitle}>VIN Number:</Text> */}
                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalText}>Adult</Text>
                                        <View style={styles.rightcol}>
                                            <TouchableOpacity onPress={() => adultIncrement(adultCount)}>
                                                <Image source={require('../utils/assets/add-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                            <Text style={styles.number}>{adultCount}</Text>
                                            <TouchableOpacity onPress={() => adultDecrement(adultCount)}>
                                                <Image source={require('../utils/assets/minus-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalText}>Childern</Text>
                                        <View style={styles.rightcol}>
                                            <TouchableOpacity onPress={() => kidIncrement(kidsCount)}>
                                                <Image source={require('../utils/assets/add-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                            <Text style={styles.number}>{kidsCount}</Text>
                                            <TouchableOpacity onPress={() => kidDecrement(kidsCount)}>
                                                <Image source={require('../utils/assets/minus-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.ModalButtonView}>
                                        <Pressable onPress={modalCancel}>
                                            <Text style={styles.cancelBtn}>Save</Text>
                                        </Pressable>
                                        <Pressable onPress={AddRoomPressesd}>
                                            <Text style={styles.addRoomBtn}>Add Room</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* Room Modal End */}

                        {/* Calendar modal start */}
                        <Modal
                            visible={calendarModal}
                            onDismiss={() => setCalendarModal(false)}
                            contentContainerStyle={styles.modalStyle}
                        >
                            <View style={styles.modalContainer} >
                                <View style={styles.modalContent}>
                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={minDate.toString()}
                                        maxDate={maxDate.toString()}
                                        todayBackgroundColor="#f2e6ff"
                                        selectedDayColor="#7a7add"
                                        selectedDayTextColor="#FFFFFF"
                                        onDateChange={onDateChange}
                                        width={vw(80)}
                                        height={vh(50)}
                                        previousTitle="Prev"
                                        previousTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 15, }}
                                        nextTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 15, }}
                                        monthTitleStyle={{ color: '#7a7add', fontFamily: 'Quicksand-Bold', fontSize: 20, }}
                                        dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0, }}
                                        daysTextStyle={{ color: '#7a7add', fontFamily: 'Quicksand-Medium', fontSize: 16, }}
                                        dayOfWeekStyles={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 25, }}
                                        yearTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 20, }}
                                        selectedDayStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeStartStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeEndStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeStyle={{ backgroundColor: '#7a7add91' }}
                                        todayTextStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Bold', fontSize: 16, }}

                                        textStyle={{
                                            fontFamily: 'Quicksand-Medium',
                                            color: '#000000',
                                            fontSize: 15,
                                        }}
                                    />
                                    <View style={styles.ModalButtonView}>
                                        {/* <Pressable onPress={()=>setCalendarModal(false)}>
                                <Text style={styles.cancelBtn}>Save</Text>
                            </Pressable> */}
                                        <Pressable onPress={() => setCalendarModal(false)}>
                                            <Text style={styles.addRoomBtn}>Done</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* Calendar Modal end */}


                        {/*  return Flight class modal start */}
                        <Modal
                            visible={classModalVisible}
                            onDismiss={() => setClassModalVisible(false)}
                            contentContainerStyle={styles.modalStyle}>
                            <View style={[styles.modalContainer,{height:vh(30)}]} >
                                <RadioButtonRN
                                    data={FlightClass}
                                    selectedBtn={FlightSelect}
                                    initial={0}
                                    textStyle={{ fontFamily: 'Rubik-Regular', fontSize: 14, color: '#0C0C3A' }} // Adjust label style including fontFamily
                                    circleSize={10}
                                    activeColor={'#7a7add'}
                                    textColor={'#0C0C3A'}
                                    box={false}
                                    style={{ paddingVertical: vh(1), flex: 1, justifyContent: 'space-between', }}
                                />


                                <View style={styles.modalContent}>

                                    <View style={styles.ModalButtonView}>
                                        <Pressable onPress={() => setClassModalVisible(false)}>
                                            <Text style={styles.cancelBtn}>Done</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* Return Flight class modal end */}
                    </View>
                </TabView.Item>
                {/* Return Flight tab end  */}
                {/* One-way flight Tab starts */}
                <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                    <View style={styles.container}>
                        <ScrollView style={{ width: '100%', flex: 1 }} showsVerticalScrollIndicator={false}>
                            <TouchableOpacity style={styles.searchView} >
                                <View><Image source={require('../utils/assets/flight-from.png')} style={styles.searchIcon} /></View>
                                <TextInput placeholder="Flight from" style={styles.searchInput} placeholderTextColor={"#8E8E8E"} cursorColor={'#0C0C3A'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchView} >
                                <View><Image source={require('../utils/assets/flight-to.png')} style={styles.searchIcon} /></View>
                                <TextInput placeholder="Flight to" style={styles.searchInput} placeholderTextColor={"#8E8E8E"} cursorColor={'#0C0C3A'} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.DatePickerView} onPress={() => setCalendarModal(true)} >
                                <View><Image source={require('../utils/assets/calender.png')} style={styles.calendarIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPTopText}>Select Dates</Text>
                                    <Text style={styles.DPBottomText}>{selectedStartDate} - {selectedEndDate}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.DatePickerView} onPress={() => setModalVisible(true)} >
                                <View><Image source={require('../utils/assets/profile-icon.png')} style={styles.calendarIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPTopText}>Travellers</Text>
                                    <Text style={styles.DPBottomText}>{adults} Adults, {kids} Childern  </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.searchView} onPress={()=>setClassModalVisible(true)}>
                                <View><Image source={require('../utils/assets/seat-icon.png')} style={styles.searchIcon} /></View>
                                <View style={styles.DatePickerTextView}>
                                    <Text style={styles.DPBottomText}>{selectFlightClass} </Text>
                                </View>
                            </TouchableOpacity>
                            <Button className={'mt-10 rounded-full bg-secondary'} onPress={()=>navigation.navigate('FlightsListScreen',{startDate:selectedStartDate})}>
                                <Text className={'text-xl text-white dark:text-white'} style={{ fontFamily: 'Rubik-Regular' }}>Search</Text>
                            </Button>

                            <View style={{ width: '100%', height: 100 }}>

                            </View>

                        </ScrollView>
                        <Modal
                            visible={modalVisible}
                            onDismiss={() => setModalVisible(false)}
                            contentContainerStyle={styles.modalStyle}>
                            <View style={styles.modalContainer} >

                                <Text style={styles.modalHeading}>Room 1</Text>
                                <View style={styles.modalContent}>
                                    {/* <Text style={styles.modalTitle}>VIN Number:</Text> */}
                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalText}>Adult</Text>
                                        <View style={styles.rightcol}>
                                            <TouchableOpacity onPress={() => adultIncrement(adultCount)}>
                                                <Image source={require('../utils/assets/add-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                            <Text style={styles.number}>{adultCount}</Text>
                                            <TouchableOpacity onPress={() => adultDecrement(adultCount)}>
                                                <Image source={require('../utils/assets/minus-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.modalRow}>
                                        <Text style={styles.modalText}>Childern</Text>
                                        <View style={styles.rightcol}>
                                            <TouchableOpacity onPress={() => kidIncrement(kidsCount)}>
                                                <Image source={require('../utils/assets/add-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                            <Text style={styles.number}>{kidsCount}</Text>
                                            <TouchableOpacity onPress={() => kidDecrement(kidsCount)}>
                                                <Image source={require('../utils/assets/minus-icon.png')} style={styles.calendarIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.ModalButtonView}>
                                        <Pressable onPress={modalCancel}>
                                            <Text style={styles.cancelBtn}>Save</Text>
                                        </Pressable>
                                        <Pressable onPress={AddRoomPressesd}>
                                            <Text style={styles.addRoomBtn}>Add Room</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* Calendar Modal Starts */}
                        <Modal
                            visible={calendarModal}
                            onDismiss={() => setCalendarModal(false)}
                            contentContainerStyle={styles.modalStyle}
                        >
                            <View style={styles.modalContainer} >
                                <View style={styles.modalContent}>
                                    {/* <Text style={styles.modalTitle}>VIN Number:</Text> */}
                                    <CalendarPicker
                                        startFromMonday={true}
                                        allowRangeSelection={true}
                                        minDate={minDate.toString()}
                                        maxDate={maxDate.toString()}
                                        todayBackgroundColor="#f2e6ff"
                                        selectedDayColor="#7a7add"
                                        selectedDayTextColor="#FFFFFF"
                                        onDateChange={onDateChange}
                                        width={vw(80)}
                                        height={vh(50)}
                                        previousTitle="Prev"
                                        previousTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 15, }}
                                        nextTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 15, }}
                                        monthTitleStyle={{ color: '#7a7add', fontFamily: 'Quicksand-Bold', fontSize: 20, }}
                                        dayLabelsWrapper={{ borderTopWidth: 0, borderBottomWidth: 0, }}
                                        daysTextStyle={{ color: '#7a7add', fontFamily: 'Quicksand-Medium', fontSize: 16, }}
                                        dayOfWeekStyles={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 25, }}
                                        yearTitleStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Medium', fontSize: 20, }}
                                        selectedDayStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeStartStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeEndStyle={{ backgroundColor: '#7a7add' }}
                                        selectedRangeStyle={{ backgroundColor: '#7a7add91' }}
                                        todayTextStyle={{ color: '#0C0C3A', fontFamily: 'Quicksand-Bold', fontSize: 16, }}

                                        textStyle={{
                                            fontFamily: 'Quicksand-Medium',
                                            color: '#000000',
                                            fontSize: 15,
                                        }}
                                    />
                                    <View style={styles.ModalButtonView}>
                                        {/* <Pressable onPress={()=>setCalendarModal(false)}>
                                <Text style={styles.cancelBtn}>Save</Text>
                            </Pressable> */}
                                        <Pressable onPress={() => setCalendarModal(false)}>
                                            <Text style={styles.addRoomBtn}>Done</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* Calendar  Modal End */}


                        
                        {/* One-way Flight class modal start */}
                        <Modal
                            visible={classModalVisible}
                            onDismiss={() => setClassModalVisible(false)}
                            contentContainerStyle={styles.modalStyle}>
                            <View style={[styles.modalContainer,{height:vh(30)}]}  >
                                <RadioButtonRN
                                    data={FlightClass}
                                    selectedBtn={FlightSelect}
                                    initial={0}
                                    textStyle={{ fontFamily: 'Rubik-Regular', fontSize: 14, color: '#0C0C3A' }} // Adjust label style including fontFamily
                                    circleSize={10}
                                    activeColor={'#7a7add'}
                                    textColor={'#0C0C3A'}
                                    box={false}
                                    style={{ paddingVertical: vh(1), flex: 1, justifyContent: 'space-between'}}
                                />


                                <View style={styles.modalContent}>

                                    <View style={styles.ModalButtonView}>
                                        <Pressable onPress={() => setClassModalVisible(false)}>
                                            <Text style={styles.cancelBtn}>Done</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/*Oneway  Flight class modal end */}
                    </View>
                </TabView.Item>
                {/* one-way flight tab end */}
            </TabView>

        </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    Body: {
        height: '100%',
        width: '100%',
        flex: 1,

    },
    header: {
        height: vh(10),
        width: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: vw(5),

    },
    goBack: {

    },
    goBackImg: {
        height: vh(4.5),
        width: vh(4.5),
        resizeMode: 'contain'
    },
    searchView: {
        flex: 1,
        height: vh(7),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: vw(5),
        borderRadius: 15,
        backgroundColor: '#EAEAEA',
        marginBottom: vh(2),
        // borderColor: '#130138',
        // borderWidth: 2,
    },
    searchInput: {
        color: '#130138',
        fontSize: vh(2),
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        paddingHorizontal: vw(5),
        paddingVertical: vh(1),
    },
    calendarIcon: {
        height: vh(3.5),
        width: vh(3.5),
        resizeMode: 'contain',
        tintColor: '#130138',
    },
    searchIcon: {
        height: vh(3),
        width: vh(3),
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: vw(5),
        paddingVertical: vh(2),
    },
    textView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
    },
    IconView: {
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

    },
    exploreText: {
        color: '#130138',
        fontSize: vh(2.5),
        fontFamily: 'Quicksand-Bold',
        paddingHorizontal: vw(5),
    },
    DatePickerView: {
        flex: 1,
        height: vh(7),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: vw(5),
        borderRadius: 15,
        backgroundColor: '#EAEAEA',
        // borderColor: '#130138',
        marginBottom: vh(2),
        // marginRight: vw(2),
    },
    DatePickerTextView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'center',
        paddingHorizontal: vw(5),
    },
    DPTopText: {
        color: '#130138',
        fontSize: vw(3),
        fontFamily: 'Rubik-Regular',
    },
    DPBottomText: {
        color: '#130138',
        fontSize: vw(4),
        fontFamily: 'Rubik-Regular',
    },
    CalenderView: {
        flex: 1,
        height: vh(6),
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: vw(5),
        borderRadius: 15,
        backgroundColor: '#EAEAEA',
        // borderColor: '#130138',
        marginBottom: vh(2),
        // marginRight: vw(2),
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: vw(100),
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        width: 350,
        justifyContent: 'center',
        // height: vh(40),
    },
    modalContent: {
        
        justifyContent: 'center',
        //  alignItems: 'center',
        
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Rubik-SemiBold',
        marginBottom: vh(0.5),
        color: '#353535',
        textAlign: 'left'
    },
    modalHeading: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
        marginBottom: vh(0.5),
        color: '#353535',
    },
    modalText: {
        fontSize: 18,
        fontFamily: 'Rubik-Regular',
        marginBottom: vh(1),
        color: '#0C0C3A',
        textAlign: 'left'


    },
    number: {
        fontSize: 18,
        fontFamily: 'Rubik-Regular',
        marginBottom: vh(1),
        color: '#0C0C3A',
        paddingHorizontal: vw(2),
        paddingVertical: vh(1),
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        marginHorizontal: vw(2),
        width: vw(10),
        textAlign: 'center'
    },
    modalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(1),
    },
    rightcol: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    ModalButtonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: vh(2),
    },
    addRoomBtn: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontSize: 15,
        backgroundColor: '#0C0C3A',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: vw(5),
    },
    cancelBtn: {
        fontFamily: 'Rubik-Medium',
        color: '#0C0C3A',
        fontSize: 15,
        // backgroundColor:'#bdbdbd',
        marginHorizontal: vw(5),

    },
});
