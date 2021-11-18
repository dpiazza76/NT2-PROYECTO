import React, {useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DrawerNavigator from "./components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Snake from "./components/SnakeGame/Snake";
import GlobalContext, {authData} from './components/global/context';
import axios from "axios";

export default function App() {

//para el login despues ver de usar el hook usecallback. por ahora lo hacemos con una funcion


  const [AuthData, setAuthData] = useState({
    //...authData,
    //agregarFav: () => {axios.post(`http://localhost:3000/api/users/updateFav/${authData._id}`)},

  
  });

  return (
    <GlobalContext.Provider value = {authData}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GlobalContext.Provider>

  );
}
