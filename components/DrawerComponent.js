import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const DrawerComponent = (props) => {

    return (
        <SafeAreaView style={Styles.container}>
            {/* Stuff that comes before the links */}
            <Image
                source={require('../assets/01/01-Images/JOHN_DOE.jpg')}
                style={Styles.sideMenuProfileIcon}
            />
            <View style={Styles.profileDetails}>
                <Text style={Styles.profileName}>John Smith</Text>
                <Text style={Styles.profileEmail}>johny@mail.com</Text>
            </View>

            {/* All the links reside here */}
            <DrawerContentScrollView {...props}>

                {/* DO NOT CHANGE THIS FOLLOWING LINE! */}
                <DrawerItemList {...props} />
                {/* DO NOT CHANGE THIS ABOVE LINE! */}


                {/*
                    Add items that are only for show here
                    Or the Links to any webpages
                */}
                <DrawerItem label="Logout" />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcd00',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingLeft: 5
    },
    sideMenuProfileIcon: {
        resizeMode: 'cover',
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 50,
    },
    profileDetails: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    profileEmail: {
        fontSize: 12
    }
});

export default DrawerComponent;
