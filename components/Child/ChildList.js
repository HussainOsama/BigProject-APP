//**** Dependencies ****//
import { observer } from "mobx-react";

//**** Framework ****//
import { Content, List, Spinner, Text } from "native-base";

//**** Imports ****//
import childStore from "../../stores/childStore";
import ChildItem from "./ChildItem";

//**** Code ****//

const ChildList = () => {
  if (childStore.loading) {
    return (
      <>
        <Spinner />
        <Text>Loading!</Text>
      </>
    );
  }
  const childList = childStore.childs.map((child) => (
    <ChildItem child={child} key={child.id} />
  ));
  return (
    <Content>
      <List>{childList}</List>
    </Content>
  );
};

export default observer(ChildList);
