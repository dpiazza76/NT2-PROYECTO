import React, {useState} from "react";
import DrawerNavigator from "./components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import GlobalContext, { authData } from './components/global/context';

export default function App() {

//para el login despues ver de usar el hook usecallback. por ahora lo hacemos con una funcion


  const [AuthData, setAuthData] = useState({
    ...authData,
  });

console.log(AuthData);
  return (
    <GlobalContext.Provider value={{AuthData, setAuthData}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </GlobalContext.Provider>

  );
}
