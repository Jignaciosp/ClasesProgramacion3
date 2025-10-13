import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    incrementar() {
        this.setState({ value: this.state.value + 1 });
    }    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}> Cantidad de clicks: {this.state.value}</Text>
                <Pressable onPress={() => this.incrementar()} style={styles.boton}>
                    <Text style={styles.textoBoton}> Click aqui para contar </Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    texto: {
        color: 'black',
    },
    boton: {
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        padding: 7,
        borderRadius: 4,
        marginBottom: 10,
    },
    textoBoton: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


export default Contador;