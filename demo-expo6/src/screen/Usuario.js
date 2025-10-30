import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../firebase/config';

class Usuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount(){
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })
                });
                this.setState({
                    users: users,
                    loading: false
                });
            }
        )
    }

    render(){
        return (
            <View>
                <Text>Lista de Usuarios</Text>

                {
                    this.state.loading ?
                    <Text>Cargando...</Text> :
                    <FlatList
                        data={this.state.users}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            <Text>{item.data.email}</Text>
                        }
                    />
                }
            </View>
        )
    }
}

export default Usuario;
