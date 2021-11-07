import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DrawerNavigator from './components/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


export default function App() {

  //const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
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

