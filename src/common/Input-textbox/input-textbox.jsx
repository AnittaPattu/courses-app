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
