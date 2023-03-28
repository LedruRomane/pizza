import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as CartContext from "./context/useCartContext";
import { init } from "./translations";
import routes from "./routes";

init();

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartContext.Provider>
      <RouterProvider router={router} />
    </CartContext.Provider>
  </React.StrictMode>,
)
