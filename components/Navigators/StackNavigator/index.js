import React, {useContext} from "react";
import Home from "../../../screens/Home";
import Login from "../../../screens/Login";
import Register from "../../../screens/Register";
import Form from "../../../screens/Register/Form.js";
import GlobalContext, {authData} from '../../global/context';
import LoginForm from '../../User/LoginForm'
import { createStackNavigator } from "@react-navigation/stack"

export default function StackNavigator() {
  const {AuthData, setAuthData} = useContext(GlobalContext);

  const Stack = createStackNavigator();

  return (

       <Stack.Navigator>
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen name={"Login"} component={Login} />
        <Stack.Screen name={"Register"} component={Register} />
        <Stack.Screen name={"Form"} component={Form} />
        <Stack.Screen name={"LoginLocal"} component={LoginForm} />
        </Stack.Navigator>
    
  );
}
