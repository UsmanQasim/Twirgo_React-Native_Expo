import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


class Profile extends Component {
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
                </View>
                <View style={Styles.mainContent}>
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
                    <View style={Styles.featuredContainer}>
                        <TouchableOpacity
                            style={Styles.featuredItemContainer}
                        >
                            <Image
                                style={Styles.featuredImage}
                                source={require('../assets/backgroundimage.jpg')}
                            ></Image>
                            <View style={Styles.featuredItemDetails}>
                                <View style={Styles.featuredHeading}>
                                    <Text style={Styles.featuredHeadingText}>CityLife Tennis </Text>
                                </View>
                                <View style={Styles.featuredDescription}>
                                    <Text style={Styles.featuredDescriptionText}>Address </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <AntDesign name="star" size={20} color="orange" />
                                        <Text style={{ fontSize: 17 }}>4.6</Text>
                                    </View>

                                </View>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.featuredItemContainer}
                        >
                            <Image
                                style={Styles.featuredImage}
                                source={require('../assets/backgroundimage.jpg')}
                            ></Image>
                            <View style={Styles.featuredItemDetails}>
                                <View style={Styles.featuredHeading}>
                                    <Text style={Styles.featuredHeadingText}>CityLife Tennis </Text>
                                </View>
                                <View style={Styles.featuredDescription}>
                                    <Text style={Styles.featuredDescriptionText}>Address </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <AntDesign name="star" size={20} color="orange" />
                                        <Text style={{ fontSize: 17 }}>4.6</Text>
                                    </View>

                                </View>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.featuredItemContainer}
                        >
                            <Image
                                style={Styles.featuredImage}
                                source={require('../assets/backgroundimage.jpg')}
                            ></Image>
                            <View style={Styles.featuredItemDetails}>
                                <View style={Styles.featuredHeading}>
                                    <Text style={Styles.featuredHeadingText}>CityLife Tennis </Text>
                                </View>
                                <View style={Styles.featuredDescription}>
                                    <Text style={Styles.featuredDescriptionText}>Address </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <AntDesign name="star" size={20} color="orange" />
                                        <Text style={{ fontSize: 17 }}>4.6</Text>
                                    </View>

                                </View>

                            </View>
                        </TouchableOpacity>
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
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#ffcd00'
    },
    headerTopContainer: {
        paddingTop: 35,
        flex: 0.6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerImageContainer: {
        flex: 0.3,
        alignItems: 'center',
    },
    headerBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 22,
    },
    headerIconContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    ImageContainer: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderRadius: 150 / 2,
        borderWidth: 4,
        borderColor: "#393d47",
    },
    mainContent: {
        flex: 5
    },
    IdMain: {
        flex: 0.4,
        justifyContent: 'center',
    },
    InvSpace: {
        flex: 1,
    },
    IdDetails: {
        marginTop: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stats: {
        flexDirection: 'row',
        flex: 0.2,
        justifyContent: 'space-evenly',
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
    featuredContainer: {
        justifyContent: 'center',
        width: '100%',
        marginVertical: 1
    },
    featuredItemContainer: {
        margin: 10,
        height: 100,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
    },
    featuredImage: {
        borderRadius: 5,
        resizeMode: 'cover',
        padding: 5,
        width: '40%',
        height: 100,
    },
    featuredItemDetails: {
        width: '58%'
    },
    featuredHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    featuredHeadingText: {
        fontSize: 17,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: '95%',
    },
    featuredHeadingIcon: {
        width: '20%',
        alignItems: 'flex-end'
    },
    featuredDescription: {
        // marginVertical: 5
    },
    featuredDescriptionText: {
        fontSize: 14
    },
    featuredDescriptionBottomText: {
        fontSize: 12,
        textAlign: 'right'
    },

})



export default Profile

