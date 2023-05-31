import emptyBase from '../assets/images/empty.png';
import assetsUrl from '../utils/assets';
import { Pizza, sortedToppings } from '../models/type/type';
import React from 'react';

interface PreviewPizzaProps {
  pizza: Pizza
  size: number
}

export default function PreviewPizza({
    pizza,
    size,
}: PreviewPizzaProps) {

  const style = {
    width: size,
    height: size,
    }
  return (
    <div id={`${pizza.id}`} className={`m-4 relative`} style={style}>
      <img src={emptyBase} className={"w-full h-full absolute"} />
      {pizza.base && <img src={assetsUrl(`base/${pizza.base}.png`)} className={"w-full h-full absolute"} />}
      {sortedToppings.map(topping => pizza.toppings.includes(topping) &&
          <img key={topping} src={assetsUrl(`toppings/preview/${topping}.png`)} className={"w-full h-full absolute"}/>
      )}
    </div>
  )
}