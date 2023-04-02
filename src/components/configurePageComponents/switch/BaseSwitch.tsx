import * as React from 'react';
import { Base } from '../../../models/type/type';
import { MUISwitch } from './Switch';
import fr from '../../../translations/fr';
import { flexbox } from '@mui/system';

interface BaseSwitchProps {
  base: Base | null;
  setBase: (value: Base) => void;
}
function baseChange(base: Base | null, setBase: (value: Base) => void) {
  if (base === Base.CREAM) {
    setBase(Base.TOMATO);
  } else {
    setBase(Base.CREAM);
  }
}
export default function BaseSwitch({
  base,
  setBase,
}: BaseSwitchProps){

  return (
    <>
      <div className={'flex items-center justify-center'}>
        <MUISwitch checked={base === Base.TOMATO} onChange={() => baseChange(base, setBase)} />
        <label className={'ml-2'}>{base? fr.base[base] : `Choisir sa base`}</label>
      </div>
    </>

  );
}