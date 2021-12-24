const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <React.Fragment>
      {options.map((option) => (
        <label key={option}>
          <input type="checkbox" value={option} onChange={handleChange} />
          {option}
        </label>
      ))}
    </React.Fragment>
  );
};
