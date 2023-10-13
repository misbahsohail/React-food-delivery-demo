import React, { useContext } from "react";
import mealsImage from "../../../assets/meals.jpg";
import "./Header.scss";
import HeaderCartButton from "./HeaderCart/HeaderCartButton";
import CartContext from "../../../store/Cart/CartContext";

const Header = ({ onCartClicked }) => {
  const cartContext = useContext(CartContext);
  return (
    <React.Fragment>
      <header class="header">
        <h1>Meals</h1>
        <HeaderCartButton
          onButtonClick={onCartClicked}
          cartItems={cartContext.items.length}
        />
      </header>

      <div class="main-image">
        <img src={mealsImage} alt="Table with food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
