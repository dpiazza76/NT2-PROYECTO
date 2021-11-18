import React from "react";
import { Text, View, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Text>Selección de juego</Text>
        <Button title="Snake" onPress={() => navigation.navigate("Snake")} />
      </View>
    </View>
  );
};
