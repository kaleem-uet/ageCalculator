/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AgeCall from './src/screens/AgeCall';

const App = () => {
  return (
   <AgeCall/>
  );
}

const styles = StyleSheet.create({})

export default App;
