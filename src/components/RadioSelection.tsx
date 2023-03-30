import React from 'react';
import { Base, Dough, Size } from '../models/type/type';
interface RadioSelectionProps {
  name: string
  value: string
  item: Dough | Size | Base | null
  setItem: (item: never) => void //todo: mieux ?
}
export default function RadioSelection({
  name,
  value,
  item,
  setItem
}: RadioSelectionProps){
  const onOptionChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    setItem(e.target.value as never); //todo: mieux ?
  }
  return <>
    <div id={name}>
      <input
        type={'radio'}
        id={value}
        name={name}
        value={value}
        checked={item === value}
        onChange={onOptionChange}/>
      <label htmlFor={value}>{value}</label>
    </div>
  </>
}