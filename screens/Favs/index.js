import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppScrollViewFavs from "../../components/ScrollViewFavs";

export default ({ navigation }) => {
  return (
    <View>
      <StatusBar style="auto" />
      <View>
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
