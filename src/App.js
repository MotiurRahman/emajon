import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import { productsAndCartLoaders } from "./Components/Loaders/ProductsAndCartLoaders";
import Orders from "./Components/Orders/Orders";

import Shop from "./Components/Shop/Shop";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoaders,
          element: <Orders></Orders>,
        },
        { path: "inventory", element: <Inventory></Inventory> },
      ],
    },
    { path: "about", element: <About></About> },
  ]);
  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
