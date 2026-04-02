window.onload = function () {
  let tentativas = 0; 
  let mensagemExibida = false; 

  function responderSim() {
    const questionText = document.getElementById('question-text');
    const wrapper = document.getElementById('button-wrapper');
    const decor = document.querySelector('.decor-line');
    
    questionText.innerText = "Já pode beijar o namorado! 💘❤️";
    
    const warning = document.querySelector('.warning-message');
    if (warning) warning.remove();
    if (wrapper) wrapper.remove();
    if (decor) decor.remove();
  }
  window.responderSim = responderSim;

  const noBtn = document.querySelector('.no-btn');
  const container = document.getElementById('reveal-container');

  // POSIÇÕES QUE MANTÊM O BOTÃO LONGE DO "SIM" (X positivo move para a direita)
  const posicoes = [
    { x: '100px', y: '-40px' }, // 1º clique: Sobe e vai para a direita
    { x: '80px', y: '40px' }    // 2º clique: Desce e continua na direita
  ];

  function flee() {
    if (tentativas < posicoes.length) {
      const pos = posicoes[tentativas];
      noBtn.style.position = 'relative'; 
      noBtn.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
      noBtn.style.transform = `translate(${pos.x}, ${pos.y})`;
      tentativas++;
    } else {
      // 3º Clique: O botão some e mostra a mensagem
      if (!mensagemExibida) {
        const mensagem = document.createElement('p');
        mensagem.innerText = "Acho que não vai funcionar!";
        mensagem.className = 'warning-message';
        container.appendChild(mensagem);
        mensagemExibida = true;
      }
      noBtn.style.display = 'none';
    }
  }

  // O botão só foge ao clicar (onclick)
  noBtn.onclick = function(e) {
    e.preventDefault();
    flee();
  };
};
