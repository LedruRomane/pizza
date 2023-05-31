import React from 'react';
import { Base, Dough, Size } from '../../models/type/type';
interface RadioSelectionProps {
  id: string
  name: string
  value: string
  item: Dough | Size | Base | null
  setItem: (item: never) => void
}
export default function RadioSelection({
  id,
  name,
  value,
  item,
  setItem
}: RadioSelectionProps){
  const onOptionChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    setItem(e.target.value as never);
  }
  return <>
    <div id={id} className={'m-3'}>
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