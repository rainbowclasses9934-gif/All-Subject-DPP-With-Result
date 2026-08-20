// यह उन छात्रों की पंजीकृत आईडी (IDs) की लिस्ट है जो DPP दे सकते हैं
window.validStudentIDs = [
  "cm2007",
  "omi2009",
  "234051190003",
  "pk2010",
  "skroy",
  "nc2009",
  "1234",
  "Prity.rc2010.classes",
  "29/05/2009",
  "Lebeta",
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
window.quizDatabase[1].ch_3 = window.quizDatabase[1].ch_3 || {}; 
window.quizDatabase[1].ch_3.dpp_3 = [
  {
    question: "नियत तापमान पर किसी चालक का प्रतिरोध (R) उसकी लंबाई (l) के साथ किस प्रकार का संबंध रखता है?",
    options: [
      "व्युत्क्रमानुपाती होता है",
      "समानुपाती होता है",
      "वर्ग के व्युत्क्रमानुपाती होता है",
      "स्वतंत्र होता है"
    ],
    correct: 1
  },
  {
    question: "नियत ताप पर किसी चालक का प्रतिरोध (R) उसके अनुप्रस्थ काट के क्षेत्रफल (A) के साथ कैसा संबंध रखता है?",
    options: [
      "समानुपाती होता है",
      "वर्ग के समानुपाती होता है",
      "व्युत्क्रमानुपाती होता है",
      "अपरिवर्तित रहता है"
    ],
    correct: 2
  },
  {
    question: "नियत ताप पर किसी चालक के प्रतिरोध (R), उसकी लंबाई (l) तथा अनुप्रस्थ काट के क्षेत्रफल (A) के बीच सही समानुपाती संबंध कौन-सा है?",
    options: [
      "R ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "R ∝ l.A",
      "R ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "R ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>l.A</span></span>"
    ],
    correct: 2
  },
  {
    question: "यदि किसी चालक की प्रतिरोधकता ρ, लंबाई l तथा अनुप्रस्थ काट का क्षेत्रफल A हो, तो चालक के प्रतिरोध (R) का सही सूत्र क्या होगा?",
    options: [
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ.A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ.l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>ρ.A</span></span>",
      "R = ρ.l.A"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोध के सूत्र (R = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ.l</span><span style='border-top:1px solid; display:block;'>A</span></span>) में प्रयुक्त नियतांक ρ (रो) को क्या कहा जाता है?",
    options: [
      "विश्रांति काल",
      "चालकता",
      "विभवांतर",
      "प्रतिरोधकता या विशिष्ट प्रतिरोध"
    ],
    correct: 3
  },
  {
    question: "किसी चालक की प्रतिरोधकता (ρ) ज्ञात करने का सही गणितीय सूत्र निम्नलिखित में से कौन-सा है?",
    options: [
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R.A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R.l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>R.A</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>R.l</span></span>"
    ],
    correct: 0
  },
  {
    question: "प्रतिरोधकता (विशिष्ट प्रतिरोध) का SI मात्रक निम्नलिखित में से कौन-सा होता है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ओम</span><span style='border-top:1px solid; display:block;'>मीटर</span></span>",
      "ओम-मीटर (Ω.m)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ओम</span><span style='border-top:1px solid; display:block;'>मीटर²</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वोल्ट</span><span style='border-top:1px solid; display:block;'>मीटर</span></span>"
    ],
    correct: 1
  },
  {
    question: "किसी पदार्थ की प्रतिरोधकता (विशिष्ट प्रतिरोध) मुख्य रूप से किस पर निर्भर करती है?",
    options: [
      "केवल चालक की लंबाई पर",
      "केवल अनुप्रस्थ काट के क्षेत्रफल पर",
      "पदार्थ की प्रकृति पर",
      "लंबाई और क्षेत्रफल दोनों पर"
    ],
    correct: 2
  },
  {
    question: "यदि किसी चालक की लंबाई (l) 1 मीटर तथा अनुप्रस्थ काट का क्षेत्रफल (A) 1 मीटर² (1 m²) लिया जाए, तो उसकी प्रतिरोधकता (ρ) का मान किसके बराबर होता है?",
    options: [
      "प्रतिरोध (R) के बराबर",
      "विभवांतर (V) के बराबर",
      "विद्युत धारा (I) के बराबर",
      "शून्य के बराबर"
    ],
    correct: 0
  },
  {
    question: "किसी पदार्थ की प्रतिरोधकता (ρ) का मान एकांक लंबाई तथा एकांक अनुप्रस्थ काट के क्षेत्रफल वाले चालक के किस मान के तुल्य होता है?",
    options: [
      "विद्युत धारा के",
      "विभवांतर के",
      "प्रतिरोध के",
      "विश्रांति काल के"
    ],
    correct: 2
  },
  {
    question: "इलेक्ट्रॉन के द्रव्यमान (m), इलेक्ट्रॉन घनत्व (n), इलेक्ट्रॉन के आवेश (e) तथा विश्रांति काल (τ) के पदों में प्रतिरोधकता (ρ) का सही सूत्र क्या होता है?",
    options: [
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ne²τ</span><span style='border-top:1px solid; display:block;'>m</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m.n</span><span style='border-top:1px solid; display:block;'>e²τ</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m</span><span style='border-top:1px solid; display:block;'>ne²τ</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m.e²</span><span style='border-top:1px solid; display:block;'>n.τ</span></span>"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोधकता के सूत्र (ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m</span><span style='border-top:1px solid; display:block;'>ne²τ</span></span>) के अनुसार, किसी चालक की प्रतिरोधकता (ρ) विश्रांति काल (τ) के साथ किस प्रकार संबंधित होती है?",
    options: [
      "समानुपाती होती है",
      "व्युत्क्रमानुपाती होती है",
      "वर्ग के समानुपाती होती है",
      "स्वतंत्र होती है"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोधकता के सूत्र के अनुसार, किसी चालक की प्रतिरोधकता (ρ) का मान इलेक्ट्रॉन घनत्व (n) के कैसा होता है?",
    options: [
      "समानुपाती",
      "वर्ग के समानुपाती",
      "अपरिवर्तित",
      "व्युत्क्रमानुपाती"
    ],
    correct: 3
  },
  {
    question: "प्रतिरोध के व्युत्क्रम (Reciprocal) को क्या कहा जाता है?",
    options: [
      "प्रतिरोधकता",
      "चालकत्व",
      "विशिष्ट प्रतिरोध",
      "धारा घनत्व"
    ],
    correct: 1
  },
  {
    question: "चालकत्व को निम्नलिखित में से किस संकेत द्वारा सूचित किया जाता है?",
    options: [
      "R",
      "σ",
      "G",
      "ρ"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोध (R) के पदों में चालकत्व (G) का सही गणितीय सूत्र कौन-सा है?",
    options: [
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "G = R²",
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R²</span></span>"
    ],
    correct: 0
  },
  {
    question: "विद्युत धारा (I) तथा विभवांतर (V) के पदों में चालकत्व (G) का सही सूत्र क्या होता है?",
    options: [
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "G = I.V",
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V²</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>V</span></span>"
    ],
    correct: 3
  },
  {
    question: "चालकत्व का एसआई (SI) मात्रक क्या होता है?",
    options: [
      "ओम (Ω)",
      "ओम-मीटर (Ω-m)",
      "ओम⁻¹ (Ω⁻¹)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वोल्ट</span><span style='border-top:1px solid; display:block;'>एम्पियर</span></span>"
    ],
    correct: 2
  },
  {
    question: "चालकत्व के मात्रक ओम⁻¹ (Ω⁻¹) को अन्य किस नाम से भी जाना जाता है?",
    options: [
      "महो (℧) तथा सीमेन (S)",
      "हेनरी तथा टेसला",
      "वोल्ट तथा एम्पियर",
      "फैराड तथा कूलॉम"
    ],
    correct: 0
  },
  {
    question: "प्रतिरोधकता के व्युत्क्रम को निम्नलिखित में से क्या कहते हैं?",
    options: [
      "चालकत्व",
      "प्रतिरोध",
      "चालकता या विशिष्ट चालकत्व",
      "विभवांतर"
    ],
    correct: 2
  },
  {
    question: "चालकता (विशिष्ट चालकत्व ) को किस संकेत द्वारा सूचित किया जाता है?",
    options: [
      "ρ",
      "σ",
      "G",
      "τ"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोधकता (ρ) के पदों में चालकता (σ) का सही सूत्र क्या है?",
    options: [
      "σ = ρ²",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>ρ²</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>ρ</span></span>"
    ],
    correct: 3
  },
  {
    question: "किसी चालक की लंबाई (l), प्रतिरोध (R) और अनुप्रस्थ काट क्षेत्रफल (A) के पदों में चालकता (σ) का सही सूत्र कौन-सा है?",
    options: [
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>R.A</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R.A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R.l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>R.l</span></span>"
    ],
    correct: 0
  },
  {
    question: "चालकत्व (G), लंबाई (l) तथा क्षेत्रफल (A) के रूप में चालकता (σ) का सही व्यंजक क्या है?",
    options: [
      "σ = G.(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>l</span></span>)",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>G</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "σ = G.(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>)",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>G.l</span></span>"
    ],
    correct: 2
  },
  {
    question: "चालकता (विशिष्ट चालकता) का एसआई (SI) मात्रक निम्नलिखित में से कौन-सा है?",
    options: [
      "ओम-मीटर",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ओम</span><span style='border-top:1px solid; display:block;'>मीटर</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वोल्ट</span><span style='border-top:1px solid; display:block;'>मीटर</span></span>",
      "ओम⁻¹-मीटर⁻¹ (Ω⁻¹ m⁻¹)"
    ],
    correct: 3
  },
  {
    question: "इलेक्ट्रॉन घनत्व (n), आवेश (e), विश्रांति काल (τ) तथा इलेक्ट्रॉन के द्रव्यमान (m) के पदों में चालकता (σ) का सही सूत्र क्या होता है?",
    options: [
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>m</span><span style='border-top:1px solid; display:block;'>ne²τ</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ne²τ</span><span style='border-top:1px solid; display:block;'>m</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>neτ</span><span style='border-top:1px solid; display:block;'>m²</span></span>",
      "σ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>nm</span><span style='border-top:1px solid; display:block;'>e²τ</span></span>"
    ],
    correct: 1
  },
  {
    question: "यदि किसी चालक का अनुप्रस्थ काट क्षेत्रफल नियत रहे, तो उसके प्रतिरोधों के अनुपात (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span>) तथा लंबाइयों के अनुपात (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>) के बीच सही संबंध क्या होगा?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₂</span><span style='border-top:1px solid; display:block;'>l₁</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>)²",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁²</span><span style='border-top:1px solid; display:block;'>l₂</span></span>"
    ],
    correct: 0
  },
  {
    question: "यदि किसी चालक की लंबाई नियत रहे, तो उसके प्रतिरोधों (R₁, R₂) तथा अनुप्रस्थ काट के क्षेत्रफलों (A₁, A₂) के बीच सही अनुपात क्या होगा?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₁</span><span style='border-top:1px solid; display:block;'>A₂</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₂</span><span style='border-top:1px solid; display:block;'>A₁</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₁²</span><span style='border-top:1px solid; display:block;'>A₂²</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₂²</span><span style='border-top:1px solid; display:block;'>A₁²</span></span>"
    ],
    correct: 1
  },
  {
    question: "चालक की लंबाई नियत रहने पर, उसके प्रतिरोधों के अनुपात (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span>) तथा त्रिज्याओं (r₁, r₂) के बीच सही संबंध कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>r₁</span><span style='border-top:1px solid; display:block;'>r₂</span></span>)²",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>r₂</span><span style='border-top:1px solid; display:block;'>r₁</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>r₂</span><span style='border-top:1px solid; display:block;'>r₁</span></span>)²",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>r₁</span><span style='border-top:1px solid; display:block;'>r₂</span></span>"
    ],
    correct: 2
  },
  {
    question: "यदि किसी चालक की लंबाई (l) तथा अनुप्रस्थ काट का क्षेत्रफल (A) दोनों परिवर्तित होते हैं, तो उसके प्रतिरोधों के अनुपात (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span>) का सही सूत्र क्या होगा?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>) × (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₁</span><span style='border-top:1px solid; display:block;'>A₂</span></span>)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₂</span><span style='border-top:1px solid; display:block;'>l₁</span></span>) × (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₂</span><span style='border-top:1px solid; display:block;'>A₁</span></span>)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>) × (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₂</span><span style='border-top:1px solid; display:block;'>A₁</span></span>)",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>R₂</span></span> = (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l₁</span><span style='border-top:1px solid; display:block;'>l₂</span></span>)² × (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A₂</span><span style='border-top:1px solid; display:block;'>A₁</span></span>)"
    ],
    correct: 2
  },
  {
    question: "जब किसी चालक तार को खींचकर उसकी लंबाई परिवर्तित की जाती है, तो निम्नलिखित में से कौन-सी राशि नियत रहती है?",
    options: [
      "प्रतिरोध",
      "अनुप्रस्थ काट क्षेत्रफल",
      "लंबाई",
      "आयतन"
    ],
    correct: 3
  },
  {
    question: "यदि किसी चालक की लंबाई को खींचकर उसकी प्रारंभिक लंबाई का n गुना कर दिया जाए, तो उसका नया प्रतिरोध (R₂) प्रारंभिक प्रतिरोध (R₁) का कितना गुना हो जाएगा?",
    options: [
      "n गुना",
      "n² गुना",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>n</span></span> गुना",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>n²</span></span> गुना"
    ],
    correct: 1
  },
  {
    question: "चालक की लंबाई को खींचकर n गुना करने पर नए प्रतिरोध (R₂) तथा प्रारंभिक प्रतिरोध (R₁) के बीच सही संबंध दर्शाने वाला सूत्र कौन-सा है?",
    options: [
      "R₂ = n.R₁",
      "R₂ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>n²</span></span>",
      "R₂ = n².R₁",
      "R₂ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁</span><span style='border-top:1px solid; display:block;'>n</span></span>"
    ],
    correct: 2
  },
  {
    question: "सभी पदार्थों की प्रतिरोधकता निम्नलिखित में से किस पर निर्भर करती है?",
    options: [
      "केवल दाब पर",
      "ताप पर",
      "केवल अनुप्रस्थ काट क्षेत्रफल पर",
      "केवल लंबाई पर"
    ],
    correct: 1
  },
  {
    question: "किसी पदार्थ की प्रतिरोधकता में परिवर्तन (Δρ) उसकी प्रारंभिक प्रतिरोधकता (ρ₀) तथा ताप में परिवर्तन (Δt) के साथ कैसा संबंध रखता है?",
    options: [
      "व्युत्क्रमानुपाती होता है",
      "वर्ग के समानुपाती होता है",
      "समानुपाती होता है",
      "स्वतंत्र होता है"
    ],
    correct: 2
  },
  {
    question: "प्रारंभिक प्रतिरोधकता (ρ₀) तथा ताप में परिवर्तन (Δt) के पदों में प्रतिरोधकता में परिवर्तन (Δρ) का सही समानुपाती संबंध कौन-सा है?",
    options: [
      "Δρ ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ₀</span><span style='border-top:1px solid; display:block;'>Δt</span></span>",
      "Δρ ∝ ρ₀ Δt",
      "Δρ ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Δt</span><span style='border-top:1px solid; display:block;'>ρ₀</span></span>",
      "Δρ ∝ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>ρ₀ Δt</span></span>"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोधकता में परिवर्तन के सूत्र (Δρ = α ρ₀ Δt) में प्रयुक्त अनुपातिक स्थिरांक α को क्या कहा जाता है?",
    options: [
      "विश्रांति काल",
      "चालकता",
      "धारा घनत्व",
      "प्रतिरोधकता ताप गुणांक"
    ],
    correct: 3
  },
  {
    question: "प्रारंभिक प्रतिरोधकता (ρ₀), ताप में परिवर्तन (Δt) तथा प्रतिरोधकता ताप गुणांक (α) के पदों में प्रतिरोधकता में परिवर्तन (Δρ) का सही सूत्र क्या होता है?",
    options: [
      "Δρ = α ρ₀ Δt",
      "Δρ = α <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ₀</span><span style='border-top:1px solid; display:block;'>Δt</span></span>",
      "Δρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ₀</span><span style='border-top:1px solid; display:block;'>α Δt</span></span>",
      "Δρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>α Δt</span><span style='border-top:1px solid; display:block;'>ρ₀</span></span>"
    ],
    correct: 0
  },
  {
    question: "प्रतिरोधकता ताप गुणांक (α) का एसआई (SI) मात्रक क्या होता है?",
    options: [
      "C",
      "C⁻¹",
      "C²",
      "C⁻²"
    ],
    correct: 1
  },
  {
    question: "केल्विन पैमाने पर प्रतिरोधकता ताप गुणांक (α) का मात्रक निम्नलिखित में से कौन-सा होता है?",
    options: [
      "K",
      "K²",
      "K⁻¹",
      "K⁻²"
    ],
    correct: 2
  }
];
