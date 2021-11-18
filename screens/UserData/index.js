import React, { useContext } from "react";
import GlobalContext from "../../components/global/context";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import AppScrollViewFavs from "../../components/ScrollViewFavs";

export default () => {
  const { AuthData, setAuthData } = useContext(GlobalContext);
  const statistics = Object.values(AuthData)[3].snake;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.Texto}>Tus estadisticas: Snake</Text>
      <View>
        <Text style={styles.Estadisticas}>
          Max score: {statistics.maxScore}
        </Text>
        <Text style={styles.Estadisticas}>
          Times played: {statistics.timesPlayed}
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
