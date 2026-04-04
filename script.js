/* ================================================================
   script.js — Lógica Global de Interação 💖
   Contém o efeito de clique para gerar corações em todas as páginas.
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  
  /* Símbolos de coração para o clique */
  const heartStyles = ['\u2661', '\u2665\uFE0E'];

  /* Função para criar um coração na posição clicada */
  function spawnHeart(x, y) {
    const el = document.createElement('span');
    el.className = 'coracao';
    
    /* Posição exata do clique */
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    
    /* Escolha aleatória do estilo do coração */
    el.innerText = heartStyles[Math.floor(Math.random() * heartStyles.length)];
    
    document.body.appendChild(el);

    /* Remove do DOM após a animação (definida no style.css global) */
    el.addEventListener('animationend', function () {
      el.remove();
    });
  }

  /* Captura o clique em qualquer lugar da janela */
  window.addEventListener('click', function (e) {
    /* Não bloqueia a função de botões e links */
    spawnHeart(e.clientX, e.clientY);
  });

});