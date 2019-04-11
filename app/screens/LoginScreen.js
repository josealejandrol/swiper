import React, { Component } from 'react';
import {StyleSheet,Text,View, Button, ImageBackground,Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window')

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    };
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
                <ImageBackground
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/FondoLogin.jpg'}}
                    style={{width:width, height:height}}
                >
                <Text style={styles.text}>Welcome to HomeScreen</Text>
                <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('Home')}
                />
                </ImageBackground>
           </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
}
)