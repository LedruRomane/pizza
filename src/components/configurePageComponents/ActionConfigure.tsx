import { Link, useNavigate } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import React from 'react';
import { idGenerator } from '../../utils/Id';
import { useCartContext } from '../../context/useCartContext';
import { Base, Dough, Size, Topping } from '../../models/type/type';

interface ActionConfigureProps {
  id?: string
  base: Base | null
  dough: Dough
  size: Size
  toppings: Topping[]

}
export default function ActionConfigure({
  id,
  base,
  dough,
  size,
  toppings,
}: ActionConfigureProps ){

  const { addPizza, modifyPizza } = useCartContext();
  const navigate = useNavigate();
 function addToCart(): void {
    if(!base || !size || !dough) {
        alert('Vous devez choisir une base, une taille et une pâte avant d\'ajouter la pizza.');
        return;
    }
    if (!window.confirm("Voulez-vous ajouter cette pizza à votre panier ?")) {
      return;
    }
    if( id !== undefined) {
      modifyPizza({
        id: Number(id),
        dough: dough,
        size: size,
        base: base,
        toppings: toppings
      });
    }
    else {
        addPizza({
            id: idGenerator(),
            dough: dough,
            size: size,
            base: base,
            toppings: toppings
        });
    }
    navigate(CartPage.path);
  }
  return (
    <div id="actions" className='flex justify-evenly mt-8'>
      <button onClick={addToCart}>Ajouter au panier</button>
      <Link to={CartPage.path}>Voir le panier</Link>
    </div>
  );
}