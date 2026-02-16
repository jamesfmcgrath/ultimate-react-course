import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="space-x-4 font-medium sm:space-x-6">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6 text-sm">
        <p className="text-sm font-medium">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
