import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/config';
import DynamicForm from '../components/DynamicForm';
import Post from '../components/Post';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true,
        }
    }

    componentDidMount(){
        db.collection('posts')
        .onSnapshot(docs => {
            let posteos = [];

            docs.forEach(doc => {
                posteos.push({
                    id: doc.id,
                    data: doc.data()
                });
            });

            this.setState({
                posts: posteos,
                loading: false
            });
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.texto2}>Estas en Home</Text>

                <DynamicForm/>

                {
                    this.state.loading ? 
                    <Text>Cargando posteos...</Text> :
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={ item => item.id }
                        renderItem={({item}) =>
                            <Post data={item.data} />
                        }
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
        flex: 1,
    },
    texto2: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20
    }
});

export default Home;
