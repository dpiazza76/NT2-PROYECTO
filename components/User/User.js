import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const User = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("UserProfile", { user: user })}
      >
        <Text style={styles.itemTitle}>{user.fullname}</Text>
        <Text>{user.gamesStatistics.snake.maxScore}</Text>
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

export default User;
