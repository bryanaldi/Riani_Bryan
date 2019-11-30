import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CharlieAngel from './screens/CharlieAngel';
import Maleficent from './screens/Maleficent';
import Frozen2 from './screens/Frozen2';
import FrozenTrailer from './screens/FrozenTrailer';
import HomeScreen from './screens/HomeScreen';
import TesScreen from './screens/TesScreen';




import {createStackNavigator, createAppContainer} from 'react-navigation';

const navigator = createStackNavigator({
  Home: TesScreen,
  Movie1: Maleficent,
  Frozen2: Frozen2,
  FrozenTrailer: FrozenTrailer,
  Movie3: CharlieAngel
},{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerTitle: 'Multiplatform App'
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
