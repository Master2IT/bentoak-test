import { Button, Toolbar, Tooltip } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { deleteFromStorage, getFromStorage } from "../utils/storage";
import { useNavigate } from "react-router-dom";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function Header({
  open,
  onToggleDrawer,
}: {
  open: boolean;
  onToggleDrawer: any;
}) {
  const navigate = useNavigate();

  const user = getFromStorage("users").find(
    (user: any) => user.id == getFromStorage("user")
  );

  const logout = () => {
    deleteFromStorage("user");
    navigate("/signin");
  };
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <Tooltip title="Logout">
          <Button color="inherit" onClick={logout}>
            <span style={{ marginRight: 10, textTransform: "lowercase" }}>
              {user.email}
            </span>
            <LogoutIcon />
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default Header;
