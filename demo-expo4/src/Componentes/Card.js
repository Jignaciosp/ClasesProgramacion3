// src/components/Card.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ product }) => {
    return (
        <View style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.category}>{product.category}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>💲{product.price}</Text>
            </View>
        </View>
);
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    category: {
        color: 'gray',
        fontStyle: 'italic',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: '#444',
    },
    price: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#008000',
    },
});

export default Card;
