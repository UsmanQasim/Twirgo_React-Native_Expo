import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, EvilIcons, Octicons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
//
export default class Maps extends Component {

    static navigationOptions = {
        header: false
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={"height"}
                style={Styles.container}
            >
                <View style={Styles.headerContainer}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity
                            style={Styles.headerBtn}
                            onPress={() => this.props.navigation.navigate('BusinessPage')}
                        >
                            <Ionicons name="chevron-back" size={30} color="#10C578" />
                        </TouchableOpacity>
                        <Text style={Styles.headerText}>Map- Gym</Text>
                        <View style={Styles.headerIconContainer}>
                            <TouchableOpacity
                                style={Styles.headerBtn}
                                onPress={() => this.props.navigation.openDrawer()}
                            >
                                <Ionicons name="person" size={30} color="#10C578" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#ffcd00' }}></View>
                    <View style={Styles.headerSearchContainer}>
                        <Searchbar
                            style={Styles.headerSearchBar}
                            placeholder="Search"
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                        />
                    </View>
                    <View style={Styles.headerCurveContainer}></View>
                </View>

                <View style={Styles.mapBody}>
                    <MapView style={Styles.map} />
                </View>

                <View style={Styles.filterBtn}>
                    <LinearGradient
                        style={{ borderRadius: 5 }}
                        colors={['#10C578', '#10C578', '#10965B']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity
                            style={Styles.btn}
                            onPress={() => this.props.navigation.navigate('Filters')}
                        // onPress={Keyboard.dismiss}
                        >
                            <Text style={Styles.btnText}>Filter</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 2,
        width: '100%',
        display: 'flex',
        //position: 'relative',
        flexDirection: 'column',
    },
    headerTopContainer: {
        paddingTop: 30,
        paddingBottom: 20,
        flex: 3,
        justifyContent: 'space-between',
        backgroundColor: '#ffcd00',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtn: {
        //justifyContent: 'center',
        //width: '10%',
        margin: 20,
        paddingTop: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
    },
    headerIconContainer: {
        //alignItems: 'center',
        //backgroundColor: 'white'
    },
    headerSearchContainer: {
        flex: 4,
        width: '100%',
        height: 500,
        justifyContent: 'center',
        // paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#ffcd00'
    },
    headerSearchBar: {
        width: '80%',
        height: "100%"
    },
    headerCurveContainer: {
        flex: 2,
        width: '100%',
        backgroundColor: '#ffcd00',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    mapBody: {
        flex: 5,
    },
    map: {
        width: Dimensions.get('window').width,
        //height: '100%',
        height: Dimensions.get('window').height,
    },
    filterBtn: {
        flex: 1,
    },
    btn: {
        width: 220,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btnText: {
        fontSize: 20,
        color: 'white'
    },
});