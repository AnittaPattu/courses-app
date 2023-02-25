import Logo from "./components/Logo/logo";
import logo from "../../assets/logo.png";
import Button from "../../common/Button/button";
import { useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const HEADER_BUTTON_TEXT = "Logout";
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  let hideName = true;
  const name = "";
  if (location.pathname.includes("course")) {
    hideName = false;
  }
  if (localStorage.getItem("token")) {
    name = localStorage.getItem("token").user.name;
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="header-container">
      <Logo imageURL={logo} />
      {hideName === false && (
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
