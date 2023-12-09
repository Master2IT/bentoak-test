import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineChartComponent({ data }: { data: [] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={600}
        height={250}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="id" style={{ fontSize: 13 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
