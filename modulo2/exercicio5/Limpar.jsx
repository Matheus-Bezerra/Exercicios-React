const Limpar = () => {
  const global = React.useContext(GlobalContext);
  return <button onClick={global.limparDados}>Limpar</button>;
};
