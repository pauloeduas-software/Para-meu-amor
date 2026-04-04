/* ================================================================
   encontro.js — Jornada do Primeiro Encontro 🗺️
   Controla a animação de preenchimento do coração SVG e
   as mensagens que aparecem a cada toque na tela.
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* Mensagens exibidas em sequência durante a jornada */
  var messages = [
    { title: 'Sua companhia me alegra.',                          sub: null },
    { title: 'Mal posso esperar para ver o seu sorriso de perto', sub: null },
    { title: 'Quero criar nossas primeiras memórias logo.',       sub: null },
    { title: 'Sinto que este é o início de tudo o que eu sempre quis', sub: null },
    { title: 'Nosso encontro começa aqui', sub: 'Mal posso esperar para te conhecer mais.' }
  ];

  /* Passo atual na jornada */
  var step        = 0;
  /* Impede cliques durante animações em andamento */
  var isAnimating = false;

  /* Referências aos elementos do DOM */
  var dom = {
    body:             document.body,
    introLayer:       document.getElementById('intro-layer'),
    heartContainer:   document.getElementById('heart-wrapper'),
    messageContainer: document.getElementById('message-wrapper'),
    journeyText:      document.getElementById('journey-text'),
    journeySubtext:   document.getElementById('journey-subtext'),
    clickPrompt:      document.getElementById('click-prompt'),
    heartLiquid:      document.getElementById('heart-liquid')
  };

  /* Atualiza todos os elementos visuais conforme o passo atual */
  function updateVisuals() {
    if (step === 0) {
      dom.introLayer.classList.remove('hidden');
      dom.heartContainer.classList.add('hidden');
      dom.messageContainer.classList.add('hidden');
      dom.clickPrompt.classList.add('hidden');
      return;
    }

    dom.introLayer.classList.add('hidden');
    dom.clickPrompt.classList.remove('hidden');
    dom.heartContainer.classList.remove('hidden');

    if (step === 1) {
      updateHeartFill(0);
      hideMessage();
      return;
    }

    var maxSteps    = (messages.length * 2) + 1;

    if (step >= maxSteps) {
      hideMessage();
      dom.clickPrompt.classList.add('hidden');
      return;
    }

    var isMessageStep = (step % 2 === 0);
    var messageIndex  = Math.floor((step - 2) / 2);

    if (isMessageStep) {
      /* Início do ciclo de mensagem — trava novos cliques durante a animação */
      isAnimating = true;

      var percentage = ((messageIndex + 1) / messages.length) * 100;

      /* 1. O coração começa a encher */
      updateHeartFill(percentage);

      /* 2. Aguarda o CSS terminar (1.5s) antes de mostrar a mensagem */
      setTimeout(function () {
        showMessage(messages[messageIndex]);

        if (messageIndex === messages.length - 1) {
          dom.heartContainer.classList.add('full');
        }
      }, 1500);

    } else {
      hideMessage();
    }
  }

  /* Anima o nível de preenchimento do coração SVG */
  function updateHeartFill(percentage) {
    if (dom.heartLiquid) {
      var newY = 95 - (percentage * 1.05);
      dom.heartLiquid.setAttribute('y', newY);
    }
  }

  /* Oculta a camada de mensagem com transição suave */
  function hideMessage() {
    dom.messageContainer.style.opacity   = '0';
    dom.messageContainer.style.transform = 'translateY(10px)';
    setTimeout(function () {
      dom.messageContainer.classList.add('hidden');
    }, 400);
  }

  /* Exibe uma nova mensagem com animação de entrada */
  function showMessage(msg) {
    /* isAnimating já é true neste ponto */

    /* Fade-out do conteúdo anterior */
    dom.messageContainer.style.opacity   = '0';
    dom.messageContainer.style.transform = 'translateY(10px)';

    setTimeout(function () {
      dom.journeyText.textContent = '';
      dom.journeySubtext.textContent = '';
      dom.journeySubtext.style.display = 'none';
      dom.journeySubtext.classList.remove('show-sub');

      /* Insere o novo conteúdo e anima a entrada */
      dom.journeyText.textContent = msg.title;
      dom.messageContainer.classList.remove('hidden');

      requestAnimationFrame(function () {
        dom.messageContainer.style.opacity   = '1';
        dom.messageContainer.style.transform = 'translateY(0)';

        if (msg.sub) {
          dom.journeySubtext.textContent     = msg.sub;
          dom.journeySubtext.style.display   = 'block';
          setTimeout(function () {
            dom.journeySubtext.classList.add('show-sub');
          }, 300);
        }

        /* Destrava a interação após a animação completar */
        setTimeout(function () {
          isAnimating = false;
        }, 600);
      });

    }, 300);
  }

  /* Avança a jornada ao clicar — ignora o link "Voltar" e animações em curso */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.back-link') || isAnimating) return;
    var maxSteps = (messages.length * 2) + 1;
    if (step < maxSteps) {
      step++;
      updateVisuals();
    }
  });

  /* Suporte a navegação por teclado (Espaço, Seta, Enter) */
  document.addEventListener('keydown', function (e) {
    if (isAnimating) return;
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      var maxSteps = (messages.length * 2) + 1;
      if (step < maxSteps) {
        step++;
        updateVisuals();
      }
    }
  });

  /* Inicialização */
  updateVisuals();
  updateHeartFill(0);

});
