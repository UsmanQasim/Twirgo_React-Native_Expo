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
                            <Octicons name="three-bars" size={28} color="#2ce963" />
                        </TouchableOpacity>
                        <Text style={Styles.headerText}>MyProfile</Text>
                        <View style={Styles.headerIconContainer}>
                            <TouchableOpacity style={Styles.headerBtn}>
                                <AntDesign name="setting" size={28} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.headerImageContainer}>
                        <View style={Styles.ImageContainer}>
                            <TouchableHighlight>
                                <Image
                                    source={require('../assets/01/01-Images/JOHN_DOE.jpg')}
                                    style={Styles.Image}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                    {/*  <View style={Styles.headerCurveContainer}>

                    </View>*/}
                </View>
                <View style={Styles.IdMain}>
                    <View style={Styles.InvSpace}></View>
                    <View style={Styles.IdDetails}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#80889c' }}>John Smith</Text>
                        <Text style={{ fontSize: 12, color: '#afb8c4' }}>johney@gmail.com</Text>
                    </View>
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
                <View style={Styles.helpContainer}>
                    <View><Text>Help</Text></View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Boxing</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Karate</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Dance</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Sports</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Sports</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Sports</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Sports</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.svhButton}>
                                <Text style={Styles.svhbuttonText}>Sports</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
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
        flex: 1 / 1.2,
        width: '100%',
        backgroundColor: '#ffcd00',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    headerTopContainer: {
        paddingTop: 35,
        flex: 0.6,
        //backgroundColor: 'red',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

    },
    headerImageContainer: {
        //paddingTop: 50,
        flex: 0.3,
        //justifyContent: 'flex-end',
        //backgroundColor: 'pink',
        alignItems: 'center',
    },
    // headerTopContainer: {
    //     paddingTop: 10,
    //    // flex: 4,
    //     backgroundColor: '#ffcd00',
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center',
    //     borderBottomLeftRadius: 15,
    //     borderBottomRightRadius: 15,
    // },
    headerBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 22,
        // fontWeight: 'bold',
    },
    headerIconContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    ImageContainer: {
       // borderRadius: 150 / 2,
       //marginTop: 5,
       width: '30%',
       alignItems:'center',
       justifyContent: 'center',
       //backgroundColor : 'yellow', 
       //width: '20%',
       // borderWidth: 2,
    },

    Image: {
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderRadius: 150 / 2,
        borderWidth: 4,
        borderColor: "#393d47",
    },
    // headerCurveContainer: {
    //     flex: 4,
    //     width: '100%',
    //     backgroundColor: '#ffcd00',
    //     alignItems: 'center',
    //     borderBottomLeftRadius: 15,
    //     borderBottomRightRadius: 15,
    // },

    IdMain: {
        flex: 0.4,
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
    InvSpace: {
        borderWidth: 1,
        flex: 1,
    },

    IdDetails: {
        marginTop: 0,
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        //backgroundColor: 'blue',
        alignItems: 'center',
    },
    stats: {
        flexDirection: 'row',
        flex: 0.2,
       // backgroundColor: 'green',
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
    },
    helpContainer: {
        flex:1,
       // backgroundColor: 'purple',
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

})



export default Profile

