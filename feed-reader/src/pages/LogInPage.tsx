import { useSelector } from "react-redux";
import LogInForm from "../components/LogInForm";
import classes from "./LogInPage.module.css";
import { RootState, useAppDispatch } from "../store";
import { useEffect } from "react";
import { getUsersData } from "../store/userActions";
import { User } from "../models/User";

const LogInPage = () => {
  const dispatch = useAppDispatch();
  const users: User[] = useSelector((state: RootState) => state.user.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  return (
    <section className={classes["page-container"]}>
      <LogInForm users={users} />
    </section>
  );
};

export default LogInPage;
