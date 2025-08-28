import { useState } from "react";
import Input from "./Input";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredInputs, setEnteredInputs] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredInputs.email.includes("@");
  const passwordIsInvalid = didEdit.password && enteredInputs.password.trim().length < 6;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Email: ${enteredInputs.email} \nPassword: ${enteredInputs.password}`
    );
    setEnteredInputs({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setEnteredInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredInputs.email}
          error={emailIsInvalid && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredInputs.password}
          error={passwordIsInvalid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
