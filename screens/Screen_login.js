import React, { Component } from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, Linking, StyleSheet, TextInput, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';



//const image = { uri: "https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80" };

class Screen_login extends Component {
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
            Alert.alert("Perfect", "", [{ text: "Proceed!", onPress: () => this.props.navigation.navigate('optionScreen') }]);
        }
    }
    static navigationOptions = {
        headerShown: false
    };
    render() {
        return (
            // Background image 
            <ImageBackground style={Styles.image}>
                <SafeAreaView style={Styles.container}>
                    {/* Top continer with logo*/}
                    <View style={Styles.topContainer}>
                        {/*<Text* style={Styles.greetText}>Twirgo</Text*/}
                        <Image
                            style={Styles.image_Logo}
                            source={require('../assets/01/01-Images/twirgo_logo_black.png')}
                        ></Image>
                    </View>
                    {/* Middle continer with Inputs*/}
                    <View style={Styles.middleContainer}>
                        <Text style={Styles.normalText}>EMAIL</Text>
                        <TextInput
                            style={Styles.emailInput}
                            textContentType={'emailAddress'}
                            placeholder=' example@example.com'
                            placeholderTextColor="white"
                            style={Styles.inputField}
                            onChangeText={(text) => this.setState({ email: text })} />
                        <Text style={Styles.passText}>PASSWORD</Text>
                        <TextInput
                            style={Styles.passInput}
                            placeholder='Password'
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            textContentType={'password'}
                            style={Styles.inputField}
                            onChangeText={(text) => this.setState({ password: text })} />
                    </View>
                    {/* bottom continer with links*/}
                    <View style={Styles.bottomContainer}>
                        <LinearGradient colors={['#10C578', '#10C578', '#10965B']} start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}>
                            <TouchableOpacity
                                style={Styles.btn}
                                onPress={() => this.signUp()}>
                                <Text style={Styles.btnText}>Sign In</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        {/* Forgot section*/}
                        <View>
                            <Text style={Styles.forgotText}
                                onPress={() => Linking.openURL('http://google.com')}>
                                Forgot your password?
                            </Text>
                        </View>

                    </View>
                    {/*Goto Register section*/}
                    <View style={Styles.registerContiner}>
                        <Text style={Styles.regText1}>
                            Don't have an account?
                            </Text>
                        <Text
                            style={Styles.regText2}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Register
                            </Text>
                    </View>
                    {/*Social Container */}
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
                </SafeAreaView >
            </ImageBackground >
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        backgroundColor: '#eed400',
        width: null,
        height: null
    },
    image_Logo: {
        //flex: 1,
        //backgroundColor: 'red',
        resizeMode: 'contain',
        width: 300,
        height: 110,
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

export default Screen_login;