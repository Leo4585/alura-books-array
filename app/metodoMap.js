function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * desconto)} // Estrutura simplificada que retorna todo o array 'livros', mas alterando apenas o valor da chave 'preço'
  });
  return livrosComDesconto;
}

// O "...livro" faz a cópia do array "livros"