import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


class Panel1 extends Component {
    static navigationOptions = {
        header: false
    }
    state = {
        firstQuery: '',
    };
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
                        {
                            // SPORTS CONTAINER
                        }
                        <View style={Styles.sportsContainer}>
                            {/* SPORTS ICONS */}
                            <View style={Styles.sportsRow}>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="weight-lifter" size={50} color="#27ab67" />
                                    <Text>Gym</Text>
                                </View>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="soccer" size={50} color="#27ab67" />
                                    <Text>Soccer</Text>
                                </View>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="tennis" size={50} color="#27ab67" />
                                    <Text>Tennis</Text>
                                </View>
                            </View>
                            <View style={Styles.sportsRow}>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="basketball-hoop-outline" size={50} color="#27ab67" />
                                    <Text>Basketball</Text>
                                </View>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="swim" size={50} color="#27ab67" />
                                    <Text>Swimming</Text>
                                </View>
                                <View style={Styles.sportItem}>
                                    <MaterialCommunityIcons name="golf" size={50} color="#27ab67" />
                                    <Text>Golf</Text>
                                </View>
                            </View>
                            { /*OTHER SPORTS BUTTON*/}
                            <TouchableOpacity style={Styles.otherSportsBtn}>
                                <Text style={Styles.otherSportsBtnText}>Other Sports</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.scrollHorizontal}>
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

                                {/**ADD MORE BUTTON Here */}

                            </ScrollView>

                        </View>

                        <View style={Styles.pnbContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18 }}>Places near by</Text>
                                <Ionicons style={{ textAlign: 'flex-end' }} name="caret-forward-outline" size={24} color="black" />
                            </View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={Styles.pnbBottomContainer}>
                                    <TouchableOpacity style={Styles.pnbButton}>

                                        <Image
                                            style={Styles.pnbImage}
                                            source={require('../assets/backgroundimage.jpg')}
                                        ></Image>
                                        <Text style={{ fontSize: 15 }}>SomeText here...</Text>
                                        <View>
                                        <Text style={{alignSelf: 'flex-end' }}>Monthly</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <AntDesign name="star" size={18} color="#ffcd00" />
                                            <Text style={{ fontSize: 15 }}>4.3 (418)</Text>
                                            <Text style={{justifySelf: 'flex-end',fontSize: 15,}}>{'\t'} €55</Text>
                                        </View>
                                    </TouchableOpacity>


                                </View>

                                <View style={Styles.pnbBottomContainer}>
                                    <TouchableOpacity style={Styles.pnbButton}>

                                        <Image
                                            style={Styles.pnbImage}
                                            source={require('../assets/backgroundimage.jpg')}
                                        ></Image>
                                        <Text style={{ fontSize: 15 }}>SomeText here...</Text>
                                        <View>
                                        <Text style={{alignSelf: 'flex-end' }}>Monthly</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <AntDesign name="star" size={18} color="#ffcd00" />
                                            <Text style={{ fontSize: 15 }}>4.3 (418)</Text>
                                            <Text style={{justifySelf: 'flex-end',fontSize: 15,}}>{'\t'} €55</Text>
                                        </View>
                                    </TouchableOpacity>

                                    
                                </View>

                                <View style={Styles.pnbBottomContainer}>
                                    <TouchableOpacity style={Styles.pnbButton}>

                                        <Image
                                            style={Styles.pnbImage}
                                            source={require('../assets/backgroundimage.jpg')}
                                        ></Image>
                                        <Text style={{ fontSize: 15 }}>SomeText here...</Text>
                                        <View>
                                        <Text style={{alignSelf: 'flex-end' }}>Monthly</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <AntDesign name="star" size={18} color="#ffcd00" />
                                            <Text style={{ fontSize: 15 }}>4.3 (418)</Text>
                                            <Text style={{justifySelf: 'flex-end',fontSize: 15,}}>{'\t'} €55</Text>
                                        </View>
                                    </TouchableOpacity>

                                    
                                </View>

                                <View style={Styles.pnbBottomContainer}>
                                    <TouchableOpacity style={Styles.pnbButton}>

                                        <Image
                                            style={Styles.pnbImage}
                                            source={require('../assets/backgroundimage.jpg')}
                                        ></Image>
                                        <Text style={{ fontSize: 15 }}>SomeText here...</Text>
                                        <View>
                                        <Text style={{alignSelf: 'flex-end' }}>Monthly</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <AntDesign name="star" size={18} color="#ffcd00" />
                                            <Text style={{ fontSize: 15 }}>4.3 (418)</Text>
                                            <Text style={{justifySelf: 'flex-end',fontSize: 15,}}>{'\t'} €55</Text>
                                        </View>
                                    </TouchableOpacity>

                                    
                                </View>
                            </ScrollView>

                        </View>
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
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    headerTopContainer: {
        flex: 3,
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
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcd00'
    },
    headerSearchBar: {
        // color: '#91d7c5'
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
        overflowY: 'scroll'
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
        height: 50,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 'auto',
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



export default Panel1

