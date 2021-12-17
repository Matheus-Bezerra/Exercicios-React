// 1 - Deixe a função de operaçao lenta mais rapida conforme o componente for atualizado
// ou a página reabrir com o cache ativado

// 2 - Faça uma função de callback usando o callback da bilioteca do React
// onde esse callback vai fazer o estado contar somar + 1
function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);

  const [contar, setContar] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);
  return (
    <React.Fragment>
      {contar} :<button onClick={handleClick}>Contar</button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
