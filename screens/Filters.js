import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, TouchableHighlight, View, Text, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { event } from 'react-native-reanimated';

export class Filters extends Component {

    constructor(props) {
        super(props)

        this.state = {
            budgetButtons: [
                { key: 0, name: '$0-$50' },
                { key: 1, name: '$50-$100' },
                { key: 2, name: '$100-$200' },
                { key: 3, name: '$200-$500' }
            ],
            selectedBudgetIndex: 0,
            sportButtons: [
                { key: 0, name: 'Gym' },
                { key: 1, name: 'Karate' },
                { key: 2, name: 'Dance' },
                { key: 3, name: 'Tennis' }
            ],
            selectedSportIndex: 0,
            activitiesButtons: [
                { key: 0, name: 'Training' },
                { key: 1, name: 'Pilots' },
                { key: 2, name: 'TRX' },
                { key: 3, name: 'Yoga' }
            ],
            selectedActivitiesIndex: 2,
            distanceButtons: [
                { key: 0, name: 'In 3 mi' },
                { key: 1, name: 'In 5 mi' },
                { key: 2, name: 'In 10 mi' },
                { key: 3, name: 'In 20 mi' }
            ],
            selectedDistanceIndex: 0,
            outDoorAreaButtons: [
                { key: 0, name: 'Outdoor' },
                { key: 1, name: 'Indoor' },
            ],
            selectedOutDoorArea: 1
        }
    }

    updateBudget = (updatedBudget) => { this.setState({ selectedBudgetIndex: updatedBudget }); }
    updateSport = (updatedSport) => { this.setState({ selectedSportIndex: updatedSport }); }
    updateActivities = (updatedActivities) => { this.setState({ selectedActivitiesIndex: updatedActivities }); }
    updateDistance = (updatedDistance) => { this.setState({ selectedDistanceIndex: updatedDistance }); }
    updateOutDoorArea = (updatedOutDoorArea) => { this.setState({ selectedOutDoorArea: updatedOutDoorArea }); }


    render() {
        return (
            <KeyboardAvoidingView
                behavior={"padding"}
                style={Styles.container}
            >
                <SafeAreaView style={Styles.container}>

                    <View style={Styles.headerContainer}>
                        <View style={Styles.headerTopContainer}>
                            <TouchableOpacity
                                style={Styles.headerBtn}
                                onPress={() => this.props.navigation.navigate('Maps')}
                            >
                                <Ionicons name="chevron-back" size={40} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                            </TouchableOpacity>
                            <View style={Styles.headerIconContainer}>
                                <Text style={Styles.headerText}>Filters</Text>
                                <Text style={{ fontSize: 20 }}>Reset</Text>
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
                                <Text style={Styles.SLClabels}>Budget</Text>
                            </View>
                            <View style={Styles.scrollHorizontal}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {this.state.budgetButtons.map(
                                        ({ key, name }) => {
                                            return (
                                                <TouchableOpacity
                                                    key={key}
                                                    style={(this.state.selectedBudgetIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                                    onPress={() => this.updateBudget(key)}
                                                >
                                                    <Text style={(this.state.selectedBudgetIndex == key) ? Styles.svhbuttonTextClicked : Styles.svhbuttonText}>{name}</Text>
                                                </TouchableOpacity>
                                            );
                                        }
                                    )}
                                </ScrollView>
                            </View>
                            <View style={Styles.scrollLabelContainer}>
                                <Text style={Styles.SLClabels}>Sport</Text>
                            </View>
                            <View style={Styles.scrollHorizontal}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {this.state.sportButtons.map(
                                        ({ key, name }) => {
                                            return (
                                                <TouchableOpacity
                                                    key={key}
                                                    style={(this.state.selectedSportIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                                    onPress={() => this.updateSport(key)}
                                                >
                                                    <Text style={(this.state.selectedSportIndex == key) ? Styles.svhbuttonTextClicked : Styles.svhbuttonText}>{name}</Text>
                                                </TouchableOpacity>
                                            );
                                        }
                                    )}
                                </ScrollView>
                            </View>

                            <View style={Styles.scrollLabelContainer}>
                                <Text style={Styles.SLClabels}>Activities</Text>
                            </View>
                            <View style={Styles.scrollHorizontal}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {this.state.activitiesButtons.map(
                                        ({ key, name }) => {
                                            return (
                                                <TouchableOpacity
                                                    key={key}
                                                    style={(this.state.selectedActivitiesIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                                    onPress={() => this.updateActivities(key)}
                                                >
                                                    <Text style={(this.state.selectedActivitiesIndex == key) ? Styles.svhbuttonTextClicked : Styles.svhbuttonText}>{name}</Text>
                                                </TouchableOpacity>
                                            );
                                        }
                                    )}
                                </ScrollView>
                            </View>

                            <View style={Styles.scrollLabelContainer}>
                                <Text style={Styles.SLClabels}>Distance</Text>
                            </View>
                            <View style={Styles.scrollHorizontal}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {this.state.distanceButtons.map(
                                        ({ key, name }) => {
                                            return (
                                                <TouchableOpacity
                                                    key={key}
                                                    style={(this.state.selectedDistanceIndex == key) ? Styles.btnClicked : Styles.btnOG}
                                                    onPress={() => this.updateDistance(key)}
                                                >
                                                    <Text style={(this.state.selectedDistanceIndex == key) ? Styles.svhbuttonTextClicked : Styles.svhbuttonText}>{name}</Text>
                                                </TouchableOpacity>
                                            );
                                        }
                                    )}
                                </ScrollView>
                            </View>
                            <View style={Styles.scrollLabelContainer}>
                                <Text style={Styles.SLClabels}>Outdoor Area</Text>
                            </View>
                            <View style={Styles.scrollHorizontal}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {this.state.outDoorAreaButtons.map(
                                        ({ key, name }) => {
                                            return (
                                                <TouchableOpacity
                                                    key={key}
                                                    style={(this.state.selectedOutDoorArea == key) ? Styles.btnClicked : Styles.btnOG}
                                                    onPress={() => this.updateOutDoorArea(key)}
                                                >
                                                    <Text style={(this.state.selectedOutDoorArea == key) ? Styles.svhbuttonTextClicked : Styles.svhbuttonText}>{name}</Text>
                                                </TouchableOpacity>
                                            );
                                        }
                                    )}


                                </ScrollView>
                            </View>
                            <View style={Styles.btnLast}>
                                <LinearGradient
                                    style={{ borderRadius: 5 }}
                                    colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <TouchableOpacity style={Styles.applyBtn} onPress={() => this.props.navigation.navigate('Result')}>
                                        <Text style={Styles.applyBtnText}>Apply Filter</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </ScrollView>
                    </View>

                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const Styles = StyleSheet.create({



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
        alignItems: 'center',
    },
    headerBtn: {
        justifyContent: 'center',
        width: '10%',
        margin: 20,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
    },
    headerIconContainer: {
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerSearchContainer: {
        flex: 3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcd00'
    },
    headerSearchBar: {
        width: '80%',
        height: 60
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
        marginTop: 5,
        justifyContent: 'center',
    },
    SLClabels: {
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
    },
    scrollHorizontal: {
        marginTop: 5,
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
        color: 'black',
    },
    svhbuttonTextClicked: {
        fontSize: 18,
        color: 'white',
    },
    btnLast: {
        marginTop: 15,
        marginBottom: 5,
        //backgroundColor: 'red',
        //backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    applyBtn: {

        width: 220,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    applyBtnText: {
        color: 'white',
        fontSize: 18,
    },
})

export default Filters
