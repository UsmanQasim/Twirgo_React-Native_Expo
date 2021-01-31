import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity,} from 'react-native'
import { Searchbar } from 'react-native-paper';

export default class Result extends Component {
    state = {
        firstQuery: '',
    };
    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.Header}>
                    <View style={Styles.headerTopContainer}>
                        <TouchableOpacity style={Styles.headerBtn}>
                            <Ionicons name="chevron-back" size={30} color="#10C578" style={{ alignSelf: 'flex-end' }} />
                        </TouchableOpacity>
                        <View style={Styles.headerIconContainer}>
                            <Text style={Styles.headerText}>Gym</Text>
                            <Ionicons name="ios-person-sharp" size={30} color="#10C578" />
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
                    <Text>Mic Test</Text>
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
        //backgroundColor: 'gold',
        //borderBottomLeftRadius: 15,
        //borderBottomRightRadius: 15,
    },
    headerTopContainer: {
        paddingTop: 10,
        flex: 2,
       // backgroundColor: '#ffcd00',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerBtn: {
        justifyContent: 'center',
        //width: '10%',
        margin: 20,
        //backgroundColor: 'gray',
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
        //backgroundColor: 'green',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

});