import "./MealItem.scss";
const MealItem = ({ meal }) => {
  return (
    <li className="meal">
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{`£${meal.price.toFixed(2)}`}</div>
      </div>
    </li>
  );
};

export default MealItem;
