// Crie um componente Select no React

const App = () => {
  const [select, setSelect] = React.useState('');
  return (
    <form>
      <Select
        id="produtos"
        value={select}
        setValue={setSelect}
        options={['Notebook', 'Tablet', 'TV', 'Smartphone', 'Radio']}
      />
      <button>Enviar</button>
      {select ? <h2>O Produto escolhido foi {select}</h2> : ''}
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
