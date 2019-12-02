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
            <Image style={styles.productImg} source={{uri:"https://www.q-tickets.com/movie_images/THE_GOOD_LIAR_(ENGLISH)_banner.jpg?type=3"}}/>
            <Text style={styles.name}>The Good Liar</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                THE GOOD LIAR merupakan film drama yang disutradarai oleh Bill Condon. Penipu yang berpengalaman, 
                Roy Courtnay, telah mengincar target terbarunya: Betty McLeish yang baru saja menjanda. Tapi kali 
                ini, apa yang seharusnya menjadi tipuan sederhana berubah menjadi permainan yang rumit dengan 
                mempertaruhkan sesuatu yang lebih besar.
            </Text>
            <Text style={styles.description}>
               Dibintangi oleh Helen Mirren, Ian McKellen, Russell Tovey, Johannes Haukur Johannesson.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=JL6qUca-4ow')}}>
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