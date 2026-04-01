window.onload = function() {
  const messages = [
    { title: 'Sua companhia me alegra.', sub: null },
    { title: 'Mal posso esperar para ver o seu sorriso de perto', sub: null },
    { title: 'Quero criar nossas primeiras memórias logo.', sub: null },
    { title: 'Sinto que este é o início de tudo o que eu sempre quis', sub: null },
    { title: 'Nosso encontro começa aqui', sub: 'Mal posso esperar para te conhecer mais.' }
  ];

  let step = 0;
  
  const dom = {
    body: document.body,
    introLayer: document.getElementById('intro-layer'),
    heartContainer: document.getElementById('heart-wrapper'),
    messageContainer: document.getElementById('message-wrapper'),
    journeyText: document.getElementById('journey-text'),
    journeySubtext: document.getElementById('journey-subtext'),
    clickPrompt: document.getElementById('click-prompt'),
    fillOffset: document.getElementById('fill-offset'),
    emptyOffset: document.getElementById('empty-offset')
  };

  function updateVisuals() {
    // Step 0: Intro only
    if (step === 0) {
      dom.introLayer.classList.remove('hidden');
      dom.heartContainer.classList.add('hidden');
      dom.messageContainer.classList.add('hidden');
      dom.clickPrompt.classList.add('hidden');
      return;
    }

    // Hide intro from step 1 onward
    dom.introLayer.classList.add('hidden');
    dom.clickPrompt.classList.remove('hidden');
    dom.heartContainer.classList.remove('hidden');

    // Step 1: Just the empty heart
    if (step === 1) {
      updateHeartFill(0);
      hideMessage();
      return;
    }

    // Beyond step 1: Toggle message and heart fill
    const maxSteps = (messages.length * 2) + 1; // 11 steps for 5 messages

    if (step >= maxSteps) {
      hideMessage();
      dom.clickPrompt.classList.add('hidden');
      return;
    }

    const isMessageStep = (step % 2 === 0);
    const messageIndex = Math.floor((step - 2) / 2);

    if (isMessageStep) {
      // Show Message & Increase Blood
      const percentage = ((messageIndex + 1) / messages.length) * 100;
      updateHeartFill(percentage);
      showMessage(messages[messageIndex]);
      
      if (messageIndex === messages.length - 1) {
        dom.heartContainer.classList.add('full');
      }
    } else {
      // Hide Message (just admire previous heart state)
      hideMessage();
    }
  }

  function updateHeartFill(percentage) {
    if (dom.fillOffset) dom.fillOffset.setAttribute('offset', `${percentage}%`);
    if (dom.emptyOffset) dom.emptyOffset.setAttribute('offset', `${percentage}%`);
  }

  function hideMessage() {
    dom.messageContainer.classList.add('hidden');
  }

  function showMessage(msg) {
    dom.messageContainer.classList.remove('hidden');
    dom.journeyText.style.opacity = '0';
    dom.journeyText.style.transform = 'translateY(15px)';
    dom.journeySubtext.classList.remove('show-sub');
    dom.journeySubtext.style.display = 'none';

    setTimeout(() => {
      dom.journeyText.textContent = msg.title;
      
      if (msg.sub) {
        dom.journeySubtext.textContent = msg.sub;
        dom.journeySubtext.style.display = 'block';
        void dom.journeySubtext.offsetWidth; 
        dom.journeySubtext.classList.add('show-sub');
      }

      dom.journeyText.style.opacity = '1';
      dom.journeyText.style.transform = 'translateY(0)';
    }, 300);
  }

  // Click interaction goes forward
  dom.body.onclick = function(e) {
    if (e.target.closest('.back-link')) return;
    const maxSteps = (messages.length * 2) + 1;
    if (step < maxSteps) {
      step++;
      updateVisuals();
    }
  };

  // Keyboard navigation
  document.onkeydown = function(e) {
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      const maxSteps = (messages.length * 2) + 1;
      if (step < maxSteps) {
        step++;
        updateVisuals();
      }
    }
  };

  // Run initialization
  updateVisuals();
  updateHeartFill(0);
};
