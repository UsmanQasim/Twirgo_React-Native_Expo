import React, { Component } from 'react';
//import { createStackNavigator } from 'react-navigation-stack';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, EvilIcons, Octicons } from '@expo/vector-icons';
//import NavigationBar from 'react-native-navbar';


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
                <View style={Styles.upperContainer}>
                    <View style={Styles.logoArea}>
                        <Octicons name="three-bars" size={40} color="white" />
                        <Text
                            style={Styles.logotext}
                        >
                            Twirgo
                        </Text>
                        <AntDesign name="message1" size={35} color="white" />
                        <EvilIcons name="bell" size={42} color="white" />
                    </View>
                    <Searchbar
                        style={Styles.search}
                        placeholder="Search"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                    //value={firstQuery}
                    />
                </View>


                <View style={Styles.middleContainer}>
                    <ScrollView style={Styles.scrollView}>
                        <Text >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Text>
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        padding: 0, 
        alignItems: 'center',
        
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',


    },
    logoArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 350,
        flexDirection: 'row',
    },
    logotext: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 50,
        marginRight: 20,
    },
    searchBar: {
        backgroundColor: 'yellow',
    },
    search: {
        width: 200,
        marginTop: 15,
        marginBottom: 15,
    },
    temp: {
        backgroundColor: 'yellow',
    },
    middleContainer: {
        flex: 5,
        //backgroundColor: 'white',
    },
    scrollView: {

    },
    btn: {
        width: 10,
        backgroundColor: 'red',
    },
    btnText: {
        fontSize: 30,
    },
})



export default Panel1
