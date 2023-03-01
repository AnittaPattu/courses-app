import PropTypes from "prop-types";

const InputTextbox = (props) => {
  return (
    <>
      <textarea
        placeholder={props.placeholder}
        className={props.textAreaclass}
        onChange={(e) => {
          props.textChange(e.target.value);
        }}
      ></textarea>
    </>
  );
};

export default InputTextbox;

InputTextbox.propTypes = {
  textAreaclass: PropTypes.string,
  textChange: PropTypes.func,
  plceholder: PropTypes.string,
};
