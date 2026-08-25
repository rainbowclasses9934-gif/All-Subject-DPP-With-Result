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
    "375269": "🤵🏻‍♀️ Kajal Kumari - 2 (MO)", "386436": "🤵🏻‍♀️ Anjali Kumari", "537964": "🤵🏻‍♀️ Pushpanjali Kumari", 
    "182528": "🤵🏻‍♀️ Sadhna Kumari", "100636": "🤵🏻‍♀️ Neha Kumari - 1 (MO)", "274279": "🤵🏻‍♀️ Saloni Kumari", 
    "972332": "🤵🏻‍♀️ Sapna Kumari", "207112": "🤵🏻‍♀️ Chandni Kumari - 1", "260416": "🤵🏻‍♀️ Priyanshu Kumari - 1", 
    "241724": "🤵🏻‍♀️ Nisha Kumari - 1", "842875": "🤵🏻‍♀️ Prity (simple)", "651157": "🤵🏻‍♀️ Chandni Kumari - 2", 
    "771852": "🤵🏻‍♀️ Chandni Kumari - 3", "577698": "🤵🏻‍♀️ Nisha Kumari - 2", "650095": "🤵🏻‍♀️ Sakshi Kumari", 
    "855048": "🤵🏻‍♀️ Niharika Kumari", "658046": "🤵🏻‍♀️ Tanya Kumari", "665802": "🤵🏻‍♀️ Prity Kumari", 
    "485285": "🤵🏻‍♀️ Kajal Kumari - 1", "875875": "🤵🏻‍♀️ Khushbu Kumari", "735483": "🤵🏻‍♀️ Priti Sharma", 
    "883484": "🤵🏻‍♀️ Jaya Kumari", "358624": "🤵🏻‍♀️ Nikku Kumari", "648150": "🤵🏻‍♀️ Komal Kumari", "678138": "🤵🏻‍♀️ Neha Kumari"
    // इसी प्रकार और भी ID : "Name" जोड़ सकते हैं
};

