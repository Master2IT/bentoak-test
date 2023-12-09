import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, title, body }: any): any => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{title}</p>
        <p className="desc">{body}</p>
      </div>
    );
  }
};

function TooltipChartComponent({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={600}
        height={350}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="count" barSize={10} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TooltipChartComponent;
