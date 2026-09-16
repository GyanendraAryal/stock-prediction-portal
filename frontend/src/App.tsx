import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
