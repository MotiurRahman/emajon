import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import { productsAndCartLoaders } from "./Components/Loaders/ProductsAndCartLoaders";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";

import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoaders,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        { path: "about", element: <About></About> },
        { path: "/signup", element: <SignUp></SignUp> },
        { path: "/login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
