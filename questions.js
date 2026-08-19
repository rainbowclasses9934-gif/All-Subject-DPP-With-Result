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
// =========================================================
window.quizDatabase[1].ch_3 = window.quizDatabase[1].ch_3 || {}; 
window.quizDatabase[1].ch_3.dpp_2 = [
  {
    question: "36. चालक पर एकांक विद्युत क्षेत्र आरोपित करने से उत्पन्न संवहन वेग (अपवाह वेग) को क्या कहते हैं?",
    options: [
      "विद्युत धारा",
      "गतिशीलता",
      "विश्रांति काल",
      "इलेक्ट्रॉन घनत्व"
    ],
    correct: 1
  },
  {
    question: "37. गतिशीलता का SI मात्रक निम्नलिखित में से कौन-सा होता है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>C.s</span><span style='border-top:1px solid; display:block;'>kg</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>C.kg</span><span style='border-top:1px solid; display:block;'>s</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>kg.s</span><span style='border-top:1px solid; display:block;'>C</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>C</span><span style='border-top:1px solid; display:block;'>kg</span></span>"
    ],
    correct: 0
  },
  {
    question: "38. गतिशीलता का SI मात्रक के अतिरिक्त निम्नलिखित में से कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>C</span><span style='border-top:1px solid; display:block;'>kgs</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m²</span><span style='border-top:1px solid; display:block;'>Vs</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m²s</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>kg</span><span style='border-top:1px solid; display:block;'>C.s</span></span>"
    ],
    correct: 1
  },
  {
    question: "39. किसी चालक में गतिशीलता और विश्रांति काल के बीच क्या संबंध होता है?",
    options: [
      "गतिशीलता, विश्रांति काल के व्युत्क्रमानुपाती होती है",
      "गतिशीलता, विश्रांति काल के समानुपाती होती है",
      "गतिशीलता, विश्रांति काल के वर्ग के समानुपाती होती है",
      "दोनों के बीच कोई संबंध नहीं होता है"
    ],
    correct: 1
  },
  {
    question: "40. किसी चालक पर विद्युत क्षेत्र आरोपित करने पर इलेक्ट्रॉन किस दिशा में अपवाह वेग (Vd) से गति करने लगते हैं?",
    options: [
      "विद्युत क्षेत्र की दिशा में",
      "विद्युत क्षेत्र की विपरीत दिशा में",
      "लंबवत दिशा में",
      "किसी भी यादृच्छिक दिशा में"
    ],
    correct: 1
  },
  {
    question: "41. किसी चालक में बहने वाली विद्युत धारा (I), इलेक्ट्रॉन घनत्व (n), अनुप्रस्थ काट का क्षेत्रफल (A) और अपवाह वेग (Vd) के बीच सही संबंध क्या है?",
    options: [
      "I = AneVd",
      "I = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Ane</span><span style='border-top:1px solid; display:block;'>Vd</span></span>",
      "I = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Vd</span><span style='border-top:1px solid; display:block;'>Ane</span></span>",
      "I = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>An</span><span style='border-top:1px solid; display:block;'>eVd</span></span>"
    ],
    correct: 0
  },
  {
    question: "42. विद्युत धारा (I) और अपवाह वेग (Vd) के बीच संबंध के आधार पर विद्युत धारा किस राशि के समानुपाती होती है?",
    options: [
      "केवल इलेक्ट्रॉन घनत्व (n) के",
      "केवल अनुप्रस्थ काट के क्षेत्रफल (A) के",
      "केवल अपवाह वेग (Vd) के",
      "इन सभी के (n, A और Vd)"
    ],
    correct: 3
  },
  {
    question: "43. किसी चालक में धारा घनत्व (J) और संवहन वेग (Vd) के बीच संबंध दर्शाने वाला सही सूत्र कौन-सा है?",
    options: [
      "J = neVd",
      "J = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ne</span><span style='border-top:1px solid; display:block;'>Vd</span></span>",
      "J = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Vd</span><span style='border-top:1px solid; display:block;'>ne</span></span>",
      "J = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n</span><span style='border-top:1px solid; display:block;'>eVd</span></span>"
    ],
    correct: 0
  },
  {
    question: "44. ओम का नियम किन राशियों के बीच संबंध स्थापित करता है?",
    options: [
      "विद्युत धारा और विभवांतर",
      "आवेश और समय",
      "प्रतिरोध और लंबाई",
      "विद्युत क्षेत्र और क्षेत्रफल"
    ],
    correct: 0
  },
  {
    question: "45. ओम के नियम के अनुसार यदि किसी चालक की भौतिक अवस्थाओं (जैसे- ताप, लंबाई, अनुप्रस्थ काट का क्षेत्रफल) को नियत रखा जाए, तो चालक के सिरों पर आरोपित विभवांतर प्रवाहित धारा के कैसा होता है?",
    options: [
      "व्युत्क्रमानुपाती",
      "समानुपाती",
      "वर्ग के समानुपाती",
      "अपरिवर्तित"
    ],
    correct: 1
  },
  {
    question: "46. यदि किसी चालक के सिरों पर आरोपित विभवांतर V तथा उससे बहने वाली विद्युत धारा I हो, तो ओम के नियम का सही गणितीय व्यंजक क्या होगा?",
    options: [
      "V ∝ I (या V = RI)",
      "V ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>I</span></span> (या V = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>I</span></span>)",
      "V ∝ I² (या V = RI²)",
      "I ∝ V² (या I = RV²)"
    ],
    correct: 0
  },
  {
    question: "47. ओम के नियम में प्रयुक्त नियतांक R को चालक का क्या कहते हैं?",
    options: [
      "विभवांतर",
      "चालकता",
      "प्रतिरोध",
      "विशिष्ट धारा"
    ],
    correct: 2
  },
  {
    question: "48. विभवांतर (V) और विद्युत धारा (I) के मध्य खींचा गया ग्राफ किस प्रकार की रेखा होता है?",
    options: [
      "वक्र रेखा",
      "सरल रेखा",
      "वृत्ताकार रेखा",
      "परवलयाकार रेखा"
    ],
    correct: 1
  },
  {
    question: "49. विभवांतर (V) को Y-अक्ष और विद्युत धारा (I) को X-अक्ष पर रखकर खींचे गए ग्राफ की ढाल (Slope = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>I</span></span>) किसके तुल्य होती है?",
    options: [
      "चालकता (σ)",
      "प्रतिरोध (R)",
      "धारा घनत्व (J)",
      "अपवाह वेग (Vd)"
    ],
    correct: 1
  },
  {
    question: "50. यदि Y-अक्ष पर विद्युत धारा (I) और X-अक्ष पर विभवांतर (V) हो, तो धारा-विभवांतर ग्राफ की ढाल (Slope = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>V</span></span>) का मान किसके बराबर होता है?",
    options: [
      "R",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "R²",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R²</span></span>"
    ],
    correct: 1
  },
  {
    question: "51. ओम के नियम के सूक्ष्म रूप का सही व्यंजक निम्नलिखित में से कौन-सा है?",
    options: [
      "J = σE",
      "J = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>σ</span><span style='border-top:1px solid; display:block;'>E</span></span>",
      "J = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>E</span><span style='border-top:1px solid; display:block;'>σ</span></span>",
      "J = σ²E"
    ],
    correct: 0
  },
  {
    question: "52. किसी चालक का वह गुण जिसके कारण वह अपने से होकर प्रवाहित होने वाली धारा में रुकावट डालता है, क्या कहलाता है?",
    options: [
      "चालकता",
      "प्रतिरोध",
      "विभवांतर",
      "धारा घनत्व"
    ],
    correct: 1
  },
  {
    question: "53. विभवांतर (V) और विद्युत धारा (I) के पदों में प्रतिरोध (R) का सही सूत्र क्या होता है?",
    options: [
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "R = V.I",
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>V.I</span></span>"
    ],
    correct: 0
  },
  {
    question: "54. किसी चालक के प्रतिरोध का SI मात्रक निम्नलिखित में से कौन-सा होता है?",
    options: [
      "वोल्ट.एम्पियर",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वोल्ट</span><span style='border-top:1px solid; display:block;'>एम्पियर</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>एम्पियर</span><span style='border-top:1px solid; display:block;'>वोल्ट</span></span>",
      "ओम-मीटर"
    ],
    correct: 1
  },
  {
    question: "55. प्रतिरोध का SI मात्रक क्या होता है?",
    options: [
      "ओम (Ω)",
      "फैराड (F)",
      "हेनरी (H)",
      "टेसला (T)"
    ],
    correct: 0
  },
  {
    question: "56. किसी चालक का प्रतिरोध निम्नलिखित में से किन कारकों पर निर्भर करता है?",
    options: [
      "केवल पदार्थ की प्रकृति पर",
      "केवल लंबाई और अनुप्रस्थ काट क्षेत्रफल पर",
      "केवल भौतिक अवस्थाओं (जैसे- ताप) पर",
      "पदार्थ की प्रकृति, लंबाई, अनुप्रस्थ काट क्षेत्रफल तथा भौतिक अवस्थाओं पर"
    ],
    correct: 3
  },
  {
    question: "57. 1 ओम (Ω) का सही मान किसके तुल्य होता है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1 वोल्ट</span><span style='border-top:1px solid; display:block;'>1 एम्पियर</span></span> (1 VA⁻¹)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1 एम्पियर</span><span style='border-top:1px solid; display:block;'>1 वोल्ट</span></span> (1 AV⁻¹)",
      "1 वोल्ट × 1 एम्पियर (1 VA)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1 एम्पियर²</span><span style='border-top:1px solid; display:block;'>1 वोल्ट</span></span>"
    ],
    correct: 0
  },
  {
    question: "58. प्रतिरोध किस प्रकार की भौतिक राशि है?",
    options: [
      "सदिश राशि",
      "अदिश राशि",
      "प्रदेश (टेन्सर) राशि",
      "इनमें से कोई नहीं"
    ],
    correct: 1
  }
];
