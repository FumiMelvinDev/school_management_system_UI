"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LearnersChart = () => {
  const data = [
    {
      name: "Grd 8",
      Male: 178,
      Female: 220,
      amt: 600,
    },
    {
      name: "Grd 9",
      Male: 145,
      Female: 177,
    },
    {
      name: "Grd 10",
      Male: 220,
      Female: 174,
    },
    {
      name: "Grd 11",
      Male: 144,
      Female: 177,
    },
    {
      name: "Grd 12",
      Male: 111,
      Female: 134,
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 15,
            left: 15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Male" stackId="a" fill="#9CC6D3" />
          <Bar dataKey="Female" stackId="a" fill="#F6AE2D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LearnersChart;
