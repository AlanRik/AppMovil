import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import PrincipalScreen from "../Screens/PrincipalScreen";

const AppNavigation = createStackNavigator({

    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },

    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Principal:{
        screen: PrincipalScreen,
        navigationOptions:{
            headerShown: false,
        }
    },

})

export default createAppContainer(AppNavigation)