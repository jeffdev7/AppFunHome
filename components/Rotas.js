import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationFilmeiner} from '@react-navigation/native';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Home from './Home';
import Filme from './Filme';
import Livros from './Livros';
import Calculadora from './Calculadora';

const Tab = createBottomTabNavigator();

export default function Rotas(){
  return(
    <Tab.Navigator 
    initialRouteName="Home"
    tabBarOptions = {{activeTinColor:'#88aaee'}}
    >
      <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel:"Home",
            tabBarIcon:({color, size}) =>( 
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            ), 

          }}

      
      />

      <Tab.Screen 
          name="Livros"
          component={Livros}
          options={{
            title:"Livro",
            tabBarLabel:"Livro",
            tabBarIcon:({color, size}) =>( 
              <MaterialCommunityIcons name="book" color={color} size={size}/>
            ), 

          }}

      
      />

      <Tab.Screen 
          name="Filme"
          component={Filme}
          options={{
            tabBarLabel:"Filme",
            tabBarIcon:({color, size}) =>( 
              <MaterialCommunityIcons name="movie-search" color={color} size={size}/>
            ), 

          }}

      
      />

      <Tab.Screen 
          name="Calculadora"
          component={Calculadora}
          options={{
            tabBarLabel:"Calculadora",
            tabBarIcon:({color, size}) =>( 
              <MaterialCommunityIcons name="calculator-variant" color={color} size={size}/>
            ), 

          }}

      
      />

    </Tab.Navigator>
  );
}