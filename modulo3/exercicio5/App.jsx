// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }
  return (
    <form>
      <h1>Escolha suas cores Preferidas</h1>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input type="checkbox" value={cor} onChange={handleChange} />
          {cor}
        </label>
      ))}
      {cores.length > 0 && <h2>Cores Preferidas: {`${cores}, `}</h2>}
    </form>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
