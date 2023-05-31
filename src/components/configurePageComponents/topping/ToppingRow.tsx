import clsx from 'clsx';

import { Topping } from '../../../models/type/type';
import assetsUrl from '../../../utils/assets';

interface ToppingRowProps {
  isSelected: Boolean
  topping: Topping
  toggleTopping: (t: Topping) => void
}

export default function ToppingRow({
  isSelected,
  topping,
  toggleTopping,
}: ToppingRowProps) {
  return (
  <>
    <img src={assetsUrl(`toppings/${topping}.png`)} className={'w-full lg:w-1/2'}/>
    <button className={clsx('m-2 self-stretch lg:self-auto', {
      'bg-blue-400 border-white': isSelected,
    })} onClick={() => toggleTopping(topping)}>{topping}</button>
  </>)
}
