import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
/* ThemeProvider: This is imported from MUI and is used to wrap your application in a Material UI theme,
   allowing you to apply a consistent design(colors, typography, etc.) across your app.
*/
import { ThemeProvider } from '@mui/material/styles';
import router from './routers/router.jsx'
/* CssBaseline: This is imported from MUI and is used to apply a global CSS reset to your application.
   It helps ensure consistency across browsers and devices.
*/
import CssBaseline from '@mui/material/CssBaseline';
/* theme: This is the custom theme you created in the theme.js file.
   It allows you to customize the colors, typography, and other design aspects of your app.
*/
import theme from './theme'; // Import the custom theme

// The code below sets up the main structure of a React application using various libraries and components.

// StrictMode: A React component that highlights potential problems in an application.
// It doesn't render any visible UI but activates additional checks and warnings for its descendants.

// createRoot: Part of React 18's new concurrent rendering system. It's used to create a root for the React tree.

// App: The main component of the application, likely containing the overall layout and structure.

// RouterProvider: A component from react-router-dom that provides routing context to the app.

// ThemeProvider: From Material-UI, it applies a custom theme to all of its child components.

// CssBaseline: A Material-UI component that normalizes styles across different browsers.

// theme: A custom theme object, likely defined in a separate file, used to customize the app's appearance.

// The createRoot function is called with the root DOM element, and then render is called on the returned object.
// This renders the entire React application into the DOM.

// The application is wrapped in several provider components:
// 1. StrictMode for additional development checks
// 2. ThemeProvider for consistent styling
// 3. CssBaseline for style normalization
// 4. RouterProvider for handling navigation

// This structure ensures that the entire application has access to the theme, routing, and other necessary contexts.

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* Global CSS reset for Material UI */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
