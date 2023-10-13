import Summary from "./Summary/Summary";
import ListOfMeals from "./ListOfMeals/ListOfMeals";

const Meals: React.FC<any> = () => {
  return (
    <div>
      <Summary />
      <ListOfMeals />
    </div>
  );
};

export default Meals;
