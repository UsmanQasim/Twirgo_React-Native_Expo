import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons ,AntDesign } from '@expo/vector-icons';

export default class Explore extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.contents}>
                        <Ionicons name="chevron-back-outline" size={24} color="black" />
                        <Text>ExploreT</Text>
                        <AntDesign name="setting" size={24} color="black" />
                    </View>
                </View>
                <View style={Styles.body}>

                </View>

            </View>
        )
    }
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    contents: {
        flexDirection: 'row',
       // justifyContent: 'center',
        //alignItems: 'center',
    },

    body: {
        flex: 4,
    },

});