import React, { Component } from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, Linking, StyleSheet, TextInput, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

class Login extends Component {
    state = {
        password: '',
        conPassword: '',
        fullName: '',
        email: ''
    }
    signUp = () => {
        if (this.state.password == '' || this.state.conPassword == '' || this.state.email == '' || this.state.fullName == '') {
            Alert.alert("Invalid Token", "Maybe, You forgot to fill all the fields", [{ text: "I'll fill them right away!" }]);
        } else if (this.state.password != this.state.conPassword) {
            Alert.alert("Woopsies!", "Passwords do not match", [{ text: "Let me correct that" }]);
        } else {
            Alert.alert("Perfect", "", [{ text: "Proceed!", onPress: () => this.props.navigation.navigate('Home') }]);
        }
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
                    <Text style={Styles.normalText}>EMAIL</Text>
                    <TextInput
                        style={Styles.emailInput}
                        textContentType={'emailAddress'}
                        placeholder=' example@example.com'
                        placeholderTextColor="white"
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <Text style={Styles.passText}>PASSWORD</Text>
                    <TextInput
                        style={Styles.passInput}
                        placeholder='Password'
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        textContentType={'password'}
                        style={Styles.inputField}
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>
                <View style={Styles.bottomContainer}>
                    <LinearGradient
                        colors={['#10C578', '#10C578', '#10965B']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <TouchableOpacity
                            style={Styles.btn}
                            onPress={() => this.props.navigation.navigate('Application')}
                        >
                            <Text style={Styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <View>
                        <Text
                            style={Styles.forgotText}
                            onPress={() => Linking.openURL('http://google.com')}
                        >
                            Forgot your password?
                            </Text>
                    </View>
                </View>
                <View style={Styles.registerContiner}>
                    <Text style={Styles.regText1}>Don't have an account?</Text>
                    <Text
                        style={Styles.regText2}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        Register
                        </Text>
                </View>
                <View style={Styles.SocialContainer}>
                    <SocialIcon
                        onPress={() => Linking.openURL('http://facebook.com')}
                        type='facebook'
                    />
                    <SocialIcon
                        onPress={() => Linking.openURL('http://twitter.com')}
                        type='twitter'
                    />
                    <SocialIcon
                        onPress={() => Linking.openURL('http://google.com')}
                        type='google'
                    />
                </View>
            </LinearGradient >
        );
    }
}

const Styles = StyleSheet.create({
    bgCurveTop: {
        position: 'absolute',
        top: '5%',
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
        backgroundColor: '#eed400',
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
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 25,
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 25,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    registerContiner: {
        flex: 1 / 2,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    SocialContainer: {
        flex: 1,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    social: {
        margin: 5,
    },
    greetText: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    passText: {
        fontWeight: 'bold',
        paddingTop: 25,
        fontSize: 15
    },
    forgotText: {
        paddingTop: 15,
        fontSize: 16,
        marginHorizontal: 'auto',
        color: 'white',
        textDecorationLine: 'underline',
    },
    regText1: {
        paddingTop: 15,
        fontSize: 20,
        color: 'white',
    },
    regText2: {
        paddingTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#10C578',
    },
    inputField: {
        height: 50,
        width: 300,
        borderRadius: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    btn: {
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

export default Login;