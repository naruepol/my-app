import React from 'react'; // Import React
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorld } from './components/HelloWorld';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/Login';
import { Register } from './components/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="login" 
          component={Login} 
          options={{ headerShown: false}}
          />
          <Stack.Screen 
          name="register" 
          component={Register} 
          options={{ title: "ลงทะเบียน"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  </>
}