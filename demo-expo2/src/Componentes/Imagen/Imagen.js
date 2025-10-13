import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Imagen() {
    return <Image style={styles.image} 
    source={require('../../../assets/img/zonaMedia.jpeg')}
    resizeMode='contain'/>
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    },
}) 

export default Imagen;