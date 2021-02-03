import React, { Component } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class BusinessPage extends Component {
    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.Header}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity
                            style={Styles.headerBtn}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Ionicons name="chevron-back" size={30} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <View style={Styles.headerIconContainer}>
                            <View>
                                <Text style={Styles.headerText}>CityLife Tennis</Text>
                                <Text style={{ fontSize: 13 }}>Italia</Text>
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
                            <View style={Styles.businessImageContainer}>
                                <Image
                                    style={Styles.businessImage}
                                    source={require('../assets/backgroundimage.jpg')}
                                ></Image>
                            </View>
                            <View style={Styles.heartContainer}>
                                <AntDesign name="heart" size={30} color="green" />
                            </View>
                            <View style={Styles.businessNameContainer}>
                                <Text style={Styles.businessName}>Name</Text>
                                <Text style={Styles.businessAddress}>Address</Text>
                            </View>
                            <View style={Styles.businessRatingContainer}>
                                <AntDesign name="star" size={18} color="orange" />
                                <AntDesign name="star" size={18} color="orange" />
                                <AntDesign name="star" size={18} color="orange" />
                                <AntDesign name="star" size={18} color="grey" />
                                <AntDesign name="star" size={18} color="grey" />
                                <Text>4.6</Text>
                            </View>
                            <Text style={{ color: 'green', margin: 10, fontSize: 20 }}>OVERVIEW</Text>
                            <Text style={{ marginHorizontal: 10, marginVertical: 5, fontSize: 18 }}>description</Text>
                        </View>

                        <View style={Styles.featuredContainer}>
                            <TouchableOpacity
                                style={Styles.featuredItemContainer}
                                onPress={() => this.props.navigation.navigate('BusinessPage')}
                            >
                                <Image
                                    style={Styles.featuredImage}
                                    source={require('../assets/backgroundimage.jpg')}
                                ></Image>
                                <View style={Styles.featuredItemDetails}>
                                    <View style={Styles.featuredHeading}>
                                        <Text style={Styles.featuredHeadingText}>Court </Text>
                                    </View>
                                    <View style={Styles.featuredDescription}>
                                        <Text style={Styles.featuredDescriptionText}>Play against a partner</Text>
                                        <Text style={Styles.featuredDescriptionText}>Max players: 4</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 18, color: 'green' }}>€20</Text>
                                            <Text style={{ fontSize: 16 }}>/h</Text>
                                        </View>
                                        <Text style={{ fontSize: 10, textAlign: 'right' }}>no pre-payment needed</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={Styles.featuredItemContainer}
                                onPress={() => this.props.navigation.navigate('BusinessPage')}
                            >
                                <Image
                                    style={Styles.featuredImage}
                                    source={require('../assets/backgroundimage.jpg')}
                                ></Image>
                                <View style={Styles.featuredItemDetails}>
                                    <View style={Styles.featuredHeading}>
                                        <Text style={Styles.featuredHeadingText}>Coach </Text>
                                    </View>
                                    <View style={Styles.featuredDescription}>
                                        <Text style={Styles.featuredDescriptionText}>Private lesson for any level</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 18, color: 'green' }}>€25</Text>
                                            <Text style={{ fontSize: 16 }}>/h</Text>
                                        </View>
                                        <Text style={{ fontSize: 10, textAlign: 'right' }}>no pre-payment needed</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: 'green', margin: 10, fontSize: 20 }}>REVIEWS</Text>

                            <View style={Styles.reviewsContainer}>
                                <TouchableOpacity
                                    style={Styles.reviewItemContainer}
                                    onPress={() => this.props.navigation.navigate('BusinessPage')}
                                >
                                    <Image
                                        style={Styles.revieweeImage}
                                        source={require('../assets/backgroundimage.jpg')}
                                    ></Image>
                                    <View style={Styles.reviewDetails}>
                                        <Text style={Styles.featuredHeadingText}>Reviewee Name </Text>
                                        <Text style={Styles.featuredDescriptionText}>Some review about the business</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.btnLast}>
                            <TouchableOpacity style={Styles.showOnMapBtn} onPress={() => this.props.navigation.navigate('Maps')}>
                                <Text style={Styles.showOnMapBtnText}>Show on Map</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.btnLast}>
                            <LinearGradient
                                style={{ borderRadius: 5 }}
                                colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <TouchableOpacity style={Styles.applyBtn} onPress={() => this.props.navigation.navigate('BookingScreen')}>
                                    <Text style={Styles.applyBtnText}>Book Now</Text>
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
    showOnMapBtn: {
        backgroundColor: '#10C578',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        borderRadius: 3
    },
    showOnMapBtnText: {
        color: 'white'
    },
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