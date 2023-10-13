import "./Input.scss";

type InputProps = {
  label: string;
  input: { [key: string]: any };
};

const Input: React.FC<InputProps> = ({ label, input }) => {
  return (
    <div className="input">
      <label htmlFor={input.id} className="label">
        {label}
      </label>
      <input {...input} />
    </div>
  );
};

export default Input;
