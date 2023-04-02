import { Topping } from '../../../models/type/type';
import ToppingRow from './ToppingRow';
import React from 'react';

interface ToppingGroupProps {
    toppings: Topping[]
    setToppings: (toppings: Topping[]) => void

}
export default function ToppingGroup({
    toppings,
    setToppings,
}: ToppingGroupProps) {

  function addTopping(topping: Topping): void {
    setToppings([...toppings, topping]);
  }

  function removeTopping(topping: Topping): void {
    setToppings(toppings.filter((t) => t !== topping));
  }

  function toggleTopping(topping: Topping): void {
    toppings.includes(topping) ? removeTopping(topping) : addTopping(topping);
  }

  return (
    <>
      <div id="topping" className={"m-4"}>
        <ul className={"grid grid-cols-3 md:m-4 lg:gap-x-16"}>
          {Object.values(Topping).map(topping =>
            <li className='flex flex-col items-center lg:flex-row' key={topping}>
              <ToppingRow
                isSelected={toppings.includes(topping)}
                topping={topping}
                toggleTopping={toggleTopping}
              />
            </li>
          )}
        </ul>
      </div>
    </>
  )
}