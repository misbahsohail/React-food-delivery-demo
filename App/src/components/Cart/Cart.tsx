import Modal from "../UI/Modal/Modal";
import "./Cart.scss";
type CartProps = {
  onClose: () => void;
};
const Cart: React.FC<CartProps> = ({ onClose }) => {
  const CartIems = (
    <ul className="cart-items">
      {[{ id: 1, name: "Sushi", amount: 2, price: 2.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {CartIems}
      <div className="total">
        <span>Total amount</span>
        <span>2.99</span>
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
