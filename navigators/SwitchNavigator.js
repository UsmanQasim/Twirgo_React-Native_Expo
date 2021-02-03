import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import Application from '../screens/Application';
import Login from '../screens/Login';
import SignUp from '../screens/Register';

const Navigator = createSwitchNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Login: {
            screen: Login,
        },
        SignUp: {
            screen: SignUp,
        },
        Application: {
            screen: Application
        }
    },
    {
        initialRouteName: 'Splash'
    }
);

const SwitchNavigator = createAppContainer(Navigator);

export default SwitchNavigator;
