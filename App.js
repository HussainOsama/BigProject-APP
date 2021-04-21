import React from "react";
import RootNavigator from "./components/Navigation/index";
// import { ThemeProvider } from "styled-components";
//------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

    // <AppView>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    //   <Home />
    // </AppView>
  );
}
