import React from "react";
import {
  Box,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Button,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Notifications as NotificationsIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import Sidebar from "./SideBar";
import MainContent from "./MainContent";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              John Doe - Admin
            </Typography>
            <Avatar sx={{ bgcolor: "secondary.main", marginRight: 2 }}>
              JD
            </Avatar>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Button color="inherit" startIcon={<ExitToAppIcon />}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
