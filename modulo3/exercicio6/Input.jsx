const Input = ({ id, value, setValue, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{id}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </React.Fragment>
  );
};
