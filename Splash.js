import React, { Component } from 'react'
import {StyleSheet,Text,View,Animated,Image,Dimensions} from 'react-native'

var {height, width} = Dimensions.get('window')
export default class Splash extends Component {
    static navigationOptions = {
        header: null,    
    }
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }
    async componentDidMount() {
        //Add animations here
        Animated.sequence([
            //animations by sequence
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,                  
                duration: 1500,              
            }),
            //Animate Text ?
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second
            })
        ]).start(() => {
            //End of animations
            //How to navigate to Login ? => Use StackNavigation
            this.props.navigation.navigate("Home")
        })
    }
    render() {
        return <View style={styles.container}>
            <Animated.Image source={{uri: 'https://s3.us-east-2.amazonaws.com/imagenesswipereactnative/ykeky.png'}} 
                style={{...styles.logo, opacity: this.state.logoOpacity}}>                
            </Animated.Image>
            <Animated.Text style={{...styles.title, 
                                marginTop:this.state.titleMarginTop}}>
                ¿y qué quieres hacer con tú vida?
            </Animated.Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'    
    },
    logo: {
        flex: 0.2,
        width: 130,
        height: 130,
        borderRadius: 130 / 4,
    },
    title: {        
        color: "black",
        marginTop: 10,    
        textAlign: 'center',
        width: 400,
        fontSize: 21
    }
})