// 👇👇👇👇👇नया फीचर: पर्सनल मैसेज लिस्ट 👇👇👇👇👇
window.studentMessages = {
    "cm010" : " Hello"
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
// =====================================================================================================================================================================
window.quizDatabase[1].ch_3 = window.quizDatabase[1].ch_3 || {};
window.quizDatabase[1].ch_3.dpp_5 = [
  {
    question: "प्रतिरोधों के किस संयोजन में प्रथम प्रतिरोधक का दूसरा सिरा दूसरे प्रतिरोधक के प्रथम सिरे से तथा दूसरे का दूसरा सिरा तीसरे के प्रथम सिरे से जोड़ा जाता है?",
    options: [
      "समानांतर क्रम संयोजन",
      "मिश्रित क्रम संयोजन",
      "श्रेणीक्रम संयोजन",
      "पार्श्वक्रम संयोजन"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोधों के श्रेणीक्रम संयोजन में सभी प्रतिरोधकों से होकर प्रवाहित होने वाली विद्युत धारा (I) का मान कैसा होता है?",
    options: [
      "समान होता है",
      "अलग-अलग होता है",
      "शून्य होता है",
      "अनिश्चित होता है"
    ],
    correct: 0
  },
  {
    question: "श्रेणीक्रम में जुड़े प्रतिरोधों R₁, R₂ एवं R₃ के सिरों के बीच आरोपित विभवांतर के संबंध में कौन-सा कथन सत्य है?",
    options: [
      "सभी प्रतिरोधों पर विभवांतर समान रहता है",
      "विभवांतर का मान शून्य होता है",
      "विभवांतर धारा से स्वतंत्र होता है",
      "प्रतिरोध R₁, R₂ एवं R₃ के अनुसार विभवांतर क्रमशः V₁, V₂ एवं V₃ होता है"
    ],
    correct: 3
  },
  {
    question: "संयोजित प्रतिरोधों के स्थान पर प्रयुक्त वह प्रतिरोध जिससे परिपथ में धारा और विभवांतर पहले के समान ही बना रहता है, क्या कहलाता है?",
    options: [
      "तुल्य प्रतिरोध",
      "आंशिक प्रतिरोध",
      "विशिष्ट प्रतिरोध",
      "अनंत प्रतिरोध"
    ],
    correct: 0
  },
  {
    question: "यदि तीन प्रतिरोधक R₁, R₂ तथा R₃ श्रेणीक्रम में जुड़े हों, तो उनके तुल्य प्रतिरोध (Rₛ) का सही सूत्र क्या होगा?",
    options: [
      "Rₛ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₃</span></span>",
      "Rₛ = R₁ . R₂ . R₃",
      "Rₛ = R₁ + R₂ + R₃",
      "Rₛ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁ + R₂</span><span style='border-top:1px solid; display:block;'>R₃</span></span>"
    ],
    correct: 2
  },
  {
    question: "श्रेणीक्रम में संयोजित n प्रतिरोधों के तुल्य प्रतिरोध (Rₛ) का सही व्यंजक कौन-सा है?",
    options: [
      "Rₛ = R₁ . R₂ . ... . Rₙ",
      "Rₛ = R₁ + R₂ + ... + Rₙ",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₛ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + ... + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₙ</span></span>",
      "Rₛ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁ + R₂ + ... + Rₙ</span><span style='border-top:1px solid; display:block;'>n</span></span>"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोधों के श्रेणीक्रम संयोजन में तुल्य प्रतिरोध का मान निम्नलिखित में से किसके बराबर होता है?",
    options: [
      "प्रत्येक प्रतिरोध के योग के बराबर",
      "प्रतिरोधों के अंतर के बराबर",
      "प्रतिरोधों के गुणनफल के बराबर",
      "प्रतिरोधों के अनुपात के बराबर"
    ],
    correct: 0
  },
  {
    question: "श्रेणीक्रम संयोजन में प्राप्त तुल्य प्रतिरोध का मान परिपथ में जुड़े प्रत्येक व्यक्तिगत प्रतिरोध से कैसा होता है?",
    options: [
      "कम होता है",
      "बराबर होता है",
      "अधिक होता है",
      "शून्य होता है"
    ],
    correct: 2
  },
  {
    question: "समान प्रतिरोध R वाले n प्रतिरोधों को श्रेणीक्रम में जोड़ने पर परिपथ का तुल्य प्रतिरोध (Rₛ) कितना होगा?",
    options: [
      "Rₛ = n R",
      "Rₛ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>n</span></span>",
      "Rₛ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "Rₛ = n² R"
    ],
    correct: 0
  },
  {
    question: "यदि समान प्रतिरोध के n प्रतिरोधक श्रेणीक्रम में कुल V विभवांतर से जुड़े हों, तो प्रत्येक प्रतिरोध के सिरों पर विभवांतर (Vᵣ) का मान कितना होगा?",
    options: [
      "Vᵣ = n V",
      "Vᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>n</span></span>",
      "Vᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>n²</span></span>",
      "Vᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n²</span><span style='border-top:1px solid; display:block;'>V</span></span>"
    ],
    correct: 1
  },
  {
    question: "प्रतिरोधों के किस संयोजन में दो या दो से अधिक प्रतिरोधों के पहले सिरों को एक बिंदु से तथा उनके दूसरे सिरों को किसी दूसरे बिंदु से जोड़ा जाता है?",
    options: [
      "श्रेणीक्रम संयोजन",
      "मिश्रित संयोजन",
      "समांतर क्रम संयोजन",
      "पार्श्व-श्रेणी संयोजन"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोधों के समांतर क्रम संयोजन में प्रत्येक प्रतिरोधक के सिरों के बीच आरोपित विभवांतर (V) का मान कैसा होता है?",
    options: [
      "भिन्न-भिन्न होता है",
      "समान (एक ही) होता है",
      "शून्य होता है",
      "निरंतर परिवर्तनशील होता है"
    ],
    correct: 1
  },
  {
    question: "जब तीन प्रतिरोधक R₁, R₂ तथा R₃ समांतर क्रम में जुड़े हों, तो बैटरी से आने वाली मुख्य धारा I प्रथम संधि बिंदु पर किस प्रकार विभाजित होती है?",
    options: [
      "सभी में समान धारा बहती है",
      "धारा शून्य हो जाती है",
      "प्रतिरोधों के अनुसार क्रमशः I₁, I₂ व I₃ में बंट जाती है",
      "केवल R₁ से होकर प्रवाहित होती है"
    ],
    correct: 2
  },
  {
    question: "तीन प्रतिरोधकों R₁, R₂ तथा R₃ को समांतर क्रम में जोड़ने पर तुल्य प्रतिरोध (Rₚ) का सही व्यंजक कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₚ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₃</span></span>",
      "Rₚ = R₁ + R₂ + R₃",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₚ</span></span> = R₁ + R₂ + R₃",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₃</span></span>"
    ],
    correct: 0
  },
  {
    question: "समांतर क्रम में जुड़े n प्रतिरोधों के तुल्य प्रतिरोध (Rₚ) का सही व्यंजक कौन-सा है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₚ</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + ... + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₙ</span></span>",
      "Rₚ = R₁ + R₂ + ... + Rₙ",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₚ</span></span> = R₁ + R₂ + ... + Rₙ",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R₂</span></span> + ... + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>Rₙ</span></span>"
    ],
    correct: 0
  },
  {
    question: "प्रतिरोधों के समांतर क्रम संयोजन में तुल्य प्रतिरोध का व्युत्क्रम निम्नलिखित में से किसके बराबर होता है?",
    options: [
      "प्रत्येक प्रतिरोध के योग के बराबर",
      "प्रत्येक प्रतिरोध के व्युत्क्रम के योग के बराबर",
      "प्रतिरोधों के गुणनफल के बराबर",
      "प्रतिरोधों के अंतर के बराबर"
    ],
    correct: 1
  },
  {
    question: "समांतर क्रम संयोजन में प्राप्त तुल्य प्रतिरोध का मान परिपथ में जुड़े प्रत्येक व्यक्तिगत प्रतिरोध की तुलना में कैसा होता है?",
    options: [
      "प्रत्येक प्रतिरोध से अधिक होता है",
      "प्रत्येक प्रतिरोध के बराबर होता है",
      "प्रत्येक प्रतिरोध से कम होता है",
      "अनंत होता है"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोधों के समांतर क्रम संयोजन में प्रत्येक प्रतिरोधक के सिरों के बीच आरोपित विभवांतर का मान कैसा रहता है?",
    options: [
      "समान होता है",
      "अलग-अलग होता है",
      "निरंतर घटता है",
      "शून्य होता है"
    ],
    correct: 0
  },
  {
    question: "R मान वाले n एक समान प्रतिरोधों को समांतर क्रम में जोड़ने पर परिपथ का तुल्य प्रतिरोध (Rₚ) कितना होगा?",
    options: [
      "Rₚ = n R",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>n</span></span>",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n²</span><span style='border-top:1px solid; display:block;'>R</span></span>"
    ],
    correct: 1
  },
  {
    question: "R मान वाले n एक समान प्रतिरोधों के समांतर क्रम संयोजन में कुल धारा I प्रवाहित होने पर, प्रत्येक प्रतिरोध से प्रवाहित धारा (Iᵣ) का मान कितना होगा?",
    options: [
      "Iᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>n</span></span>",
      "Iᵣ = n I",
      "Iᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>n</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "Iᵣ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>n²</span></span>"
    ],
    correct: 0
  },
  {
    question: "हमारे घरों में विभिन्न विद्युत उपकरण जैसे बल्ब, हीटर, पंखे आदि एक-दूसरे से किस क्रम में संयोजित होते हैं?",
    options: [
      "श्रेणीक्रम में",
      "मिश्रित क्रम में",
      "समांतर क्रम में",
      "केवल श्रेणी-समांतर मिश्रित रूप में"
    ],
    correct: 2
  },
  {
    question: "दो प्रतिरोधों R₁ तथा R₂ के समांतर क्रम संयोजन का तुल्य प्रतिरोध (Rₚ) व्यक्त करने का सही सूत्र कौन-सा है?",
    options: [
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁ + R₂</span><span style='border-top:1px solid; display:block;'>R₁ R₂</span></span>",
      "Rₚ = R₁ + R₂",
      "Rₚ = R₁ R₂ (R₁ + R₂)",
      "Rₚ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R₁ R₂</span><span style='border-top:1px solid; display:block;'>R₁ + R₂</span></span>"
    ],
    correct: 3
  },
  {
    question: "ताप घटाने पर जिस निश्चित ताप पर किसी पदार्थ की प्रतिरोधकता शून्य हो जाती है, उस ताप को क्या कहते हैं?",
    options: [
      "परम शून्य ताप",
      "क्रांतिक ताप",
      "गलनांक",
      "क्वथनांक"
    ],
    correct: 1
  },
  {
    question: "निश्चित ताप पर किसी पदार्थ की प्रतिरोधकता के शून्य हो जाने के गुण को क्या कहा जाता है?",
    options: [
      "अतिचालकता",
      "चालकता",
      "चुंबकत्व",
      "विद्युत अपघटन"
    ],
    correct: 0
  },
  {
    question: "मरकरी निम्नलिखित में से किस ताप पर अतिचालकता का गुण दर्शाती है?",
    options: [
      "0 K",
      "2.4 K",
      "4.2 K",
      "100 K"
    ],
    correct: 2
  },
  {
    question: "अतिचालक पदार्थों में एक बार विद्युत धारा प्रवाहित करने के बाद बैटरी स्रोत हटा लेने पर क्या होता है?",
    options: [
      "विद्युत धारा तुरंत बंद हो जाती है",
      "धारा का मान शून्य हो जाता है",
      "धारा का मान अत्यधिक घट जाता है",
      "विद्युत धारा प्रवाहित होती रहती है"
    ],
    correct: 3
  },
  {
    question: "अतिचालक पदार्थ को बाह्य चुंबकीय क्षेत्र में रखने पर उससे चुंबकीय क्षेत्र रेखाओं के न गुजरने की घटना को क्या कहते हैं?",
    options: [
      "हॉल प्रभाव",
      "माइसनर प्रभाव",
      "सीबेक प्रभाव",
      "पेल्टियर प्रभाव"
    ],
    correct: 1
  },
  {
    question: "जब किसी अतिचालक पदार्थ को बाह्य चुंबकीय क्षेत्र में रखा जाता है, तो उससे गुजरने वाली चुंबकीय क्षेत्र रेखाओं का क्या होता है?",
    options: [
      "क्षेत्र रेखाएँ बहुत अधिक बढ़ जाती हैं",
      "क्षेत्र रेखाएँ अतिचालक से होकर नहीं गुजरती हैं",
      "क्षेत्र रेखाएँ पदार्थ में समाहित हो जाती हैं",
      "क्षेत्र रेखाएँ स्थिर हो जाती हैं"
    ],
    correct: 1
  },
  {
    question: "विद्युत रासायनिक सेल एक ऐसी युक्ति है जो निम्नलिखित में से किस ऊर्जा को विद्युत ऊर्जा में परिवर्तित करती है?",
    options: [
      "यांत्रिक ऊर्जा",
      "नाभिकीय ऊर्जा",
      "रासायनिक ऊर्जा",
      "ऊष्मीय ऊर्जा"
    ],
    correct: 2
  },
  {
    question: "विद्युत सेल में प्रयुक्त दो धात्विक छड़ों को निम्नलिखित में से क्या कहा जाता है?",
    options: [
      "इलेक्ट्रोड",
      "प्रतिरोधक",
      "विभवमापी",
      "संधारित्र"
    ],
    correct: 0
  },
  {
    question: "विद्युत सेल में स्थित इलेक्ट्रोड किस प्रकार के घोल में डूबे रहते हैं?",
    options: [
      "आसुत जल के घोल में",
      "विद्युत अपघट्य के घोल में",
      "परावैद्युत द्रव में",
      "सामान्य तेल में"
    ],
    correct: 1
  },
  {
    question: "विद्युत सेल के अंदर धारा प्रवाह के लिए उत्तरदायी गतिशील कण कौन-से होते हैं?",
    options: [
      "केवल न्यूट्रॉन",
      "केवल इलेक्ट्रॉन",
      "आयन",
      "केवल प्रोटॉन"
    ],
    correct: 2
  },
  {
    question: "विद्युत सेल के चित्र आरेख के अनुसार, धन (+) ध्रुव वाले इलेक्ट्रोड को क्या कहते हैं?",
    options: [
      "एनोड",
      "कैथोड",
      "विद्युत अपघट्य",
      "प्रतिरोधक"
    ],
    correct: 1
  },
  {
    question: "विद्युत सेल में ऋण (-) ध्रुव वाले इलेक्ट्रोड को क्या कहा जाता है?",
    options: [
      "एनोड",
      "कैथोड",
      "चालक",
      "कुचालक"
    ],
    correct: 0
  },
  {
    question: "सेलों द्वारा परिपथ में किन्हीं दो बिंदुओं के बीच क्या उत्पन्न किया जाता है?",
    options: [
      "धारा",
      "प्रतिरोध",
      "विभवांतर",
      "कार्य"
    ],
    correct: 2
  },
  {
    question: "विद्युत सेल मुख्य रूप से कितने प्रकार के होते हैं?",
    options: [
      "दो",
      "तीन",
      "चार",
      "पाँच"
    ],
    correct: 0
  },
  {
    question: "ऐसे सेल जिनसे एक बार धारा प्रवाह बंद हो जाने के बाद पुनः धारा प्राप्त नहीं की जा सकती, क्या कहलाते हैं?",
    options: [
      "द्वितीयक सेल",
      "संचायक सेल",
      "प्राथमिक सेल",
      "आदर्श सेल"
    ],
    correct: 2
  },
  {
    question: "शुष्क सेल, डेनियल सेल, लेक्लांशी सेल तथा वोल्टीय सेल किस प्रकार के सेल के उदाहरण हैं?",
    options: [
      "द्वितीयक सेल",
      "प्राथमिक सेल",
      "संचायक सेल",
      "पुनर्भरणीय सेल"
    ],
    correct: 1
  },
  {
    question: "ऐसे सेल जिनसे धारा प्रवाह बंद हो जाने के बाद पुनः धारा प्राप्त की जा सकती है, क्या कहलाते हैं?",
    options: [
      "प्राथमिक सेल",
      "अमानक सेल",
      "शुष्क सेल",
      "द्वितीयक सेल"
    ],
    correct: 3
  },
  {
    question: "निम्नलिखित में से कौन-सा द्वितीयक सेल का उदाहरण है?",
    options: [
      "शुष्क सेल",
      "डेनियल सेल",
      "सीसा संचायक सेल",
      "वोल्टीय सेल"
    ],
    correct: 2
  }
];
window.quizDatabase[5].ch_1 = window.quizDatabase[5].ch_1 || {};
window.quizDatabase[5].ch_1.dpp_1 = [
  {
    question: "'बातचीत' शीर्षक निबंध के निबंधकार कौन हैं?",
    options: [
      "चंद्रधर शर्मा गुलेरी",
      "बालकृष्ण भट्ट",
      "रामधारी सिंह दिनकर",
      "जयप्रकाश नारायण"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट का जन्म कब हुआ था?",
    options: [
      "23 जून, 1844",
      "23 जुलाई, 1844",
      "20 जून, 1844",
      "18 जून, 1845"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट का निधन किस तिथि को हुआ था?",
    options: [
      "23 जून, 1914",
      "20 अगस्त, 1914",
      "20 जुलाई, 1914",
      "15 जुलाई, 1914"
    ],
    correct: 2
  },
  {
    question: "बालकृष्ण भट्ट का निवास स्थान कहाँ था?",
    options: [
      "पटना, बिहार",
      "वाराणसी, उत्तर प्रदेश",
      "लखनऊ, उत्तर प्रदेश",
      "इलाहाबाद (प्रयागराज), उत्तर प्रदेश"
    ],
    correct: 3
  },
  {
    question: "बालकृष्ण भट्ट की माता का क्या नाम था?",
    options: [
      "प्रभावती देवी",
      "पार्वती देवी",
      "सुशीला देवी",
      "अमरावती देवी"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट के पिता का क्या नाम था?",
    options: [
      "बेनी प्रसाद भट्ट",
      "देवी प्रसाद भट्ट",
      "रामप्रसाद भट्ट",
      "शिवप्रसाद भट्ट"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट के पिता पेशे से क्या थे?",
    options: [
      "किसान",
      "शिक्षक",
      "व्यापारी",
      "वकील"
    ],
    correct: 2
  },
  {
    question: "बालकृष्ण भट्ट के मन में अध्ययन की रुचि एवं लालसा किसने जगाई?",
    options: [
      "उनकी माता ने",
      "उनके पिता ने",
      "उनके गुरु ने",
      "भारतेंदु हरिश्चंद्र ने"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट ने प्रारंभ में किस भाषा का अध्ययन किया था?",
    options: [
      "हिंदी",
      "अंग्रेजी",
      "फारसी",
      "संस्कृत"
    ],
    correct: 3
  },
  {
    question: "बालकृष्ण भट्ट ने प्रयाग के मिशन स्कूल से एंट्रेंस की परीक्षा कब उत्तीर्ण की थी?",
    options: [
      "1867 ई० में",
      "1875 ई० में",
      "1888 ई० में",
      "1877 ई० में"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट किस काल/युग के प्रमुख साहित्यकार हैं?",
    options: [
      "रीतिकाल",
      "छायावादी युग",
      "भारतेंदु युग",
      "प्रयोगवादी युग"
    ],
    correct: 2
  },
  {
    question: "बालकृष्ण भट्ट ने 1877 में किस मासिक पत्र का संपादन प्रारंभ किया था?",
    options: [
      "आनंद कादंबिनी",
      "हिंदी प्रदीप",
      "धर्मयुग",
      "हरिश्चंद्र चंद्रिका"
    ],
    correct: 1
  },
  {
    question: "'हिंदी प्रदीप' नामक मासिक पत्रिका बालकृष्ण भट्ट ने कितने वर्षों तक चलाई?",
    options: [
      "25 वर्ष",
      "30 वर्ष",
      "33 वर्ष",
      "40 वर्ष"
    ],
    correct: 2
  },
  {
    question: "'हिंदी प्रदीप' पत्र निकालने की प्रेरणा बालकृष्ण भट्ट को किससे मिली थी?",
    options: [
      "लाला श्रीनिवास दास से",
      "महावीर प्रसाद द्विवेदी से",
      "आचार्य रामचंद्र शुक्ल से",
      "भारतेंदु हरिश्चंद्र से"
    ],
    correct: 3
  },
  {
    question: "बालकृष्ण भट्ट ने 1886 में लाला श्रीनिवास दास की किस रचना की कठोर आलोचना की थी?",
    options: [
      "परीक्षा गुरु",
      "संयोगिता स्वयंवर",
      "तप्ता संवरण",
      "रणधीर प्रेममोहिनी"
    ],
    correct: 1
  },
  {
    question: "'भट्ट निबंधमाला' कितने खंडों में प्रकाशित है?",
    options: [
      "तीन खंडों में",
      "दो खंडों में",
      "चार खंडों में",
      "पाँच खंडों में"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट ने कुल मिलाकर लगभग कितने निबंध लिखे हैं?",
    options: [
      "500 के आसपास",
      "800 के आसपास",
      "1000 के आसपास",
      "1500 के आसपास"
    ],
    correct: 2
  },
  {
    question: "आचार्य रामचंद्र शुक्ल ने बालकृष्ण भट्ट को हिंदी साहित्य का क्या कहा है?",
    options: [
      "एडिसन और स्टील",
      "शेक्सपियर और मिल्टन",
      "कबीर और तुलसी",
      "भारतेंदु और प्रेमचंद"
    ],
    correct: 0
  },
  {
    question: "\"बालकृष्ण भट्ट आधुनिक हिंदी आलोचना के प्रवर्तकों में अग्रगण्य हैं।\" यह विचार किसका माना जाता है?",
    options: [
      "हजारी प्रसाद द्विवेदी",
      "डॉ० रामविलास शर्मा",
      "डॉ० नामवर सिंह",
      "रामधारी सिंह दिनकर"
    ],
    correct: 1
  },
  {
    question: "'नूतन ब्रह्मचारी' उपन्यास के लेखक कौन हैं?",
    options: [
      "प्रेमचंद",
      "जयशंकर प्रसाद",
      "बालकृष्ण भट्ट",
      "चंद्रधर शर्मा गुलेरी"
    ],
    correct: 2
  }
];
