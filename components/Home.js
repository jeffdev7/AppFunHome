import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const image = { uri: "https://images.pexels.com/photos/1117485/pexels-photo-1117485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" };


export default function Home(){
  return(
    
    <View style={estilo.container}> 
    <ImageBackground source={image} resizeMode="cover" style={estilo.image} >
      <Text style={estilo.titulo}> Your holidays! </Text>
    </ImageBackground>
    <Text style={estilo.subtitulo}> FUN AT HOME! </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#0E5694'
  },
  titulo:{
    fontSize:20,
    color:'#FFFFFF',
    fontWeight:'bolder',
    alignItems:'center',
    textAlign:'center'
  },
  image:{
    flex: 1,
    width:450,
    height:400
    
  },
  subtitulo:{
    height:110,
     fontSize:20,
    color:'#FFFFFF',
    fontWeight:'bolder',
  }

})