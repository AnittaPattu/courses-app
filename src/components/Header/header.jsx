import Logo from "./components/Logo/logo";
import logo from "../../assets/logo.png";
import Button from "../../common/Button/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const HEADER_BUTTON_TEXT = "Logout";
  const location = useLocation();
  const navigate = useNavigate();
  let showName = false;
  let name = "";

  useEffect(() => {
    if (!["login", "registration"].includes(location.pathname)) {
      showName = true;
    }
    if (localStorage.getItem("token")) {
      name = JSON.parse(localStorage.getItem("token")).user.name;
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="header-container">
      <Logo imageURL={logo} />
      {showName && (
        <div className="float-right">
          <span className="px-3 font-weight-bold toUpper">{name}</span>
          <Button
            buttonText={HEADER_BUTTON_TEXT}
            class="button"
            handleClick={logout}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
