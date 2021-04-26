import React from "react";
import { Caption, Title } from "react-native-paper";
import { View } from "react-native";
import { InfoBoxWrapper, ChildinfoBox, ChildNameCaption } from "./styled";

const ChildItem = ({ child }) => {
  console.log(child);
  return (
    <View>
      <ChildNameCaption>{child.name}</ChildNameCaption>
      <InfoBoxWrapper>
        <ChildinfoBox>
          <Title>KD {child.allowance}</Title>
          <Caption>Allowance</Caption>
        </ChildinfoBox>
      </InfoBoxWrapper>
    </View>
  );
};

export default ChildItem;
