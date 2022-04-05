import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data));
  }, []);
  return (
    <div className="charts">
      <div className="flex items-center">
        <h1 className="text-xl">Area Chart: Income Vs Sells Vs Revinue</h1>
        <img
          className="w-1 m-10"
          src="https://www.seekpng.com/png/small/106-1062598_vertical-line-transparent-white-vertical-line-png.png"
          alt=""
        />

        <AreaChart
          className="my-11 area"
          width={400}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ebb18d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ebb18d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#ebb18d"
            fillOpacity={1}
            fill="url(#colorDv)"
          />
        </AreaChart>
      </div>
      <div className="flex items-center">
        <h1 className="text-xl">BarChart: Income Vs Sell Vs Revinue</h1>
        <img
          className="w-1 m-10"
          src="https://www.seekpng.com/png/small/106-1062598_vertical-line-transparent-white-vertical-line-png.png"
          alt=""
        />

        <BarChart width={400} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="sell" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="#cab482" />
        </BarChart>
      </div>
      <div className="flex items-center ">
        <h1 className="text-xl">
          ComposedChart: Income Vs Sell Vs Revinue
        </h1>
        <img
          className="w-1 m-10"
          src="https://www.seekpng.com/png/small/106-1062598_vertical-line-transparent-white-vertical-line-png.png"
          alt=""
        />

        <ComposedChart width={400} height={250} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </div>
      <div className="flex items-center ">
        <h1 className="text-xl">RadarChart: Income Vs Sell Vs Revinue</h1>
        <img
          className="w-1 m-10"
          src="https://www.seekpng.com/png/small/106-1062598_vertical-line-transparent-white-vertical-line-png.png"
          alt=""
        />

        <RadarChart outerRadius={90} width={400} height={250} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Tooltip />
          <Radar
            name="investment"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="sell"
            dataKey="sell"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Radar
            name="revenue"
            dataKey="revenue"
            stroke="#d4933d"
            fill="#d4933d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default Dashboard;
