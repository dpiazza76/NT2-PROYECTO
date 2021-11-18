import React, {useContext} from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import axios from "axios";
import GlobalContext from '../../components/global/context'
import { getUserByEmail, postUser } from "../../Api";

export default () => {
  const navigation = useNavigation();
  const {AuthData, setAuthData} = useContext(GlobalContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 
      "362894200824-c894ukhc2q2tbsu7i63ibcj0klvhjkah",
    iosClientId:
      "362894200824-0pdtc7096vq81lu0dunduout8phkimgd.apps.googleusercontent.com",
    androidClientId:
      "362894200824-t4s46ojtue3hvm5h20ler2hhsenmr6e8.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  // React.useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;

  //     axios
  //       .get(
  //         `http://localhost:3000/api/users/getToken/${authentication.accessToken}`
  //       )
  //       .then((res) => res.json())

  //       .then((data) => {
  //         console.log("Data de usuario", data);
  //         setAuthData(data)
  //       });
  //   }
  // }, [response]);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
      .then(res => res.json())
      .then(data=>{
        // const userVal = getUserByEmail(data.email)
        // if (userVal._id == undefined) {
        //   const usuarioDB = {
        //     email: data.email,
        //     fullname: data.given_name,
        //     gameStatistics: {
        //       snake: {
        //         maxScore: 0,
        //         isFav: false,
        //         timesPlayed: 0
        //       }
        //     }
        //   }
        //   postUser(usuarioDB);
        //   setAuthData(usuarioDB)
        // } else {
        //   setAuthData(userVal)
        // }
        setAuthData(data)
        console.log("Aca pongo el aut data", AuthData)
      })
    }
  }, [response]);



  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Button
          disabled={!request}
          title="Login con google"
          onPress={() => {
            promptAsync();
          }}
        />
        <Button
          title="Login local"
          onPress={() => {
            navigation.navigate("LoginLocal");
          }}
        />
      </View>
    </View>
  );
};
