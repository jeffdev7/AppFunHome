import React, {useState} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import Rotas from './components/Rotas';

export default function App(){
  return (
    <NavigationContainer>
    <Rotas />
    </NavigationContainer>
  );
}


