import { useCartContext } from "../context/useCartContext";
import { Pizza } from "../models/type/type";
import trans from "../translations";
import { Link } from "react-router-dom";
import ConfigurePage from "./ConfigurePage";

CartPage.path = '/cart'
export default function CartPage() {

  const { products, removePizza } = useCartContext();
  return <div>
    <ul>
      {products.map(pizza => <li key={pizza.id}><CartRow pizza={pizza} remove={removePizza} /></li>)}
    </ul>
    <Link to={ConfigurePage.path}>Ajouter une nouvelle pizza</Link>
  </div>
}

interface CartRowProps {
  pizza: Pizza
  remove: (p: Pizza) => void
}

function CartRow({
  pizza,
  remove
}: CartRowProps) {
  return <>
    {/*todo: image */}
    <span>{generateLabel(pizza)}</span>
    <button>Modifier</button>
    <button onClick={() => remove(pizza)}>Supprimer</button>
  </>
}

function generateLabel(pizza: Pizza): string {

  return `Pizza base ${trans(`base.${pizza.base}`)}, taille ${trans(`size.${pizza.size}`)}`
}