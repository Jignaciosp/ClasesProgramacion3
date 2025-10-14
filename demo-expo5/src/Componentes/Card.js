import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({character }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{character.name}</Text>
                <Text>Species: {character.species}</Text>
                <Text>Gender: {character.gender}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginVertical: 8,
        padding: 10,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export default Card;
