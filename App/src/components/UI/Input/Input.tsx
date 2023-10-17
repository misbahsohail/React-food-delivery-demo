import "./Input.scss";
import { forwardRef } from "react";

type InputProps = {
  label: string;
  input: { [key: string]: any };
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, input }, ref) => {
    return (
      <div className="input">
        <label htmlFor={input.id} className="label">
          {label}
        </label>
        <input {...input} ref={ref} />
      </div>
    );
  }
);

export default Input;
