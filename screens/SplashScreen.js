import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export class SplashScreen extends Component {
    render() {
        const timeout = () => {
            setTimeout(
                () => {
                    console.log('GOING TO THE MAIN APPLICATION');
                    this.props.navigation.navigate('Application');
                },
                300
            )
        }
        return (
            <View style={Styles.container}>
                {/*<Image
                    style={Styles.logo}
                    source={require('../assets/logo.jpg')}
                />*/}
                <Text
                    style={Styles.text}
                >Twirgo
                </Text>               
                {timeout()}
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black'
    },
    logo: {
        width: 225,
        height: 225
    }
});

export default SplashScreen
