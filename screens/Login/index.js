import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Button title="Iniciar sesión con Google" />
      </View>
    </View>
  );
};
