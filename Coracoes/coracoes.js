/* ================================================================
   coracoes.js — Painel de Estilos + Chuva de Amor Épica 🌧💖
   O efeito de clique global já está em ../script.js.
   Este arquivo cuida do painel de configuração e da Chuva de Amor.
   ================================================================ */

/* Símbolos de coração disponíveis para a chuva */
var heartCharOpen   = '\u2661';
var heartCharClosed = '\u2665\uFE0E';
var heartStyles     = [heartCharOpen, heartCharClosed];

/* Estilo de coração selecionado pelo usuário no painel */
var currentHeartSelection = 'random';

/* Referência ao intervalo ativo da Chuva de Amor */
var rainInterval = null;

/* ----------------------------------------------------------------
   Retorna o símbolo de coração conforme a preferência do usuário.
   ---------------------------------------------------------------- */
function getHeartSymbol() {
  if (currentHeartSelection === 'random') {
    return heartStyles[Math.floor(Math.random() * heartStyles.length)];
  }
  return currentHeartSelection;
}

/* ----------------------------------------------------------------
   Cria um coração da CHUVA com variação de tamanho, velocidade,
   posição e cor. Remove-se do DOM ao fim da animação. 🌸
   ---------------------------------------------------------------- */
function spawnRainHeart() {
  var el = document.createElement('span');

  /* Herda o visual base de .coracao e substitui a animação por .coracao-chuva */
  el.className = 'coracao coracao-chuva';

  /* Posição horizontal aleatória por toda a largura da tela */
  var posX = Math.random() * 100;
  el.style.left = posX + 'vw';

  /* Tamanho entre 0.7rem e 2.8rem — cria sensação de profundidade */
  var tamanhoBase = 0.7 + Math.random() * 2.1;
  el.style.setProperty('--tamanho', tamanhoBase + 'rem');

  /* Escala usada pelo keyframe para transformação uniforme */
  var escala = 0.5 + Math.random() * 1.0;
  el.style.setProperty('--escala', String(escala));

  /* Velocidade entre 3s e 6s — ritmo orgânico e variado */
  var duracao = 3 + Math.random() * 3;
  el.style.setProperty('--duracao', duracao + 's');

  /* Paleta de tons baseada na cor da página (--page-accent) */
  var pageColor = getComputedStyle(document.documentElement).getPropertyValue('--page-accent').trim() || '#ec4899';
  el.style.color = pageColor;
  el.style.filter = 'brightness(' + (0.8 + Math.random() * 0.4) + ')';

  el.innerText = getHeartSymbol();

  document.body.appendChild(el);

  /* Remove do DOM ao fim da animação — mantém o DOM limpo */
  el.addEventListener('animationend', function () {
    el.remove();
  });
}

/* ----------------------------------------------------------------
   Inicia a Chuva de Amor com intervalo de 150ms.
   ---------------------------------------------------------------- */
function iniciarChuva() {
  rainInterval = setInterval(spawnRainHeart, 150);
}

/* ----------------------------------------------------------------
   Para a Chuva. Os corações já na tela terminam a animação deles.
   ---------------------------------------------------------------- */
function pararChuva() {
  clearInterval(rainInterval);
  rainInterval = null;
}

/* ----------------------------------------------------------------
   Inicialização — aguarda o DOM estar pronto para acessar elementos.
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  /* Esconde a mensagem inicial no primeiro clique em qualquer lugar */
  document.addEventListener('click', function () {
    var msg = document.getElementById('mensagem-inicial');
    if (msg) msg.style.display = 'none';
  }, { once: true });

  /* --- Painel de Configurações --- */
  var settingsToggle = document.getElementById('settings-toggle');
  var settingsPanel  = document.getElementById('settings-panel');
  var styleButtons   = document.querySelectorAll('.style-btn');

  /* Abre e fecha o painel deslizante de configurações */
  settingsToggle.addEventListener('click', function () {
    settingsPanel.classList.toggle('open');
  });

  /* Atualiza o estilo de coração ao selecionar uma opção */
  styleButtons.forEach(function (button) {
    button.addEventListener('click', function (evento) {
      /* Desmarca todas e marca apenas a opção clicada */
      styleButtons.forEach(function (btn) { btn.classList.remove('active'); });
      evento.currentTarget.classList.add('active');

      var selecao = evento.currentTarget.dataset.heart;
      if (selecao === 'random') {
        currentHeartSelection = 'random';
      } else if (selecao === '\u2661') {
        currentHeartSelection = heartCharOpen;
      } else if (selecao === '\u2665\uFE0E') {
        currentHeartSelection = heartCharClosed;
      }
    });
  });

  /* --- Botão de Chuva de Amor --- */
  var rainBtn = document.getElementById('rain-btn');

  rainBtn.addEventListener('click', function () {
    if (rainInterval) {
      /* Chuva ativa → para e restaura o rótulo do botão */
      pararChuva();
      rainBtn.innerHTML = '<span>\ud83c\udf27\ufe0f</span> Iniciar Chuva de Amor';
    } else {
      /* Chuva inativa → inicia e atualiza o rótulo do botão */
      iniciarChuva();
      rainBtn.innerHTML = '<span>\u2764\ufe0f</span> Parar Chuva de Amor';
    }
  });

});
