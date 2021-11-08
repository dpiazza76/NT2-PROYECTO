import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Vibration,
} from "react-native";

export default function LoginButtons() {
  const navigation = useNavigation();
  return (
    <View style={styles.global}>
      <View style={styles.Button}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Iniciar sesión </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Button2}>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    alignContent: "center",
    // justifyContent: "center",
    marginTop: 40,
    padding: 15,
    backgroundColor: "white",
    width: 180,
    borderRadius: 50,
    // marginLeft: 70,
    // marginRight: 70,
  },
  Button2: {
    // flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    // justifyContent: "center",
    padding: 15,
    backgroundColor: "white",
    width: 180,
    borderRadius: 50,
    // marginLeft: 70,
    // marginRight: 70,
    marginTop: 10,
  },
  global: {
    justifyContent: "center",
    margin: "auto",
  },
});
