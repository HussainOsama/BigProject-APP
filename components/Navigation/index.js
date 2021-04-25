import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}

export default RootNavigator;
