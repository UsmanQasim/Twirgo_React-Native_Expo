import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


class Profile extends Component {
    static navigationOptions = {
        header: false
    }
    state = {
        firstQuery: '',
    };
    render() {
        return (

            <SafeAreaView style={Styles.container}>
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity style={Styles.headerBtn} onPress={() => this.props.navigation.openDrawer()}>
                            <Octicons name="three-bars" size={40} color="white" />
                        </TouchableOpacity>
                        <Text style={Styles.headerText}>MyProfile</Text>
                        <View style={Styles.headerIconContainer}>
                            <TouchableOpacity style={Styles.headerBtn}>
                                <EvilIcons name="bell" size={42} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.headerCurveContainer}>
                        <TouchableHighlight>
                            <Image
                                source={require('../assets/01/01-Images/JOHN_DOE.jpg')}
                                style={Styles.Image}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={Styles.IdDetails}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#80889c' }}>John Smith</Text>
                    <Text style={{ fontSize: 12, color: '#afb8c4' }}>johney@gmail.com</Text>
                </View>
                <View style={Styles.stats}>
                    <View>
                        <Text style={Styles.nhead}>Bookings</Text>
                        <Text style={Styles.numbers}>22</Text></View>
                    <View>
                        <Text style={Styles.nhead}>Favourites</Text>
                        <Text style={Styles.numbers}>338</Text></View>
                    <View>
                        <Text style={Styles.nhead}>Requests</Text>
                        <Text style={Styles.numbers}>50</Text></View>
                </View>
                <View style={{ flex: 5, }}>

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
        flex: 3,
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
    Image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 150 / 2,
        borderWidth: 6,
        borderColor: "#393d47",
    },
    headerCurveContainer: {
        flex: 4,
        width: '100%',
        backgroundColor: '#ffcd00',
        alignItems: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    IdDetails: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
    },
    nhead: {
        color: '#afb8c4',
        fontSize: 15
    },
    numbers: {
        fontSize: 25,
        color: '#53e3ab',
        fontWeight: 'bold',
        textAlign: 'center',
    }

})



export default Profile

