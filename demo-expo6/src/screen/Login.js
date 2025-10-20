import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
}

onSubmit() {
    console.log('Datos de login:', this.state);
};

render() {
    return (
    <View style={styles.container}>
        
        <Text style={styles.texto2}>Login</Text>

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
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
        />

        <Pressable style={styles.boton} onPress={()=>this.onSubmit()}>
            <Text>Login</Text>
        </Pressable>

        <View style={ styles.textoDato }>
            <Text>Email: {this.state.email}</Text>
            <Text>Password: {this.state.password}</Text>
        </View>

        <Pressable onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.texto}>Ir al registro</Text>
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

export default Login;
