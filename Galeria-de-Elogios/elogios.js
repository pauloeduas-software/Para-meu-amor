document.addEventListener('DOMContentLoaded', function() {

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
    
    // Desvanecimento/deslizamento suave para fora
    complimentText.style.opacity = '0';
    complimentText.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
      complimentText.textContent = text;
      
      // Revela o novo texto
      complimentText.style.opacity = '1';
      complimentText.style.transform = 'translateY(0)';
      
      // Progresso da barra
      updateProgress();
    }, 300);
  }
  
  function updateProgress() {
      const progress = ((currentIndex + 1) / compliments.length) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
  }

  // Configuração inicial (apenas o progresso, pois o texto já está no HTML)
  updateProgress();

  /* Clique em qualquer lugar para avançar — ignora o link "Voltar" */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.back-link')) return;
    currentIndex = (currentIndex + 1) % compliments.length;
    updateDisplay();
  });

  /* Suporte a teclado (Espaço, Seta Direita, Enter) */
  document.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      currentIndex = (currentIndex + 1) % compliments.length;
      updateDisplay();
    }
  });

});
