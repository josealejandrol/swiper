import React, { Component } from 'react';
import {StyleSheet,Text,View, Button, ImageBackground,Dimensions,TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {LoginButton,AccessToken,LoginManager} from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

var {height, width} = Dimensions.get('window')

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    };

    async loginFacebook() {
      try {
        let result = await LoginManager.logInWithReadPermissions(["public_profile","email"])
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: ' + result.grantedPermissions.toString());
          console.warn(result.grantedPermissions.toString());
        }
      } catch(error) {
        alert('Login failed with error: '+error)
      }
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
                    source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/FondoLogin.jpg'}}
                    style={{width:width, height:height}}
                >
                <Text style={styles.text}>Login</Text>
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
                    placeholder="Ingresar correo"
                  />
                  <TextInput
                    style={{height: 40, width: '80%', borderBottomColor: '#9e9e9e', borderBottomWidth: 2, marginBottom:0 }}
                    placeholder="Ingresar contraseña"
                    secureTextEntry={true}
                  />
                   <TouchableOpacity style={{ color: 'black', fontWeight: 'bold', marginBottom:20}}>
                    <Text style={{fontSize: 15}}>                                          Olvidaste tú contraseña?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 300,
                    height: 45,
                    borderRadius: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#9e9e9e'}}
                  >
                  <Text style={{fontSize: 18,color: 'white'}}>Login</Text>
                  </TouchableOpacity>
                  <Divider style={styles.divider}></Divider>
                  <FontAwesome.Button
                    style={styles.facebookButton}
                    name="facebook-f"
                    onPress={this.loginFacebook}
                    backgroundColor='blue'
                  >
                  <Text style={styles.loginButtonTitle}>Login con Facebook</Text>
                  </FontAwesome.Button>
                  <FontAwesome.Button
                    style={styles.facebookButton}
                    name="google"
                    onPress={alert}
                    backgroundColor='red'
                  >
                  <Text style={styles.loginButtonTitle}>Login con Google</Text>
                  </FontAwesome.Button>
                  <LoginButton
                  style={styles.facebookButtonOriginal}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={alert/**this._signIn*/}
            //disabled={this.state.isSigninInProgress} 
          />
                  <TouchableOpacity style={{marginTop: 108, color: 'black', fontWeight: 'bold'}} onPress={() => navigate('Register')}>
                    <Text style={{fontSize: 20}}>Crear Cuenta Nueva</Text>
                  </TouchableOpacity>
                </View>  
                {/* <Button
                    title="Go to FirstScreen"
                    onPress={() => navigate('Home')}
                /> */}
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
        //backgroundColor: 'red',
        flexDirection: 'row'
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
      facebookButtonOriginal: {
        width: 300,
        height: 45,
        borderRadius: 6,
        justifyContent: 'center',
      },
}
)