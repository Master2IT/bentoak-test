import { useQuery } from "react-query";
import Chart from "../../components/Chart";
import DashboardLayout from "../../layouts/dashboard";
import { Grid } from "@mui/material";
import { getPosts } from "../../api/posts";

function Charts() {
  const { data } = useQuery("posts", getPosts);

  return (
    <DashboardLayout>
      <Grid m={3} xs={12} md={8} lg={9}>
        <Chart data={data} />
      </Grid>
    </DashboardLayout>
  );
}

export default Charts;
