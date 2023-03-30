import { Topping } from '../models/type/type';
import React from 'react';
import clsx from 'clsx';

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
  return <>
    <button className={clsx('m-2', {
      'bg-blue-400 border-white': isSelected,
    })} onClick={() => toggleTopping(topping)}>{topping}</button>
  </>
}