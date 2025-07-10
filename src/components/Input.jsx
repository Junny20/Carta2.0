function Input(props) {
  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      required
    ></input>
  );
}

export default Input;
