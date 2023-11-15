import Input from "../ui/input/Input";
import LogInWrapper from "../ui/uiWrappers/LogInWrapper";
import Button from "../ui/button/Button";
import { FormEvent, useState } from "react";
import { User } from "../models/User";

const LogInForm: React.FC<{ users: User[] }> = (props) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = props.users.find((user) => user.username === login);

    console.log(user, login, password);
  };

  return (
    <LogInWrapper onSubmit={handleSubmit}>
      <h1>Log In</h1>
      <Input
        label="LogIn"
        type="text"
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        required={true}
      />
      <Input
        label="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        required={true}
      />
      <Button type="submit">SUBMIT</Button>
    </LogInWrapper>
  );
};

export default LogInForm;
