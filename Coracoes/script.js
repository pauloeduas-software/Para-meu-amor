const heartCharOpen = '\u2661'; 
const heartCharClosed = '\u2665\uFE0E'; 

const heartStyles = [heartCharOpen, heartCharClosed];
let currentHeartSelection = 'random'; 

var Coracao = function(x, y) {
  this.inicializar(x, y);
};

Coracao.prototype = {
  inicializar: function(x, y) {
    this.elemento = document.createElement("span");
    this.elemento.className = "coracao";
    this.elemento.style.top = y + "px";
    this.elemento.style.left = x + "px";
    
    let heartToRender;
    if (currentHeartSelection === 'random') {
      const randomIndex = Math.floor(Math.random() * heartStyles.length);
      heartToRender = heartStyles[randomIndex];
    } else {
      heartToRender = currentHeartSelection;
    }
    this.elemento.innerText = heartToRender;
  }
};

window.onload = function() {
  var tela = document.getElementById("tela");
  var mensagem = document.getElementById("mensagem-inicial");
  
  const settingsToggle = document.getElementById("settings-toggle");
  const settingsPanel = document.getElementById("settings-panel");
  const styleButtons = document.querySelectorAll(".style-btn");

  settingsToggle.onclick = function() {
    settingsPanel.classList.toggle("open");
  };

  styleButtons.forEach(button => {
    button.onclick = function(evento) {
      styleButtons.forEach(btn => btn.classList.remove("active"));
      evento.currentTarget.classList.add("active");
      
      const selection = evento.currentTarget.dataset.heart;
      if (selection === 'random') {
        currentHeartSelection = 'random';
      } else if (selection === '♡') {
        currentHeartSelection = heartCharOpen;
      } else if (selection === '♥︎') { 
        currentHeartSelection = heartCharClosed;
      }
    };
  });

  document.onclick = function(evento) {
    
    if (evento.target.closest("#settings-panel") || evento.target.closest("#settings-toggle")) {
      return;
    }
    
    if (mensagem) {
      mensagem.style.display = 'none';
      mensagem = null; 
    }

    var novoCoracao = new Coracao(evento.clientX, evento.clientY);
    tela.appendChild(novoCoracao.elemento);
  };
};
