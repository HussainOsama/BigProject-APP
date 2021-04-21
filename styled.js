import styled from "styled-components/native";

export const AppView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => props.theme.backgroundColor}; */
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: pink;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: pink;
`;
