import React, { useState, useEffect } from "react";
import { Grid, Paper, Box, Typography, Avatar } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookIcon from "@mui/icons-material/Book";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useGetAdminStatsQuery } from "../../redux/features/admin/adminApi";

const Dashboard = () => {
  const { data: adminStats, isLoading, isError } = useGetAdminStatsQuery();

  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Typography variant="h6" color="error">
        Failed to load statistics
      </Typography>
    );

  return (
    <Box sx={{ padding: 4 }}>
      {/* First Section */}
      <Grid container spacing={3}>
        {/* Total Books */}
        <Grid item xs={12} md={6} xl={3}>
          <Paper sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              sx={{
                backgroundColor: "#f3e5f5",
                color: "#8e24aa",
                marginRight: 2,
              }}
            >
              <BookIcon />
            </Avatar>
            <Box>
              <Typography variant="h5">
                {adminStats?.totalBooks ?? "N/A"}
              </Typography>
              <Typography color="textSecondary">Products</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Total Sales */}
        <Grid item xs={12} md={6} xl={3}>
          <Paper sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              sx={{ bgcolor: "#c8e6c9", color: "#43a047", marginRight: 2 }}
            >
              <TrendingUpIcon />
            </Avatar>
            <Box>
              <Typography variant="h5">
                ${adminStats?.totalSales ?? "N/A"}
              </Typography>
              <Typography color="textSecondary">Total Sales</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Trending Books */}
        <Grid item xs={12} md={6} xl={3}>
          <Paper sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              sx={{ bgcolor: "#ffcccb", color: "#cc0000", marginRight: 2 }}
            >
              <TrendingDownIcon />
            </Avatar>
            <Box>
              <Typography variant="h5" component="span">
                {adminStats?.trendingBooks ?? "N/A"}
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ marginLeft: 1, color: "textSecondary" }}
              >
                (13%)
              </Typography>
              <Typography color="textSecondary">
                Trending Books This Month
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Total Orders */}
        <Grid item xs={12} md={6} xl={3}>
          <Paper sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              style={{
                backgroundColor: "#bbdefb",
                color: "#1e88e5",
                marginRight: "8px",
              }}
            >
              <PieChartOutlineIcon />
            </Avatar>
            <Box>
              <Typography variant="h5">
                {adminStats?.totalOrders ?? "N/A"}
              </Typography>
              <Typography color="textSecondary">Total Orders</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
