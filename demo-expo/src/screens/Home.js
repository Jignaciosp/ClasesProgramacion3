import React from 'react';
import { View } from 'react-native';
import Contador from '../components/Contador.js/Contador';
import BotonSaludar from '../components/BotonSaludar/BotonSaludar';

function Home() {
    return (
        <View>
            <BotonSaludar />
            <Contador />
        </View>
);
}

export default Home;