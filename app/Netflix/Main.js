import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from './List';

export default class Main extends Component {

    render() {

        return (
            <View style={StyleSheet.container}>
                <List/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})