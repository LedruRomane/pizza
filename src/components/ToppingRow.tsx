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
    <button className={clsx({
      'topping--selected': isSelected,
    })} onClick={() => toggleTopping(topping)}>{topping}</button>
  </>
}