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
            <Image style={styles.productImg} source={{uri:"https://www.blackfilm.com/read/wp-content/uploads/2019/10/Charlie-s-Angels-cover.jpg"}}/>
            <Text style={styles.name}>Charlie's Angels</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                CHARLIE'S ANGELS merupakan film aksi yang disutradarai oleh Elizabeth Banks. Kristen Stewart, Naomi Scott, dan Ella Balinska bekerja untuk Charles Townsend sebuah badan keamanan dan investigasinya misterius yang telah berkembang dengan skala internasional. Para wanita paling cerdas, paling berani, dan paling terlatih, Menjadi satu team "Angels" yang dipandu oleh Bosley menjalankan suatu misi berat dan berbahaya di mana-mana.
            </Text>
            <Text style={styles.description}>
                Dibintangi oleh Naomi Scott, Sam Claflin, Kristen Stewart. 
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=voYLots_ZOg')}}>
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