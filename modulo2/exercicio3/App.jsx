// Crie um formulário, onde toda vez que for enviado
// pegue o valor do input e mostre com os valores anteriores, como se fosse mensagens já enviadas
// Após isso selecione o elemento html, o ref e utilize focus após o envio

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputEl = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comentario">Comentarios: </label>
        <input type="text" id="comentario" ref={inputEl} />
        <button>Enviar</button>
      </form>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
