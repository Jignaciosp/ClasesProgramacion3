import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DynamicForm from '../components/DynamicForm'

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto2} > Estas en Home </Text>
            <DynamicForm/>
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
    textoDato:{
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
    }
}) 

export default Home;