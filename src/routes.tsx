import ConfigurePage from "./pages/ConfigurePage";
import CartPage from "./pages/CartPage";
import React from "react";
import ModifyPage from './pages/ModifyPage';

export default [
  {
    path: ConfigurePage.path,
    element: <ConfigurePage />,
  },
  {
    path: CartPage.path,
    element: <CartPage />,
  },
  {
    path: ModifyPage.path,
    element: <ModifyPage />,
  },
];
