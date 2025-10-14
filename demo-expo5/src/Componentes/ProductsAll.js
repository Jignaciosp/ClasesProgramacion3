import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import Card from './Card'

class ProductsAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
        };
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                characters: data.results,
                loading: false,
            });
        })
        .catch(error => {
            console.log('El error fue: ' + error);
            this.setState({ loading: false });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#00ff00" />
                    <Text>Cargando personajes...</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Personajes de Rick and Morty</Text>
                <FlatList
                    data={this.state.characters}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Card character={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    }
});

export default ProductsAll;
