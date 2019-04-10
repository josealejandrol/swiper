import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

export default class App extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} autoplay={false} 
              autoplayTimeout={2.5} autoplayDirection={true} dotColor='gray' activeDotColor='white'>
        <View style={styles.slide1}>
          <Image source={require("./src/img/splash1.png")} style={{width: 200, height: 200}} />
          <Text style={styles.text}>Bienvenido a YKEKY</Text>
          <TouchableOpacity style={styles.boton}>
            <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
          </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
          <Image source={require("./src/img/splash2.png")} style={{width: 200, height: 200}} />
          <Text style={styles.text}>YKEKY es una app muy fácil de usar</Text>
          <TouchableOpacity style={styles.boton}>
            <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
          </TouchableOpacity>
        </View>
        <View style={styles.slide3}>
          <Image source={require("./src/img/splash3.png")} style={{width: 200, height: 200}} />
          <Text style={styles.text}>En la cual podras consultar acerca de tu plan de vida :)</Text>
          <TouchableOpacity style={styles.boton}>
            <Image source={require("./src/img/flecha-derecha.png")} style={styles.flechaDerecha} />
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

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