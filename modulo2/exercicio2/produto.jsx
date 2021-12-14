const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json))
        .catch((error) => console.log('Erro ao consumir a api' + error));
    }
  }, [produto]);

  if (dados == null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};
