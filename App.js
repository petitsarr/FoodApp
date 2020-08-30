import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './Screen/SearchScreen';
import ResultsShowScreen from './Screen/ResultsShowScreen';

const Stack = createStackNavigator();
const App=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Bussiness Search" component= {SearchScreen}/>
    <Stack.Screen name='Fish' component={ResultsShowScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
}
 );
export default App
