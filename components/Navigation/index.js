import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../Signup";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName="Signin">
      <Screen
        name="Home"
        component={Home}
        options={
          ({
            headerLeft: () => null,
          },
          { headerShown: false })
        }
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
}

export default RootNavigator;
