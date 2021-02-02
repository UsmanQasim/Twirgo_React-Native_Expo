import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Searchbar } from 'react-native-paper';

export default class Result extends Component {
    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.Header}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity
                            style={Styles.headerBtn}
                            onPress={() => this.props.navigation.navigate('Filters')}
                        >
                            <Ionicons name="chevron-back" size={30} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <View style={Styles.headerIconContainer}>
                            <View>
                                <Text style={Styles.headerText}>Gym</Text>
                                <Text style={{ fontSize: 13 }}>Milano, Italia</Text>
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
                    <View style={Styles.headerSearchContainer}>
                        <Searchbar
                            style={Styles.headerSearchBar}
                            placeholder="Search"
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                        />
                    </View>
                </View>
                <View style={Styles.Body}>
                    <ScrollView style={Styles.resultsContainer}>
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
                                        <Text style={Styles.featuredHeadingText}> Tennis Milano City.. </Text>
                                    </View>
                                    <View style={Styles.featuredDescription}>
                                        <Text style={Styles.featuredDescriptionText}> 5.0 Very good</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'orange', fontSize: 20 }}> &#9733; </Text>
                                            <Text style={{ fontSize: 20 }}> 4.6 </Text>
                                        </View>
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
                                        <Text style={Styles.featuredHeadingText}> Tennis Milano City.. </Text>
                                    </View>
                                    <View style={Styles.featuredDescription}>
                                        <Text style={Styles.featuredDescriptionText}> 5.0 Very good</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'orange', fontSize: 20 }}> &#9733; </Text>
                                            <Text style={{ fontSize: 20 }}> 4.6 </Text>
                                        </View>
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
                                        <Text style={Styles.featuredHeadingText}> Tennis Milano City.. </Text>
                                    </View>
                                    <View style={Styles.featuredDescription}>
                                        <Text style={Styles.featuredDescriptionText}> 5.0 Very good</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'orange', fontSize: 20 }}> &#9733; </Text>
                                            <Text style={{ fontSize: 20 }}> 4.6 </Text>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
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
        flex: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffcd00'
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
    headerSearchContainer: {
        flex: 2,
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcd00',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    headerSearchBar: {
        width: '80%',
        height: 60
    },
    Body: {
        flex: 3,
        marginTop: 5,
        width: '100%',
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
        marginBottom: 10
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
    }
});