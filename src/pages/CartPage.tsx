import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/useCartContext';
import useDocumentTitle from '../hooks/useDocumentTitle';
import assetsUrl from '../utils/assets';
import ConfigurePage from './ConfigurePage';
import PreviewPizza from '../components/PreviewPizza';
import CartRow from '../components/cartPageComponents/CartRow';

CartPage.path = '/cart'
export default function CartPage() {

  const { products, removePizza } = useCartContext();

  // Hook custom avec un useEffect.
  useDocumentTitle('Mon panier');

  return (
    <>
      <div id="title" className='flex text-center m-5'>
        <h1 className='text-4xl text-center m-9'>Mon panier</h1>
        <img src={assetsUrl(`pinched-fingers.png`)} className={'w-1/6'}/>
      </div>
      <div id="main-content" className='flex flex-col items-center'>
          <ul className='text-center'>
            {products.map(pizza =>
              <li className='flex flex-col items-center md:flex-row' key={pizza.id}>
                <PreviewPizza pizza={pizza} size={100}/>
                <div className="pizza-row">
                  <CartRow pizza={pizza} remove={removePizza} />
                </div>
              </li>)}
          </ul>
          <Link to={ConfigurePage.path}>Ajouter une nouvelle pizza</Link>
      </div>
    </>
    )
}

