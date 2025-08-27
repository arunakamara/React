import { useState } from "react";
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
  })

  const emailIsInvalid =
    didEdit.email && !enteredInputs.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Email: ${enteredInputs.email} \nPassword: ${enteredInputs.password}`
    );
  }

  function handleInputChange(identifier, value) {
    setEnteredInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: value,
    }));

    setDidEdit(prevEdit => ({
        prevEdit,
        [identifier]: false,
    }))
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur('email')}
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredInputs.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredInputs.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
