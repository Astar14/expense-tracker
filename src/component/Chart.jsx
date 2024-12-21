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

  // const[date, setDate] = useState()

  //  useEffect(() => {
  //  }, [filteredExpenses])
  
   const dates = filteredExpenses
   .map((expense) => expense.date)
    // setDate(dates)
    
  
    const amount = filteredExpenses
    .map((expense) => expense.amount)
  
  
    const labels = dates;
    const data = {
      labels: labels,
      datasets: [{
        label: 'Expense Line Chart',
        data: amount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgb(153, 102, 255)',
        ],
        borderWidth: 1
      }]
    };
    
   

    // const data = {
    //     labels: dates,
    //     datasets: [
    //       {
    //         label: "Monthly Enpense",
    //         data: dates,
    //         backgroundColor: "rgba(75, 192, 192, 0.6)",
    //       },
    //     ],
    //   };
    
      const options = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
    
      return <Bar data={data} options={options} />;
 
}

export default Chart