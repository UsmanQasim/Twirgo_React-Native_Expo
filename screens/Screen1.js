import React, { Component } from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Screen1 extends Component {
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
            <ImageBackground style={Styles.image}>
                <SafeAreaView style={Styles.container}>
                    <View style={Styles.topContainer}>
                        {/*<Text style={Styles.greetText}>Twirgo</Text>*/}
                        <Image
                            style={Styles.image_Logo}
                            source={require('../assets/01/01-Images/twirgo_logo_black.png')}
                        ></Image>
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
                                onPress={() => this.signUp()}>
                                <Text style={Styles.btnText}>Register</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </SafeAreaView>
            </ImageBackground>
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
        flex: 2,
        justifyContent: 'center',
        marginBottom: 25,
    },
    bottomContainer: {
        flex: 1,
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

export default Screen1;