import MealItemForm from "../../../Forms/MealItemForm/MealItemForm";
import "./MealItem.scss";

type MeanItemProps = {
  meal: { description: string; name: string; price: number; id: number };
};

const MealItem: React.FC<MeanItemProps> = ({ meal }) => {
  return (
    <li className="meal">
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{`£${meal.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
