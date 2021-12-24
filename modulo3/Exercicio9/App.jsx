// Crie um componente Checkbox no React

const App = () => {
  const [check, setCheck] = React.useState([]);
  console.table(check);
  return (
    <form>
      <Checkbox
        options={[
          'Azul',
          'Vermelho',
          'Amarelo',
          'Rosa',
          'Laranja',
          'verde',
          'Roxo',
        ]}
        value={check}
        setValue={setCheck}
      />
      <button>Enviar</button>
      {check.length > 0 && (
        <h2>
          {check.map((cor) => (
            <span key={cor}>{cor} \ </span>
          ))}
        </h2>
      )}
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
