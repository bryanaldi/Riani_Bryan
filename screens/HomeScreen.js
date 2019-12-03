import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  ScrollView,
  Alert,
  FlatList,
  Button,
} from 'react-native';

import AwesomeButton from 'react-native-really-awesome-button';


export default class Congratulation extends Component<{}> {

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
            <Image style={styles.productImg} source={{uri:"https://images.perthnow.com.au/publication/C-558635/6d230d36e110af6b661e0640f31def6bafdb96d6-16x9-x0y0w1920h1080.jpg"}}/>
        <Text style={styles.title}>Welcome to Trailist</Text>
        <Text style={styles.description}>Trailist merupakan aplikasi untuk melihat trailer-trailer film.</Text>
        <TouchableOpacity style={styles.shareButton} onPress={()=> {this.cardClickEventListener('TesScreen')}}>
          <Text style={styles.shareButtonText}>Click Here to Continue</Text>  
        </TouchableOpacity>
      </View>

      
    )
    
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:50,
    backgroundColor: '#bf4947'
  },
  productImg:{
    width:0,
    height:0,
  },
  title:{
    fontSize:35,
    textAlign: 'center',
    marginTop:280,
    color: "#030303"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:30,
    margin:40,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  }
});