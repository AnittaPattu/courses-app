import "../Common.module.css";
import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button
      className={props.class}
      id={props.id}
      onClick={() => props.handleClick()}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  class: PropTypes.string,
  id: PropTypes.string,
  handleClick: PropTypes.func,
};
