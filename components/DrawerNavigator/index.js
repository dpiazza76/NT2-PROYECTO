import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../../screens/Home';
import Login from '../../screens/Login'
import Register from '../../screens/Register';
import LoginButtons from '../LoginButtons';
import Form from '../../screens/Register/Form.js';

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name={'Home'} component={Home}/>
        <Drawer.Screen name={'Login'} component={Login}/>
        <Drawer.Screen name={'Register'} component={Register}/>
        <Drawer.Screen name={'Form'} component={Form}/>
    </Drawer.Navigator>

)}
