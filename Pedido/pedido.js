/* ================================================================
   pedido.js — Lógica do Pedido Especial 💍
   Controla o botão "Sim", a fuga do botão "Não" e a mensagem final.
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* Contador de tentativas de clicar em "Não" */
  var tentativas = 0;

  /* Controla se a mensagem de derrota já foi exibida */
  var mensagemExibida = false;

  /* --- Função de resposta positiva (chamada pelo onclick inline do HTML) --- */
  function responderSim() {
    var questionText = document.getElementById('question-text');
    var wrapper      = document.getElementById('button-wrapper');
    var decor        = document.querySelector('.decor-line');

    /* Substitui a pergunta pela confirmação carinhosa */
    questionText.innerText = 'Já pode beijar o namorado!';

    /* Remove elementos desnecessários após o "Sim" */
    var warning = document.querySelector('.warning-message');
    if (warning) warning.remove();
    if (wrapper) wrapper.remove();
    if (decor)   decor.remove();
  }

  /* Expõe a função globalmente para o onclick do botão "Sim" no HTML */
  window.responderSim = responderSim;

  var noBtn    = document.querySelector('.no-btn');
  var container = document.getElementById('reveal-container');

  /* Posições de fuga do botão "Não" em cada clique */
  var posicoes = [
    { x: '100px', y: '-40px' }, /* 1º clique: sobe e vai para a direita */
    { x: '80px',  y:  '40px' }  /* 2º clique: desce e continua na direita */
  ];

  /* Faz o botão "Não" escapar ou sumir no 3º clique */
  function fugir() {
    if (tentativas < posicoes.length) {
      var pos = posicoes[tentativas];
      noBtn.style.position  = 'relative';
      noBtn.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
      noBtn.style.transform  = 'translate(' + pos.x + ', ' + pos.y + ')';
      tentativas++;
    } else {
      /* 3º clique: esconde o botão e exibe a mensagem de derrota carinhosa */
      if (!mensagemExibida) {
        var mensagem       = document.createElement('p');
        mensagem.innerText = 'Acho que não vai funcionar!';
        mensagem.className = 'warning-message';
        container.appendChild(mensagem);
        mensagemExibida = true;
      }
      noBtn.style.display = 'none';
    }
  }

  /* O botão "Não" só foge ao clicar — não ao passar o mouse */
  noBtn.addEventListener('click', function (e) {
    e.preventDefault();
    fugir();
  });

});
