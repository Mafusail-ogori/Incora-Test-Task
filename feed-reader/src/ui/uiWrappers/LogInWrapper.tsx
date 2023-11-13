import classes from "./LogInWrapper.module.css";

const LogInWrapper: React.FC<{ children: any }> = (props) => {
  return <form className={classes["wrapper-container"]}>{props.children}</form>;
};

export default LogInWrapper;
