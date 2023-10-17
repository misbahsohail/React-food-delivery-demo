import { useEffect, useState } from "react";
import "./CartItem.scss";
import { Item } from "../../../store/Cart/CartContext";
type CartItemProps = {
  item: Item;
  onRemove: () => void;
  onAdd: (item: Item) => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onAdd }) => {
  const { amount, price, name } = item;
  const [addCounter, setAddCounter] = useState(amount);

  const onAddItem = () => {
    setAddCounter(addCounter + 1);
    onAdd({ ...item, amount: amount + 1 });
  };

  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="cart-summary">
          <span className="price">{`$${price.toFixed(2)}`}</span>
          <span className="amount">x {addCounter}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove}>−</button>
        <button onClick={onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
