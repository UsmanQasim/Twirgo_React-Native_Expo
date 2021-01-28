import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, TouchableHighlight, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export class Filters extends Component {

    static navigationOptions = {
        header: false
    }
    state = {
        backgroundColor: 'white',
        pressed: false,
    };

    changeColor() {
        if (!this.state.pressed) {
            this.setState({ backgroundColor: 'white', pressed: true });
        } else {
            this.setState({ backgroundColor: '#10C578', pressed: false });
        }
    }

    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity style={Styles.headerBtn}>
                            <Ionicons name="chevron-back" size={40} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <Text style={Styles.headerText}>Filters</Text>
                        <View style={Styles.headerIconContainer}>
                            <Text
                                style={{ fontSize: 30, alignSelf: 'flex-end' }}
                            >Reset</Text>
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
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor,
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Boxing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Karate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Dance</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Sports</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={Styles.scrollLabelContainer}>
                            <Text style={Styles.SLClabels}>Sport</Text>
                        </View>
                        <View style={Styles.scrollHorizontal}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Boxing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Karate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Dance</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Sports</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={Styles.scrollLabelContainer}>
                            <Text style={Styles.SLClabels}>Activities</Text>
                        </View>
                        <View style={Styles.scrollHorizontal}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Boxing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Karate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Dance</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Sports</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View style={Styles.scrollLabelContainer}>
                            <Text style={Styles.SLClabels}>Distance</Text>
                        </View>
                        <View style={Styles.scrollHorizontal}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: this.state.backgroundColor, height: 45,
                                        width: 100,
                                        alignItems: 'center',
                                        borderColor: '#10C578',
                                        borderWidth: 2,
                                        borderRadius: 5,
                                        marginLeft: 12.5,
                                        marginRight: 12.5,
                                        justifyContent: 'center',
                                    }}
                                    onPress={() => this.changeColor()}
                                >
                                    <Text style={Styles.svhbuttonText}>test</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: this.state.backgroundColor, height: 45,
                                        width: 100,
                                        alignItems: 'center',
                                        borderColor: '#10C578',
                                        borderWidth: 2,
                                        borderRadius: 5,
                                        marginLeft: 12.5,
                                        marginRight: 12.5,
                                        justifyContent: 'center',
                                    }}
                                    onPress={() => this.changeColor()}
                                >
                                    <Text style={Styles.svhbuttonText}>Karate</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Dance</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Sports</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <View style={Styles.scrollLabelContainer}>
                            <Text style={Styles.SLClabels}>Distance</Text>
                        </View>
                        <View style={Styles.scrollHorizontal}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Outdoor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: this.state.backgroundColor, height: 45,
                                    width: 100,
                                    alignItems: 'center',
                                    borderColor: '#10C578',
                                    borderWidth: 2,
                                    borderRadius: 5,
                                    marginLeft: 12.5,
                                    marginRight: 12.5,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={Styles.svhbuttonText}>Indoor</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
                <View style={Styles.btnLast}>
                    <LinearGradient
                        style={{ borderRadius: 5 }}
                        colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity style={Styles.applyBtn}>
                            <Text style={Styles.applyBtnText}>Apply Filter</Text>
                        </TouchableOpacity>
                    </LinearGradient>
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
        backgroundColor: 'white'
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
    },
    btnLast: {
        flex: 1,
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
