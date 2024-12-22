import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/BarChart";
import BookIcon from "@mui/icons-material/MenuBook";

const drawerWidth = 240;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button key="Dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button key="Add New Book">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Book" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
