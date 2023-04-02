import React, { ReactNode, useContext } from 'react';
import { Base, Dough, Pizza, Size, Topping } from "../models/type/type";
import { idGenerator } from '../utils/Id';


interface ContextProps {
  products: Pizza[];
  addPizza: (pizza: Pizza) => void;
  removePizza: (pizza: Pizza) => void;
  modifyPizza: (pizza: Pizza) => void;
}

const CartContext = React.createContext<ContextProps>({

  products: [],
  addPizza: () => {
  },
  removePizza: () => {
  },
    modifyPizza: () => {
  },
});

interface Props {
  children: ReactNode | ReactNode[];
}

export function Provider({ children }: Props) {
  const [products, setProducts] = React.useState<Pizza[]>(() => {
    console.log('init pizza state');
    // Retourne des données mockées.
    return [
      {
        id: idGenerator(),
        dough: Dough.THICK,
        size: Size.LARGE,
        base: Base.TOMATO,
        toppings: [
          Topping.BACON,
          Topping.CHEESE,
          Topping.MUSHROOMS,
          Topping.ONION,
          Topping.PEPPER,
          Topping.EGG,
          Topping.OLIVES,
          Topping.BASILICA,
          Topping.TOMATO,
          Topping.CHORIZO,
        ]
      },
      {
        id: idGenerator(),
        dough: Dough.THIN,
        size: Size.SMALL,
        base: Base.CREAM,
        toppings: [
          Topping.TOMATO,
          Topping.CHORIZO,
          Topping.MUSHROOMS,
        ]
      }
    ];
  });
  return <CartContext.Provider
    value={{
      products,
      addPizza: (pizza) => {
        setProducts([...products, pizza]);
      },
      removePizza: (pizza) => {
        setProducts(products.filter((p) => p.id !== pizza.id));
      },
      modifyPizza: (pizza) => {
        setProducts(products.map((p) => p.id === pizza.id ? pizza : p));
      },
    }}
  > {children} </CartContext.Provider>;
}

Provider.displayName = 'CartProvider';

export function useCartContext() {
  return useContext(CartContext);
}
