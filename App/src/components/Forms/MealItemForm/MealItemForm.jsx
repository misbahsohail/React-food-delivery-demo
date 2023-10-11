import "./MealItemForm.scss";
import Input from "../../UI/Input/Input";
const MealItemForm = () => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "5",
          step: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
