import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  FlatList,
  Button,

} from 'react-native';

export default class ProductDetail extends Component {

  static navigationOptions = {
    header: null
};

  constructor(props) {
    super(props);
  }

  cardClickEventListener = (screenName) => {
    this.props.navigation.navigate(screenName)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://images.perthnow.com.au/publication/C-558635/6d230d36e110af6b661e0640f31def6bafdb96d6-16x9-x0y0w1920h1080.jpg"}}/>
            <Text style={styles.name}>Frozen 2</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                Frozen 2 merupakan film animasi yang disutradarai oleh Chris Buck, Jennifer Lee. Anna, Elsa,
                Kristoff, Olaf dan Sven pergi meninggalkan Arendelle untuk melakukan perjalanan ke sebuah 
                tempat asing dan penuh keajaiban. Mereka berangkat untuk menemukan asal usul kekuatan Elsa 
                dan juga untuk menyelamatkan kerajaan mereka.
            </Text>
            <Text style={styles.description}>
                Dibintangi Kristen Bell, Idina Menzel, Jonathan Groff, Jason Ritter, Evan Rachel Wood, Sterling K. 
                Brown, Rachel Matthews, Josh Gad, Martha Plimpton, Santino Fontana, Alfred Molina.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {this.cardClickEventListener('FrozenTrailer')}}>
              <Text style={styles.shareButtonText}>View Trailer</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:400,
    height:250,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'justify',
    marginTop:10,
    color:"#696969",
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#0f0f0f"
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
});