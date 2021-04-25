import React from "react";
import ChildItem from "./ChildItem";
// import childs from "../Data";
import { View } from "react-native";

const ChildList = ({ childs }) => {
  console.log(childs);
  const childlist = childs.map((child) => (
    <ChildItem child={child} key={child.childId} />
  ));
  return <View>{childlist}</View>;
};

export default ChildList;
