import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,Button} from 'react-native';

import Swiper from 'react-native-swiper';

export default class InfoSliderScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null
    };
  render(){
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
            <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('Home')}
            />
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
}
)