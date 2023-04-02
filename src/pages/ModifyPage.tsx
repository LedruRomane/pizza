import React, { useState } from 'react'
import { useCartContext } from '../context/useCartContext';
import { useParams } from 'react-router-dom';
import { Base, Dough, Size, Topping } from '../models/type/type';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ActionConfigure from '../components/configurePageComponents/ActionConfigure';
import ConfigureForm from '../components/configurePageComponents/ConfigureForm';

ModifyPage.path = '/configure/:id'
export default function ModifyPage() {

  let { id } = useParams();
  const { products } = useCartContext();
  const currentPizza = products.find((p) => p.id === Number(id));

  const [toppings, setToppings] = useState<Topping[]>(currentPizza?.toppings || []);
  const [dough, setDough] = useState<Dough>(currentPizza?.dough || Dough.THIN)
  const [size, setSize] = useState<Size>(currentPizza?.size || Size.MEDIUM);
  const [base, setBase] = useState<Base | null>(currentPizza?.base || null);

  // Hook custom avec un useEffect.
  useDocumentTitle('Modifier ma pizza');

  return <div>
    <h1 className="text-3xl text-center">Modifier ma pizza</h1>
    <ConfigureForm
      toppings={toppings}
      setToppings={setToppings}
      size={size}
      setSize={setSize}
      dough={dough}
      setDough={setDough}
      base={base}
      setBase={setBase}
    />
    <ActionConfigure id={id} base={base} dough={dough} size={size} toppings={toppings} />
  </div>
}