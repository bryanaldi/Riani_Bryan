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
            <Image style={styles.productImg} source={{uri:"https://www.newreleasetoday.com/images/news_images/news_img_f_1565907116.jpg"}}/>
            <Text style={styles.name}>Overcomer</Text>
            <Text style={styles.price}>SYNOPSIS</Text>
            <Text style={styles.description}>
                OVERCOMER merupakan film drama yang disutradarai oleh Alex Kendrick. Kehidupan pelatih John Harrison 
                berubah seketika saat impian tim bola basket yang dilatihnya untuk melaju di kejuaraan negara bagian 
                hancur berkeping-keping usai mendapat sebuah berita yang tak diharapkan. Ketika pabrik terbesar di 
                kota tutup dan ratusan keluarga memutuskan pindah, John mempertanyakan bagaimana diri dan keluarganya 
                dapat menghadapi masa depan tak pasti. Setelah bersedia melatih tim lari lintas alam, John dan istrinya, 
                Amy bertemu dengan seorang atlet muda yang tengah berjuang habis-habisan supaya direkrut menjadi atlet 
                profesional. Terdorong oleh perkataan dan doa-doa dari teman-teman barunya, John pun menjalani peran 
                seorang pelatih bagi seorang pelari yang paling tak diperhitungkan demi melampaui rintangan terberat 
                dalam perlombaan terbesar tahun ini.
            </Text>
            <Text style={styles.description}>
                Dibintangi oleh Alex Kendrick, Priscilla Shirer, Aryn Wright - Thompson.
            </Text>
          </View>
          
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL('https://www.youtube.com/watch?v=BGyieGVn4P4')}}>
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