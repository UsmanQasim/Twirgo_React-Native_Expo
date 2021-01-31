import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Filters from '../screens/Filters';
import BookingScreen from '../screens/BookingScreen';
// import Maps from '../screens/Maps';
import Profile from '../screens/Profile';
import Explore from '../screens/Explore';
import Result from '../screens/Result';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Result" component={Result} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            {/* <Stack.Screen name="Maps" component={Maps} /> */}
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

export { HomeStackNavigator, ProfileStackNavigator, };