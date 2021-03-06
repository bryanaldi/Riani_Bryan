import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Frozen2 from './screens/Frozen2';
import FrozenTrailer from './screens/FrozenTrailer';
import CharlieAngel from './screens/CharlieAngel';
import Overcomer from './screens/Overcomer';
import Jumanji from './screens/Jumanji';
import RumahKentang from './screens/RumahKentang';
import TheGoodLiar from './screens/TheGoodLiar';
import TrinityTraveler from './screens/TrinityTraveler';
import LastChristmas from './screens/LastChristmas';
import Bond25 from './screens/Bond25';
import HomeScreen from './screens/HomeScreen';
import TesScreen from './screens/TesScreen';



import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const navigator = createStackNavigator({
  Home: HomeScreen, 
  TesScreen: TesScreen,
  Frozen2: Frozen2,
  FrozenTrailer: FrozenTrailer,
  CharlieAngel: CharlieAngel,
  Overcomer: Overcomer,
  Jumanji: Jumanji,
  RumahKentang: RumahKentang,
  TheGoodLiar: TheGoodLiar,
  TrinityTraveler: TrinityTraveler,
  LastChristmas: LastChristmas,
  Bond25: Bond25

},{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerTitle: 'Trailist'
  }
});

export default createAppContainer(navigator);

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
