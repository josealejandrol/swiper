import {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from '../screens/SplashScreen'
import InfoSlider from '../screens/InfoSliderScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
    Splash: {
      screen: Splash
    },
    Swiper: {
      screen: InfoSlider
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    },
    Home: {
      screen: HomeScreen
    },
  });
  
export default createAppContainer(AppNavigator);