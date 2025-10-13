import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class BotonSaludar extends Component {

    Saludar() {
        console.log('me clickearon');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto2}>HolaMundo</Text>

            <Pressable onPress={() => this.Saludar()} style={styles.boton}>
                    <Text style={styles.texto}> Clickeame </Text>
                </Pressable>
            </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    boton: {
        backgroundColor: '#ccc',
        padding: 4,
        borderRadius: 4,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    texto: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto2: {
        color: 'black',
        textAlign: 'center',
    },
    });

export default BotonSaludar;