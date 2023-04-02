import * as React from 'react';
import Slider from './Slider';
import { Size } from '../../../models/type/type';
import fr from '../../../translations/fr';

function getNumberFromSize(size: Size): number {
  switch (size) {
    case Size.SMALL:
      return 0;
    case Size.MEDIUM:
      return 50;
    case Size.LARGE:
      return 100;
  }
}

function getSizeFromNumber(num: number): Size {
  switch (num) {
    case 0:
      return Size.SMALL;
    case 50:
      return Size.MEDIUM;
    case 100:
      return Size.LARGE;
    default:
      return Size.MEDIUM;
  }
}

interface SizeSliderProps {
  size: Size;
  setSize: (value: Size) => void;
}

export default function SizeSlider({
  size,
  setSize,
}: SizeSliderProps){

  const marks = [
    {
      value: 0,
      label: fr.size[Size.SMALL],
    },
    {
      value: 50,
      label: fr.size[Size.MEDIUM],
    },
    {
      value: 100,
      label: fr.size[Size.LARGE],
    },
  ];

  return (
    <Slider
      value={getNumberFromSize(size)}
      setValue={(value : number) => setSize(getSizeFromNumber(value))}
      name="Size"
      marks={marks}
    />
  );
}