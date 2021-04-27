//**** Dependencies ****//
import React from "react";

//**** Framework ****//
import RootNavigator from "./components/Navigation/index";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//**** Imports ****//

//**** Code ****//

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
