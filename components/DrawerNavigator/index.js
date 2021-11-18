import React, {useContext} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import Form from "../../screens/Register/Form.js";
import Favs from "../../screens/Favs";
import Ranking from "../../screens/Ranking";
import SelectGame from "../../screens/SelectGame";
import Snake from "../SnakeGame/Snake";
<<<<<<< Updated upstream
import UserProfile from "../../screens/UsersProfile";
import LoginForm from "../User/LoginForm";
=======
import UserProfile from '../../screens/UsersProfile';
import GlobalContext, {authData} from '../../components/global/context';


>>>>>>> Stashed changes
export default function DrawerNavigator() {
  const {AuthData, setAuthData} = useContext(GlobalContext);

  const Drawer = createDrawerNavigator();

  const isAuthenticated = () => authData._id !== undefined

  return (
<<<<<<< Updated upstream
    <Drawer.Navigator>
      <Drawer.Screen name={"Home"} component={Home} />
      <Drawer.Screen name={"Login"} component={Login} />
      <Drawer.Screen name={"LoginLocal"} component={LoginForm} />
      <Drawer.Screen name={"Register"} component={Register} />
      <Drawer.Screen name={"Form"} component={Form} />
      <Drawer.Screen name={"Favs ❤"} component={Favs} />
      <Drawer.Screen name={"SelectGame"} component={SelectGame} />
      <Drawer.Screen name={"Snake"} component={Snake} />
      <Drawer.Screen name={"Ranking"} component={Ranking} />
      <Drawer.Screen name={"UserProfile"} component={UserProfile} />
    </Drawer.Navigator>
=======
      
        (isAuthenticated())?
        <Drawer.Navigator>
          <Drawer.Screen name={"Home"} component={Home} />
          <Drawer.Screen name={"Favs ❤"} component={Favs} />
          <Drawer.Screen name={"SelectGame"} component={SelectGame} />
          <Drawer.Screen name={"Snake"} component={Snake} />
          <Drawer.Screen name={"Ranking"} component={Ranking} />
          <Drawer.Screen name={"UserProfile"} component={UserProfile} />
        </Drawer.Navigator>
        :
        <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={Home} />
        <Drawer.Screen name={"Login"} component={Login} />
        <Drawer.Screen name={"Register"} component={Register} />
        <Drawer.Screen name={"Form"} component={Form} />
        </Drawer.Navigator>
    
>>>>>>> Stashed changes
  );
}
