import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import user from "../stores/user";

// Styling

const Home = () => {
  console.log(user.users);
  return <Text>Open up App.js to start working on your app {}!</Text>;
};

export default Home;
