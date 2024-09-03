// Array para armazenar os itens do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeJogo, precoJogo, imagemJogo) {
  const item = {
    nome: nomeJogo,
    preco: precoJogo,
    imagem: imagemJogo
  };
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nomeJogo} foi adicionado ao carrinho!`);
}

// Função para associar eventos de clique nos botões "Adicionar ao carrinho"
function associarEventos() {
  const botoesAdicionar = document.querySelectorAll('button.adicionar');
  botoesAdicionar.forEach((botao, index) => {
    botao.addEventListener('click', () => {
      const nomeJogo = botao.parentElement.querySelector('h3').textContent;
      const precoJogo = botao.parentElement.querySelector('p:nth-of-type(2)').textContent.replace('R$ ', '');
      const imagemJogo = botao.parentElement.querySelector('img').src;
      adicionarAoCarrinho(nomeJogo, parseFloat(precoJogo), imagemJogo);
    });
  });
}

document.addEventListener('DOMContentLoaded', associarEventos);
