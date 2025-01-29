const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id); // Captura id do elemento clicado
  const categoria = elementoBtn.value;                  // Captura o valor da chave "value"
  let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
  exibirLivrosNaTela(livrosFiltrados);
}
