import React, {useState} from "react";
import GlobalNavigator from "./components/Navigators/GlobalNavigator"
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import GlobalContext, { authData } from './components/global/context';

export default function App() {

//para el login despues ver de usar el hook usecallback. por ahora lo hacemos con una funcion


  const [AuthData, setAuthData] = useState({
    ...authData,
  });


  return (
    <GlobalContext.Provider value={{AuthData, setAuthData}}>
      <NavigationContainer>
        <GlobalNavigator />
      </NavigationContainer>
    </GlobalContext.Provider>

  );
}
