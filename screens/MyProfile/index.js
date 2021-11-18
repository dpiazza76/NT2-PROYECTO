import React, {useContext} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import GlobalContext from '../../components/global/context'

const MyProfile = ({route, navigation}) => {
  const {AuthData, setAuthData} = useContext(GlobalContext);

    return (
      <View style= {styles.itemContainer}>
          <Text style={styles.itemTitle}>Mi nombre de usuario {AuthData.fullname}</Text>
          <Text>Juego favorito: Snake</Text>
          <Text>Cantidad de partidas jugadas: {AuthData.gamesStatistics.snake.timesPlayed}</Text> 
          <Text>Puntaje maximo: {AuthData.gamesStatistics.snake.maxScore}</Text>
          <TouchableOpacity
            onPress={() => [navigation.navigate("EditProfile"), Vibration.vibrate()]}
        >
          <Text>Editar perfil</Text>
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
    },
    touchable: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default MyProfile;