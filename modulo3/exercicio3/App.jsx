const App = () => {
  const [select, setSelect] = React.useState('');
  return (
    <div>
      <h1>Escolha sua plataforma preferida abaixo: </h1>
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Escolha
          </option>
          <option value="smartphone">Smartphone</option>
          <option value="notebook">Notebook</option>
          <option value="tablet">Tablet</option>
        </select>
      </form>
      <h2>{select}</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
