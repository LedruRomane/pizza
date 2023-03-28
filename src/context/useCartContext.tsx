import React, {ReactNode, useContext} from 'react';
import {Base, Dough, Pizza, Size, Topping} from "../type/type";


interface ContextProps {
    products: Pizza[];
    addPizza: (pizza: Pizza) => void;
    removePizza: (pizza: Pizza) => void;
}

const CartContext = React.createContext<ContextProps>({

    products: [],
    addPizza: () => {},
    removePizza: () => {},

});

interface Props {
    children: ReactNode|ReactNode[];
}

export function Provider({ children }: Props) {
    const [products, setProducts] = React.useState<Pizza[]>([
        {
            id: 1,
            dough: Dough.THICK,
            size: Size.LARGE,
            base: Base.TOMATO,
            toppings: [
                Topping.PINEAPPLE,
                Topping.BACON,
                Topping.CHICKEN,
            ]

        },
        {
            id: 2,
            dough: Dough.THIN,
            size: Size.SMALL,
            base: Base.CREAM,
            toppings: [
                Topping.TOMATO,
                Topping.CHEESE,
                Topping.MUSHROOMS,
            ]
        }
    ]);
    return <CartContext.Provider value={{
        products,
        addPizza: (pizza) => {
            setProducts([...products, pizza]);
        },
        removePizza: (pizza) => {
            setProducts(products.filter((p) => p.id !== pizza.id));
        }
    }} > {children} </CartContext.Provider>;
}
Provider.displayName = 'CartProvider';

export function useCartContext() {
    return useContext(CartContext);
}