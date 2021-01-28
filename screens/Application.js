import React, { Component } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigators/DrawerNavigator";

export class HomeScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        );
    }
}

export default HomeScreen
