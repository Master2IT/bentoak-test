import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../utils/storage";
import Header from "../components/Appbar";
import Drawer from "../components/Drawer";
import { Box, Toolbar } from "@mui/material";

function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const user = getFromStorage("user");
    if (!user) {
      navigate("/signin");
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} onToggleDrawer={toggleDrawer} />
      <Drawer open={open} onToggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
