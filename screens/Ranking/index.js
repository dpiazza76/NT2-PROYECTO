import React, { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import { getRanking } from "../../Api";
import User from "../../components/User/User";
import GlobalContext from "../../components/global/context.js"

export default () => {
  const [users, setUsers] = useState([]);
  const { AuthData, setAuthData } = useContext(GlobalContext);

  const fetchUsers = async () => {
    const result = await getRanking(AuthData.token);
    setUsers(result.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <User user={item} />;
        }}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};
