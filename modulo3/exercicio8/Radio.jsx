const Radio = ({ options, value, setValue }) => {
  console.table(options);
  return (
    <React.Fragment>
      {options.map((option) => (
        <label key={option}>
          {option}
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
        </label>
      ))}
    </React.Fragment>
  );
};
