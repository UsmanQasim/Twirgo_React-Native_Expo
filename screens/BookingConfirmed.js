import React, { Component } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class BookingConfirmed extends Component {
    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.Header}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity
                            style={Styles.headerBtn}
                            onPress={() => this.props.navigation.navigate('BookingScreen')}
                        >
                            <Ionicons name="chevron-back" size={30} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <View style={Styles.headerIconContainer}>
                            <View>
                                <Text style={{ fontSize: 15 }}>10 Sept - 08:00 - 09:00 pm</Text>
                                <Text style={{ fontSize: 13 }}>CityLife Tennis Milano</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Clicked')
                                    this.props.navigation.openDrawer()
                                }}
                            >
                                <Ionicons name="ios-person-sharp" size={30} color="#10C578" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={Styles.Body}>
                    <ScrollView style={Styles.resultsContainer}>

                        <View style={Styles.topContainer}>
                            <Ionicons name="ios-checkmark-done-circle-outline" size={100} color="#10C578" />
                            <Text style={{ textAlign: 'center', fontSize: 18 }}>Booking Confirmed</Text>
                        </View>

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
                        <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 12, marginTop: 5 }}>Date:</Text>
                            <Text style={{ fontSize: 15 }}>10 September 2020</Text>

                            <Text style={{ fontSize: 12, marginTop: 5 }}>Time:</Text>
                            <Text style={{ fontSize: 15 }}>09:00 - 10:00 am</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontSize: 12, marginTop: 5 }}>Partner:</Text>
                                    <Text style={{ fontSize: 15 }}>09:00 - 10:00 am</Text>
                                </View>
                                <View>
                                    <Text style={{ textAlign: 'right', fontSize: 12, marginTop: 5 }}>Splitting</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#10C578', fontSize: 16 }}>$10</Text>
                                        <Text style={{ fontSize: 16 }}>/Hour</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.btnLast}>
                            <LinearGradient
                                style={{ borderRadius: 5 }}
                                colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity
                                    style={Styles.applyBtn}
                                    onPress={() => this.props.navigation.navigate('Home')}>
                                    <Text style={Styles.applyBtnText}>Okay</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    headerTopContainer: {
        paddingTop: 10,
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffcd00',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    headerBtn: {
        justifyContent: 'center',
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
    Body: {
        flex: 5,
        marginTop: 5,
        width: '100%',
    },

    topContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    businessImageContainer: {
        width: '100%',
        height: 200,
    },
    businessImage: {
        borderRadius: 5,
        resizeMode: 'cover',
        padding: 5,
        width: '100%',
        height: '100%',
    },
    heartContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    businessNameContainer: {
        flexDirection: 'column',
    },
    businessName: {
        fontSize: 25,
        marginLeft: 12
    },
    businessAddress: {
        fontSize: 18,
        marginLeft: 12
    },
    businessRatingContainer: {
        flexDirection: 'row',
        marginLeft: 12
    },

    resultsContainer: {
        width: '100%'
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
    reviewItemContainer: {
        margin: 10,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
    },
    revieweeImage: {
        borderRadius: 5,
        resizeMode: 'cover',
        padding: 5,
        width: '20%',
        height: 50,
        marginRight: 10
    },
    reviewDetails: {
        fontSize: 14
    },
    btnLast: {
        marginTop: 15,
        marginBottom: 5,
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
});
