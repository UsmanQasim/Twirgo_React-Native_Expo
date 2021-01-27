import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

class MainScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Some Other Screen</Text>
                <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()} />
                <Button title="Toggle drawer" onPress={() => this.props.navigation.toggleDrawer()} />
            </View>
        )
    }
}

export default MainScreen
