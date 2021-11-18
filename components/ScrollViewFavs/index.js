import React, { useContext } from "react";
import GlobalContext from "../../components/global/context";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";

const AppScrollViewFavs = () => {
  const navigation = useNavigation();
  const { AuthData, setAuthData } = useContext(GlobalContext);
  // temp: if we have another game we should go through all of them to set the list of games
  const isFav = Object.values(AuthData)[3].snake.isFav;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}> Lista de Juegos Favoritos</Text>
        {isFav ? (
          <View>
            <Button
              title="Snake"
              onPress={() => navigation.navigate("Snake")}
            />
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: StatusBar.currentHeight,
    marginBottom: 20,
  },
  scrollView: {},
  text: {
    fontSize: 32,
  },
});

export default AppScrollViewFavs;
