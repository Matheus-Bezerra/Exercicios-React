// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const App = () => {
  const [secao, setSecao] = React.useState(null);

  React.useEffect(() => {
    if (secao == null) {
      const localSecao = window.localStorage.getItem('secao');
      setSecao(localSecao);
    }
  }, []);

  function handleClick(event) {
    event.preventDefault();
    window.localStorage.setItem('secao', event.target.innerText);
    setSecao(window.localStorage.getItem('secao'));
  }
  return (
    <div>
      <ul>
        <li>
          <a href="#" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick}>
            Produtos
          </a>
        </li>
      </ul>
      {secao == 'Produtos' ? <Produtos produtos={produtos} /> : <Home />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
