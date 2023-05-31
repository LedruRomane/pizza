import ToppingGroup from './topping/ToppingGroup';
import SizeSlider from './slider/SizeSlider';
import { Base, Dough, Size, Topping } from '../../models/type/type';
import RadioSelection from './RadioSelection';
import PreviewPizza from '../PreviewPizza';
import React from 'react';
import BaseSwitch from './switch/BaseSwitch';

interface ConfigureFormProps {
  toppings: Topping[]
  setToppings: (toppings: Topping[]) => void
  size: Size
  setSize: (size: Size) => void
  dough: Dough
  setDough: (dough: Dough) => void
  base: Base | null
  setBase: (base: Base | null) => void
}
export default function ConfigureForm({
  toppings,
  setToppings,
  size,
  setSize,
  dough,
  setDough,
  base,
  setBase,
}: ConfigureFormProps) {

  return (
    <>
      <div id="configure" className={"flex flex-col-reverse items-center lg:flex-row lg:justify-around"}>
        <div id="parameters" className='lg:w-[55%]'>
          <div id="slider" className={"m-4"}>
            <SizeSlider
              size={size}
              setSize={setSize}
            />
          </div>
          <div className={'flex justify-center'}>
            <div id="radioChoices" className={'flex flex-col'}>
              <div id="dough" className={'flex justify-around m-4'}>
                {Object.values(Dough).map(d =>
                  <div key={d}>
                    <RadioSelection
                      id={d}
                      name={"dough"}
                      value={d}
                      item={dough}
                      setItem={setDough}
                    />
                  </div>)}
              </div>
              <BaseSwitch base={base} setBase={setBase}/>
            </div>
          </div>
          <ToppingGroup toppings={toppings} setToppings={setToppings}/>
        </div>
        <PreviewPizza pizza={
          {
            id : 0,
            base: base,
            dough: dough,
            size: size,
            toppings: toppings
          }
        }
          size={400}/>
      </div>
    </>
  )
}