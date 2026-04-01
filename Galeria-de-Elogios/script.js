window.onload = function() {

  const compliments = [
    "Você é fofa.",
    "Nosso senso de humor combina.",
    "Você é a melhor parte do meu dia.",
    "Amo seus olhos apaixonados.",
    "Adoro seu beijo.",
    "Seu abraço é o melhor.",
    "Sua voz é doce.",
    "Adoro seu sorriso.",
    "Eu amo a sua companhia.",
    "Você me faz passar o dia todo pensando em você.",
    "Você me faz rir.",
    "Você é muito estilosa.",
    "Nossa conversa encaixa.",
    "Você é única pra mim.",
    "Amo sua energia.",
    "Seu cabelo é lindo.",
    "Você tem mãos tão macias.",
    "Você é maravilhosa.",
    "Sua risada é perfeita.",
    "Você tem um sorriso lindo.",
    "Gosto de nos dois juntos.",
    "Você torna o meu mundo melhor.",
    "Gosto do seu jeitinho.",
    "Sua presença me alegra.",
    "Adoro a sua voz.",
    "Você é incrivelmente gentil.",
    "Você me acalma.",
    "Me sinto confortavel com você.",
    "Você tem um jeito especial.",
    "Eu confio em você.",
    "Gosto do nosso jeito romantico e safado."
  ];

  let currentIndex = 0;
  const complimentText = document.getElementById('compliment-text');
  const progressBar = document.getElementById('progressBar');

  function updateDisplay() {
    const text = compliments[currentIndex];
    
    // Smooth fade/slide out
    complimentText.style.opacity = '0';
    complimentText.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
      complimentText.textContent = text;
      
      // Reveal
      complimentText.style.opacity = '1';
      complimentText.style.transform = 'translateY(0)';
      
      // Progress
      updateProgress();
    }, 300);
  }
  
  function updateProgress() {
      const progress = ((currentIndex + 1) / compliments.length) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
  }

  // Initial setup ONLY for progress (text is already in HTML)
  updateProgress();

  // Interaction
  document.body.onclick = function(e) {
    // Ignore if clicked on back button
    if (e.target.closest('.back-link')) return;
    
    currentIndex = (currentIndex + 1) % compliments.length;
    updateDisplay();
  };

  // Keyboard
  document.onkeydown = function(e) {
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      currentIndex = (currentIndex + 1) % compliments.length;
      updateDisplay();
    }
  };
};
