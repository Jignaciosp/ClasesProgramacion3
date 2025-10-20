import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
    email: '',
    username: '',
    password: '',
    };
}

onSubmit() {
    console.log('Datos ingresados:', this.state);
};


render() {
    return (
    <View style={styles.container}>
        <Text style={styles.texto2}>Registro</Text>

        <TextInput
            style={styles.field}
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
        />

        <TextInput
            style={styles.field}
            keyboardType="default"
            placeholder="Username"
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
        />

        <TextInput
            style={styles.field}
            keyboardType="default"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
        />

        <Pressable style={styles.boton} onPress={()=>this.onSubmit()}>
            <Text>Registrate</Text>
        </Pressable>


        <View style={ styles.textoDato }>
            <Text>Email: {this.state.email}</Text>
            <Text>Username: {this.state.username}</Text>
            <Text>Password: {this.state.password}</Text>
        </View>


        <Pressable onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.texto}>Ir al Login</Text>
        </Pressable>

        <Pressable onPress={() => this.props.navigation.navigate('HomeMenu')}>
            <Text style={styles.texto3}>Entrar en la app</Text>
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
field: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
},
boton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
},
texto: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
},
texto3: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow',
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
},
texto2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
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

export default Register;