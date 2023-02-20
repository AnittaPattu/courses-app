import "../Common.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
