import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"Homeeee"} component={Home} />
    </Drawer.Navigator>
  );
}
