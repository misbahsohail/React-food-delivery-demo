import "./MealItemForm.scss";
import Input from "../../UI/Input/Input";
import { useRef, useState, useEffect } from "react";

type MealItemFormProps = {
  id: string;
  mealAddedToCart: (number) => void;
  initialAmount: number;
};

const MealItemForm: React.FC<MealItemFormProps> = ({
  id,
  mealAddedToCart,
  initialAmount,
}) => {
  const amountInputRef = useRef<HTMLInputElement>(undefined);
  const [formValid, setFormValidity] = useState(true);
  const [isInputUpdated, inputUpdate] = useState(false);

  useEffect(() => {
    amountInputRef.current.value = initialAmount.toString();
  }, [initialAmount]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;
    if ((enteredAmount === 0 || enteredAmount < 0) && !isInputUpdated) {
      setFormValidity(false);
      return;
    }
    setFormValidity(true);
    inputUpdate(true);
    mealAddedToCart(enteredAmount);
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
          defaultValue: initialAmount,
        }}
        ref={amountInputRef}
      />
      <button>Add</button>
      {!formValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
