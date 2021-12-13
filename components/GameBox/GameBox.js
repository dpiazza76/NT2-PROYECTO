import React, { useContext, useState } from 'react';
import { Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addToFav } from "../../Api.js"
import GlobalContext from '../global/context';


export default () => {
  const navigation = useNavigation();
  const {AuthData, setAuthData} = useContext(GlobalContext);
  const [isFav, setFav] = useState(AuthData.gamesStatistics.snake.isFav);
  return (
    <View style={styles.global}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://1z73q13h5gz932pdsz42u00q-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/snake_game_NOKIA-640x353.jpg',
        }}
      />
      <View style={styles.Button2}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Snake")}
        >
          <Text>Snake</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.Button2}>
        <TouchableOpacity
          onPress={
            () => fetch("http://localhost:3000/api/users/updateFav/"+AuthData._id,
            {method: "PUT",
            headers: { Authorization: AuthData.token }
        })
          .then((res) => {
            res.json();
            if(res.status === 200)
            setFav(!isFav)
          })
          

        }
        >{isFav?<Text>Unfav</Text>:<Text>To favs</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  button: {
    width: 80,
    height: 20,
  },
  Button2: {
    alignItems: "center",
    alignContent: "center",
    padding: 15,
    backgroundColor: "#ec5990",
    width: 80,
    borderRadius: 50,
    marginTop: 10,
  },
  global: {
    justifyContent: "center",
    margin: "auto",
  },
});