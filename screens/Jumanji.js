import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

export default class ProductDetail extends Component {

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
            <Image style={styles.productImg} source={{uri:"http://www.sonypictures.in/Assets/sonypictures.in/india-sept-2019/Carousel_jumanji.jpg"}}/>
            <Text style={styles.name}>Jumanji: The Next Level</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
              Jumanji: The Next Level merupakan film petualangan komedi yang disutradarai oleh Jake Kasdan. Dwayne 
              Johnson, Karen Gillan, Jack Black dan Kevin Hart kembali ke Jumanji, keempatnya harus menyelamatkan 
              salah satu teman mereka. Namun permainan telah berubah. Para pemain kini harus lebih berani melintasi 
              rintangan ekstrem dan kembali dengan selamat dari permainan paling berbahaya di dunia.
            </Text>
            <Text style={styles.description}>
              Dibintangi oleh Dwayne Johnson, Karen Gillan, Jack Black, Kevin Hart, Nick Jonas, Danny DeVito, Danny 
              Glover, Madison Iseman, Alex Wolff, Colin Hanks, Dania Ramirez, Awkwafina
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=rBxcF-r9Ibs')}}>
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
    backgroundColor: "#0f0f0f",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
});