// Crie um hook para realizar requisição
// tendo o momento de loading, error e request
const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');
  }, [request]);
  if (error) return <p>Ops! Ocorreu um erro: {error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;
};

ReactDOM.render(<App />, document.getElementById('app'));
