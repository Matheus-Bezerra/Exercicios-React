const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (global.produtos === null) return null;
  return (
    <div>
      Produto:
      {global.produtos.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <br />
      <Limpar />
    </div>
  );
};
