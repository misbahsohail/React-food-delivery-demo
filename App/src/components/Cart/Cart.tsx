import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import "./Cart.scss";
import CartContext, {
  Item,
  ItemAddedInCart,
} from "../../store/Cart/CartContext";
import CartItem from "./CartItem/CartItem";
type CartProps = {
  onClose: () => void;
};
const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartContext = useContext(CartContext);
  const cartItems: Item[] = [];

  Object.keys(cartContext.items).forEach((mealItemId) => {
    const mealItem = cartContext.items[mealItemId];
    if (mealItem.amount > 0) {
      cartItems.push({ ...mealItem, id: mealItemId });
    }
  });

  const cartItemUpdateHandler = (item: ItemAddedInCart) => {
    cartContext.addItem(item);
  };

  const CartIems = (
    <ul className="cart-items">
      {cartItems.map((item) => {
        return (
          <CartItem
            item={item}
            onRemove={(_item) => cartItemUpdateHandler(_item)}
            onAdd={(_item) => cartItemUpdateHandler(_item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {CartIems}
      <div className="total">
        <span>Total amount</span>
        <span>{`£${cartContext.totalPrice.toFixed(2)}`}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
