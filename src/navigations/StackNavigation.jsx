import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import  {AgeCall} from '../screens/AgeCall';


const StackNavigation = () => {
    return (
        
        <Stack.Navigator>
          <Stack.Screen name="agecal" component={AgeCall} />
        </Stack.Navigator>

    );
}


export default StackNavigation;
