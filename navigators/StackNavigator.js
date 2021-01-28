import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Filters from '../screens/Filters';
import BookingScreen from '../screens/BookingScreen';

import Profile from '../screens/Profile';
import Explore from '../screens/Explore';
const Stack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
        </Stack.Navigator>
    );
}
const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const ExploreStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Explore">
            <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
    )
}

export { HomeStackNavigator, ProfileStackNavigator, ExploreStackNavigator };