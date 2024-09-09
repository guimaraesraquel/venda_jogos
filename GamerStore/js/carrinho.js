// Recupera os itens do carrinho armazenados
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para renderizar o carrinho na página
function renderizarCarrinho() {
  const carrinhoContainer = document.querySelector('.cart');
  carrinhoContainer.innerHTML = '<h1>Meu Carrinho</h1>';
  let total = 0;

  if (carrinho.length === 0) {
    carrinhoContainer.innerHTML += '<p>Seu carrinho está vazio.</p>';
  } else {
    carrinho.forEach((item, index) => {
      total += item.preco;
      carrinhoContainer.innerHTML += `
        <div class="item">
          <div class="item-left">
            <img src="${item.imagem}" alt="Capa do Jogo" />
            <div class="item-info">
              <h3>${item.nome}</h3>
            </div>
          </div>
          <div class="item-details">
            <p>Valor: R$ ${item.preco.toFixed(2)}</p>
            <button class="remove-btn" onclick="removerDoCarrinho(${index})">Remover</button>
          </div>
        </div>`;
    });
  }

  document.querySelector('.total p').textContent = `R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();
}

// Função para mostrar os campos de pagamento com base na seleção do método
function atualizarCamposPagamento() {
  const metodoPagamento = document.querySelector('input[name="payment-method"]:checked').value;
  const camposPagamento = document.querySelector('.payment-fields');
  camposPagamento.innerHTML = '';

  if (metodoPagamento === 'cartao') {
    camposPagamento.innerHTML = `
      <div class="form-group">
        <label for="full-name">Nome Completo:</label>
        <input type="text" id="full-name" name="full-name" required placeholder="Digite o nome completo" pattern="[A-Za-z]+" title="Este campo deve conter apenas letras."/>
      </div>
      <div class="form-group">
        <label for="card-number">Número do Cartão:</label>
        <input type="text" id="card-number" name="card-number" required placeholder="Digite o número do cartão"pattern="\\d{16}" title="O número do cartão deve ter 16 dígitos." />
      </div>
      <div class="form-group">
        <label for="expiry-date">Data de Validade:</label>
        <input type="text" id="expiry-date" name="expiry-date" required placeholder="MM/AA" pattern="\\d{2}/\\d{2}" title="Formato deve ser MM/AA." />
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required placeholder="Digite o CVV de 3 dígitos" pattern="\\d{3}" title="O CVV deve ter 3 dígitos." />
      </div>`;
  } else if (metodoPagamento === 'boleto') {
    camposPagamento.innerHTML = `<p>Instruções para pagamento via boleto serão enviadas para seu e-mail.</p>`;
  } else if (metodoPagamento === 'pix') {
    camposPagamento.innerHTML = `<p>Informações para pagamento via PIX serão enviadas para seu e-mail.</p>`;
  }
}

// Função para validar o formulário de pagamento
function validarFormulario() {
  const form = document.getElementById('payment-form');
  let isValid = true;

  // Verifica se o formulário é válido
  if (!form.checkValidity()) {
    // Adiciona feedback visual aos campos inválidos
    form.reportValidity();
    isValid = false;
  }
  
  return isValid;
}

// Função para limpar os dados do formulário de pagamento
function limparFormulario() {
  document.getElementById('payment-form').reset();
}

// Função para simular a verificação do cartão
function verificarCartao(callback) {
  // Simulação de um processo de verificação do cartão com atraso
  setTimeout(() => {
    callback();
  }, 2000); // 2 segundos de atraso para simular a verificação
}

// Adiciona o evento de clique ao botão "Finalizar Compra"
document.addEventListener('DOMContentLoaded', () => {
  renderizarCarrinho();
  const finalizarCompraBtn = document.querySelector('.checkout-btn');
  if (finalizarCompraBtn) {
    finalizarCompraBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o envio do formulário

      if (carrinho.length === 0) {
        // Verifica se o carrinho está vazio
        alert('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
      } else if (validarFormulario()) {
        const metodoPagamento = document.querySelector('input[name="payment-method"]:checked').value;

        if (metodoPagamento === 'cartao') {
          // Mostra o loading durante a verificação do cartão
          finalizarCompraBtn.textContent = 'Verificando cartão...';
          finalizarCompraBtn.disabled = true;

          verificarCartao(() => {
            // Se a verificação do cartão for bem-sucedida
            alert('Compra finalizada com sucesso! Você receberá um e-mail com os dados de sua compra!');
            
            // Limpa o localStorage e o carrinho
            localStorage.removeItem('carrinho');
            renderizarCarrinho(); // Atualiza o carrinho após a limpeza

            // Limpa o formulário de pagamento
            limparFormulario();

            // Recarrega a página
            setTimeout(() => {
              window.location.reload();
            }, 500); // Adiciona um atraso de 500ms para garantir que o alerta seja exibido antes da recarga
          });

        } else if (metodoPagamento === 'boleto') {
          // Para boleto, apenas mostra a mensagem de confirmação
          alert('Compra finalizada com sucesso! As instruções para pagamento via boleto foram enviadas para seu e-mail.');
          
          // Limpa o localStorage e o carrinho
          localStorage.removeItem('carrinho');
          renderizarCarrinho(); // Atualiza o carrinho após a limpeza

          // Limpa o formulário de pagamento
          limparFormulario();

          // Recarrega a página
          setTimeout(() => {
            window.location.reload();
          }, 500); // Adiciona um atraso de 500ms para garantir que o alerta seja exibido antes da recarga
          
        } else if (metodoPagamento === 'pix') {
          // Para PIX, apenas mostra a mensagem de confirmação
          alert('Compra finalizada com sucesso! As informações para pagamento via PIX foram enviadas para seu e-mail.');
          
          // Limpa o localStorage e o carrinho
          localStorage.removeItem('carrinho');
          renderizarCarrinho(); // Atualiza o carrinho após a limpeza

          // Limpa o formulário de pagamento
          limparFormulario();

          // Recarrega a página
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Adiciona um atraso de 500ms para garantir que o alerta seja exibido antes da recarga
        }
      }
    });
  }

  // Adiciona o evento de mudança de método de pagamento
  const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
  paymentMethods.forEach(method => {
    method.addEventListener('change', atualizarCamposPagamento);
  });

  // Inicializa a exibição dos campos de pagamento
  atualizarCamposPagamento();
});
