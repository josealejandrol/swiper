import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity, ImageBackground, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './Splash'

import Swiper from 'react-native-swiper';

class InfoSlider extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };
   render() {
    const {navigate} = this.props.navigation;
       return (
        <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} autoplay={true} 
        autoplayTimeout={2.5} autoplayDirection={true} dotColor='gray' activeDotColor='white'
        paginationStyle={{top:400}}>
        <View style={styles.slide1}>
            <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/splash1.png'}} style={{width: 200, height: 200}} />
            <Text style={styles.text}>Bienvenido a YKEKY</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/flecha-derecha.png'}} style={styles.flechaDerecha} />
            </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
            <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/splash2.png'}} style={{width: 200, height: 200}} />
            <Text style={styles.text}>YKEKY es una app muy fácil de usar</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/flecha-derecha.png'}} style={styles.flechaDerecha} />
            </TouchableOpacity>
        </View>
        <View style={styles.slide3}>
            <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/splash3.png'}} style={{width: 200, height: 200}} />
            <Text style={styles.text}>En la cual podras consultar acerca de tu plan de vida :)</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/flecha-derecha.png'}} style={styles.flechaDerecha} />
            </TouchableOpacity>
        </View>
        </Swiper>
       )
   } 
}

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
   render() {
    const {navigate} = this.props.navigation;
       return (
           <View style={styles.container}>
                <ImageBackground
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/Fondo1.jpg'}}
                    style={{width:360, height:600}}
                >
                <Text style={styles.text}>Welcome to HomeScreen</Text>
                <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('Home')}
                />
                </ImageBackground>
           </View>
       )
   } 
}

const AppNavigator = createStackNavigator({
    Splash: {
      screen: Splash
    },
    Home: {
      screen: InfoSlider
    },
    Login: {
        screen: LoginScreen
    },
  });
  
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  wrapper: {
    
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AF00B5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#195EFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3838',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  boton: {
    borderRadius: 50,
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#0DD5FF',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
  },
  flechaDerecha: {
    width: 30,
    height: 30,
  }
})