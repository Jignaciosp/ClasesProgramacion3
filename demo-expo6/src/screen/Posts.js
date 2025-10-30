import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contenido: ""
        }
    }

    crearPost(){
        db.collection('posts').add({
            owner: auth.currentUser.email,
            contenido: this.state.contenido,
            createdAt: Date.now()
        })
        .then(() => {
            console.log('Post creado correctamente');
            this.setState({ contenido: "" });
            this.props.navigation.navigate('Home');
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Crear nuevo post</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="Escribí tu mensaje..."
                    onChangeText={text => this.setState({ contenido: text })}
                    value={this.state.contenido}
                />

                <Pressable 
                    style={styles.btn}
                    onPress={() => this.crearPost()}
                >
                    <Text>Publicar</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    titulo: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10
    },
    input: { 
        borderWidth: 1, 
        marginBottom: 20, 
        padding: 10, 
        minHeight: 60 
    },
    btn: { 
        backgroundColor: 'lightblue', 
        padding: 10, 
        textAlign: 'center' 
    },
});

export default Posts;
