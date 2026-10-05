// यह उन छात्रों की पंजीकृत आईडी (IDs) की लिस्ट है जो DPP दे सकते हैं
// यह आपका नया ID और Name का सिस्टम है
window.studentData = {
    "cm010": "🧑🏻‍💻 Chandramani", "omi100": "🧑‍🚒 Munna Kumar", "pk121": "👻 Priyanshu kumar", 
    "ssjkr": "👨🏻‍🏫 PRIYE RANJAN KUMAR", "sk100": "👨🏻‍🏫 Santosh sir", "harry": "👨🏻‍🏭 Kishan Raj",
    "sk180": "👨🏻‍🏫 Shambhu Sir", "sk450": "👨🏻‍🏫 Sanjiv Sir", "rk120": "👨🏻‍🏫 Raushan Sir", 
    "185428": "🤵🏻 Satyam Kumar", "629748": "🤵🏻 Shivam Kumar - 1", "952863": "🤵🏻 Niraj Kumar", 
    "952853": "🤵🏻 Shivam Kumar - 2", "597426": "🤵🏻 Sachin Kumar", "975795": "🤵🏻 Sunny Kumar", 
    "119621": "🤵🏻 Aayush Kumar - 1 (DM)", "442073": "🤵🏻 Utkarsh Kumar", "448521": "🤵🏻 Avinash Kumar", 
    "951074": "🤵🏻 Sushant Kumar", "700636": "🤵🏻 Aayush Kumar - 2 (MP)", "274170": "🤵🏻 Deepak Kumar", 
    "273806": "🤵🏻 Nishant Kumar", "374260": "🤵🏻 Ritesh Kumar", "269632": "🤵🏻 Bablu Kumar", "328537": "🤵🏻 Prince Kumar", 
    "375269": "🤵🏻‍♀️ Kajal Kumari - 2 (MO)", "386436": "🤵🏻‍♀️ Anjali Kumari", "537964": "🤵🏻‍♀️ Pushpanjali Kumari", "826732": "🤵🏻‍♀️ Lakshmi Kumari - 2",
    "182528": "🤵🏻‍♀️ Sadhna Kumari", "100636": "🤵🏻‍♀️ Neha Kumari - 1 (MO)", "274279": "🤵🏻‍♀️ Saloni Kumari", "275325": "🤵🏻‍♀️ Priyam Kumari",
    "972332": "🤵🏻‍♀️ Sapna Kumari", "207112": "🤵🏻‍♀️ Chandni Kumari - 1", "260416": "🤵🏻‍♀️ Priyanshu Kumari - 1", 
    "241724": "🤵🏻‍♀️ Nisha Kumari - 1", "842875": "🤵🏻‍♀️ Prity (simple)", "651157": "🤵🏻‍♀️ Chandni Kumari - 2", 
    "771852": "🤵🏻‍♀️ Chandni Kumari - 3", "577698": "🤵🏻‍♀️ Nisha Kumari - 2", "650095": "🤵🏻‍♀️ Sakshi Kumari", 
    "855048": "🤵🏻‍♀️ Niharika Bharti", "658046": "🤵🏻‍♀️ Tanya Kumari", "665802": "🤵🏻‍♀️ Prity Kumari", 
    "485285": "🤵🏻‍♀️ Kajal Kumari - 1", "875875": "🤵🏻‍♀️ Khushbu Kumari", "735483": "🤵🏻‍♀️ Priti Sharma", 
    "883484": "🤵🏻‍♀️ Jaya Kumari", "358624": "🤵🏻‍♀️ Nikku Kumari", "648150": "🤵🏻‍♀️ Komal Kumari", "678138": "🤵🏻‍♀️ Neha Kumari"
    // इसी प्रकार और भी ID : "Name" जोड़ सकते हैं
};

// 👇👇👇👇👇नया फीचर: पर्सनल मैसेज लिस्ट 👇👇👇👇👇
window.studentMessages = {
    "cm010" : " Hello",
    // जिसके सामने कुछ नहीं लिखना है, उसकी ID यहाँ डालने की जरूरत नहीं है।
};

// ---------------------------------------------------------
// DPP QUESTION DATABASE (विषय कोड के अनुसार)
// 1 = Physics, 2 = Chemistry, 3 = Mathematics, 
// 4 = Biology, 5 = Hindi, 6 = English
// ---------------------------------------------------------
window.quizDatabase = {
    1: {}, 
    2: {}, 
    3: {}, 
    4: {}, 
    5: {}, 
    6: {}  
};

