//**** Dependencies ****//
import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

//Hard data for testing
const data = [
  {
    name: "Gym",
    population: 50,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Groceries",
    population: 164.5,
    color: "teal",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Telephone",
    population: 10,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Restaurants",
    population: 53,
    color: "yellow",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Other",
    population: 12.56,
    color: "grey",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "test",
    population: 12.56,
    color: "blue",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "test2",
    population: 12.56,
    color: "tomato",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

//**** Defining responsive screen size ****//
const screenWidth = Dimensions.get("window").width;

//**** Code ****//
const Chart = () => {
  return (
    <>
      <PieChart
        data={data}
        width={400}
        height={200}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 3,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        // center={[10, 50]}
        //absolute /*<---- Uncomment this to get numbers instead of %*/
      />
    </>
  );
};

export default Chart;
