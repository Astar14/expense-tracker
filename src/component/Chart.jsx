import React from 'react'
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  // Register components with Chart.js
  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );


const Chart = ({ filteredExpenses }) => {

    console.log(filteredExpenses)

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
    
   const dates = filteredExpenses
   .map((expense) => expense.date)
   .filter((value, index, self) => self.indexOf(value) === index);

    const data = {
        labels: dates,
        datasets: [
          {
            label: "Monthly Enpense",
            data: [food ,health, groceries, travel],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Expense Data" },
        },
        scales: {
          y: {
            ticks: {
              stepSize: 500, 
              callback: (value) => value 
                },
                 max: 3000,
          },
        },
      };
    
      return <Bar data={data} options={options} />;
 
}

export default Chart