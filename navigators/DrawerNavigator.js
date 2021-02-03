import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Foundation, Ionicons, FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';

import DrawerComponent from '../components/DrawerComponent';

import { HomeStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#27ab67',
                itemStyle: { marginVertical: 1, marginLeft: 25 },
            }}
            drawerContent={(props) => <DrawerComponent {...props} />}
            overlayColor='rgba(0, 0, 0, 0.5)'
            drawerStyle={{ backgroundColor: 'transparent' }}
        >
            <Drawer.Screen name="Home" component={HomeStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <Ionicons name="md-home" size={size} color={'white'} />
                ),
            }} />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator } options={{
                drawerIcon: ({ focused, size }) => (
                    <Ionicons name="md-person" size={size} color={'white'} />
                ),
            }} />
            <Drawer.Screen name="My Bookings" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <Ionicons name="folder" size={size} color={'white'} />
                ),
            }} />
            <Drawer.Screen name="FeedBack" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <Foundation name="page-csv" size={size} color="white" />
                ),
            }} />
            <Drawer.Screen name="Contact Us" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <FontAwesome5 name="envelope" size={size} color="white" />
                ),
            }} />
            <Drawer.Screen name="Rate Us" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <Feather name="star" size={size} color="white" />
                ),
            }} />
            <Drawer.Screen name="Privacy Policy" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <Feather name="shield" size={size} color="white" />
                ),
            }} />
            <Drawer.Screen name="Log Out" component={ProfileStackNavigator} options={{
                drawerIcon: ({ focused, size }) => (
                    <FontAwesome name="sign-out" size={size} color="white" />
                ),
            }} />


        </Drawer.Navigator >
    );
}

export default DrawerNavigator;