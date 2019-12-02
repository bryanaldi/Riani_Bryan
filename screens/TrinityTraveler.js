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
            <Image style={styles.productImg} source={{uri:"https://cdn.idntimes.com/content-images/post/20191127/img-20191127-154000-3aa48ac20fcc0bcc1d9a6ff2702b72e9_600x400.jpg"}}/>
            <Text style={styles.name}>Trinity Traveler</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                Trinity Traveler merupakan film drama yang disutradarai Rizal Mantovani. Trinity menerbitkan buku 
                pertamanya dan menjadi bestseller. Sekarang dia lebih dikenal sebagai TRINITY TRAVELER dan dapat 
                beasiswa S2 di Filipina sambil tetap menjalani hobby traveling-nya. Bapak dan Ibu selalu mendesaknya 
                segera menikah, karena menurut mereka dengan menikah Trinity akan lebih bahagia. Trinity kembali 
                bertemu dengan Paul tapi menghadapi dilema antara mengejar cinta dan passion-nya.
            </Text>
            <Text style={styles.description}>
                Dibintangi Maudy Ayunda, Hamish Daud, Rachel Amanda, Anggika Bolsterli, Babe Cabiita, Cut Mini, 
                Farhan, Ayu Dewi, Dayu Wijanto, Melaney Ricardo.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=JULU9daSUyw')}}>
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