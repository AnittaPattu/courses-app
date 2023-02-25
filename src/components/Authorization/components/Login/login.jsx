import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/button";
import Input from "../../../../common/Input/input";

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const emailData = (data) => {
    setemail(data);
  };
  const passwordData = (data) => {
    setPassword(data);
  };

  function login() {}

  async function formData(data) {
    var data = {
      name: "",
      email: email,
      password: password,
    };
    console.log(data);
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <div className="login-form-content">
        <form type="submit" onSubmit={formData}>
          <Input
            labelText="Email"
            inputType="email"
            placeholder="Enter Email id"
            id="email"
            value={email}
            labelClass="registration-label-text"
            change={emailData}
          />
          <Input
            labelText="Password"
            inputType="password"
            placeholder="password"
            id="password"
            value={password}
            labelClass="registration-label-text"
            change={passwordData}
          />
          <Button
            type="submit"
            buttonText="Login"
            class="button auth-btn"
            handleClick={login.bind(this)}
          />
        </form>
      </div>
      <p className="align-center">
        If you not have an account you can{" "}
        <Link to={`/registration`}>Registration</Link>
      </p>
    </div>
  );
};
