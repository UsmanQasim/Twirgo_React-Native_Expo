import React, { Component } from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Register extends Component {
    state = {
        password: '',
        conPassword: '',
        fullName: '',
        email: ''
    }
    signUp = () => {
        this.props.navigation.navigate('Home');
        // if (this.state.password == '' || this.state.conPassword == '' || this.state.email == '' || this.state.fullName == '') {
        //     Alert.alert("Invalid Token", "Maybe, You forgot to fill all the fields", [{ text: "I'll fill them right away!" }]);
        // } else if (this.state.password != this.state.conPassword) {
        //     Alert.alert("Woopsies!", "Passwords do not match", [{ text: "Let me correct that" }]);
        // } else {
        //     Alert.alert("Perfect", "", [{ text: "Proceed!", onPress: () => this.props.navigation.navigate('Home') }]);
        // }
    }
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            <LinearGradient
                style={Styles.container}
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Image
                    style={Styles.bgCurveTop}
                    source={require('../assets/bg-curve.png')}
                ></Image>
                <Image
                    style={Styles.bgCurveBottom}
                    source={require('../assets/bg-curve-inverted.png')}
                ></Image>
                <View style={Styles.topContainer}>
                    <Image
                        style={Styles.image_Logo}
                        source={require('../assets/logo.png')}
                    ></Image>
                    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Twirgo</Text>
                </View>
                <View style={Styles.middleContainer}>
                    <Text style={Styles.normalText}>USERNAME</Text>
                    <TextInput
                        textContentType={'name'}
                        placeholder='JohnSmith'
                        placeholderTextColor="white"
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ fullName: text })} />
                    <Text style={Styles.normalText}>Email</Text>
                    <TextInput
                        textContentType={'emailAddress'}
                        placeholder=' example@example.com'
                        placeholderTextColor="white"
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ email: text })} />
                    <Text style={Styles.normalText}>PASSWORD</Text>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        textContentType={'password'}
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ password: text })} />
                    <Text style={Styles.normalText}>CONFIRM PASSWORD</Text>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        textContentType={'password'}
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ conPassword: text })} />
                </View>
                <View style={Styles.bottomContainer}>
                    <LinearGradient colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}>
                        <TouchableOpacity
                            style={Styles.btn}
                            onPress={() => this.props.navigation.navigate('Application')}>
                            <Text style={Styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </LinearGradient>
        );
    }
}

const Styles = StyleSheet.create({
    bgCurveTop: {
        position: 'absolute',
        top: '1%',
        bottom: 0,
        right: 0,
        resizeMode: 'contain',
        height: '20%',
        width: '90%',
    },
    bgCurveBottom: {
        position: 'absolute',
        top: '69%',
        bottom: 0,
        left: 0,
        resizeMode: 'contain',
        height: '20%',
        width: '75%',
        opacity: 0.3
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eed400'
    },
    image: {
        flex: 1,
        backgroundColor: '#eed400',
        width: null,
        height: null
    },
    image_Logo: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
        marginBottom: 5
    },
    topContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 25,
    },
    middleContainer: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 25,
    },
    bottomContainer: {
        flex: 0.5,
    },
    greetText: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 20
    },
    inputField: {
        height: 50,
        marginBottom: 25,
        width: 300,
        //backgroundColor: '#F5F5F5',
        borderRadius: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    btn: {
        //backgroundColor: '#2F653E',
        width: 220,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    resetBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btnText: {
        fontSize: 20,
        color: 'white'
    },
});

export default Register;