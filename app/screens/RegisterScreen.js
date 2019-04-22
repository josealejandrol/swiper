import React, { Component } from 'react';
import {StyleSheet,Text,View, Button, ImageBackground,Dimensions,TextInput, Image,CheckBox} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window')

export default class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        header: null
    };

    state = {
        trueCheckBoxIsOn: true,
        falseCheckBoxIsOn: false,
    }

  render(){
    const {navigate} = this.props.navigation;
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
        <View>
                <ImageBackground
                    source={{uri: 'ahttps://s3.us-east-2.amazonaws.com/imagenesswipereactnative/FondoLogin.jpg'}}
                    style={{width:width, height:height}}
                >
                <Text style={styles.text}>Register</Text>
                <View style={styles.imageContainer}>
                  <Image 
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/ykeky.png'}}
                    style={styles.image}
                    resizeMode='stretch'
                  />  
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                    style={{height: 40, width: '80%', borderBottomColor: '#9e9e9e', borderBottomWidth: 2, marginBottom:20}}
                    placeholder="Ingresar nombre"
                  />
                <TextInput
                    style={{height: 40, width: '80%', borderBottomColor: '#9e9e9e', borderBottomWidth: 2, marginBottom:20}}
                    placeholder="Ingresar correo"
                  />
                  <TextInput
                    style={{height: 40, width: '80%', borderBottomColor: '#9e9e9e', borderBottomWidth: 2, marginBottom:20 }}
                    placeholder="Ingresar contraseña"
                    secureTextEntry={true}
                  />
                  <TextInput
                    style={{height: 40, width: '80%', borderBottomColor: '#9e9e9e', borderBottomWidth: 2, marginBottom:10 }}
                    placeholder="Ingresar nuevamente contraseña"
                    secureTextEntry={true}
                  />
                  <View style={{flexDirection: 'row', left:-38}}>
                    <CheckBox
                        onValueChange={value => this.setState({ falseCheckBoxIsOn: value})}
                        style={styles.checkbox}
                        value={this.state.falseCheckBoxIsOn}
                    />
                    <Text style={{marginTop: 5}}>Aceptar términos y condiciones</Text>
                 </View>
                  <TouchableOpacity style={{ width: 300,
                    height: 45,
                    borderRadius: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#9e9e9e'}}
                    onPress={() => navigate('Login')}
                  >
                  <Text style={{fontSize: 18,color: 'white'}}>Register</Text>
                  </TouchableOpacity>
                  <Divider style={styles.divider}></Divider>
                  <FontAwesome.Button
                    style={styles.facebookButton}
                    name="facebook-f"
                    onPress={alert}
                    backgroundColor='blue'
                  >
                  <Text style={styles.loginButtonTitle}>Registrarse en Facebook</Text>
                  </FontAwesome.Button>
                  <FontAwesome.Button
                    style={styles.facebookButton}
                    name="google"
                    onPress={alert}
                    backgroundColor='red'
                  >
                  <Text style={styles.loginButtonTitle}>Registrarse eh Google</Text>
                  </FontAwesome.Button>
                </View>  
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
      image: {
        width: 200,
        height: 100,
        position: 'relative',
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      checkbox: {
        marginBottom: 10,
      },
      divider: {
        flexDirection: 'row',
        height: 40,
        width: 298,
        justifyContent: 'center',
        alignItems: 'center'
      },
      facebookButton: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
      },
      loginButtonTitle: {
        fontSize: 18,
        color: 'white'
      },
      line: {
        height: 1,
        flex: 2,
        backgroundColor: '#9e9e9e'
      },
      textOR: {
        flex: 1,
        textAlign: 'center'
      },
}
)