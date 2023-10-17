import { useContext, useState } from "react";
import MealItemForm from "../../../Forms/MealItemForm/MealItemForm";
import "./MealItem.scss";
import CartContext, { Item } from "../../../../store/Cart/CartContext";

type MeanItemProps = {
  meal: Item;
};

const MealItem: React.FC<MeanItemProps> = ({ meal }) => {
  const cartContext = useContext(CartContext);

  const initAmount = meal.amount;

  const mealAddedToCart = (newCount: number) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: newCount,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{`£${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm
          id={meal.id}
          mealAddedToCart={mealAddedToCart}
          initialAmount={initAmount}
        />
      </div>
    </li>
  );
};

export default MealItem;