// =====================================================================================================================================================================
// 👇👇👇👇👇 यहाँ से नीचे अपना AI द्वारा जनरेट किया गया क्वेश्चन कोड पेस्ट करते जाएँ 👇👇👇👇👇
// ====================================================================================================================================================================
window.quizDatabase[2] = window.quizDatabase[2] || {};
window.quizDatabase[2].ch_3 = window.quizDatabase[2].ch_3 || {};
window.quizDatabase[2].ch_3.dpp_1 = [
  {
    question: "वैद्युत रसायन के अंतर्गत मुख्य रूप से किन दो ऊर्जाओं के पारस्परिक संबंधों का अध्ययन किया जाता है?",
    options: [
      "यांत्रिक ऊर्जा और ऊष्मीय ऊर्जा",
      "विद्युत ऊर्जा और रासायनिक ऊर्जा",
      "प्रकाश ऊर्जा और ध्वनि ऊर्जा",
      "नाभिकीय ऊर्जा और सौर ऊर्जा"
    ],
    correct: 1
  },
  {
    question: "वे यौगिक जो द्रवित अवस्था या जलीय विलयन की अवस्था में विद्युत के सुचालक होते हैं, क्या कहलाते हैं?",
    options: [
      "वैद्युत अनअपघट्य",
      "कुचालक",
      "अक्रिय पदार्थ",
      "वैद्युत अपघट्य"
    ],
    correct: 3
  },
  {
    question: "निम्नलिखित में से कौन-सा दुर्बल वैद्युत अपघट्य का उदाहरण है?",
    options: [
      "CH₃COOH",
      "NaCl",
      "HCl",
      "NaOH"
    ],
    correct: 0
  },
  {
    question: "द्रवित सोडियम क्लोराइड के वैद्युत अपघटन में कैथोड पर कौन-सी प्रक्रिया संपन्न होती है?",
    options: [
      "ऑक्सीकरण",
      "अवकरण (अपचयन)",
      "अपघटन",
      "उदासीनीकरण"
    ],
    correct: 1
  },
  {
    question: "सोडियम क्लोराइड के जलीय विलयन के वैद्युत अपघटन में कैथोड तथा ऐनोड पर क्रमशः कौन-सी गैसें मुक्त होती हैं?",
    options: [
      "Cl₂ तथा H₂",
      "O₂ तथा H₂",
      "H₂ तथा Cl₂",
      "H₂ तथा O₂"
    ],
    correct: 2
  },
  {
    question: "सल्फ्यूरिक अम्ल (H₂SO₄) के जलीय विलयन के वैद्युत अपघटन में कैथोड तथा ऐनोड पर क्रमशः कौन-सी गैसें मुक्त होती हैं?",
    options: [
      "H₂ तथा O₂",
      "O₂ तथा H₂",
      "H₂ तथा Cl₂",
      "Cl₂ तथा O₂"
    ],
    correct: 0
  },
  {
    question: "सिल्वर नाइट्रेट (AgNO₃) के जलीय विलयन का वैद्युत अपघटन करने पर कैथोड और ऐनोड पर क्रमशः क्या मुक्त होते हैं?",
    options: [
      "H₂ तथा O₂",
      "O₂ तथा Ag",
      "H₂ तथा Ag",
      "Ag तथा O₂"
    ],
    correct: 3
  },
  {
    question: "1 फैराडे (F) का मान निम्नलिखित में से कितने कूलॉम के लगभग बराबर होता है?",
    options: [
      "96500 C",
      "96494 F",
      "1.6 × 10⁻¹⁹ C",
      "6.022 × 10²³ C"
    ],
    correct: 0
  },
  {
    question: "फैराडे के प्रथम नियमानुसार, वैद्युत अपघटन के दौरान इलेक्ट्रोड पर मुक्त होने वाले पदार्थ की मात्रा किसके समानुपाती होती है?",
    options: [
      "विलयन के आयतन के",
      "प्रवाहित विद्युत आवेश की मात्रा के",
      "इलेक्ट्रोड के क्षेत्रफल के",
      "विलयन के ताप के"
    ],
    correct: 1
  },
  {
    question: "फैराडे के प्रथम नियम को व्यक्त करने वाला मुख्य सूत्र कौन-सा है?",
    options: [
      "W = Z × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>t</span></span>",
      "W = Z × I × t",
      "W = Z × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>t</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I × t</span><span style='border-top:1px solid; display:block;'>Z</span></span>"
    ],
    correct: 1
  },
  {
    question: "फैराडे के द्वितीय नियम के अनुसार, विभिन्न वैद्युत अपघट्य के विलयनों को किस क्रम में जोड़ा जाता है?",
    options: [
      "समानांतर क्रम में",
      "श्रेणीक्रम में",
      "मिश्रित क्रम में",
      "किसी भी क्रम में"
    ],
    correct: 1
  },
  {
    question: "वह सेल जो रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलता है, क्या कहलाता है?",
    options: [
      "विद्युत अपघटनी सेल",
      "विद्युत रासायनिक सेल",
      "प्राथमिक सेल",
      "द्वितीयक सेल"
    ],
    correct: 1
  },
  {
    question: "लवण सेतु (Salt Bridge) किस प्रकार की नलिका होती है?",
    options: [
      "V-आकार की",
      "U-आकार की",
      "L-आकार की",
      "सीधी नलिका"
    ],
    correct: 1
  },
  {
    question: "लवण सेतु बनाने के लिए निम्नलिखित में से किस लवण का उपयोग किया जाता है?",
    options: [
      "KNO₃",
      "ZnSO₄",
      "CuSO₄",
      "H₂SO₄"
    ],
    correct: 0
  },
  {
    question: "डेनियल सेल (Zn-Cu सेल) की कुल या पूर्ण सेल अभिक्रिया का सही समीकरण कौन-सा है?",
    options: [
      "Zn(s) + Cu(s) → Zn²⁺(aq) + Cu²⁺(aq)",
      "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)",
      "Zn²⁺(aq) + Cu(s) → Zn(s) + Cu²⁺(aq)",
      "Zn²⁺(aq) + Cu²⁺(aq) → Zn(s) + Cu(s)"
    ],
    correct: 1
  },
  {
    question: "लवण सेतु का महत्वपूर्ण कार्य दोनों विलयनों में निम्नलिखित में से किसे बनाए रखना है?",
    options: [
      "रासायनिक साम्य",
      "विद्युत उदासीनता",
      "तापीय साम्य",
      "आयतन समानता"
    ],
    correct: 1
  },
  {
    question: "किसी इलेक्ट्रोड द्वारा इलेक्ट्रॉन ग्रहण करने या त्याग करने की क्षमता को क्या कहा जाता है?",
    options: [
      "विद्युत वाहक बल",
      "धारा घनत्व",
      "इलेक्ट्रोड विभव",
      "विभवांतर"
    ],
    correct: 2
  },
  {
    question: "1 मोल सांद्रण, 298 K ताप तथा 1 atm दाब की स्थिति में किसी इलेक्ट्रोड का निर्धारित विभव क्या कहलाता है?",
    options: [
      "मानक इलेक्ट्रोड विभव",
      "ऑक्सीकरण विभव",
      "अवकरण विभव",
      "सेल विभव"
    ],
    correct: 0
  },
  {
    question: "इलेक्ट्रोड विभव के निर्धारण हेतु मानक इलेक्ट्रोड के रूप में प्रायः किसका उपयोग किया जाता है?",
    options: [
      "मानक हाइड्रोजन इलेक्ट्रोड",
      "मानक जिंक इलेक्ट्रोड",
      "मानक कॉपर इलेक्ट्रोड",
      "मानक सिल्वर इलेक्ट्रोड"
    ],
    correct: 0
  },
  {
    question: "विद्युत रासायनिक श्रेणी में हाइड्रोजन से ऊपर स्थित अर्थात ऋणात्मक विभव वाले धातु किसी अम्ल के जलीय विलयन से क्या मुक्त करते हैं?",
    options: [
      "O₂ गैस",
      "H₂ गैस",
      "N₂ गैस",
      "Cl₂ गैस"
    ],
    correct: 1
  },
  {
    question: "हैलोजनों की ऑक्सीकारक क्षमता का घटता हुआ सही क्रम निम्नलिखित में से कौन-सा है?",
    options: [
      "I₂ > Br₂ > Cl₂ > F₂",
      "Cl₂ > F₂ > Br₂ > I₂",
      "F₂ > Cl₂ > Br₂ > I₂",
      "Br₂ > Cl₂ > F₂ > I₂"
    ],
    correct: 2
  },
  {
    question: "वैद्युत अपघट्य विलयन के अवरोध या प्रतिरोध (Resistance) की इकाई क्या होती है?",
    options: [
      "ओम (Ω)",
      "महो (mho)",
      "सीमेंस (S)",
      "ओम मीटर (Ω-m)"
    ],
    correct: 0
  },
  {
    question: "इनमें से कौन चालकत्व (Conductance) की इकाई है?",
    options: [
      "Ω",
      "Ω m",
      "Ω⁻¹",
      "Ω cm"
    ],
    correct: 2
  },
  {
    question: "विशिष्ट चालकत्व (K) और विशिष्ट प्रतिरोध (ρ) के बीच सही संबंध दर्शाने वाला सूत्र कौन-सा है?",
    options: [
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>ρ</span></span>",
      "K = ρ",
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>ρ²</span></span>",
      "K = ρ²"
    ],
    correct: 0
  },
  {
    question: "किसी चालक सेल की लंबाई (l) तथा उसके अनुप्रस्थ काट के क्षेत्रफल (A) के अनुपात (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>) को क्या कहा जाता है?",
    options: [
      "चालकत्व",
      "मोलर चालकत्व",
      "सेल स्थिरांक",
      "प्रतिरोधकता"
    ],
    correct: 2
  },
  {
    question: "किसी वैद्युत अपघट्य विलयन के V cm³ आयतन में घुले 1 मोल विद्युत अपघट्य के चालकत्व को क्या कहा जाता है?",
    options: [
      "तुल्यांकी चालकत्व",
      "विशिष्ट चालकत्व",
      "सेल स्थिरांक",
      "मोलर चालकत्व"
    ],
    correct: 3
  },
  {
    question: "किसी वैद्युत अपघट्य के अनंत तनुता पर मोलर चालकत्व, उसके धनायन और ऋणायन के मोलर चालकताओं के योग के बराबर होता है। यह कथन किस नियम को निरूपित करता है?",
    options: [
      "फैराडे का नियम",
      "हेनरी का नियम",
      "कोलराउश का नियम",
      "ओम का नियम"
    ],
    correct: 2
  },
  {
    question: "वैसा सेल जो एक बार निष्क्रिय हो जाने के बाद पुनः सक्रिय नहीं किया जा सकता है, उसे क्या कहा जाता है?",
    options: [
      "द्वितीयक सेल",
      "प्राथमिक सेल",
      "संचायक सेल",
      "उत्क्रमणीय सेल"
    ],
    correct: 1
  },
  {
    question: "शुष्क सेल (Dry Cell) या लेक्लांशी सेल में ऐनोड का कार्य निम्नलिखित में से कौन करता है?",
    options: [
      "तांबे का पात्र",
      "जस्ते (Zn) का बर्तन",
      "ग्रेफाइट की छड़",
      "लोहे का बर्तन"
    ],
    correct: 1
  },
  {
    question: "निम्नलिखित में से कौन-सा द्वितीयक सेल (Secondary Cell) का उदाहरण है?",
    options: [
      "शुष्क सेल",
      "मर्करी सेल",
      "लेड संचायक सेल",
      "वोल्टीय सेल"
    ],
    correct: 2
  },
  {
    question: "यदि दो भिन्न विद्युत अपघट्यों के विलयन से समान विद्युत धारा प्रवाहित की जाए तथा मुक्त पदार्थों की मात्राएँ W₁ और W₂ एवं उनके तुल्यांकी भार E₁ और E₂ हों, तो सही अनुपात कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>E₁</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₂</span><span style='border-top:1px solid; display:block;'>W₂</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₂</span><span style='border-top:1px solid; display:block;'>E₁</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₁</span><span style='border-top:1px solid; display:block;'>E₂</span></span>",
      "W₁ × W₂ = E₁ × E₂"
    ],
    correct: 2
  },
  {
    question: "कॉपर और जिंक के छड़ों के द्रव्यमान में परिवर्तन तथा उनके तुल्यांकी भारों के बीच सही संबंध दर्शाने वाला सूत्र कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>कॉपर के छड़ के द्रव्यमान में वृद्धि</span><span style='border-top:1px solid; display:block;'>जिंक के छड़ के द्रव्यमान में कमी</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>कॉपर का तुल्यांकी भार</span><span style='border-top:1px solid; display:block;'>जिंक का तुल्यांकी भार</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>कॉपर के छड़ के द्रव्यमान में वृद्धि</span><span style='border-top:1px solid; display:block;'>जिंक के छड़ के द्रव्यमान में कमी</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>जिंक का तुल्यांकी भार</span><span style='border-top:1px solid; display:block;'>कॉपर का तुल्यांकी भार</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>जिंक के छड़ के द्रव्यमान में कमी</span><span style='border-top:1px solid; display:block;'>कॉपर के छड़ के द्रव्यमान में वृद्धि</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>कॉपर का तुल्यांकी भार</span><span style='border-top:1px solid; display:block;'>जिंक का तुल्यांकी भार</span></span>",
      "कॉपर के छड़ के द्रव्यमान में वृद्धि × जिंक के छड़ के द्रव्यमान में कमी = कॉपर का तुल्यांकी भार × जिंक का तुल्यांकी भार"
    ],
    correct: 0
  },
  {
    question: "विद्युत रासायनिक श्रेणी में धातुओं का विद्युतधनात्मक गुण बढ़ने पर उनके ऑक्साइडों के ऊष्मीय स्थायित्व पर क्या प्रभाव पड़ता है?",
    options: [
      "स्थायित्व घटता है",
      "स्थायित्व बढ़ता है",
      "स्थायित्व अपरिवर्तित रहता है",
      "स्थायित्व शून्य हो जाता है"
    ],
    correct: 1
  },
  {
    question: "वैद्युत अपघटन के समय दो या दो से अधिक धन आयनों की उपस्थिति में कैथोड पर सबसे पहले कौन-सा धन आयन मुक्त होता है?",
    options: [
      "जिसकी अपचायक शक्ति अधिक हो",
      "जिसकी ऑक्सीकारक शक्ति (अपचयन विभव) प्रबल हो",
      "जिसका द्रव्यमान सबसे अधिक हो",
      "जो उदासीन अणु हो"
    ],
    correct: 1
  },
  {
    question: "मर्करी सेल की मुख्य विशेषता यह है कि इसके संपूर्ण जीवनकाल में इसका विद्युत वाहक बल (EMF) नियत (1.35 V) रहता है, इसका मुख्य कारण क्या है?",
    options: [
      "इसमें कोई गैसीय उत्पाद भाग नहीं लेता",
      "इसके समग्र सेल अभिक्रिया में ऐसा कोई आयन शामिल नहीं है जिसकी सांद्रता विलयन में बदलती हो",
      "यह एक प्राथमिक सेल है",
      "इसमें जिंक-अमलगम का प्रयोग होता है"
    ],
    correct: 1
  },
  {
    question: "तनुता (Dilution) बढ़ाने पर किसी वैद्युत अपघट्य विलयन की विशिष्ट चालकता (Specific Conductance) और मोलर चालकता (Molar Conductance) पर क्या प्रभाव पड़ता है?",
    options: [
      "दोनों बढ़ती हैं",
      "विशिष्ट चालकता घटती है तथा मोलर चालकता बढ़ती है",
      "दोनों घटती हैं",
      "विशिष्ट चालकता बढ़ती है तथा मोलर चालकता घटती है"
    ],
    correct: 1
  },
  {
    question: "लोहे में जंग लगने से बचाने के लिए संक्षारण-रोधी प्रक्रिया (Galvanization) के अंतर्गत लोहे की सतह पर किस धातु की परत चढ़ाई जाती है?",
    options: [
      "तांबा (Cu)",
      "जस्ता (Zn)",
      "टीन (Sn)",
      "निकेल (Ni)"
    ],
    correct: 1
  },
  {
    question: "निम्नलिखित में से कौन-सा सेल सीधे रासायनिक ऊर्जा को उच्च दक्षता (~70%) के साथ विद्युत ऊर्जा में परिवर्तित करता है?",
    options: [
      "शुष्क सेल",
      "लेड संचायक सेल",
      "ईंधन सेल (Fuel Cell - H₂-O₂ Cell)",
      "मर्करी सेल"
    ],
    correct: 2
  },
  {
    question: "मानक हाइड्रोजन इलेक्ट्रोड (SHE) का मानक इलेक्ट्रोड विभव (E°) सभी तापों पर कितना माना गया है?",
    options: [
      "0.00 V",
      "1.00 V",
      "1.23 V",
      "2.00 V"
    ],
    correct: 0
  },
  {
    question: "कॉपर सल्फेट (CuSO₄) के जलीय विलयन का कॉपर (Cu) इलेक्ट्रोड की उपस्थिति में वैद्युत अपघटन करने पर ऐनोड पर क्या प्रक्रिया होती है?",
    options: [
      "O₂ गैस मुक्त होती है",
      "कॉपर ऐनोड से Cu²⁺ आयन बनकर विलयन में घुलता है",
      "H₂ गैस मुक्त होती है",
      "SO₄²⁻ आयन डिस्चार्ज होता है"
    ],
    correct: 1
  }
];
      
