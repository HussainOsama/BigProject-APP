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
    // console.log("We are here");
    // childStore.fetchChilds();
  }, []);
  const childlist = childStore.childs.map((child) => (
    <ChildItem child={child} key={child.id} />
  ));
  if (childStore.loading) return <Spinner />;
  return <View>{childlist}</View>;
};

export default observer(ChildList);
