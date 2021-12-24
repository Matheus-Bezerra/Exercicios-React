// Crie um componente Radio no React

const App = () => {
  const [option, setOption] = React.useState('');
  return (
    <form>
      <Radio
        options={['Notebook', 'TV', 'Smartphone', 'Tablet', 'Desktop']}
        value={option}
        setValue={setOption}
      />
      {option && <h2>Produto escolhido // {option}</h2>}
      <button>Enviar</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
