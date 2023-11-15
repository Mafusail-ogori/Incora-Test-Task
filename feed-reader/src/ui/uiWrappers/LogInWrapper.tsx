import { FormEvent } from "react";
import classes from "./LogInWrapper.module.css";

const LogInWrapper: React.FC<{
  children: any;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}> = (props) => {
  return (
    <form className={classes["wrapper-container"]} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default LogInWrapper;
