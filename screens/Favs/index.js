import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppScrollViewFavs from "../../components/ScrollViewFavs";

export default ({ navigation }) => {
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.Texto}> Lista de Juegos Favoritos</Text>

        <AppScrollViewFavs />
      </View>
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
});
