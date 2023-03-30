import ConfigurePage from "./pages/ConfigurePage";
import CartPage from "./pages/CartPage";
import React from "react";

export default [
  {
    path: ConfigurePage.path,
    element: <ConfigurePage />,
  },
  {
    path: CartPage.path,
    element: <CartPage />,
  },
];
