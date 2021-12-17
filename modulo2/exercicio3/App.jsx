// Crie um formulário, onde toda vez que for enviado
// pegue o valor do input e mostre com os valores anteriores, como se fosse mensagens já enviadas
// Após isso selecione o elemento html, o ref e utilize focus após o envio
// Simulando como se fosse um chat de rede social

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputEl = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    inputEl.current.focus();
    const value = inputEl.current.value;
    if (value.trim()) {
      setComentarios([...comentarios, value]);
      setInput('');
    }
  }

  function handleChange({ target }) {
    setInput(target.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comentario">Comentarios: </label>
        <input
          type="text"
          id="comentario"
          ref={inputEl}
          value={input}
          onChange={handleChange}
        />
        <button>Enviar</button>
        <br />
        <br />
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
      </form>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
