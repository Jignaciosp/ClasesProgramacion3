///Clase 9
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagen from './src/Componentes/Imagen/Imagen';
import ImagenRemota from './src/Componentes/ImagenRemota/ImagenRemota';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Progando imagenes</Text>
      <Imagen/>
      <ImagenRemota/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  titulo:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto', 
  }
});
