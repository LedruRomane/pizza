export interface Pizza {
  id: number,
  dough: Dough,
  size: Size,
  base: Base | null,
  toppings: Topping[],
}

export enum Dough {
  THIN = 'Mince',
  THICK = 'Epaisse',
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
  TOMATO = 'tomato',
  BASILICA = 'basilica',
  ONION = 'onion',
  OLIVES = 'olives',
  MUSHROOMS = 'mushrooms',
  BACON = 'bacon',
  PEPPER = 'pepper',
  // PINEAPPLE = 'pineapple', // 🍍
  EGG = 'egg',
  CHEESE = 'cheese',
  CHORIZO = 'chorizo'
}

export const sortedToppings = [
  Topping.TOMATO,
  Topping.ONION,
  Topping.MUSHROOMS,
  Topping.CHORIZO,
  Topping.CHEESE,
  Topping.PEPPER,
  Topping.EGG,
  Topping.BACON,
  Topping.BASILICA,
  Topping.OLIVES,
]
