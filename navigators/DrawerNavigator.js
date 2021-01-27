import * as React from 'react';
import { createDrawerNavigator, } from '@react-navigation/drawer'; 

import MainScreen from '../screens/MainScreen';
import AnotherScreen from '../screens/AnotherScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main Screen" component={MainScreen} />
            <Drawer.Screen name="Some Other Screen" component={AnotherScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;