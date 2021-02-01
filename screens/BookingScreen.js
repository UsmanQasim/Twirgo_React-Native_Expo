import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import CheckBox from 'react-native-check-box'

export class BookingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            timeButtons: [
                { key: 0, name: '08 to 09 am' },
                { key: 1, name: '09 to 10 am' },
                { key: 2, name: '10 to 11 am' },
                { key: 3, name: '12 to 1 am' }
            ],
            selectedTimeIndex: 0,
            groundButtons: [
                { key: 0, name: 'Grass' },
                { key: 1, name: 'Clay' },
            ],
            selectedGroundIndex: 0
        };

    }

    onDateChange = date => {
        this.setState({
            selectedStartDate: date,
        });
    }

    updateTime = (updatedTime) => { this.setState({ selectedTimeIndex: updatedTime }); }
    updateGround = (updatedGround) => { this.setState({ selectedGroundIndex: updatedGround }); }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return (

            <SafeAreaView style={Styles.container}>
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity style={Styles.headerBtn}>
                            <Ionicons name="chevron-back" size={30} color="green" />
                        </TouchableOpacity>
                        <Text style={Styles.headerText}>Twirgo</Text>
                        <View style={Styles.headerIconContainer}>
                            <TouchableOpacity style={Styles.headerBtn}>
                                <AntDesign name="message1" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.headerBtn}>
                                <EvilIcons name="bell" size={42} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.headerSearchContainer}>
                        <Searchbar
                            style={Styles.headerSearchBar}
                            placeholder="Search"
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                        />
                    </View>
                    <View style={Styles.headerCurveContainer}></View>
                </View>
                <View style={Styles.mainSectionContainer}>
                    <ScrollView style={Styles.mainSection}>
                        <View style={Styles.scrollLabelContainer}>
                            <AntDesign name="calendar" size={24} color="green" />
                            <Text style={{ marginLeft: 5 }}>Select Date</Text>
                        </View>
                        <CalendarPicker
                            onDateChange={this.onDateChange}
                        />
                        <View style={Styles.scrollLabelContainer}>
                            <Ionicons name="time-outline" size={25} color="green"></Ionicons>
                            <Text style={{ marginLeft: 5 }}>Select Time</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.state.timeButtons.map(
                                ({ key, name }) => {
                                    return (
                                        <TouchableOpacity
                                            key={key}
                                            style={(this.state.selectedTimeIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                            onPress={() => this.updateTime(key)}
                                        >
                                            <Text style={(this.state.selectedTimeIndex == key) ? Styles.btnTextClicked : Styles.btnText}>{name}</Text>
                                        </TouchableOpacity>
                                    );
                                }
                            )}
                        </ScrollView>
                        <View style={Styles.scrollLabelContainer}>
                            <AntDesign name="minussquareo" size={25} color="green" />
                            <Text style={{ marginLeft: 5 }}>Ground</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.state.groundButtons.map(
                                ({ key, name }) => {
                                    return (
                                        <TouchableOpacity
                                            key={key}
                                            style={(this.state.selectedGroundIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                            onPress={() => this.updateGround(key)}
                                        >
                                            <Text style={(this.state.selectedGroundIndex == key) ? Styles.btnTextClicked : Styles.btnText}>{name}</Text>
                                        </TouchableOpacity>
                                    );
                                }
                            )}
                        </ScrollView>
                        <View style={Styles.scrollLabelContainer}>
                            <MaterialCommunityIcons name="human-greeting" size={25} color="green" />
                            <Text style={{ marginLeft: 5 }}>NUMBER OF PLAYERS</Text>
                        </View>
                        <TextInput
                            style={Styles.inputField}
                            value={this.state.numberOfPlayers}
                            onChangeText={text => this.state.numberOfPlayers = text}
                        />
                        <View style={Styles.scrollLabelContainer}>
                            <MaterialCommunityIcons name="human-greeting" size={25} color="green" />
                            <Text style={{ marginLeft: 5 }}>SELECT A PARTNER</Text>
                        </View>
                        <TextInput
                            style={Styles.selectPartnerInputField}
                            value={this.state.numberOfPlayers}
                            onChangeText={text => this.state.numberOfPlayers = text}
                        />
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    headerContainer: {
        flex: 3 / 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    headerTopContainer: {
        paddingTop: 10,
        flex: 4,
        backgroundColor: '#ffcd00',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    headerBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    headerIconContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    headerSearchContainer: {
        flex: 3 / 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcd00'
    },
    headerSearchBar: {
        width: '80%',
        height: 40
    },
    headerCurveContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffcd00',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    mainSectionContainer: {
        flex: 5
    },
    mainSection: {
        height: '100%',
        display: 'flex',
        width: '100%',
        overflow: 'scroll'
    },
    scrollLabelContainer: {
        height: 50,
        width: '100%',
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sportsContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10
    },
    sportsRow: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    sportItem: {
        height: 90,
        width: '25%',
        marginLeft: 2,
        marginRight: 2,
        marginTop: 3,
        marginBottom: 3,
        backgroundColor: 'lightgrey',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherSportsBtn: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        paddingTop: 5,
        paddingBottom: 5,
    },
    otherSportsBtnText: {
        fontSize: 18
    },
    scrollHorizontal: {
        marginTop: 10,
    },
    svhButton: {
        backgroundColor: '#FFCD00',
        height: 45,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 12.5,
        marginRight: 12.5,
        justifyContent: 'center',
    },
    svhbuttonText: {
        fontSize: 18,
    },
    pnbContainer: {
        marginTop: 10,
        marginLeft: 2,
    },
    pnbBottomContainer: {
        backgroundColor: '#EDEDED',
        marginLeft: 5,
        marginTop: 5,
        marginRight: 8

    },
    pnbButton: {
        width: 150,
    },
    pnbImage: {
        borderRadius: 5,
        width: 150,
        height: 100,
    },


    btnOG: {
        backgroundColor: 'white',
        borderColor: '#10C578',
        borderWidth: 2,
        height: 45,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 12.5,
        marginRight: 12.5,
        justifyContent: 'center',
    },

    btnClicked: {
        backgroundColor: '#09ec88',
        borderColor: '#10C578',
        borderWidth: 2,
        height: 45,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 12.5,
        marginRight: 12.5,
        justifyContent: 'center',
    },

    btnText: {
        fontSize: 15,
        color: 'black',
    },
    btnTextClicked: {
        fontSize: 15,
        color: 'white'
    },

    inputField: {
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginBottom: 10,
        width: 45,
        height: 30,
        marginLeft: 35
    },

    selectPartnerInputField: {
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginBottom: 10,
        width: '70%',
        height: 30,
        marginLeft: 35
    }
})

export default BookingScreen
