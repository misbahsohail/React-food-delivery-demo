import { useContext, Fragment } from "react";
import mealsImage from "./../../../assets/meals.jpg";
import "./Header.scss";
import HeaderCartButton from "./HeaderCart/HeaderCartButton";
import CartContext from "../../../store/Cart/CartContext";

const Header = ({ onCartClicked }) => {
  const cartContext = useContext(CartContext);
  return (
    <Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton
          onButtonClick={onCartClicked}
          cartItemsCount={cartContext.items.length}
        />
      </header>

      <div className="main-image">
        <img src={mealsImage} alt="Table with food" />
      </div>
    </Fragment>
  );
};

export default Header;
