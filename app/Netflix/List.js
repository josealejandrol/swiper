import React,{Component} from 'react';
import {View, Text, StyleSheet,FlatList,Image} from 'react-native';

const shows_main = [
    {
        key: 101,
        name: 'slider1',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/001-SLIDE-YKEKY-2019.jpg',
    },
    {
        key: 102,
        name: 'slider2',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/002-SLIDE-YKEKY-2019.jpg',
    },
    {
        key: 103,
        name: 'slider3',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/003-SLIDE-YKEKY-2019.jpg',
    },
    {
        key: 104,
        name: 'slider4',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/004-SLIDE-YKEKY-2019.jpg',
    },
    {
        key: 105,
        name: 'slider5',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/005-SLIDE-YKEKY-2019.jpg',
    },
]

const shows_first = [
    {
        key: 1,
        name:'Suits',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/lifeplan.png'
    },
    {
        key: 2,
        name:'Modern Family',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/becas.jpg'
    },
    {
        key: 3,
        name:'The Flash',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/sep.jpg'
    },
    {
        key: 4,
        name:'Supergirl',
        image: 'https://maestrospormexico.com/wp-content/uploads/2019/01/jovenes.jpg'
    },
]

const shows_second = [
    {
        key: 7,
        name:'Colony',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/cursos.png'
    },
    {
        key: 8,
        name:'The Walking Dead',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/diplomados.jpg'
    },
    {
        key: 9,
        name:'Taken',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/talleres.png'
    },
    {
        key: 10,
        name:'This is us',
        image: 'https://s3.us-east-2.amazonaws.com/ykeky/testvocacional.jpg'
    },
]


export default class List extends Component {

    _renderItemMain(item) {
        return(
            <Image 
                style={styles.imageMain}
                source={{uri: item.image}}
            />
        )
    }

    _renderItem(item) {
        return(
            <Image 
                style={styles.image}
                source={{uri: item.image}}
            />
        )
    }
    
    render() {
        return (
            <View>
                <View>
                    <FlatList
                    horizontal={true}
                        renderItem={({item}) => this._renderItemMain(item)}
                        data={shows_main}
                    />
                </View>
                <View>
                    <Text>Herramientas</Text>
                    <FlatList
                    horizontal={true}
                        renderItem={({item}) => this._renderItem(item)}
                        data={shows_first}
                    />
                </View>
                <View>
                    <Text>Más Herramientas</Text>
                    <FlatList
                    horizontal={true}
                        renderItem={({item}) => this._renderItem(item)}
                        data={shows_second}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: 120,
        height: 180,
        resizeMode: 'stretch',
    },
    imageMain: {
        width: 300,
        height: 220,
        resizeMode: 'stretch',
    }
});