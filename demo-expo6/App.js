import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home'
import Login from './src/screen/Login'
import Profile from './src/screen/Profile'
import Register from './src/screen/Register'
import HomeMenu from './src/components/HomeMenu';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={ Login } options = {{tabBarIcon: () => <AntDesign name="login" size={24} color="black"/>}} />
          <Stack.Screen name="Register" component={ Register } options = {{tabBarIcon: () => <AntDesign name="registered" size={24} color="black"/>}} />
          <Stack.Screen name="HomeMenu" component={ HomeMenu } options = {{tabBarIcon: () => <AntDesign name="home-work" size={24} color="black"/>}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
