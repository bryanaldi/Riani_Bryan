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
            <Image style={styles.productImg} source={{uri:"https://d10u9ygjms7run.cloudfront.net/b3pf60x8dq025w2t52k3xt1zbw/1572371027417_1572000717559_LastChristmas.jpeg"}}/>
            <Text style={styles.name}>Last Christmas</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                Last Christmas merupakan film drama komedi yang disutradarai oleh Paul Feig. Kate adalah seorang wanita 
                muda yang mengambil keputusan buruk. Kencan terakhirnya berakhir dengan bencana? Saat diterima di sebuah 
                toko pernak-pernik natal dan berperan sebagai Peri ia bertemu dengan Tom , Hidupnya berubah lagi. Bagi 
                Kate, sepertinya terlalu bagus untuk menjadi kenyataan.
            </Text>
            <Text style={styles.description}>
                Dibintangi oleh Emilia Clarke, Henry Golding, Michelle Yeoh, Emma Thompson, Peter Serafinowicz, Patti 
                LuPone, Rob Delaney, Ingrid Oliver, Margaret Clunie.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=3jSD-8F5AzY')}}>
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
    height:150,
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