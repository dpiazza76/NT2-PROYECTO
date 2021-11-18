import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import LoginButtons from "../../components/LoginButtons";
import GlobalContext from "../../components/global/context";
import Favs from "../Favs/index";
import UserData from "../UserData/index";

export default () => {
  const { AuthData, setAuthData } = useContext(GlobalContext);
  const isAuthenticated = () => AuthData._id !== undefined;

  return isAuthenticated() ? (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.Titulo}>Bienvenido a Juegos!</Text>
      <Favs />
      <UserData />
    </View>
  ) : (
    <View style={styles.Container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.Titulo}>
          Inicie sesión o regístrese para continuar
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
  Titulo: {
    marginBottom: 30,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 25,
    fontSize: 36,
    lineHeight: 16,
    fontWeight: "bold",
    color: "black",
  },
  Container: {
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
