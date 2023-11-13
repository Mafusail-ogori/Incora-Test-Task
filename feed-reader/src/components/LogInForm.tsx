import Input from "../ui/input/Input";
import LogInWrapper from "../ui/uiWrappers/LogInWrapper";
import Button from "../ui/button/Button";

const LogInForm = () => {
  const emptyFoo = () => {};
  return (
    <LogInWrapper>
      <h1>Log In</h1>
      <Input label="Username" type="text" onChange={emptyFoo} required={true} />
      <Input label="Email" type="email" onChange={emptyFoo} required={true} />
      <Input
        label="Password"
        type="password"
        onChange={emptyFoo}
        required={true}
      />
      <Button onClick={emptyFoo} type="submit">
        SUBMIT
      </Button>
    </LogInWrapper>
  );
};

export default LogInForm;
