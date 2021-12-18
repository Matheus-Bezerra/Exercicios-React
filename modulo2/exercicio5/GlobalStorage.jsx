const GlobalContext = React.createContext();
const GlobalStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProdutos(json))
      .catch((error) => console.log('Ocorreu um erro na requisição ' + error));
  }, []);

  function limparDados() {
    setProdutos(null);
  }
  return (
    <GlobalContext.Provider value={{ produtos, setProdutos, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
