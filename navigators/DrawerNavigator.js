import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerComponent from '../components/DrawerComponent';

import { HomeStackNavigator, ProfileStackNavigator , ExploreStackNavigator} from "./StackNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#27ab67',
                itemStyle: { marginVertical: 1, marginHorizontal: 5 },
            }}
            drawerContent={(props) => <DrawerComponent {...props} />}
            overlayColor='rgba(0, 0, 0, 0.5)'
            drawerStyle={{ backgroundColor: 'transparent' }}
        >
        <Drawer.Screen name="Explore" component={ExploreStackNavigator} />
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
            

        </Drawer.Navigator >
    );
}

export default DrawerNavigator;