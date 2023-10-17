import { useState } from "react";
import "./CartItem.scss";
import { Item, ItemAddedInCart } from "../../../store/Cart/CartContext";

type CartItemProps = {
  item: Item;
  onRemove: (item: ItemAddedInCart) => void;
  onAdd: (item: ItemAddedInCart) => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onAdd }) => {
  const { amount, price, name, id } = item;
  const [addCounter, setAddCounter] = useState(amount);

  const onAddItem = () => {
    if (addCounter >= 5) {
      return;
    }
    setAddCounter(addCounter + 1);
    onAdd({ id, amount: amount + 1 });
  };

  const onRemoveItem = () => {
    setAddCounter(addCounter - 1);
    onRemove({ id, amount: amount - 1 });
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
        <button onClick={onRemoveItem}>−</button>
        <button
          className={addCounter >= 5 ? "disabled" : ""}
          onClick={onAddItem}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
