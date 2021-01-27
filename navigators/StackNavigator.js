import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from '../screens/Screen1';
//import sabs from '../screens/GHALTI';
import Panel1 from '../screens/Panel1';
import Screen_login from '../screens/Screen_login';
import Map from '../screens/Map';
//import Test from '../screens/test';
import Filters from '../screens/Filters';
import BookingScreen from '../screens/BookingScreen';
import { SliderBase } from 'react-native';
//import FeedbackScreen from '../screens/FeedbackScreen';

const Navigator = createStackNavigator({
    SignUp: {
        screen: Screen1
    },
    SignIn: {
        screen: Screen_login
    },
    Panel1: {
        screen: Panel1
    },
    Map: {
        screen: Map
    },
    // Test: {
    //     screen: sabs    
    // },
    Filters: {
        screen: Filters
    },
    BookingScreen: {
        screen: BookingScreen
    },
    //
    // FeedbackScreen: {
    //     screen: FeedbackScreen
    // }
}, {
    //initialRouteName: 'SignUp'
    //initialRouteName: 'SignIn',
    //initialRouteName: 'Test',
    //initialRouteName: 'Panel1',
    //initialRouteName: 'Map',
    initialRouteName: 'Filters',
    //initialRouteName: 'BookingScreen'
});

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;