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
          <Text style={styles.shareButtonText}>Continue</Text>  
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
    backgroundColor: 'orange'
  },
  productImg:{
    width:0,
    height:0,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:200,
    color: "#5F6D7A"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
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





// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Alert,
//   FlatList,
//   Button,
// } from 'react-native';

// export default class ProductDetail extends Component {

//   constructor(props) {
//     super(props);
//   }

//   cardClickEventListener = (screenName) => {
//     this.props.navigation.navigate(screenName)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
          
          
//           {/* <View style={styles.separator}></View> */}
//           <View style={styles.addToCarContainer}>
//             <TouchableOpacity style={styles.shareButton} onPress={()=> {this.cardClickEventListener('TesScreen')}}>
//             <Text style={styles.shareButtonText}>View Trailer</Text>  
//             </TouchableOpacity>
//           </View> 
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     // marginTop:20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'orange'
//   },
//   productImg:{
//     width:400,
//     height:250,
//   },
//   name:{
//     fontSize:28,
//     color:"#696969",
//     fontWeight:'bold'
//   },
//   price:{
//     marginTop:10,
//     fontSize:18,
//     color:"green",
//     fontWeight:'bold'
//   },
//   description:{
//     textAlign:'justify',
//     marginTop:10,
//     color:"#696969",
//   },
//   btnColor: {
//     height:30,
//     width:30,
//     borderRadius:30,
//     marginHorizontal:3
//   },
//   btnSize: {
//     height:40,
//     width:40,
//     borderRadius:40,
//     borderColor:'#778899',
//     borderWidth:1,
//     marginHorizontal:3,
//     backgroundColor:'white',

//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentColors:{ 
//     justifyContent:'center', 
//     marginHorizontal:30, 
//     flexDirection:'row', 
//     marginTop:20
//   },
//   contentSize:{ 
//     justifyContent:'center', 
//     marginHorizontal:30, 
//     flexDirection:'row', 
//     marginTop:20
//   },
//   separator:{
//     height:2,
//     backgroundColor:"#eeeeee",
//     marginTop:20,
//     marginHorizontal:30
//   },
//   shareButton: {
//     marginTop:10,
//     height:45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius:30,
//     backgroundColor: "#0f0f0f"
//   },
//   shareButtonText:{
//     color: "#FFFFFF",
//     fontSize:20,
//   },
//   addToCarContainer:{
//     marginHorizontal:30
//   }
// });