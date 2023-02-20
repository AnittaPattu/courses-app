const Input = (props) => {
  return (
    <>
      <label className={props.labelClass}>{props.labelText}</label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        id={props.id}
        className={props.class}
        onChange={(e) => {
          props.change(e.target.value);
        }}
      />
    </>
  );
};

export default Input;
