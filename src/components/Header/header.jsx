import Logo from "./components/Logo/logo";
import logo from "../../assets/logo.png";
import Button from "../../common/Button/button";

function Header(props) {
  const HEADER_BUTTON_TEXT = "Logout";

  return (
    <div className="header-container">
      <Logo imageURL={logo} />
      <div className="float-right">
        <span className="px-3 font-weight-bold toUpper">{props.name}</span>
        <Button buttonText={HEADER_BUTTON_TEXT} class="button" />
      </div>
    </div>
  );
}

export default Header;
