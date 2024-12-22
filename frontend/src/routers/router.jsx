import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import Login from "../components/Login";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./privateRoute";
import OrderInfo from "../pages/books/OrderInfo";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
// The code below defines the structure of the application's routing using React Router.

// createBrowserRouter: This function is imported from react-router-dom and is used to create a router object.
// It takes an array of route objects as its argument.

// App: This is the main component of the application, likely containing the overall layout and structure.

// The router configuration:
// 1. The root path "/" renders the App component.
// 2. Inside App, there are child routes defined.
// 3. Currently, there's only one child route for the home page ("/"), which renders a simple "Home" text.

// This structure allows for nested routing, where the App component can contain common elements (like navigation)
// and the child routes can render specific content for different pages within the same overall layout.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/orderDetails",
        element: <OrderInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login isSignUp={false} />,
  },
  {
    path: "/signup",
    element: <Login isSignUp />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminRoute> <Dashboard /></AdminRoute>,
      },
      {
        path: "add-new-book",
        element: <div>Add new book</div>,
      },
      {
        path: "edit-book/:id",
        element: <div>Edit book</div>,
      },
      {
        path: "manage-books",
        element: <div>Manage Books</div>,
      },
    ],
  },
]);

export default router;
