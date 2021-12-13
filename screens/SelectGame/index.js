import React from "react";
import { Text, View, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GameBox from "../../components/GameBox/GameBox";

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <GameBox/>
      </View>
    </View>
  );
};
