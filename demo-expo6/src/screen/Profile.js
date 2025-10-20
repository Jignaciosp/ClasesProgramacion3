import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto2}  > Estas en Profile </Text>

            <Pressable onPress={ ()=> navigation.navigate('Login')}>
                <Text style={styles.texto3}>Desloguearse</Text>
            </Pressable>`
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

export default Profile;