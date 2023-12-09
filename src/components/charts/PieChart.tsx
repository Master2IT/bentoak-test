import { Pie, PieChart, ResponsiveContainer } from "recharts";

function PieChartComponent({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart width={600} height={350}>
        <Pie
          data={data}
          dataKey="id"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
