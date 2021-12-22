// Crie um input radio reativo no React

const App = () => {
  const [radio, setRadio] = React.useState(null);
  function handleChange({ target }) {
    setRadio(target.value);
  }
  return (
    <form>
      <h1>Escolha seu produto para a Black Friday</h1>
      {radio && <h2>Sua escolha foi: {radio}</h2>}
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          onChange={handleChange}
        />
        Tablet
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
