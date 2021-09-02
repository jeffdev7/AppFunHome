import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

export default function Filmes(){
   const [size, setSize] = useState(20)
  const [viewHeight, setViewHeight] = useState(0)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textHeight > viewHeight) {
      setSize(size - 1) 
    }
  }, [textHeight])

  return(
    <View style={styles.container}> 
      <Text style={styles.title}> Filmes e seus snacks</Text>
 
  <FlatList 
    data={DadosFilmes}
    keyExtractor={(item) =>{item.uid.toString()}}
    renderItem ={({item}) =>

      <View style={styles.box}>

      <View>
        <Image resizeMode={'contain'} style={styles.img} source={{uri:item.img}} />
      </View>
        <View>
            <Text style={styles.filme}> {item.filme}</Text>
            <Text> {item.ano}</Text>
            
            <View style={{
          margin: 45,
          width: 250,
          height: 10
        }}
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setViewHeight(height)
        }}
      >
            <Text  style={{
            fontSize: 15,
          }}
          onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            setTextHeight(height)
          }}> {item.snack} </Text>
          </View>
        </View>

    </View>
  }
    />
</View>
);
}

const DadosFilmes = [
  {
    uid: 1,
    filme: 'Harry Potter',
    ano: '2001',
    snack: 'Doritos, pizza.',
    img:
      'https://static.wikia.nocookie.net/harrypotter/images/f/fb/PS_poster.jpg/revision/latest?cb=20180318153750'
  },
  {
    uid: 2,
    filme: 'Back to the future',
    ano: '1985',
    snack: 'Pizza.',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg',
  },
  {
    uid: 3,
    filme: 'Homem aranha',
    ano: '2002',
    snack: 'Pizza e suco.',
    img: 'https://resizing.flixster.com/Ya4qPmsGhm8C8oeUHwEWohkTc2U=/206x305/v2/https://flxt.tmsimg.com/assets/p29821_p_v13_ai.jpg',
  },
  {
    uid: 4,
    filme: 'Toy Story',
    ano: '1995',
    snack: 'Layers.',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg',
  },
  {
    uid: 5,
    filme: 'The dark knight',
    ano: '2008',
    snack: 'Vinho.',
    img: 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg',
  },
  {
    uid: 6,
    filme: 'The hunger games',
    ano: '2012',
    snack: 'Layers.',
    img: 'https://bakuninmatata.files.wordpress.com/2012/03/hungergamesposter.jpg',
  },
{
    uid: 7,
    filme: 'It',
    ano: '2017',
    snack: 'Layers e/ doritos.',
    img: 'https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginTop:10,
    backgroundColor: '#0E5694',
    marginRight:0,
   
  },
  img:{
    width:100,
    height:150
  },
  filme:{
    fontWeight:'bold'

  },
  box:{
    flexDirection:'row',
    width:390,
    height:150,
    marginVertical:10,
    backgroundColor:'#126DBC',
    borderRadius:5,
    marginHorizontal:5
  },
   title:{
    fontWeight:"bold",
    textAlign:'center',
    fontSize:20,
    marginVertical:20,
    marginTop:30
   
  },
  snack:{
    textAlign:'center',
    marginVertical:20,
    marginTop:30
  },
  ano:{
    marginBottom:20,
  }
 
});