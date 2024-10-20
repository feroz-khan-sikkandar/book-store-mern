import React, { useState } from 'react'
import { AppBar, Toolbar, Box, TextField, InputAdornment, IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    setAnchorEl(null);
    navigate(path);
  };


  return (
    <AppBar position="static" color="default" sx={{px:10}}>
      <Toolbar>
        {/* Left side: Search */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Company Logo" style={{ height: '40px' }} />
          </Box>
          <TextField
            variant="outlined"
            size="small"
            placeholder="What are you looking for?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Box>

        {/* Right side: User menu, Wishlist, Basket */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
         
          {/* User Menu Dropdown */}
          <Box sx={{ position: 'relative' }}>
            <IconButton
              color="inherit"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuItemClick('/dashboard')}>Dashboard</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/orders')}>Orders</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/cart')}>Cart Page</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/checkout')}>Check Out</MenuItem>
            </Menu>
          </Box>

          {/* Wishlist */}
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>

          {/* Basket */}
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar