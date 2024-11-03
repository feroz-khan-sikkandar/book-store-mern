// src/App.jsx
import React from "react";
import { Button, AppBar, Toolbar, Typography, Link } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default App;
