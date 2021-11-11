import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DrawerNavigator from "./components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Snake from "./components/SnakeGame/Snake";

export default function App() {
  return (
    <View>
      <Snake/>
    </View>
  );
}

