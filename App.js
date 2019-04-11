import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

import AppStackNavigator from './app/navigator/AppStackNavigator'

export default class App extends Component {
  render(){
    return (
      <AppStackNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    
  },
}
)