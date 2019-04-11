import {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from '../screens/SplashScreen'
import InfoSlider from '../screens/InfoSliderScreen';
import LoginScreen from '../screens/LoginScreen';

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
  });
  
export default createAppContainer(AppNavigator);