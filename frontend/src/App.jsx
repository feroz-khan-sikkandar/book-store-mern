// src/App.jsx
import React from 'react';
import { Button, AppBar, Toolbar, Typography,Link } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
       <Outlet/>
      </main>
      <footer>
        <Typography variant="body2">© 2023 Your Company Name</Typography>
      </footer>
    </div>
  );
}

export default App;
