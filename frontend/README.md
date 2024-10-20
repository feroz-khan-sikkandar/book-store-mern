# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


step 1 
npm create vite@latest

The command npm create vite@latest is used to quickly scaffold a new project using Vite, a fast build tool and development server. This command initializes a new project with the latest version of Vite.

step 2 
npm install

The npm install command is used to install the dependencies for a project. This command reads the package.json file, which lists the dependencies, and installs the necessary packages from the npm registry.

step 3 
npm run dev

The npm run dev command is used to start the development server for a project. This command runs the Vite development server, which provides hot module replacement (HMR) and other optimizations for faster development.

step 4 
npm install @mui/material @emotion/react @emotion/styled

The npm install command is used to install the dependencies for a project. This command reads the package.json file, which lists the dependencies, and installs the necessary packages from the npm registry.

step 5 
npm install @mui/icons-material 

step 6 
Client Side Routing
React Router enables "client side routing".

In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

npm install react-router-dom

step 7 
src/router/
create new folder called router inside src folder and create new file called router.jsx

React Router is responsible for handling navigation and rendering different components based on the current URL.

createBrowserRouter is a function in React Router that helps to define a list of routes and their corresponding components.

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default router;

step 8
src/components/
create new folder called components inside src folder 

A directory for reusable components that can be used across multiple pages or other components (e.g., buttons, modals, navigation bars, headers)

step 9 

src/pages/

A folder containing "container" components that represent whole pages (e.g., Home, About). These are generally composed of multiple smaller components.
step 10

src/utils/

A utility folder that holds helper functions and constants used throughout the app (e.g., date formatting, validation functions).

step 11
src/theme.js

A file that defines the theme for the app using Material UI's createTheme function. This allows for easy customization of the app's design.

Add color pallate and font (google fonts) family to the theme 

step 12
src/main.jsx

The main.jsx file is the entry point for the application. It renders the root component and provides the router and theme to the application.



