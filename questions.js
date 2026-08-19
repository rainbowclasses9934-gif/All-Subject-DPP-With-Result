// यह उन छात्रों की पंजीकृत आईडी (IDs) की लिस्ट है जो DPP दे सकते हैं
window.validStudentIDs = [
  "Cm2007",
  "Omi2009",
  "234051190003",
  "pk2010",
  "skroy",
  "Nc 2009",
  "1234",
  "Prity.rc2010.classes",
  "29/05/2009",
  "Le beta",
  "N Roy 99991",
  "2026 -27",
  "amanraosahab",
  "9561",
  "J245",
  "Sharma pritee 8210",
  "3763",
  "Ut8406",
  "Juli123",
  "@neha roy12345",
  "1234 Tanya",
  "Khushbu 1234",
  "22/08/....",
  "2009",
  "123456",
  "Yadav123",
  "Ahiran 302",
  "sak1234",
  "8210",
  "848506",
  "Lakshmi @10",
  "rcprince",
  "Ankush kumar",
  "4-2-2009",
  "123456",
  "62060",
  "Pujak92",
  "Sk8485",
  "62060",
  "Anjali",
  "123456"
];
// --- नया फीचर: पर्सनल मैसेज लिस्ट ---
window.studentMessages = {
    "omi2009": " बनिया रिजल्ट जे न अलो त बुझ जाइहे 🫨",
    "pk2010" : " एकदम ज्यादा से ज्यादा सही होए के चाहिएयइ 🤨"
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

// =========================================================
// 👇👇 यहाँ से नीचे अपना AI द्वारा जनरेट किया गया क्वेश्चन कोड पेस्ट करते जाएँ 👇👇
// ============================================
window.quizDatabase[2].ch_3 = window.quizDatabase[2].ch_3 || {}; 
window.quizDatabase[2].ch_3.dpp_2 = [
  {
    question: "फैराडे के अनुसार 1 मोल इलेक्ट्रॉन का आवेश परिकलित करने का सही व्यंजक कौन-सा है?",
    options: [
      "1.6 × 10⁻¹⁹ C × 6.022 × 10²³",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1.6 × 10⁻¹⁹ C</span><span style='border-top:1px solid; display:block;'>6.022 × 10²³</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>6.022 × 10²³</span><span style='border-top:1px solid; display:block;'>1.6 × 10⁻¹⁹ C</span></span>",
      "1.6 × 10⁻¹⁹ C + 6.022 × 10²³"
    ],
    correct: 0
  },
  {
    question: "1 मोल इलेक्ट्रॉन का यथार्थ (सटीक) आवेश कितना कूलॉम होता है?",
    options: [
      "96500 C",
      "96494 C",
      "96000 C",
      "95494 C"
    ],
    correct: 1
  },
  {
    question: "1 मोल इलेक्ट्रॉन का लगभग आवेश कितना कूलॉम (C) माना जाता है?",
    options: [
      "95500 C",
      "96000 C",
      "96500 C",
      "97500 C"
    ],
    correct: 2
  },
  {
    question: "1 मोल इलेक्ट्रॉन का आवेश कितने फैराडे (F) के बराबर होता है?",
    options: [
      "0.5 F",
      "2 F",
      "1.5 F",
      "1 F"
    ],
    correct: 3
  },
  {
    question: "1 फैराडे (F) का मान निम्नलिखित में से कितने कूलॉम के बराबर होता है?",
    options: [
      "96500 C",
      "96494 F",
      "1.6 × 10⁻¹⁹ C",
      "6.022 × 10²³ C"
    ],
    correct: 0
  },
  {
    question: "माइकल फैराडे ने विद्युत अपघटन के संबंध में कुल कितने नियम दिए?",
    options: [
      "एक",
      "तीन",
      "दो",
      "चार"
    ],
    correct: 2
  },
  {
    question: "फैराडे के प्रथम नियमानुसार, विद्युत अपघटन के दौरान इलेक्ट्रोड पर मुक्त होने वाले पदार्थ की मात्रा किसके समानुपाती होती है?",
    options: [
      "विलयन के आयतन के",
      "प्रवाहित विद्युत आवेश की मात्रा के",
      "इलेक्ट्रोड के क्षेत्रफल के",
      "विलयन के ताप के"
    ],
    correct: 1
  },
  {
    question: "फैराडे के प्रथम नियम के अनुसार मुक्त पदार्थ की मात्रा (W) तथा प्रवाहित आवेश (Q) के बीच सही संबंध कौन-सा है?",
    options: [
      "W ∝ Q",
      "W ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Q</span></span>",
      "W ∝ Q²",
      "W ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Q²</span></span>"
    ],
    correct: 0
  },
  {
    question: "फैराडे के प्रथम नियम के सूत्र W = Z Q में प्रतीक Z किसे निरूपित करता है?",
    options: [
      "प्रवाहित धारा",
      "समय",
      "विद्युत रासायनिक तुल्यांक",
      "विद्युत आवेश"
    ],
    correct: 2
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
    question: "सूत्र W = Z I t के अनुसार, इलेक्ट्रोड पर मुक्त पदार्थ की मात्रा (W) प्रवाहित धारा (I) के किस प्रकार संबंधित होती है?",
    options: [
      "व्युत्क्रमानुपाती",
      "समानुपाती",
      "वर्ग के समानुपाती",
      "स्वतंत्र"
    ],
    correct: 1
  },
  {
    question: "यदि किसी विद्युत अपघट्य के विलयन में 1 एम्पीयर की धारा 1 सेकंड तक प्रवाहित की जाए, तो मुक्त पदार्थ की मात्रा (W) किसके बराबर होती है?",
    options: [
      "विद्युत आवेश (Q)",
      "प्रवाहित धारा (I)",
      "समय (t)",
      "विद्युत रासायनिक तुल्यांक (Z)"
    ],
    correct: 3
  },
  {
    question: "किसी पदार्थ का विद्युत रासायनिक तुल्यांक उसकी वह मात्रा है जो कितने एम्पीयर की धारा 1 सेकंड तक प्रवाहित करने पर प्राप्त होती है?",
    options: [
      "2 एम्पीयर",
      "10 एम्पीयर",
      "1 एम्पीयर",
      "0.5 एम्पीयर"
    ],
    correct: 2
  },
  {
    question: "1 एम्पीयर की धारा कितने समय तक प्रवाहित करने पर प्राप्त पदार्थ की मात्रा विद्युत रासायनिक तुल्यांक (Z) के बराबर होती है?",
    options: [
      "1 सेकंड",
      "60 सेकंड",
      "10 सेकंड",
      "100 सेकंड"
    ],
    correct: 0
  },
  {
    question: "फैराडे के द्वितीय नियम के अनुसार, विभिन्न विद्युत अपघट्य के विलयनों को किस क्रम में जोड़ा जाता है?",
    options: [
      "समानांतर क्रम में",
      "श्रेणीक्रम में",
      "मिश्रित क्रम में",
      "किसी भी क्रम में"
    ],
    correct: 1
  },
  {
    question: "फैराडे के द्वितीय नियम के अनुसार, समान मात्रा में विद्युत आवेश प्रवाहित करने पर इलेक्ट्रोड पर मुक्त होने वाले पदार्थ की मात्रा (W) किसके समानुपाती होती है?",
    options: [
      "परमाणु संख्या के",
      "अणु भार के",
      "तुल्यांकी भार (E) के",
      "प्रवाहित धारा के समय के"
    ],
    correct: 2
  },
  {
    question: "फैराडे के द्वितीय नियम को व्यक्त करने वाला मुख्य गणितीय संबंध कौन-सा है?(E- तुल्यांकी भार, W- पदार्थ की मात्रा)",
    options: [
      "W ∝ E",
      "W ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>E</span></span>",
      "W ∝ E²",
      "W ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>E²</span></span>"
    ],
    correct: 0
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
    question: "किसी पदार्थ का विद्युत-रासायनिक तुल्यांक (Z) और उसका तुल्यांकी भार (E) आपस में किस सूत्र द्वारा संबंधित होते हैं?",
    options: [
      "Z ∝ E",
      "Z ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>E</span></span>",
      "Z ∝ E²",
      "Z ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>E²</span></span>"
    ],
    correct: 0
  },
  {
    question: "विद्युत अपघट्य के विलयनों में समान विद्युत आवेश प्रवाहित करने पर <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span>, <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Z₁</span><span style='border-top:1px solid; display:block;'>Z₂</span></span> और <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₁</span><span style='border-top:1px solid; display:block;'>E₂</span></span> के बीच सही संबंध कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Z₂</span><span style='border-top:1px solid; display:block;'>Z₁</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₁</span><span style='border-top:1px solid; display:block;'>E₂</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Z₁</span><span style='border-top:1px solid; display:block;'>Z₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₁</span><span style='border-top:1px solid; display:block;'>E₂</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Z₁</span><span style='border-top:1px solid; display:block;'>Z₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₂</span><span style='border-top:1px solid; display:block;'>E₁</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W₁</span><span style='border-top:1px solid; display:block;'>W₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Z₂</span><span style='border-top:1px solid; display:block;'>Z₁</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E₂</span><span style='border-top:1px solid; display:block;'>E₁</span></span>"
    ],
    correct: 1
  },
  {
    question: "किसी पदार्थ का विद्युत-रासायनिक तुल्यांक (Z) उसके तुल्यांकी भार (E) के क्या होता है?",
    options: [
      "व्युत्क्रमानुपाती",
      "वर्ग के व्युत्क्रमानुपाती",
      "समानुपाती",
      "अपरिवर्तित"
    ],
    correct: 2
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
    question: "विद्युत रासायनिक सेल का मुख्य कार्य क्या है?",
    options: [
      "विद्युत ऊर्जा को रासायनिक ऊर्जा में बदलना",
      "ऊष्मा ऊर्जा को विद्युत ऊर्जा में बदलना",
      "रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलना",
      "यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलना"
    ],
    correct: 2
  },
  {
    question: "विद्युत रासायनिक सेल के निर्माण में जिंक (Zn) की छड़ को किस विलयन में डुबोया जाता है?",
    options: [
      "1 मोल CuSO₄",
      "1 मोल ZnSO₄",
      "1 मोल KCl",
      "1 मोल KNO₃"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल में कॉपर (Cu) की छड़ को किस विलयन में डुबोया जाता है?",
    options: [
      "1 मोल CuSO₄",
      "1 मोल ZnSO₄",
      "1 मोल NaCl",
      "1 मोल KCl"
    ],
    correct: 0
  },
  {
    question: "विद्युत रासायनिक सेल में प्रयोग होने वाला प्रत्येक बीकर क्या कहलाता है?",
    options: [
      "पूर्ण सेल",
      "अर्धसेल",
      "सांद्रण सेल",
      "मानकीकृत सेल"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल में दोनों छड़ों को आपस में किससे जोड़ा जाता है?",
    options: [
      "तांबे के तार और वोल्टमीटर से",
      "लवण सेतु से",
      "प्लैटिनम के तार से",
      "केवल कुंजी से"
    ],
    correct: 0
  },
  {
    question: "विद्युत रासायनिक सेल में दो बीकरों के बीच संबंध स्थापित करने के लिए किसका प्रयोग किया जाता है?",
    options: [
      "वोल्टमीटर",
      "तांबे का तार",
      "लवण सेतु",
      "एमीटर"
    ],
    correct: 2
  },
  {
    question: "विद्युत रासायनिक सेल में लवण सेतु का मुख्य कार्य क्या है?",
    options: [
      "केवल इलेक्ट्रॉनों का प्रवाह करना",
      "दोनों विलयनों के बीच विद्युत संपर्क कायम करना",
      "छड़ों का भार बढ़ाना",
      "धारा के मान को शून्य करना"
    ],
    correct: 1
  },
  {
    question: "लवण सेतु किस प्रकार की नलिका होती है?",
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
    question: "निम्नलिखित में से कौन-सा लवण, KNO₃ या NaCl के साथ मिलकर लवण सेतु के रूप में प्रयुक्त होता है?",
    options: [
      "ZnSO₄",
      "CuSO₄",
      "KCl",
      "CaSO₄"
    ],
    correct: 2
  },
  {
    question: "विद्युत रासायनिक सेल में जिंक इलेक्ट्रोड पर प्रत्येक जिंक परमाणु कितने इलेक्ट्रॉन त्यागकर जिंक आयन (Zn²⁺) में परिवर्तित होता है?",
    options: [
      "1 इलेक्ट्रॉन",
      "2 इलेक्ट्रॉन",
      "3 इलेक्ट्रॉन",
      "4 इलेक्ट्रॉन"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल के जिंक इलेक्ट्रोड पर होने वाली ऑक्सीकरण अभिक्रिया का सही समीकरण निम्नलिखित में से कौन-सा है?",
    options: [
      "Zn(s) → Zn²⁺(aq) + 2e⁻",
      "Zn²⁺(aq) + 2e⁻ → Zn(s)",
      "Cu²⁺(aq) + 2e⁻ → Cu(s)",
      "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)"
    ],
    correct: 0
  },
  {
    question: "विद्युत रासायनिक सेल में जिंक इलेक्ट्रोड द्वारा त्यागे गए इलेक्ट्रॉन चालक तार से होते हुए किस इलेक्ट्रोड की छड़ पर चले जाते हैं?",
    options: [
      "जस्ते (Zn) की छड़ पर",
      "तांबे (Cu) की छड़ पर",
      "लोहे (Fe) की छड़ पर",
      "प्लैटिनम (Pt) की छड़ पर"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल की जिंक इलेक्ट्रोड अभिक्रिया के दौरान निर्मित जिंक आयन (Zn²⁺) किस विलयन में चले जाते हैं?",
    options: [
      "CuSO₄ के विलयन में",
      "ZnSO₄ के विलयन में",
      "NaCl के विलयन में",
      "KCl के विलयन में"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल में कॉपर इलेक्ट्रोड की ओर Cu²⁺ आयन कॉपर छड़ पर पहुँचकर कितने इलेक्ट्रॉन ग्रहण करते हैं?",
    options: [
      "1 इलेक्ट्रॉन",
      "2 इलेक्ट्रॉन",
      "3 इलेक्ट्रॉन",
      "4 इलेक्ट्रॉन"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल के कॉपर इलेक्ट्रोड पर होने वाली अपचयन अभिक्रिया का सही निरूपण कौन-सा है?",
    options: [
      "Cu(s) → Cu²⁺(aq) + 2e⁻",
      "Cu²⁺(aq) + 2e⁻ → Cu(s)",
      "Zn(s) → Zn²⁺(aq) + 2e⁻",
      "Cu²⁺(aq) → Cu(s) + 2e⁻"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल में कॉपर आयन (Cu²⁺) इलेक्ट्रॉन ग्रहण करके कॉपर (Cu) के रूप में कहाँ जमा होते हैं?",
    options: [
      "जिंक की छड़ पर",
      "कॉपर की छड़ पर",
      "लवण सेतु में",
      "बीकर के पेंदे में"
    ],
    correct: 1
  }
];
