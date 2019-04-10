import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity, ImageBackground, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

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
            <Image source={require("./src/img/splash1.png")} style={{width: 200, height: 200}} />
            <Text style={styles.text}>Bienvenido a YKEKY</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
            </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
            <Image source={require("./src/img/splash2.png")} style={{width: 200, height: 200}} />
            <Text style={styles.text}>YKEKY es una app muy fácil de usar</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
            </TouchableOpacity>
        </View>
        <View style={styles.slide3}>
            <Image source={require("./src/img/splash3.png")} style={{width: 200, height: 200}} />
            <Text style={styles.text}>En la cual podras consultar acerca de tu plan de vida :)</Text>
            <TouchableOpacity style={styles.boton} onPress={() => navigate('Login')}>
                <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
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
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesreactnative/Fondo1.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSKAApxrRyOpndnKbGJsercD%2F06URCBhkNrRwVe7iEzYQdUuctuKY%2BNPEq0GPThkMqpzIujzBYzY5VjXNEKAP44kpsUHyPo83h9mcfoJlbuUviMq4tfl74lEesf5XUI%2Buu3hFu2RAKbqr3aMCdLaYxZ%2BKD0Xn76vU2bI8H68TcQIwpBSDeoHWMLjfgYnCYEa1AFcLjkXSHqGLp0LuOiOI1t6f8YeaWhixP59qH894fZElR%2FsFShwyOes9kpO7ZvhmdjJuQO6hEpBcFcLMVfQrrzxs75iTmes5qGwKgo9ieae3nFwO%2FaGVZrZaZMfXyhvtsJ2nf4gHVv361J74NG%2F0pCw2Gsq2wMIYRAAGgw3NjM3NTIzODE1NDgiDPZG46xqQI3A%2BXoZ7yq4A9mpNHQh7g1HGJvGbsrdyOoq8K7J9Wns4tlgKqH5Qdb9qBQjcUv29WOYamLKq5Wfkej2ID0qfza7LXSfqCLN6J1wPWYLhJ0tWPVW4ZWL3DQl0DD1pjgGIL7I2D8Xo0gme1FZ9OFFkK75X7wD25x7jL4bH2rjwCBL5eA0dX2Jo3JFXFRKeBA3nbd%2Bb5v9R1Hpa4jtPtbfSpiNWxl%2FaKmNiog3grVhkqhU0bl3BDoTXCwASZKAQcFyg7T6KyAqmj3Zxqti4aY5qWrCcaZI46syUMsnopOb11Muot55sRpycjIwa43emYfQcodARVszl%2FlHyC6NTzzq%2FEX3Goio5jYGmbEa%2BQHO7Vv9TGGUB2AC14yj5ZdtOdr727EkQx%2Bn64L5FsKDh1CLY%2Fmnp8YQIT5rKa0J3Rn8MgWoXSAc9scj8Ln5QxZtiUFpV9%2Bey%2Fku6NzEnPi9TT%2BP99hgihWlnbDN40eu7YOFyFLbat0xQVhOyjFQFiXbC31zq4Px6Me953rEs33gPBQRNa3v4zV5ncirv6OXrKalt5XX%2B7IF8exVtxgGj5PuOZBylrs5WAL4XzjMDuOCMATUR%2BAzMKGGs%2BUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190409T161207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3DUZQPRWLSM7O4WV%2F20190409%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=8b44dc42e986e1ba6dab60c13735f4f1471dfa597b4b1e0c062462ab033585d4'}}
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