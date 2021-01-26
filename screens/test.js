import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class test extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 40, height: 50}}
                    source={require('../assets/01/01-Images/twirgo_logo_black.png')}
                ></Image>
            </View>
        )
    }
}


