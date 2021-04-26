import React from "react";
import ChildItem from "./ChildItem";
import childStore from "../stores/childStore";
import { observer } from "mobx-react";
// import childs from "../Data";
import { View } from "react-native";
import { Spinner } from "native-base";
import { useEffect } from "react";

const ChildList = () => {
  useEffect(() => {
    console.log("WE are here");
    childStore.fetchChilds();
  }, []);
  // console.log(childs);
  const childlist = childStore.childs.map((child) => (
    <ChildItem child={child} key={child.childId} />
  ));
  if (childStore.loading) return <Spinner />;
  return <View>{childlist}</View>;
};

export default observer(ChildList);
