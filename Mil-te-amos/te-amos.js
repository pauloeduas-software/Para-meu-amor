document.addEventListener('DOMContentLoaded', function() {

  /* Lista de 100 traduções organizada por familiaridade cultural brasileira */
  const translations = [
    /* --- Nível 1: Muito Familiares --- */
    { language: "Português", phrase: "Eu te amo", pron: "Eu te amo" },
    { language: "Inglês", phrase: "I love you", pron: "I love you" },
    { language: "Espanhol", phrase: "Te amo", pron: "Te amo" },
    { language: "Italiano", phrase: "Ti amo", pron: "Ti amo" },
    { language: "Francês", phrase: "Je t'aime", pron: "Je taime" },
    
    /* --- Nível 2: Influência Cultural e Imigração no Brasil --- */
    { language: "Japonês", phrase: "愛してる", pron: "Aishiteru" },
    { language: "Alemão", phrase: "Ich liebe dich", pron: "Ich liebe dich" },
    { language: "Libanês (Árabe)", phrase: "أحبك", pron: "Uhibbuki" },
    { language: "Coreano", phrase: "사랑해", pron: "Saranghae" },
    { language: "Mandarim", phrase: "我爱你", pron: "Wo ai ni" },
    
    /* --- Nível 3: Pop Culture, História e Religião --- */
    { language: "Russo", phrase: "Я тебя люблю", pron: "Ya tebya lyublyu" },
    { language: "Latim", phrase: "Te amo", pron: "Te amo" },
    { language: "Grego", phrase: "Σ'αγαπώ", pron: "Sagapo" },
    { language: "Hebraico", phrase: "אני אוהב אותך", pron: "Ani ohev otach" },
    { language: "Havaiano", phrase: "Aloha wau iā ʻoe", pron: "Aloha wau ia oe" },
    
    /* --- Nível 4: Europa e Destinos Turísticos --- */
    { language: "Holandês", phrase: "Ik hou van je", pron: "Ik hou van je" },
    { language: "Sueco", phrase: "Jag älskar dig", pron: "Jag elskar dig" },
    { language: "Turco", phrase: "Seni seviyorum", pron: "Seni seviyorum" },
    { language: "Polonês", phrase: "Kocham cię", pron: "Kocham cie" },
    { language: "Romeno", phrase: "Te iubesc", pron: "Te iubesc" },
    { language: "Dinamarquês", phrase: "Jeg elsker dig", pron: "Jeg elsker dig" },
    { language: "Norueguês", phrase: "Jeg elsker deg", pron: "Jeg elsker deg" },
    { language: "Finlandês", phrase: "Minä rakastan sinua", pron: "Mina rakastan sinua" },
    { language: "Tcheco", phrase: "Miluji tě", pron: "Miluji te" },
    { language: "Húngaro", phrase: "Szeretlek", pron: "Szeretlek" },
    { language: "Ucraniano", phrase: "Я тебе кохаю", pron: "Ya tebe kokhayu" },
    { language: "Islandês", phrase: "Ég elska þig", pron: "Eg elska thig" },
    
    /* --- Nível 5: Ásia e Outros --- */
    { language: "Tailandês", phrase: "ฉันรักเธอ", pron: "Chan rak ter" },
    { language: "Indonésio", phrase: "Aku cinta kamu", pron: "Aku cinta kamu" },
    { language: "Vietnamita", phrase: "Anh yêu em", pron: "Anh yeu em" },
    { language: "Filipino", phrase: "Mahal kita", pron: "Mahal kita" },
    { language: "Hindi", phrase: "मैं तुमसे प्यार करता हूँ", pron: "Main tumse pyar karta hoon" },
    { language: "Bengali", phrase: "আমি তোমাকে ভালোবাসি", pron: "Ami tomake bhalobashi" },
    { language: "Malaio", phrase: "Saya sayang awak", pron: "Saya sayang awak" },
    { language: "Cazaque", phrase: "Мен сені жақсы көремін", pron: "Men seni jaqsı köremin" },
    { language: "Nepalês", phrase: "म तिमीलाई माया गर्छु", pron: "Ma timilai maya garchu" },
    { language: "Cingalês", phrase: "මම ඔයාට ਆදරෙයි", pron: "Mama oyata adareyi" },
    
    /* --- Nível 6: África e Idiomas Regionais --- */
    { language: "Suaíli", phrase: "Nakupenda", pron: "Nakupenda" },
    { language: "Africâner", phrase: "Ek het jou lief", pron: "Ek het jou lief" },
    { language: "Zulu", phrase: "Ngiyakuthanda", pron: "Ngiyakuthanda" },
    { language: "Iorubá", phrase: "Mo nifẹ rẹ", pron: "Mo nife re" },
    { language: "Somali", phrase: "Waan ku jeclahay", pron: "Waan ku jeclahay" },
    { language: "Amárico", phrase: "አፈቅርሃለሁ", pron: "Afeqerkalehu" },
    { language: "Igbo", phrase: "Ahụrụ m gị n'anya", pron: "Ahuru m gi nanya" },
    
    /* --- Nível 7: Mais Idiomas e Dialetos --- */
    { language: "Basco", phrase: "Maite zaitut", pron: "Maite zaitut" },
    { language: "Catalão", phrase: "T'estimo", pron: "Testimo" },
    { language: "Galego", phrase: "Ámote", pron: "Amote" },
    { language: "Esperanto", phrase: "Mi amas vin", pron: "Mi amas vin" },
    { language: "Galês", phrase: "Rwy'n dy garu di", pron: "Rwyn dy garu di" },
    { language: "Irlandês", phrase: "Grá agam ort", pron: "Gra agam ort" },
    { language: "Maori", phrase: "Kei te aroha au ki a koe", pron: "Kei te aroha au ki a koe" },
    { language: "Samoano", phrase: "Ou te alofa ia te oe", pron: "Ou te alofa ia te oe" },
    { language: "Taitiano", phrase: "Ua here vau ia oe", pron: "Ua here vau ia oe" },
    { language: "Armênio", phrase: "Ես քեզ սիրում եմ", pron: "Yes qez sirum em" },
    { language: "Azeri", phrase: "Mən səni sevirəm", pron: "Men seni sevirem" },
    { language: "Bósnio", phrase: "Volim te", pron: "Volim te" },
    { language: "Búlgaro", phrase: "Обичам те", pron: "Obicham te" },
    { language: "Croata", phrase: "Volim te", pron: "Volim te" },
    { language: "Eslovaco", phrase: "Ľúbim ťa", pron: "Lubim ta" },
    { language: "Esloveno", phrase: "Ljubim te", pron: "Ljubim te" },
    { language: "Estoniano", phrase: "Ma armastan sind", pron: "Ma armastan sind" },
    { language: "Georgiano", phrase: "მიყვარხαρ", pron: "Miqvarxar" },
    { language: "Letão", phrase: "Es tevi mīlu", pron: "Es tevi milu" },
    { language: "Lituano", phrase: "Aš tave myliu", pron: "As tave myliu" },
    { language: "Macedônio", phrase: "Те сакам", pron: "Te sakam" },
    { language: "Maltês", phrase: "Inħobbok", pron: "Inhobbok" },
    { language: "Albanês", phrase: "Te dua", pron: "Te dua" },
    { language: "Luxemburguês", phrase: "Ech hunn dech gär", pron: "Ech hunn dech gar" },
    { language: "Frísio", phrase: "Ik hâld fan dy", pron: "Ik hald fan dy" },
    { language: "Ídiche", phrase: "איך האָב דיך ליב", pron: "Ikh hob dikh lib" },
    { language: "Curdo", phrase: "Ez hej te dikim", pron: "Ez hej te dikim" },
    { language: "Pashto", phrase: "Za la ta sara meena kawom", pron: "Za la ta sara meena kawom" },
    { language: "Farsi", phrase: "دوستت دارم", pron: "Dooset daram" },
    { language: "Sindi", phrase: "مان توسان پيار ڪيان ٿو", pron: "Maan tosaan pyaar kiyaan tho" },
    { language: "Marathi", phrase: "मी तुझ्यावर प्रेम करतो", pron: "Mi tujhyavar prem karto" },
    { language: "Punjabi", phrase: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", pron: "Main tainu pyar karda han" },
    { language: "Gujarati", phrase: "હું તને પ્રેમ ਕਰું છું", pron: "Hu tane prem karu chu" },
    { language: "Canará", phrase: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", pron: "Naanu ninnannu preethisuttene" },
    { language: "Malayalam", phrase: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു", pron: "Njan ninne snehikkunnu" },
    { language: "Tâmil", phrase: "நான் உன்னை நேசிக்கிறேன்", pron: "Naan unnai nesikkiren" },
    { language: "Telugu", phrase: "నేను నిన్ను ప్రేమిస్తున్నాను", pron: "Nenu ninnu premistunnanu" },
    { language: "Khmer", phrase: "Soro lahn nhee ah", pron: "Soro lahn nhee ah" },
    { language: "Laosiano", phrase: "ຂ້ອຍຮັກເຈົ້າ", pron: "Khoi hak jao" },
    { language: "Birmanês", phrase: "chit pa de", pron: "chit pa de" },
    { language: "Tibetano", phrase: "Nga khye-rang-la ga-gi-du", pron: "Nga khye rang la ga gi du" },
    { language: "Mongol", phrase: "Би чамд хайртай", pron: "Bi chamd khairtai" },
    { language: "Quirguiz", phrase: "Мен сени сүйөм", pron: "Men seni suyom" },
    { language: "Tadjique", phrase: "Ман туро дӯست медорам", pron: "Man turo dust medoram" },
    { language: "Uzbeque", phrase: "Men seni sevaman", pron: "Men seni sevaman" },
    { language: "Javanês", phrase: "Aku tresno sampeyan", pron: "Aku tresno sampeyan" },
    { language: "Sundanês", phrase: "Abdi bogoh ka anjeun", pron: "Abdi bogoh ka anjeun" },
    { language: "Crioulo Haitiano", phrase: "Mwen renmen ou", pron: "Mwen renmen ou" },
    { language: "Navajo", phrase: "Ayóó'áníínísh'ní", pron: "Ayoo aniiniishni" },
    { language: "Guarani", phrase: "Rohayhu", pron: "Rohayhu" },
    { language: "Quechua", phrase: "Munayki", pron: "Munayki" },
    { language: "Maia", phrase: "In yaakumech", pron: "In yaakumech" },
    { language: "Náuatle", phrase: "Ni mits tlamatli", pron: "Ni mits tlamatli" },
    { language: "Totonaca", phrase: "Tas lox", pron: "Tas lox" },
    { language: "Malgaxe", phrase: "Tia anao aho", pron: "Tia anao aho" },
    { language: "Chichewa", phrase: "Ndimakukonda", pron: "Ndimakukonda" },
    { language: "Sotho", phrase: "Kea u rata", pron: "Kea u rata" },
    { language: "Shona", phrase: "Ndinokuda", pron: "Ndinokuda" }
  ];

  let currentIndex = 0;
  const loveText = document.getElementById('love-text');
  const languageName = document.getElementById('language-name');
  const pronunciationText = document.getElementById('pronunciation-text');
  const progressBar = document.getElementById('progressBar');

  function updateDisplay() {
    const item = translations[currentIndex];
    
    // Desvanecimento suave para fora
    const elements = [loveText, languageName, pronunciationText];
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
    });
    
    setTimeout(() => {
      loveText.textContent = item.phrase;
      languageName.textContent = item.language;
      
      // Pronúncia de destaque (direta e sem acentos de guia)
      if (item.pron) {
        pronunciationText.textContent = item.pron;
      } else {
        pronunciationText.textContent = "";
      }
      
      // Desvanecimento suave para dentro
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      
      // Atualiza a barra de progresso
      const progress = ((currentIndex + 1) / translations.length) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    }, 250);
  }

  // Exibição inicial
  updateDisplay();

  // Clique em qualquer lugar da tela para avançar (ignora o link "Voltar")
  document.addEventListener('click', function (e) {
    if (e.target.closest('.back-link')) return;
    currentIndex = (currentIndex + 1) % translations.length;
    updateDisplay();
  });

  // Suporte a teclado (Espaço, Seta Direita, Enter)
  document.addEventListener('keydown', function (e) {
    if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
      currentIndex = (currentIndex + 1) % translations.length;
      updateDisplay();
    }
  });

});