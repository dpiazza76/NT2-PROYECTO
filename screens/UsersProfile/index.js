import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserProfile = ({route, navigation}) => {
  const [user, setUser] = useState(route.params.user);

  useEffect(() => {
    setUser(route.params.user);
  },);

  console.log(user);
    return (
      <View style= {styles.itemContainer}>
         <Text style={styles.itemTitle}>Nombre de usuario: {user.fullname}</Text>
          <Text>Maximo puntaje en snake: {user.gamesStatistics.snake.maxScore}</Text>
        <Text>Cantidad de partidas jugadas: {user.gamesStatistics.snake.timesPlayed}</Text> 
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Ranking")}>
          <Text>Regresar</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const styles = StyleSheet.create({
    itemContainer: {
      padding: 14,
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#FFCBDB",
      borderBottomWidth: 1,
    },
    itemTitle: {
      fontWeight: "bold",
    },
    text: {
      fontSize: 14,
      lineHeight: 16,
      fontWeight: "bold",
      color: "white",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: "#ea899a",
      marginTop: 10
      
    },
    touchable: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default UserProfile;

