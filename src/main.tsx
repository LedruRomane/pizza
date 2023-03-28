import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ConfigurePage from "./pages/ConfigurePage";
import CartPage from "./pages/CartPage";
import * as CartContext from "./context/useCartContext";
import {init} from "./translations";

init();

const router = createBrowserRouter([
    {
        path: "/",
        element: <ConfigurePage />,
    },
    {
        path: "/cart",
        element: <CartPage />,

    }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <CartContext.Provider>
        <RouterProvider router={router} />
      </CartContext.Provider>
  </React.StrictMode>,
)
