import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import Profile from "../Profile/Profile";
import EditProfile from "../Profile/EditProfile";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator initialRouteName="Profile">
      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Navigator>
  );
}

export default RootNavigator;
