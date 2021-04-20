//**** Dependencies ****//
import React from "react";

//**** Framework ****//
import { List } from "native-base";
import { Text } from "react-native";

//**** Code ****//

const TransactionItem = ({ transaction }) => {
  return (
    <List>
      <Text>{transaction}</Text>
    </List>
  );
};

export default TransactionItem;
