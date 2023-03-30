import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartPage from "./CartPage";
import { useCartContext } from '../context/useCartContext';
import { Base, Dough, Size, Topping } from '../models/type/type';
import { idGenerator } from '../utils/Id';
import ToppingRow from '../components/ToppingRow';
import RadioSelection from '../components/RadioSelection';


ConfigurePage.path = '/'
export default function ConfigurePage() {
  const { addPizza } = useCartContext();
  const navigate = useNavigate();
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [dough, setDough] = useState<Dough>(Dough.THIN);
  const [size, setSize] = useState<Size>(Size.MEDIUM);
  const [base, setBase] = useState<Base | null>(null);

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
      dough: dough,
      size: size,
      base: base,
      toppings: toppings
    });
    navigate(CartPage.path);
  }

  return <div>
    <div id="topping" className={"m-4"}>
      <ul className={"grid grid-cols-3"}>
        {Object.values(Topping).map(topping => <li key={topping}>
          <ToppingRow
            isSelected={toppings.includes(topping)}
            topping={topping}
            toggleTopping={toggleTopping}
          />
        </li>)}
      </ul>
    </div>
    <div id="radioChoices" className={'grid grid-cols-3'}>
      <div id="size">
        {Object.values(Size).map(s =>
            <RadioSelection
              name={"size"}
              value={s}
              item={size}
              setItem={setSize}
            />)}
      </div>
      <div id="dough">
        {Object.values(Dough).map(d =>
          <RadioSelection
            name={"dough"}
            value={d}
            item={dough}
            setItem={setDough}
          />)}
      </div>
      <div id="base">
        {Object.values(Base).map(b =>
            <RadioSelection
              name={"base"}
              value={b}
              item={base}
              setItem={setBase}
            />)}
      </div>
    </div>

    <button onClick={addToCart}>Ajouter au panier</button>
    <Link to={CartPage.path}>Voir le panier</Link>
  </div>
}
