import React, { useContext } from "react";
import GlobalContext from "../../components/global/context";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import AppScrollViewFavs from "../../components/ScrollViewFavs";

export default () => {
  const { AuthData, setAuthData } = useContext(GlobalContext);

  {
    console.log(AuthData.gamesStatistics.snake.maxScore);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.Texto}>Tus estadisticas: Snake</Text>
      <View>
        <Text style={styles.Estadisticas}>
          Max score: {AuthData.gamesStatistics.snake.maxScore}
        </Text>
        <Text style={styles.Estadisticas}>
          Times played: {AuthData.gamesStatistics.snake.timesPlayed}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Texto: {
    fontSize: 32,
  },
  Estadisticas: {
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: StatusBar.currentHeight,
    marginBottom: 20,
  },
});
