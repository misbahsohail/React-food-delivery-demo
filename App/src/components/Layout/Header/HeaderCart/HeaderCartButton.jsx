import "./HeaderCartButton.scss";
import { CartFill } from "react-bootstrap-icons";

const HeaderCartButton = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick} class="button">
      <span class="icon">
        <CartFill class="cart-icon" size={22} />
      </span>
      <span>Your cart</span>
      <span class="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
