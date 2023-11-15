import classes from "./Button.module.css";

const Button: React.FC<{
  children: any;
  onClick?: () => void;
  type: string;
}> = (props) => {
  return (
    <button className={classes["button-container"]}>{props.children}</button>
  );
};
export default Button;
