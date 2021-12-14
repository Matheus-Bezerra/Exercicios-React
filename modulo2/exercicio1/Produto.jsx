const Produto = ({ dados, carregando }) => {
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      {dados.fotos.map((foto) => (
        <img src={foto.src} alt={foto.titulo} key={foto.titulo} />
      ))}
    </div>
  );
};
