// src/theme.js
import { createTheme } from '@mui/material/styles';

// Customize the theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFCE1A', // Customize primary color
    },
    secondary: {
      main: '#0D0842', // Customize secondary color
    },
    custom: {
      main: '#38761d', // Customize custom color
    },
    buttonText: {
      main: '#ffffff', // Customize white font color
    },
  },
  typography: {
    // Default font for all elements (Montserrat as primary)
    fontFamily: 'Montserrat, Nunito, sans-serif',

    // Specific font for headings (Montserrat)
    h1: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
    },
    // Specific font for buttons (Nunito)
    button: {
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 500, // Optional: make the button text bold
    },

  },
});

export default theme;
