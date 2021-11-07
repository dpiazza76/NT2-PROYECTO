import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import Login from "../../components/Login.js";

export default ({ navigation }) => {
  return (
    <View>
      <StatusBar style="auto" />

      <Text style={styles.Texto}> Bienvenido a juegos 😃</Text>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  Button: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  Texto: {
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 25,
  },
});
