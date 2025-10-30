import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Post(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.owner}>{props.data.owner}</Text>
            <Text style={styles.text}>{props.data.contenido}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    owner: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    text: {
        fontSize: 16
    }
});

export default Post;
