import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SplashScreen extends Component {

    componentDidMount = () => setTimeout(() => this.props.navigation.navigate('SignUp'), 1000);

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffcd00' }}>
                <Text style={{ fontSize: 60, fontWeight: 'bold', color: 'black' }}>Twirgo</Text>
            </View>
        );
    }
}

export default SplashScreen;
