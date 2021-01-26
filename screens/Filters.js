import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export class Filters extends Component {
    static navigationOptions = {
        header: false
    }
    render() {
        return (

            <SafeAreaView style={Styles.container}>
                {
                    // HEADER HERE 
                }
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity style={Styles.headerBtn}>
                            <Octicons name="three-bars" size={40} color="white" />
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

                {
                    // CONTENT HERE
                }
                <View style={Styles.mainSectionContainer}>
                    <ScrollView style={Styles.mainSection}>
                        
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
        //height: 100,
        //borderRadius: 5,
    },
    pnbImage: {
        borderRadius: 5,
        width: 150,
        height: 100,
    },
})

export default Filters
