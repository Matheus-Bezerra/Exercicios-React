// Crie um textarea reativo no React

const App = () => {
  const [mensagem, setMensagem] = React.useState(null);
  return (
    <form>
      {mensagem && <h1>{mensagem}</h1>}
      <textarea
        id="mensagem"
        cols="30"
        rows="10"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      ></textarea>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
