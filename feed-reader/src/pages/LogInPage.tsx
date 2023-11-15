import LogInForm from "../components/LogInForm";
import classes from "./LogInPage.module.css";

const LogInPage = () => {
  return (
    <main className={classes["page-container"]}>
      <LogInForm />
    </main>
  );
};

export default LogInPage;
