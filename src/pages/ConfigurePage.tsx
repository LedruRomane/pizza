import React from "react";
import { Link } from "react-router-dom";
import CartPage from "./CartPage";

ConfigurePage.path = '/'
export default function ConfigurePage() {
  return <Link to={CartPage.path}>Voir le panier</Link>
}