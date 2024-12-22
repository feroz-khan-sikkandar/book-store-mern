import React from 'react'
import { Box, TextField } from '@mui/material'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommended from './Recommended'
import News from './News'
const Home = () => {
  return (
    <Box sx={{ px: 10 }}>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
      
    </Box>
  );
}

export default Home