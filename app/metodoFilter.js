const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementosBtn = document.getElementById(this.id); // Captura id do elemento clicado
  const categoria = elementosBtn.value;                  // Captura o valor da chave "value"
  let livrosFiltrados = livros.filter(livro => {
    return livro.categoria == categoria;
  });
  console.table(livrosFiltrados)
}