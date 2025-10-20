import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

class DynamicForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        comentario: '',
    };
}
onSubmit() {
    console.log('Comentario ingresado:', this.state.comentario);
};


render() {
    return (
    <View style={styles.container}>
        <Text style={styles.texto2}>Escribe un comentario</Text>

        <TextInput
            style={styles.field}
            placeholder="Comentario"
            onChangeText={text => this.setState({ comentario: text })}
            value={this.state.comentario}
        />

        <Pressable style={styles.boton} onPress={()=>this.onSubmit()}>
            <Text>Enviar</Text>
        </Pressable>

        <View style={ styles.textoDato }>
            <Text>Comentario: {this.state.comentario}</Text>
        </View>
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
field: {
    width: '90%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlignVertical: 'top',
},
boton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
},
texto2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
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
});

export default DynamicForm;
