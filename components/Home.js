import React from "react";
import { Text } from "react-native";
import Chart from "./charts/PieChart";
import { AppView, MainCard, ProgressCard } from "./styled";

const Home = () => {
  return (
    <AppView>
      <Text>Home</Text>
      <Text>Expenses</Text>

      <MainCard>
        <Chart />
      </MainCard>
    </AppView>
  );
};

export default Home;
