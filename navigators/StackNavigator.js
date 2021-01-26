import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from '../screens/Screen1';
// import Void from '../screens/Void';
import Panel1 from '../screens/Panel1';
import Screen_login from '../screens/Screen_login';
import Map from '../screens/Map';
import Test from '../screens/test';
import Filters from '../screens/Filters';
import BookingScreen from '../screens/BookingScreen';
//import FeedbackScreen from '../screens/FeedbackScreen';

const Navigator = createStackNavigator({
    // Void: {
    //     screen: Void
    // },
    //
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
    Test: {
        screen: Test    
    },
    Filters: {
        screen: Filters
    },
    BookingScreen: {
        screen: BookingScreen
    }
    //
    // FeedbackScreen: {
    //     screen: FeedbackScreen
    // }
}, {
    initialRouteName: 'BookingScreen'
});

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;