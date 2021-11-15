import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { getUsers } from "../../Api";
import User from "../../components/User/User";

export default () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const result = await getUsers();
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
