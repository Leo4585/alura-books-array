let livros = [];  // Variável declarada no escopo global para poder ser acessada pelos outros documentos .js
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();  // Aqui a chamada da função assíncrona atualizou a variável "livros"

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();                       // *** Aqui a variável "livros" é atualizada. É esta lista "livros" que é usada nos outros documentos .js
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto);
}
