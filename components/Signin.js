import React from "react";
import { Text } from "react-native";
import { AppView } from "../styled";
import { Button } from "native-base";

const Signin = ({ navigation }) => {
  return (
    <AppView>
      <Text>Sigin</Text>
      <Button success onPress={() => navigation.navigate("Home")}>
        <Text> Success </Text>
      </Button>
    </AppView>
  );
};

export default Signin;
