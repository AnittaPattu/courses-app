import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../common/Button/button";
import Input from "../../../../common/Input/input";

const Registration = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

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
    console.log(data);

    const newUser = {
      name: "Anitta",
      password: "anitta",
      email: "anittapattu@gmail.com",
    };

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.successful) {
      navigate("/login", { replace: true });
    } else {
      // error = errors;
      alert(errors);
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
            handleClick={registration}
          />
        </form>
      </div>
      <p className="align-center">
        If you have an account you can <Link to="login">Login</Link>
      </p>
    </div>
  );
};

export default Registration;
