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
            <Image style={styles.productImg} source={{uri:"https://www.biem.co/wp-content/uploads/2019/11/film-rumah-kentang.jpg"}}/>
            <Text style={styles.name}>Rumah Kentang: The Beginning</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                RUMAH KENTANG: THE BEGINNING merupakan film horor yang disutradarai oleh Rizal Mantovani. Adrian adalah 
                seorang penulis novel horor yang buku-bukunya mulai ditinggalkan pembacanya. Untuk menulis novel terbarunya, 
                ia bersama istrinya, Sophie, memutuskan kembali ke rumah masa kecil Sophie yang sudah lama tidak dikunjungi 
                Sophie, sejak kedua orang tua Sophie tiba-tiba menghilang tanpa jejak. Kini ditemani Uwa-nya dan ketiga 
                anaknya; Nina, Nala dan Bayu; Sophie akhirnya menginjakkan kaki kembali di rumah tersebut.
            </Text>
            <Text style={styles.description}>
                Namun sesampainya mereka disana, gangguan demi gangguan segera menyerang mereka. Gangguan yang mereka hiraukan 
                pada awalnya sampai akhirnya anak tertua mereka, Nina, tiba-tiba juga menghilang tanpa jejak. 
            </Text>
            <Text style={styles.description}>
                Kini demi mendapatkan kembali Nina, Sophie dan Adrian harus mencari tahu apa yang sebenarnya terjadi di rumah 
                ini, sebuah rumah yang berdiri di perkebunan kentang orang tua Sophie, terlebih ketika Uwa diberitahu oleh 
                seorang warga desa, Dadang, bahwa rumah itu lebih buruk dari apa yang mereka bayangkan. Bahwa tidak hanya Nina 
                yang berada dalam bahaya. Tapi mereka semua.
            </Text>

            <Text style={styles.description}>
            Dibintangi oleh Luna Maya, Christian Sugiono, dan Jajang C Noer.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=GlF3cMCh2mk')}}>
              <Text style={styles.shareButtonText}>View Trailer</Text>  
            </TouchableOpacity>
            <Text style={styles.description}>
                
            </Text>
            <Text style={styles.description}>
                
            </Text>
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
    height:230,
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