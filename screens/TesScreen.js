import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

export default class TesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [

        {id:1, color:"#a10f05", info:'Frozen2', icon:require('../assets/frozen2.jpg'), name: "Frozen 2 ", tags:['Adventure', 'Animation', 'Comedy', 'Family', 'Fantasy', 'Musical']},
        {id:2, color:"#a10f05", info:'CharlieAngel', icon:require('../assets/charlieAngels.jpg'), name: "Charlie's Angels", tags:['Action', 'Adventure', 'Comedy']}, 
        {id:3, color:"#a10f05", info:'Overcomer', icon:require('../assets/overcomer.jpg'), name: "Overcomer", tags:['Drama']}, 
        {id:4, color:"#a10f05", info:'Jumanji', icon:require('../assets/jumanji.jpg'), name: "Jumanji: The Next Level", tags:['Action', 'Adventure', 'Comedy', 'Fantasy']}, 
        {id:5, color:"#a10f05", info:'RumahKentang', icon:require('../assets/rumahKentang.jpg'), name: "Rumah Kentang: The Beginning", tags:['Horror']}, 
        {id:6, color:"#a10f05", info:'TheGoodLiar', icon:require('../assets/theGoodLiar.jpg'), name: "The Good Liar", tags:['Thriller']}, 
        {id:7, color:"#a10f05", info:'TrinityTraveler', icon:require('../assets/trinityTraveler.jpg'), name: "Trinity Traveler", tags:['Drama']},
        {id:8, color:"#a10f05", info:'LastChristmas', icon:require('../assets/lastChristmas.jpg'), name: "Last Christmas", tags:['Comedy', 'Drama', 'Romance']},
        {id:9, color:"#a10f05", info:'Bond25', icon:require('../assets/bond25.jpg'), name: "Bond25", tags:['Comedy', 'Drama', 'Romance']},

 
      ],
    };
  }

  cardClickEventListener = (screenName) => {
    this.props.navigation.navigate(screenName)
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item.info)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={item.icon}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:150,
    height:210,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
<<<<<<< HEAD
    backgroundColor: "#dbc0bd",
=======
    backgroundColor: "#eee",
>>>>>>> 7a6b392f29617568af3dc494608b1b6d859e53f9
    marginTop:5,
  },
});   