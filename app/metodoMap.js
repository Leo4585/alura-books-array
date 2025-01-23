function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * desconto)}
  });
  return livrosComDesconto;
}

// O "...livro" faz a cópia do array "livros"