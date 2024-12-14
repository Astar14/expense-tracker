import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required components for Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ filteredExpenses }) => {
    
    const [food, setFood] = useState(null)
    const [travel, setTravel] = useState(null)
    const [health, setHealth] = useState(null)
    const [groceries, setGroceries] = useState(null)


    useEffect(() => {
        let foodTotalAmount = filteredExpenses.filter((expense) => expense.category === "food").reduce(
            (accumulator, currentValue) => accumulator + currentValue.amount,0,)
        setFood(foodTotalAmount)

        let travelTotalAmount = filteredExpenses.filter((expense) => expense.category === "travel").reduce((acc,travelItem) => acc + travelItem.amount, 0,)
        setTravel(travelTotalAmount)

        let groceriesTotalAmount = filteredExpenses.filter((expense) => expense.category === "groceries").reduce((acc, groceriesItem) => acc + groceriesItem.amount, 0)
        setGroceries(groceriesTotalAmount)

        let healthTotalAmount = filteredExpenses.filter((expense) => expense.category === "health").reduce((acc, healthItem) => acc + healthItem.amount, 0)
        setHealth(healthTotalAmount)
    }, [filteredExpenses])

  const data = {
    labels: ["Food & Drinks", "Groceries", "Travel", "Health"],
    datasets: [
      {
        label: `Category expense`,
        data: [food, travel, health, groceries],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Category Expense Distribution",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
