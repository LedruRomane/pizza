export interface Pizza {
  id: number,
  dough: Dough,
  size: Size,
  base: Base,
  toppings: Topping[],
}

export enum Dough {
  THIN = 'thin',
  THICK = 'thick',
}

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum Base {
  TOMATO = 'tomato',
  CREAM = 'cream',
}

export enum Topping {
  CHEESE = 'cheese',
  TOMATO = 'tomato',
  PINEAPPLE = 'pineapple',
  BACON = 'bacon',
  CHICKEN = 'chicken',
  OLIVES = 'olives',
  ONION = 'onion',
  MUSHROOMS = 'mushrooms',
}