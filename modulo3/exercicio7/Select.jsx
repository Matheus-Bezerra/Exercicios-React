const Select = ({ options, id, value, setValue }) => {
  return (
    <React.Fragment>
      <select value={value} onChange={({ target }) => setValue(target.value)}>
        <option value="" disabled>
          Escolha
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </React.Fragment>
  );
};
