import "./HeaderCartButton.scss";
import { CartFill } from "react-bootstrap-icons";

type HeaderCartButtonType = {
  cartItemsCount: number;
  onButtonClick: () => void;
};

const HeaderCartButton: React.FC<HeaderCartButtonType> = ({
  onButtonClick,
  cartItemsCount,
}) => {
  return (
    <button onClick={onButtonClick} className="button">
      <span className="icon">
        <CartFill className="cart-icon" size={22} />
      </span>
      <span>Your cart</span>
      <span className="badge">{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
