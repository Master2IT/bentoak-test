import { Grid, Paper } from "@mui/material";
import LineChartComponent from "./charts/LineChart";
import RadarChartComponent from "./charts/RadarChart";
import PieChartComponent from "./charts/PieChart";
import TooltipChartComponent from "./charts/TooltipChart";

function Chart({ data }: { data: any }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 1,
            }}
          >
            <LineChartComponent data={data?.line} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 1,
            }}
          >
            <RadarChartComponent data={data?.radar} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 1,
            }}
          >
            <PieChartComponent data={data?.pie} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 1,
            }}
          >
            <TooltipChartComponent data={data?.bar} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Chart;
