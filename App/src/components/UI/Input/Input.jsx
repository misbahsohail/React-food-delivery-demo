import "./Input.scss";

const Input = ({ label, input }) => {
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
