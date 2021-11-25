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
      <View style={styles.Container}>
        <Text style={styles.Texto}>Bienvenido a Juegos!</Text>
      </View>
      <Favs />
      <UserData />
    </View>
  ) : (
    <View style={styles.Container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.Texto}>
          Inicie sesión o regístrese para continuar
        </Text>
      </View>
      <LoginButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  Texto: {
    textAlign: "center",
    fontSize: 25,
    color:'white',
    marginTop:50
  },
  Titulo: {
    marginBottom: 30,
    textAlign: "center",
    marginTop: 25,
    fontSize: 36,
    lineHeight: 16,
    fontWeight: "bold",
    color: "white",
  },
  Container: {
    flex:1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#0e101c",
  },
});
