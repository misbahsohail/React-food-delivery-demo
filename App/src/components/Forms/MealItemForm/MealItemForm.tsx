import "./MealItemForm.scss";
import Input from "../../UI/Input/Input";

type MealItemFormProps = {
  id: number;
};

const MealItemForm: React.FC<MealItemFormProps> = ({ id }) => {
  const submitHandler = (event) => {
    event.preventHandler();
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
