const Produtos = ({ produtos }) => {
  return (
    <div>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      {produtos.map((produto) => {
        return (
          <div
            key={produto.nome}
            style={{
              border: '2px solid black',
              marginBottom: '2rem',
              padding: '1rem',
            }}
          >
            <p>{produto.nome}</p>
            {produto.propriedades.map((config) => {
              return <li key={config}>{config}</li>;
            })}
          </div>
        );
      })}
    </div>
  );
};
