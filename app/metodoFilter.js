const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id); // Captura id do elemento clicado
  const categoria = elementoBtn.value;                  // Captura o valor da chave "value"
  let livrosFiltrados = livros.filter(livro => {
    return livro.categoria == categoria;
  });
  exibirLivrosNaTela(livrosFiltrados);
}