import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";

export default function LoginButtons() {
  const navigation = useNavigation();
  return (
    <View style={styles.global}>
      <View style={styles.Button}>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Login"), Vibration.vibrate()]}>
          <Text>Iniciar sesión </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Button2}>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Register"), Vibration.vibrate()]}
        >
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
    marginTop: 150,
    padding: 15,
    backgroundColor: "#ec5990",
    width: 180,
    borderRadius: 50,
  },
  Button2: {
    alignItems: "center",
    alignContent: "center",
    padding: 15,
    backgroundColor: "#ec5990",
    width: 180,
    borderRadius: 50,
    marginTop: 10,
  },
  global: {
    justifyContent: "center",
    margin: "auto",
  },
});
