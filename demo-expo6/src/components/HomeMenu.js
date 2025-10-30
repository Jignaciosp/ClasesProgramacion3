import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from '../screen/Home'
import Profile from '../screen/Profile'
import Usuario from '../screen/Usuario';
import Posts from '../screen/Posts'

function HomeMenu() {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Profile" component={ Profile } options = {{tabBarIcon: () => <AntDesign name="profile" size={24} color="black"/>}} />  
                <Tab.Screen name="Home" component={ Home }  options = {{tabBarIcon: () => <AntDesign name="home" size={24} color="black"/>}} />
                <Tab.Screen name="Usuario" component={Usuario} options = {{tabBarIcon: () => <AntDesign name="user" size={24} color="black"/>}} />
                <Tab.Screen name="Posts" component={Posts} options = {{tabBarIcon: () => <AntDesign name="plus" size={24} color="black"/>}} />
            </Tab.Navigator>
    )
    
}

const styles = StyleSheet.create({
    
}) 

export default HomeMenu;