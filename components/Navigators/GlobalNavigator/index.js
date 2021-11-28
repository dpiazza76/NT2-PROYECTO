import React, {useContext} from "react";
import GlobalContext, {authData} from '../../global/context';
import StackNavigator from "../StackNavigator";
import DrawerNavigator from "../DrawerNavigator";


export default function GlobalNavigator() {
  const {AuthData, setAuthData} = useContext(GlobalContext);

  const isAuthenticated = () => AuthData.email !== undefined

  return (
        (isAuthenticated())?
        <DrawerNavigator/>
        :
        <StackNavigator/>
  );
}
