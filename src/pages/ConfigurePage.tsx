import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Base, Dough, Size, Topping } from '../models/type/type';
import ActionConfigure from '../components/configurePageComponents/ActionConfigure';
import ConfigureForm from '../components/configurePageComponents/ConfigureForm';


ConfigurePage.path = '/'
export default function ConfigurePage() {

  const [toppings, setToppings] = useState<Topping[]>([]);
  const [dough, setDough] = useState<Dough>(Dough.THIN);
  const [size, setSize] = useState<Size>(Size.MEDIUM);
  const [base, setBase] = useState<Base | null>(null);

  // Hook custom avec un useEffect.
  useDocumentTitle('Configurer ma pizza');

  return <div>
    <h1 className="text-4xl text-center m-9">{'Configurer ma pizza'}</h1>
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
    <ActionConfigure base={base} dough={dough} size={size} toppings={toppings} />
  </div>
}
