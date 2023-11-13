import classes from "./Input.module.css";

const Input: React.FC<{
  required?: boolean;
  type: string;
  label: string;
  onChange: () => void;
}> = (props) => {
  return (
    <div className={classes["input-container"]}>
      <label className={classes["label"]}>
        {props.label}{" "}
        {props.required && <span className={classes["required"]}>*</span>}
      </label>
      <input
        className={classes["input"]}
        placeholder={props.label}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
