import { Pizza } from '../../models/type/type';
import React from 'react';
import trans from '../../translations';
import { generatePath, useNavigate } from 'react-router-dom';
import ModifyPage from '../../pages/ModifyPage';

interface CartRowProps {
  pizza: Pizza
  remove: (p: Pizza) => void
}

export default function CartRow({
  pizza,
  remove,
}: CartRowProps) {

  const navigate = useNavigate();

  function modifyPizza(pizza: Pizza): void {
    navigate(generatePath(ModifyPage.path, { id: pizza.id }));
  }

  function removePizza(pizza: Pizza): void {
    if (!window.confirm("Etes-vous sûr de vouloir supprimer cette pizza ?")) {
      return;
    }
    remove(pizza);
  }

  return <>
    <span>{generateLabel(pizza)}</span>
    <div className='flex flex-row'>
      <button className='bg-blue-800 m-3' onClick={() => modifyPizza(pizza)}>Modifier</button>
      <button className='bg-red-900 m-3' onClick={() => removePizza(pizza)}>Supprimer</button>
    </div>
  </>
}

function generateLabel(pizza: Pizza): string {

  return `Pizza base ${trans(`base.${pizza.base}`)}, taille ${trans(`size.${pizza.size}`)}`
}