import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import LoginButtons from "../../components/LoginButtons";

export default ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.Texto}>
          {" "}
          Bienvenido a juegos. Inicie sesión o regístrese para continuar
        </Text>
      </View>
      <LoginButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  Texto: {
    marginBottom: 10,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 25,
  },
  Container: {
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
