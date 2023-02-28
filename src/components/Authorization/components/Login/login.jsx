import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/button";
import Input from "../../../../common/Input/input";

export const Login = () => {
  const navigate = useNavigate();
  const name = "";
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const loginUrl = "http://localhost:4000/login";

  const emailData = (data) => {
    setemail(data);
  };
  const passwordData = (data) => {
    setPassword(data);
  };

  function login() {}

  async function formData() {
    const data = {
      name,
      email,
      password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch(loginUrl, requestOptions);
    const loginData = await response.json();
    if (loginData.successful) {
      navigate("/login", { replace: true });
    } else {
      error = loginData.errors;
      alert(error);
    }
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
        <Link to={`registration`}>Registration</Link>
      </p>
    </div>
  );
};
