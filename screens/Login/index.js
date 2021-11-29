import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import GlobalContext from '../../components/global/context'
import { getUserByEmail, postUser, loginGoogle } from "../../Api";

export default () => {
  const navigation = useNavigation();
  const { AuthData, setAuthData } = useContext(GlobalContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "362894200824-c894ukhc2q2tbsu7i63ibcj0klvhjkah",
    iosClientId:
      "362894200824-0pdtc7096vq81lu0dunduout8phkimgd.apps.googleusercontent.com",
    androidClientId:
      "362894200824-t4s46ojtue3hvm5h20ler2hhsenmr6e8.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const config = {
        headers: { Authorization: authentication.accessToken }
    };

      fetch("https://games-ort.herokuapp.com/api/users/logingoogle", {method: "POST",
        headers: { Authorization: authentication.accessToken }
    })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setAuthData(data)
        });
    }
  }, [response]);

  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { authentication } = response;

  //     const user = loginGoogle(authentication.accessToken)
  //     console.log("***USUARIO***")
  //     console.log(user)
  //     console.log("***TOKEN***")
  //     console.log(authentication.accessToken)
  //     setAuthData(user)
  //   }
  // }, [response]);



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <View style={styles.button}>
          <Button
            disabled={!request}
            title="Login con google"
            onPress={() => {
              promptAsync();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Login local"
            onPress={() => {
              navigation.navigate("LoginLocal");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor: "#0e101c",
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
})