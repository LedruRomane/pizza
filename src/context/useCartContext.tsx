import React, { ReactNode } from 'react';
import { Pizza } from "../type/type";


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
    const [products, setProducts] = React.useState<Pizza[]>([]);
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