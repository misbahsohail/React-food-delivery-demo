import { DUMMY_MEALS } from "../../../data/meals";
import MealItem from "./MealItem/MealItem";
import "./ListOfMeals";
import Card from "../../UI/Card/Card";
const ListOfMeals: React.FC<any> = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default ListOfMeals;
