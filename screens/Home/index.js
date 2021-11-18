import React, {useContext} from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import LoginButtons from "../../components/LoginButtons";
import GlobalContext from '../../components/global/context'

export default ({ navigation }) => {
  const {AuthData, setAuthData} = useContext(GlobalContext);
  const isAuthenticated = () => AuthData._id !== undefined

  return (
    
    (isAuthenticated())
    ?
    <View>
      <StatusBar style='auto'/>
      <Text style={styles.Texto}>
      Bienvenido a Juegos!</Text>
    </View>
    :
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
