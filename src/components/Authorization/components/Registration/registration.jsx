import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/button";
import Input from "../../../../common/Input/input";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:4000/register";
  const nameData = (data) => {
    setName(data);
  };
  const emailData = (data) => {
    setemail(data);
  };
  const passwordData = (data) => {
    setPassword(data);
  };

  function registration() {}

  async function formData() {
    const newUser = {
      name,
      password,
      email,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const registrationData = await response.json();
    if (registrationData.successful) {
      navigate("/login", { replace: true });
    } else {
      alert(registrationData.errors);
    }
  }

  return (
    <div>
      <div className="registration-form-content">
        <form type="submit" onSubmit={formData}>
          <Input
            labelText="Name"
            inputType="text"
            placeholder="Enter name"
            labelClass="registration-label-text"
            value={name}
            id="name"
            change={nameData}
          />
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
            buttonText="Registration"
            class="button auth-btn"
            handleClick={registration.bind(this)}
          />
        </form>
      </div>
      <p className="align-center">
        If you have an account you can <Link to={`/login`}>Login</Link>
      </p>
    </div>
  );
};

export default Registration;
