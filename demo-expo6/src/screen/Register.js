import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';

function Register({navigation}) {
    return (
    <View style={styles.container}>
        <Text style={styles.texto2}>Registro</Text>
        <Text >Estas en la pantalla donde debe ir el formulario de registro. Navegacion cruzada a Login:</Text>

        <Pressable onPress={ ()=> navigation.navigate('Login')}>
            <Text style={styles.texto}> ir al Login </Text>
        </Pressable>
        <Pressable onPress={ ()=> navigation.navigate('HomeMenu')}>
            <Text style={styles.texto3}> Entrar en la app </Text>
        </Pressable>

    </View>
    )
    
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
        backgroundColor: "lightblue",
        borderRadius: "25px",
        marginTop: "10px",
        marginBottom: "10px"
    },
    texto3: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "yellow",
        borderRadius: "25px",
        marginTop: "10px",
        marginBottom: "10px"
    },
    texto2: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: "40px",
        marginBottom: "10px"
    },
}) 

export default Register;