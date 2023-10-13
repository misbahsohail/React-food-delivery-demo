import "./HeaderCartButton.scss";
import { CartFill } from "react-bootstrap-icons";

const HeaderCartButton = ({ onButtonClick, cartItems }) => {
  return (
    <button onClick={onButtonClick} class="button">
      <span class="icon">
        <CartFill class="cart-icon" size={22} />
      </span>
      <span>Your cart</span>
      <span class="badge">{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
