import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartPage from "./CartPage";
import { useCartContext } from '../context/useCartContext';
import { Base, Dough, Size, Topping } from '../models/type/type';
import { idGenerator } from '../utils/Id';
import ToppingRow from '../components/ToppingRow';


ConfigurePage.path = '/'
export default function ConfigurePage() {
  const { addPizza } = useCartContext();
  const navigate = useNavigate();
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [dough, setDough] = useState<Dough>(Dough.THIN); //todo
  const [size, setSize] = useState<Size>(Size.MEDIUM); //todo
  const [base, setBase] = useState<Base | null>(null); //todo

  function addTopping(topping: Topping): void {
    setToppings([...toppings, topping]);
  }

  function removeTopping(topping: Topping): void {
    setToppings(toppings.filter((t) => t !== topping));
  }

  function toggleTopping(topping: Topping): void {
    toppings.includes(topping) ? removeTopping(topping) : addTopping(topping);
  }
  function addToCart(): void {
    if (!window.confirm("Voulez-vous ajouter cette pizza à votre panier ?")) {
      return;
    }

    addPizza({
      id: idGenerator(),
      dough: Dough.THICK,
      size: Size.LARGE,
      base: Base.CREAM,
      toppings: toppings
    });
    navigate(CartPage.path);
  }

  return <div>
    <div id="topping">
      <ul>
        {Object.values(Topping).map(topping => <li key={topping}>
          <ToppingRow
            isSelected={toppings.includes(topping)}
            topping={topping}
            toggleTopping={toggleTopping}
          />
        </li>)}
      </ul>
    </div>
    <div id="size"></div>
    <div id="dough"></div>
    <div id="base"></div>
    <button onClick={addToCart}>Ajouter au panier</button>
    <Link to={CartPage.path}>Voir le panier</Link>
  </div>
}
