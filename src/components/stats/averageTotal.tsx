import React,{useState, useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from "axios";
import {Bar} from "react-chartjs-2";

/* const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]; */

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function AverageTot() {

  const [chartData, setChartData] = useState<any>([]);
  const [ticketCost, setTickerCost] = useState([]);
  const [date, setDate] = useState([]);

  async function chart(){
  let ticketCost = [];
  let date = [];

  axios.get("http://localhost:3000/items/")
  .then(res => {
    console.log(res);
    for(const dataObj of res.data){
      const date1 = dataObj.itemDescription
      const month = date1.slice(5,7);
      console.log(monthNames[month-1]);
      ticketCost.push(dataObj.itemPrice);
      date.push(monthNames[month-1]);
    }
    setChartData({
      labels: date,
      datasets: [{
        label: "Average Ticket Cost",
        data: ticketCost,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ]
      }]

    })
  })


}
useEffect(() => {
  chart();
}, []);

  return (
    <>

    </>
  );
}

/*
    <h1>Average Ticket Cost</h1>
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "Average Ticket Cost",
            display: true},
          scales: {
            yAxes: {
              ticks: {
                beginAtZero: true
              }
            }
          }
        }}
      />
    </div> 
 */
