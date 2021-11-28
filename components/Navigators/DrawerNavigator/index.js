import React, {useContext} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../../screens/Home";
import Favs from "../../../screens/Favs";
import Ranking from "../../../screens/Ranking";
import SelectGame from "../../../screens/SelectGame";
import Snake from "../../SnakeGame/Snake";
import UserProfile from '../../../screens/UsersProfile';
import GlobalContext, {authData} from '../../global/context';
import MyProfile from '../../../screens/MyProfile'

export default function DrawerNavigator() {
  const {AuthData, setAuthData} = useContext(GlobalContext);

  const Drawer = createDrawerNavigator();

  return (
        <Drawer.Navigator>
          <Drawer.Screen name={"Home"} component={Home} />
          <Drawer.Screen name={"Favs ❤"} component={Favs} />
          <Drawer.Screen name={"SelectGame"} component={SelectGame} />
          <Drawer.Screen name={"Snake"} component={Snake} />
          <Drawer.Screen name={"Ranking"} component={Ranking} />
          <Drawer.Screen name={"UserProfile"} component={UserProfile} />
          <Drawer.Screen name={"MyProfile"} component={MyProfile} />
        </Drawer.Navigator>
  );
}
