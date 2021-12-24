// Crie um componente Input no React

const App = () => {
  const [input, setInput] = React.useState('');
  return (
    <form>
      <Input
        id="nome: "
        value={input}
        setValue={setInput}
        required
        placeholder="Digite seu nome"
      />
      <button>ENVIAR</button>
    </form>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
