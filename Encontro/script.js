window.onload = function() {
  const messages = [
    { title: 'Sua companhia me alegra.', sub: null },
    { title: 'Mal posso esperar para ver o seu sorriso de perto', sub: null },
    { title: 'Quero criar nossas primeiras memórias logo.', sub: null },
    { title: 'Sinto que este é o início de tudo o que eu sempre quis', sub: null },
    { title: 'Nosso encontro começa aqui', sub: 'Mal posso esperar para te conhecer mais.' }
  ];

  let step = 0;
  let isAnimating = false;
  
  const dom = {
    body: document.body,
    introLayer: document.getElementById('intro-layer'),
    heartContainer: document.getElementById('heart-wrapper'),
    messageContainer: document.getElementById('message-wrapper'),
    journeyText: document.getElementById('journey-text'),
    journeySubtext: document.getElementById('journey-subtext'),
    clickPrompt: document.getElementById('click-prompt'),
    heartLiquid: document.getElementById('heart-liquid')
  };

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

    const maxSteps = (messages.length * 2) + 1;

    if (step >= maxSteps) {
      hideMessage();
      dom.clickPrompt.classList.add('hidden');
      return;
    }

    const isMessageStep = (step % 2 === 0);
    const messageIndex = Math.floor((step - 2) / 2);

    if (isMessageStep) {
      // INÍCIO DO CICLO:
      isAnimating = true; // Trava cliques
      
      const percentage = ((messageIndex + 1) / messages.length) * 100;
      
      // 1. O coração começa a encher primeiro
      updateHeartFill(percentage);
      
      // 2. Esperamos o coração terminar de encher (1.5s do CSS) para mostrar a mensagem
      setTimeout(() => {
        showMessage(messages[messageIndex]);
        
        if (messageIndex === messages.length - 1) {
          dom.heartContainer.classList.add('full');
        }
      }, 1500); 

    } else {
      hideMessage();
    }
  }

  function updateHeartFill(percentage) {
    if (dom.heartLiquid) {
      const newY = 95 - (percentage * 1.05); 
      dom.heartLiquid.setAttribute('y', newY);
    }
  }

  function hideMessage() {
    dom.messageContainer.style.opacity = '0';
    dom.messageContainer.style.transform = 'translateY(10px)';
    setTimeout(() => {
      dom.messageContainer.classList.add('hidden');
    }, 400);
  }

  function showMessage(msg) {
    // Aqui isAnimating já é true, então não precisamos checar de novo
    
    // Primeiro limpamos o texto atual
    dom.messageContainer.style.opacity = '0';
    dom.messageContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      dom.journeyText.textContent = '';
      dom.journeySubtext.textContent = '';
      dom.journeySubtext.style.display = 'none';
      dom.journeySubtext.classList.remove('show-sub');

      // Colocamos o novo conteúdo
      dom.journeyText.textContent = msg.title;
      dom.messageContainer.classList.remove('hidden');
      
      requestAnimationFrame(() => {
        dom.messageContainer.style.opacity = '1';
        dom.messageContainer.style.transform = 'translateY(0)';
        
        if (msg.sub) {
          dom.journeySubtext.textContent = msg.sub;
          dom.journeySubtext.style.display = 'block';
          setTimeout(() => {
            dom.journeySubtext.classList.add('show-sub');
          }, 300);
        }
        
        // Destrava a interação apenas após a mensagem subir completamente
        setTimeout(() => {
           isAnimating = false;
        }, 600);
      });
    }, 300);
  }

  dom.body.onclick = function(e) {
    if (e.target.closest('.back-link') || isAnimating) return;
    const maxSteps = (messages.length * 2) + 1;
    if (step < maxSteps) {
      step++;
      updateVisuals();
    }
  };

  document.onkeydown = function(e) {
    if (isAnimating) return;
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      const maxSteps = (messages.length * 2) + 1;
      if (step < maxSteps) {
        step++;
        updateVisuals();
      }
    }
  };

  updateVisuals();
  updateHeartFill(0);
};
