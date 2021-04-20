//**** Dependencies ****//
import { observer } from "mobx-react";

//**** Framework ****//
import { Content, List, Spinner, Text } from "native-base";

//**** Imports ****//
import transactionStore from "../../stores/transactionStore";
import TransactionItem from "./TransactionItem";

//**** Code ****//

const TransactionList = () => {
  if (transactionStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Loading!</Text>
      </>
    );
  }
  const transactionList = transactionStore.transactions.map((transaction) => (
    <TransactionItem transaction={transaction} key={transaction.id} />
  ));
  return (
    <Content>
      <List>{transactionList}</List>
    </Content>
  );
};

export default observer(TransactionList);
