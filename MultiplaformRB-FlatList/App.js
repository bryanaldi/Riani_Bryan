import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import CobaScreen from './screens/CobaScreen';
// import {createStackNavigator, createAppContainer} from 'react-navigation';

//   const navigator = createStackNavigator({
//     component: {
//      screens: ComponentScreen
//  },
//  Student: {
// screens: StudentScreen
// }
// }, {
// initialRouteName: 'component'
// });





export default function App() {
  return (
    
      <CobaScreen /> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
