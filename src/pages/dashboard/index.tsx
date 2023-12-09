import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DashboardLayout from "../../layouts/dashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Grid m={3} xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          Dashboard
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
