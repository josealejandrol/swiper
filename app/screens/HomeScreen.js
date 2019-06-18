import React,{Component} from 'react';
import {View, Text} from 'react-native';
import Main from '../Netflix/Main';
import List from '../Netflix/List';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
        headerStyle: {
            backgroundColor: '#041F72',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View>
                <List/>
            </View>
        );
    }
}