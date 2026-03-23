window.onload = function() {

  const baseTranslations = [
    { language: "Português", phrase: "Eu te amo" },
    { language: "Inglês", phrase: "I love you" },
    { language: "Espanhol", phrase: "Te amo" },
    { language: "Francês", phrase: "Je t'aime" },
    { language: "Alemão", phrase: "Ich liebe dich" },
    { language: "Italiano", phrase: "Ti amo" },
    { language: "Japonês", phrase: "愛してる (Aishiteru)" },
    { language: "Mandarim", phrase: "我爱你 (Wǒ ài nǐ)" },
    { language: "Russo", phrase: "Я тебя люблю (Ya tebya lyublyu)" },
    { language: "Árabe", phrase: "أحبك (Uhibbuki)" },
    
    { language: "Coreano", phrase: "사랑해 (Saranghae)" },
    { language: "Hindi", phrase: "मैं तुमसे प्यार करता हूँ" },
    { language: "Holandês", phrase: "Ik hou van je" },
    { language: "Sueco", phrase: "Jag älskar dig" },
    { language: "Grego", phrase: "Σ'αγαπώ (S'agapo)" },
    { language: "Turco", phrase: "Seni seviyorum" },
    { language: "Hebraico", phrase: "אני אוве אותך (Ani ohev otach)" },
    { language: "Polonês", phrase: "Kocham cię" },
    { language: "Suaíli", phrase: "Nakupenda" },
    { language: "Filipino", phrase: "Mahal kita" },
    { language: "Vietnamita", phrase: "Anh yêu em" },
    { language: "Irlandês", phrase: "Grá agam ort" },
    { language: "Havaiano", phrase: "Aloha wau iā ʻoe" },
    { language: "Esperanto", phrase: "Mi amas vin" },
    { language: "Latim", phrase: "Te amo" },
    { language: "Dinamarquês", phrase: "Jeg elsker dig" },
    { language: "Finlandês", phrase: "Minä rakastan sinua" },
    { language: "Norueguês", phrase: "Jeg elsker deg" },
    { language: "Tcheco", phrase: "Miluji tě" },
    { language: "Húngaro", phrase: "Szeretlek" },
    { language: "Romeno", phrase: "Te iubesc" },
    { language: "Tailandês", phrase: "ฉันรักเธอ (Chan rak ter)" },
    { language: "Indonésio", phrase: "Aku cinta kamu" },
    { language: "Farsi", phrase: "دوستت دارم (Dooset daram)" },
    { language: "Ucraniano", phrase: "Я тебе кохаю (Ya tebe kokhayu)" },
    { language: "Islandês", phrase: "Ég elska þig" },
    { language: "Galês", phrase: "Rwy'n dy garu di" },
    { language: "Gaélico Escocês", phrase: "Tha gaol agam ort" },
    { language: "Maori", phrase: "Kei te aroha au ki a koe" },
    { language: "Zulu", phrase: "Ngiyakuthanda" },
    { language: "Armênio", phrase: "Ես քեզ սիրում եմ (Yes qez sirum em)" },
    { language: "Bengali", phrase: "আমি তোমাকে ভালোবাসি (Ami tomake bhalobashi)" },
    { language: "Basco", phrase: "Maite zaitut" },
    { language: "Catalão", phrase: "T'estimo" },
    { language: "Letão", phrase: "Es tevi mīlu" },
    { language: "Lituano", phrase: "Aš tave myliu" },
    { language: "Eslovaco", phrase: "Ľúbim ťa" },
    { language: "Esloveno", phrase: "Ljubim te" },
    { language: "Navajo", phrase: "Ayóó'áníínísh'ní" },
    { language: "Samoano", phrase: "Ou te alofa ia te oe" },
    { language: "Africâner", phrase: "Ek het jou lief" },
    { language: "Albanês", phrase: "Te dua" },
    { language: "Amárico", phrase: "አፈቅርሃለሁ (Afeqerkalehu)" },
    { language: "Azeri", phrase: "Mən səni sevirəm" },
    { language: "Bielorrusso", phrase: "Я цябе кахаю (Ya ciabe kakhayu)" },
    { language: "Bósnio", phrase: "Volim te" },
    { language: "Búlgaro", phrase: "Обичам те (Obicham te)" },
    { language: "Birmanês", phrase: "chit pa de" },
    { language: "Cantonês", phrase: "我愛你 (Ngo oiy ney)" },
    { language: "Chichewa", phrase: "Ndimakukonda" },
    { language: "Córsico", phrase: "Ti tengu caru" },
    { language: "Croata", phrase: "Volim te" },
    { language: "Estoniano", phrase: "Ma armastan sind" },
    { language: "Frísio", phrase: "Ik hâld fan dy" },
    { language: "Georgiano", phrase: "მიყვარხარ (Miqvarxar)" },
    { language: "Gujarati", phrase: "હું તને પ્રેમ કરું છું" },
    { language: "Crioulo Haitiano", phrase: "Mwen renmen ou" },
    { language: "Hausa", phrase: "Ina son ku" },
    { language: "Hmong", phrase: "Kuv hlub koj" },
    { language: "Igbo", phrase: "Ahụrụ m gị n'anya" },
    { language: "Javanês", phrase: "Aku tresno sampeyan" },
    { language: "Canará", phrase: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ" },
    { language: "Cazaque", phrase: "Мен сені жақсы көремін" },
    { language: "Khmer", phrase: "Soro lahn nhee ah" },
    { language: "Curdo", phrase: "Ez hej te dikim" },
    { language: "Quirguiz", phrase: "Мен сени сүйөм (Men seni süyöm)" },
    { language: "Laosiano", phrase: "ຂ້ອຍຮັກເຈົ້າ (Khoi hak jao)" },
    { language: "Luxemburguês", phrase: "Ech hunn dech gär" },
    { language: "Macedônio", phrase: "Те сакам (Te sakam)" },
    { language: "Malgaxe", phrase: "Tia anao aho" },
    { language: "Malaio", phrase: "Saya sayang awak" },
    { language: "Malayalam", phrase: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു" },
    { language: "Maltês", phrase: "Inħobbok" },
    { language: "Marathi", phrase: "मी तुझ्यावर प्रेम करतो" },
    { language: "Mongol", phrase: "Би чамд хайртай (Bi chamd khairtai)" },
    { language: "Nepalês", phrase: "म तिमीलाई माया गर्छु" },
    { language: "Pashto", phrase: "Za la ta sara meena kawom" },
    { language: "Punjabi", phrase: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ" },
    { language: "Sotho", phrase: "Kea u rata" },
    { language: "Shona", phrase: "Ndinokuda" },
    { language: "Sindi", phrase: "مان توسان پيار ڪيان ٿو" },
    { language: "Cingalês", phrase: "මම ඔයාට ආදරෙයි (Mama oyāṭa ādarēyi)" },
    { language: "Somali", phrase: "Waan ku jeclahay" },
    { language: "Sundanês", phrase: "Abdi bogoh ka anjeun" },
    { language: "Tadjique", phrase: "Ман туро дӯст медорам" },
    { language: "Tâmil", phrase: "நான் உன்னை நேசிக்கிறேன்" },
    { language: "Telugu", phrase: "నేను నిన్ను ప్రేమిస్తున్నాను" },
    { language: "Urdu", phrase: "میں آپ سے محبت کرتا ہوں" },
    { language: "Uzbeque", phrase: "Men seni sevaman" },
    { language: "Ídiche", phrase: "איך האָב דיך ליב (Ikh hob dikh lib)" }
  ];

  let translations = [];
  for (let i = 0; i < 10; i++) {
    translations = translations.concat(baseTranslations);
  }

  const backgroundClass = 'bg1'; 

  let currentIndex = 0;

  const body = document.getElementById('page-body');
  const loveText = document.getElementById('love-text');
  const languageName = document.getElementById('language-name');
  
  loveText.textContent = translations[0].phrase;
  languageName.textContent = translations[0].language;
  
  body.classList.add(backgroundClass);

  document.onclick = function() {
    
    currentIndex++;
    if (currentIndex >= translations.length) {
      currentIndex = 0; 
    }
    

    loveText.textContent = translations[currentIndex].phrase;
    languageName.textContent = translations[currentIndex].language;
    
  };
};