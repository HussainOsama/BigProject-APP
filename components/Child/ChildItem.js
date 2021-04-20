//**** Dependencies ****//
import React from "react";

//**** Framework ****//
import { List } from "native-base";
import { Text } from "react-native";

//**** Code ****//

const ChildItem = ({ child }) => {
  return (
    <List>
      <Text>{child}</Text>
    </List>
  );
};

export default ChildItem;
