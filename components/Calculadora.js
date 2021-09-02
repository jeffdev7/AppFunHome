import React, {useState} from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1, setVALOR1] = useState('');
  const [valor2, setVALOR2] = useState('');

  function soma(){
    const resultado = parseFloat(valor1) + parseFloat(valor2);
    alert('resultado é ' + resultado);
  }
  function subtrair(){
    const resultado = parseFloat(valor1) - parseFloat(valor2);
    alert('resultado é ' + resultado);
  }
  function dividir(){
    const resultado = parseFloat(valor1) / parseFloat(valor2);
    alert('resultado é ' + resultado);
  }
  function multiplicar(){
    const resultado = parseFloat(valor1) * parseFloat(valor2);
    alert('resultado é ' + resultado);
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Hora de calcular sua diversão</Text>
      <TextInput style={styles.input} value={valor1} 
      keyboardType='numeric' 
      onChangeText={(valor1) => setVALOR1(valor1)} 
      /> 

      <TextInput style={styles.input} value={valor2} 
      keyboardType='numeric' 
      onChangeText={(valor2) => setVALOR2(valor2)} 
      />

      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.txt1}> Somar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2} onPress={subtrair}>
        <Text style={styles.txt2}> Subtrair </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn3} onPress={dividir}>
        <Text style={styles.txt3}> Dividir </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn4} onPress={multiplicar}>
        <Text style={styles.txt4}> multiplicar </Text>
      </TouchableOpacity>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0E5694',
    padding: 8,
    
  },
title: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#CEE6FA'
  },
  input:{
    backgroundColor:'#CEE6FA',
    marginLeft:35,
    marginBottom:15,
    padding:10,
    borderRadius:15,
    fontSize:20,
    paddingHorizontal:30,
    width:255,
     //width:320 fits better on my phone
    textAlign:'center',
  
  },
  btn:{
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#126DBC',
    margin:90,
    padding:20,
    borderRadius:50,
     marginVertical:7,
     alignSelf:'center',
    paddingHorizontal:45,
    width:200,
    textAlign:'center',
    
  },
  btn2:{
     justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#126DBC',
    margin:90,
    padding:20,
    marginVertical:0,
    borderRadius:50,
    alignSelf:'center',
    width:200,
     paddingHorizontal:40
  },
   btn3:{
     justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#126DBC',
    margin:90,
    padding:20,
    marginVertical:7,
    borderRadius:50,
    fontWeight:'bold',
    alignSelf:'center',
    width:200,
     paddingHorizontal:40
  },
   btn4:{
     justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#126DBC',
    margin:90,
    padding:20,
    marginVertical:0,
    borderRadius:50,
    alignSelf:'center',
    width:200,
    paddingHorizontal:30
  },
  txt1:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
   txt2:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  txt3:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
   txt4:{
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },


});
