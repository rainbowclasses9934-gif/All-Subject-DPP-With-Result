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
    "855048": "🤵🏻‍♀️ Niharika Bharti", "658046": "🤵🏻‍♀️ Tanya Kumari", "665802": "🤵🏻‍♀️ Prity Kumari", 
    "485285": "🤵🏻‍♀️ Kajal Kumari - 1", "875875": "🤵🏻‍♀️ Khushbu Kumari", "735483": "🤵🏻‍♀️ Priti Sharma", 
    "883484": "🤵🏻‍♀️ Jaya Kumari", "358624": "🤵🏻‍♀️ Nikku Kumari", "648150": "🤵🏻‍♀️ Komal Kumari", "678138": "🤵🏻‍♀️ Neha Kumari"
    // इसी प्रकार और भी ID : "Name" जोड़ सकते हैं
};

// 👇👇👇👇👇नया फीचर: पर्सनल मैसेज लिस्ट 👇👇👇👇👇
window.studentMessages = {
    "cm010" : " Hello",
    "537964" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।",
    "577698" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।",
    "241724" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।",
    "185428" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।",
    "855048" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।",
    "650095" : "App पर जो subject वाला section है, उसके अंदर Physics, Chemistry मे तुमको उनके जो real notes हैं, जहां से DPP दिया जाता है। यानी कि मेरे notes वो वहीं पे दिख जाएंगे। ' notes ' का बटन वहां click करके open कर लेना or डाउनलोड करके रख लेना। दो-तीन दिन के बाद वो button remove कर दिए जाएंगे। और अभी सिर्फ जो अगला chapter का DPP अब आने वाला है, उसका वहां पे notes मिलेंगे। इसी प्रकार से जब उसके अगले chapter का DPP आएगा तब उस समय उसके notes दिए जाएंगे और ऐसे धीरे-धीरे करके सारे notes मिलते रहेंगे। जब button लगाए जाएंगे तो notification मिल जाएगा तुमको।(जिसके DPP हो चुके हैं। उसके अगर notes चाहिए तो community में previous DPP note type करके और msg send करना है।"
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
window.quizDatabase[1].ch_3.dpp_7 = [
  {
    question: "किसी विद्युत परिपथ में कार्य करने की दर अथवा ऊर्जा के क्षय होने की दर को क्या कहते हैं?",
    options: [
      "विद्युत ऊर्जा",
      "विद्युत शक्ति",
      "विद्युत धारिता",
      "विद्युत विभव"
    ],
    correct: 1
  },
  {
    question: "विद्युत शक्ति को सामान्यतः किस संकेत द्वारा व्यक्त किया जाता है?",
    options: [
      "W",
      "E",
      "Q",
      "P"
    ],
    correct: 3
  },
  {
    question: "विद्युत शक्ति का एसआई (SI) मात्रक क्या होता है?",
    options: [
      "वाट",
      "जूल",
      "कूलॉम",
      "ओम"
    ],
    correct: 0
  },
  {
    question: "वाट के अतिरिक्त विद्युत शक्ति का मात्रक निम्नलिखित में से कौन-सा है?",
    options: [
      "जूल-सेकंड",
      "वाट-सेकंड",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>जूल</span><span style='border-top:1px solid; display:block;'>सेकंड</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>जूल</span><span style='border-top:1px solid; display:block;'>कूलॉम</span></span>"
    ],
    correct: 2
  },
  {
    question: "यदि परिपथ में t समय तक ऊर्जा क्षय अथवा किया गया कार्य W हो, तो विद्युत शक्ति (P) का सूत्र क्या होगा?",
    options: [
      "P = W × t",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W</span><span style='border-top:1px solid; display:block;'>t</span></span>",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>t</span><span style='border-top:1px solid; display:block;'>W</span></span>",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>W × t</span></span>"
    ],
    correct: 1
  },
  {
    question: "विभवांतर V तथा धारा I के पदों में विद्युत शक्ति (P) का सही सूत्र क्या है?",
    options: [
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "P = V² I",
      "P = V I"
    ],
    correct: 3
  },
  {
    question: "धारा I तथा प्रतिरोध R के पदों में विद्युत शक्ति (P) का सही व्यंजक कौन-सा है?",
    options: [
      "P = I² R",
      "P = I R²",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I²</span><span style='border-top:1px solid; display:block;'>R</span></span>"
    ],
    correct: 0
  },
  {
    question: "विभवांतर V तथा प्रतिरोध R के पदों में विद्युत शक्ति (P) का सही सूत्र क्या है?",
    options: [
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>R²</span></span>",
      "P = V² R",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V²</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>V²</span></span>"
    ],
    correct: 2
  },
  {
    question: "प्रतिरोध R नियत रहने पर विद्युत शक्ति (P) विभवांतर (V) से किस प्रकार संबंधित होती है?",
    options: [
      "विभवांतर के व्युत्क्रमानुपाती",
      "विभवांतर के वर्ग के समानुपाती",
      "विभवांतर के समानुपाती",
      "विभवांतर से स्वतंत्र"
    ],
    correct: 1
  },
  {
    question: "यदि किसी परिपथ में 1 सेकंड में 1 जूल ऊर्जा का क्षय होता है, तो उसकी शक्ति क्या कहलाती है?",
    options: [
      "1 किलोवाट",
      "1 अश्व शक्ति",
      "1 जूल",
      "1 वाट"
    ],
    correct: 3
  },
  {
    question: "1 वाट निम्नलिखित में से किसके बराबर होता है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1 जूल</span><span style='border-top:1px solid; display:block;'>1 सेकंड</span></span>",
      "1 जूल × 1 सेकंड",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1 सेकंड</span><span style='border-top:1px solid; display:block;'>1 जूल</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1000 जूल</span><span style='border-top:1px solid; display:block;'>सेकंड</span></span>"
    ],
    correct: 0
  },
  {
    question: "शक्ति के उपयोगी मात्रक के अनुसार 1 किलोवाट (1 kW) में कितने वाट होते हैं?",
    options: [
      "100 वाट",
      "746 वाट",
      "1000 वाट",
      "10000 वाट"
    ],
    correct: 2
  },
  {
    question: "1 अश्व शक्ति (1 HP) का मान कितने वाट के बराबर होता है?",
    options: [
      "1000 वाट",
      "746 वाट",
      "500 वाट",
      "3.6 × 10⁶ वाट"
    ],
    correct: 1
  },
  {
    question: "विभिन्न शक्ति वाले बल्बों को समांतर क्रम में जोड़ने पर उनके सिरों पर निम्नलिखित में से क्या नियत (समान) रहता है?",
    options: [
      "विद्युत धारा",
      "विभवांतर",
      "प्रतिरोध",
      "ऊष्मा"
    ],
    correct: 1
  },
  {
    question: "समांतर क्रम में जुड़े बल्बों में न्यूनतम प्रतिरोध वाले बल्ब के अधिक प्रकाशित होने का क्या कारण है?",
    options: [
      "उसमें धारा का मान कम होना",
      "उसमें शक्ति का कम व्यय होना",
      "उसमें शक्ति का अधिक व्यय होना",
      "उसमें विभवांतर का शून्य होना"
    ],
    correct: 2
  },
  {
    question: "विभिन्न शक्ति वाले बल्बों को समांतर क्रम में जोड़ने पर निम्नलिखित में से कौन-सा बल्ब कम प्रकाशित होता है?",
    options: [
      "न्यूनतम प्रतिरोध वाला बल्ब",
      "अधिकतम प्रतिरोध वाला बल्ब",
      "शून्य प्रतिरोध वाला बल्ब",
      "सभी बल्ब समान प्रकाशित होंगे"
    ],
    correct: 1
  },
  {
    question: "समांतर क्रम में जुड़े विभिन्न शक्ति (P₁, P₂, P₃...) वाले बल्बों द्वारा व्यय कुल विद्युत शक्ति (P) का सही व्यंजक क्या है?",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₂</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₃</span></span> + ...",
      "P = P₁ + P₂ + P₃ + ...",
      "P = P₁ . P₂ . P₃",
      "P = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>(P₁ + P₂ + P₃)</span><span style='border-top:1px solid; display:block;'>3</span></span>"
    ],
    correct: 1
  },
  {
    question: "विभिन्न शक्ति वाले बल्बों को श्रेणीक्रम में संयोजित करने पर उनमें क्या समान रूप से होती है?",
    options: [
      "विभवांतर",
      "विद्युत शक्ति",
      "विद्युत धारा",
      "प्रतिरोधकता"
    ],
    correct: 2
  },
  {
    question: "श्रेणीक्रम में जुड़े बल्बों में न्यूनतम प्रतिरोध वाले बल्ब के न्यूनतम (कम) प्रकाशित होने का मुख्य कारण क्या है?",
    options: [
      "शक्ति अधिक व्यय होना",
      "शक्ति कम व्यय होना",
      "विभवांतर का अनंत होना",
      "धारा का शून्य होना"
    ],
    correct: 1
  },
  {
    question: "श्रेणीक्रम संयोजन में विभिन्न शक्ति वाले बल्बों को जोड़ने पर कौन-सा बल्ब सबसे अधिक प्रकाशित होगा?",
    options: [
      "अधिकतम प्रतिरोध वाला बल्ब",
      "न्यूनतम प्रतिरोध वाला बल्ब",
      "जिसका प्रतिरोध शून्य हो",
      "सभी बल्ब समान रूप से चमकेंगे"
    ],
    correct: 0
  },
  {
    question: "श्रेणीक्रम में जुड़े बल्बों की कुल व्यय विद्युत शक्ति (P) को ज्ञात करने का सही व्यंजक कौन-सा है?",
    options: [
      "P = P₁ + P₂ + P₃ + ...",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P</span></span> = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₁</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₂</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P₃</span></span> + ...",
      "P = P₁ . P₂ . P₃",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>P</span></span> = P₁ + P₂ + P₃ + ..."
    ],
    correct: 1
  }
];
window.quizDatabase[2].ch_3 = window.quizDatabase[2].ch_3 || {}; 
window.quizDatabase[2].ch_3.dpp_5 = [
  {
    question: "बैटरी या सेल मुख्य रूप से कितने प्रकार के होते हैं?",
    options: [
      "दो",
      "तीन",
      "चार",
      "पाँच"
    ],
    correct: 0
  },
  {
    question: "वैसा सेल जो एक बार निष्क्रिय हो जाने के बाद पुनः सक्रिय नहीं हो सकता है, उसे क्या कहा जाता है?",
    options: [
      "द्वितीयक सेल",
      "प्राथमिक सेल",
      "संचायक सेल",
      "उत्क्रमणीय सेल"
    ],
    correct: 1
  },
  {
    question: "प्राथमिक सेल में धारा का प्रवाह पूर्णतः बंद या सेल के निष्क्रिय होने का मुख्य कारण क्या होता है?",
    options: [
      "सेल का तापमान बढ़ जाना",
      "सेल का दाब घट जाना",
      "सेल में उपस्थित पदार्थ का समाप्त हो जाना",
      "एनोड का गल जाना"
    ],
    correct: 2
  },
  {
    question: "निम्नलिखित में से कौन-सा प्राथमिक सेल का उदाहरण है?",
    options: [
      "सीसा संचायक सेल",
      "निकेल-कैडमियम सेल",
      "शुष्क सेल",
      "इनमें से सभी"
    ],
    correct: 2
  },
  {
    question: "शुष्क सेल या लेक्लांशी सेल में एनोड का कार्य निम्नलिखित में से कौन करता है?",
    options: [
      "तांबे का पात्र",
      "जस्ते (Zn) का बर्तन",
      "ग्रेफाइट की छड़",
      "लोहे का बर्तन"
    ],
    correct: 1
  },
  {
    question: "शुष्क सेल में भीगी हुई लेई के मध्य भाग में किसकी छड़ डाली जाती है?",
    options: [
      "जस्ते की छड़",
      "तांबे की छड़",
      "एल्युमीनियम की छड़",
      "ग्रेफाइट की छड़"
    ],
    correct: 3
  },
  {
    question: "शुष्क सेल या लेक्लांशी सेल में कैथोड का कार्य निम्नलिखित में से कौन करता है?",
    options: [
      "तांबे का पात्र",
      "जस्ते (Zn) का बर्तन",
      "ग्रेफाइट की छड़",
      "लोहे का बर्तन"
    ],
    correct: 2
  },
  {
    question: "शुष्क सेल या लेकालांशी सेल का विद्युत वाहक बल का मान कितना होता है?",
    options: [
      "1.5 V",
      "1 V",
      "2 V",
      "2.5 V"
    ],
    correct: 0
  },
  {
    question: "शुष्क सेल का उपयोग निम्नलिखित में से किस उपकरण में किया जाता है?",
    options: [
      "रिमोट",
      "फ्लैशलाइट और खिलौना",
      "ट्रांजिस्टर",
      "इनमें से सभी"
    ],
    correct: 3
  },
  {
    question: "मर्करी सेल में एनोड का कार्य निम्नलिखित में से कौन करता है?",
    options: [
      "कार्बन की छड़",
      "जिंक-अमलगम",
      "कॉपर का बर्तन",
      "मैंगनीज ऑक्साइड"
    ],
    correct: 1
  },
  {
    question: "मर्करी सेल में कैथोड की तरह निम्नलिखित में से कौन कार्य करता है?",
    options: [
      "जिंक और सीसे की छड़",
      "कॉपर एवं जिंक का मिश्रण",
      "कार्बन एवं HgO का मिश्रण",
      "एल्युमीनियम और लोहे का मिश्रण"
    ],
    correct: 2
  },
  {
    question: "मर्करी सेल में वैद्युत अपघट्य के रूप में निम्नलिखित में से किसका उपयोग किया जाता है?",
    options: [
      "KOH एवं ZnO",
      "NH₄Cl एवं ZnCl₂",
      "CuSO₄ एवं ZnSO₄",
      "H₂SO₄ एवं HNO₃"
    ],
    correct: 0
  },
  {
    question: "मरकरी सेल का विद्युत वाहक बल का मान कितना होता है?",
    options: [
      "1.35 V",
      "0 V",
      "2 V",
      "2.35 V"
    ],
    correct: 0
  },
  {
    question: "मर्करी सेल की मुख्य विशेषता यह है कि इसके संपूर्ण जीवनकाल में इसका विद्युत वाहक बल (EMF) कैसा रहता है?",
    options: [
      "निरंतर बदलता रहता है",
      "निरंतर बढ़ता है",
      "हमेशा नियत रहता है",
      "शून्य हो जाता है"
    ],
    correct: 2
  },
  {
    question: "वैसा सेल जिसे एक बार निष्क्रिय हो जाने के बाद पुनः आवेशित करके सक्रिय किया जा सकता है, उसे क्या कहा जाता है?",
    options: [
      "प्राथमिक सेल",
      "द्वितीयक सेल",
      "सांद्रता सेल",
      "लेक्लांशी सेल"
    ],
    correct: 1
  },
  {
    question: "निम्नलिखित में से कौन-सा द्वितीयक सेल का उदाहरण है?",
    options: [
      "शुष्क सेल",
      "मर्करी सेल",
      "लेड संचायक सेल",
      "वोल्टीय सेल"
    ],
    correct: 2
  },
  {
    question: "लेड संचायक सेल में एनोड के रूप में निम्नलिखित में से कौन कार्य करता है?",
    options: [
      "लेड का ग्रीड",
      "जिंक का बर्तन",
      "कार्बन की छड़",
      "तांबे की पट्टी"
    ],
    correct: 0
  },
  {
    question: "लेड संचायक सेल में कैथोड की भांति व्यवहार करने वाले लेड के ग्रीड पर किसकी परत चढ़ी होती है?",
    options: [
      "लेड सल्फेट",
      "लेड डाइऑक्साइड",
      "मैंगनीज डाइऑक्साइड",
      "जिंक ऑक्साइड"
    ],
    correct: 1
  },
  {
    question: "लेड संचायक सेल में वैद्युत अपघट्य के रूप में H₂SO₄ के कितने प्रतिशत विलयन का उपयोग किया जाता है?",
    options: [
      "10%",
      "30%",
      "40%",
      "20%"
    ],
    correct: 3
  },
  {
    question: "निकेल कैडमियम सेल में एनोड की भांति किसका प्रयोग किया जाता है?",
    options: [
      "कैडमियम (Cd)",
      "निकेल ऑक्साइड",
      "सीसा",
      "जस्ता"
    ],
    correct: 0
  },
  {
    question: "निकेल कैडमियम सेल में कैथोड की भांति निम्नलिखित में से किसका प्रयोग किया जाता है?",
    options: [
      "कैडमियम",
      "जिंक",
      "कॉपर ऑक्साइड",
      "निकेल ऑक्साइड"
    ],
    correct: 3
  },
  {
    question: "निकेल कैडमियम सेल में विद्युत अपघट्य के रूप में किस प्रकार का विलयन (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>KOH</span><span style='border-top:1px solid; display:block;'>NaOH</span></span>) प्रयुक्त होता है?",
    options: [
      "अम्लीय विलयन",
      "क्षारीय विलयन",
      "उदासीन विलयन",
      "इनमें से कोई नहीं"
    ],
    correct: 1
  }
];
window.quizDatabase[5].ch_1 = window.quizDatabase[5].ch_1 || {}; 
window.quizDatabase[5].ch_1.dpp_3 = [
  {
    question: "दो वृद्ध महिलाओं (बुढ़ियों) की बातचीत का मुख्य विषय क्या होता है?",
    options: [
      "देश की आर्थिक नीति",
      "क्रिकेट मैच की बातें",
      "स्कूल की पढ़ाई",
      "बहु-बेटियों के गिले-शिकवे या बिरादरी का रसरसरा"
    ],
    correct: 3
  },
  {
    question: "दो सहेलियों के बीच की बातचीत के बारे में लेखक ने क्या कहा है?",
    options: [
      "वह नीरस और बकवास होती है",
      "उसमें रस का समुद्र मानो उमड़ा चला आता है",
      "वह लड़ाई-झगड़े का कारण बनती है",
      "वह समय की बर्बादी है"
    ],
    correct: 1
  },
  {
    question: "पढ़े-लिखे लोगों की बातचीत में किन पाश्चात्य विद्वानों का जिक्र आता है?",
    options: [
      "शेक्सपियर, मिल्टन, मिल और स्पेंसर",
      "न्यूटन, आइंस्टीन और गैलीलियो",
      "सुकरात, प्लेटो और अरस्तू",
      "वर्डस्वर्थ, कीट्स और शेली"
    ],
    correct: 0
  },
  {
    question: "स्कूल के लड़कों की बातचीत का मुख्य उद्देश्य क्या होता है?",
    options: [
      "देश के विकास पर विचार करना",
      "व्यापारिक सौदेबाजी करना",
      "उस्ताद की शिकायत/तारीफ या सहपाठियों के गुण-अवगुण की चर्चा",
      "राजनीति पर बहस करना"
    ],
    correct: 2
  },
  {
    question: "अशिक्षित लोगों के बीच होने वाली बातचीत को क्या कहा जाता है?",
    options: [
      "संलाप",
      "शास्त्रार्थ",
      "सुहृद् गोष्ठी",
      "बतकही"
    ],
    correct: 3
  },
  {
    question: "विवाह संबंध पक्का करने के लिए लड़की-लड़के वालों की ओर से कौन बातचीत करता है?",
    options: [
      "सरपंच",
      "बिचवई",
      "जमींदार",
      "व्यापारी"
    ],
    correct: 1
  },
  {
    question: "अफीम खाने वाले लोगों की मंडली में होने वाली बातचीत को पाठ में क्या कहा गया है?",
    options: [
      "चंडूखाने की बातचीत",
      "राम-रमौवल",
      "सुहृद् गोष्ठी",
      "संलाप"
    ],
    correct: 0
  },
  {
    question: "'आर्ट ऑफ कन्वरसेशन' (Art of Conversation) कहाँ के लोगों में सर्वाधिक प्रचलित है?",
    options: [
      "अमेरिका के",
      "एशिया के",
      "यूरोप के",
      "अफ्रीका के"
    ],
    correct: 2
  },
  {
    question: "'सुहृद् गोष्ठी' की मुख्य विशेषता क्या होती है?",
    options: [
      "जोर-जोर से चिल्लाना",
      "बात करने वालों में कपट या विद्वत्ता का अभिमान न होना और सरसता बनी रहना",
      "एक-दूसरे को नीचा दिखाना",
      "कठिन संस्कृत शब्दों का प्रयोग करना"
    ],
    correct: 1
  },
  {
    question: "शुष्क पंडितों की बातचीत को लेखक ने क्या कहा है, जो मुर्गे-बटेर की लड़ाई के समान होती है?",
    options: [
      "सुहृद् गोष्ठी",
      "संलाप",
      "प्रेम आलाप",
      "शास्त्रार्थ"
    ],
    correct: 3
  },
  {
    question: "25 वर्ष से ऊपर के लोगों की बातचीत कैसी होती है?",
    options: [
      "सारगर्भित, अनुभव और दूरदर्शिता से भरी",
      "केवल बचकानी",
      "चंचलता से भरी",
      "निरर्थक"
    ],
    correct: 0
  },
  {
    question: "25 वर्ष से नीचे के लोगों की बातचीत में मुख्य रूप से क्या पाया जाता है?",
    options: [
      "बहुत गंभीर दार्शनिक ज्ञान",
      "केवल दुख-दर्द की बातें",
      "एक प्रकार का दिलबहलाव और ताज़गी भरी मिठास",
      "जमाने की शिकायतें"
    ],
    correct: 2
  },
  {
    question: "लेखक के अनुसार बातचीत करने का सबसे उत्तम और श्रेष्ठ तरीका क्या है?",
    options: [
      "भीड़ को इकट्ठा करके भाषण देना",
      "अपनी आंतरिक मनोवृत्ति द्वारा स्वयं से बातचीत करना",
      "मित्रों से बहस करके उन्हें हराना",
      "बड़े-बड़े लोगों से सिफारिश करना"
    ],
    correct: 1
  },
  {
    question: "हमारी भीतरी मनोवृत्ति प्रतिक्षण नए-नए रंग क्यों दिखाती है?",
    options: [
      "क्योंकि वह हमेशा स्थिर रहती है",
      "क्योंकि उसे दूसरों से डर लगता है",
      "क्योंकि वह बाहर नहीं निकल सकती",
      "क्योंकि वह प्रपंचात्मक संसार का एक बड़ा भारी आईना है"
    ],
    correct: 3
  },
  {
    question: "लेखक ने 'परम पूज्य मंदिर' और 'परमार्थ का सोपान' किसे कहा है?",
    options: [
      "अवाक् रहकर अपने आपसे बातचीत करने के साधन को",
      "पत्थरों से बने प्रसिद्ध मंदिरों को",
      "सभा-मंडपों को",
      "विदेशी कलाकृतियों को"
    ],
    correct: 0
  },
  {
    question: "यदि हम अपनी जिह्वा और क्रोध पर नियंत्रण कर लें, तो क्या संभव है?",
    options: [
      "हम बोलना ही बंद कर देंगे",
      "हमारा कोई मित्र नहीं रहेगा",
      "बड़े-बड़े अजेय शत्रुओं को बिना प्रयास जीता जा सकता है",
      "समाज से हम अलग हो जाएँगे"
    ],
    correct: 2
  },
  {
    question: "'जिह्वा कतरनी' से लेखक का क्या आशय है?",
    options: [
      "कैंची से जीभ काटना",
      "अनियंत्रित और कड़वी वाणी",
      "मीठे वचन बोलना",
      "मौन धारण करना"
    ],
    correct: 1
  },
  {
    question: "'बातचीत' निबंध में गर्म दूध और ठंडे पानी के दो बर्तनों का उदाहरण किस बात को समझाने के लिए दिया गया है?",
    options: [
      "दो पास बैठे व्यक्तियों के गुप्त प्रभाव और विचार एक-दूसरे में संचारित होने को",
      "खाना पकाने की विधि को",
      "विज्ञान के नियमों को",
      "मौसम के बदलाव को"
    ],
    correct: 0
  },
  {
    question: "जब दो व्यक्ति पास बैठते हैं तो उनके शरीर की क्या एक-दूसरे में प्रवेश करने लगती है?",
    options: [
      "हवा",
      "ध्वनि",
      "प्रकाश",
      "विद्युत (ऊर्जा/प्रभाव)"
    ],
    correct: 3
  },
  {
    question: "'अवाक् होना' का अर्थ निबंध में क्या बतलाया गया है?",
    options: [
      "बहुत तेज बोलना",
      "हँसने लगना",
      "मौन या चुप हो जाना",
      "रोने लगना"
    ],
    correct: 2
  },
  {
    question: "निबंध में 'चमनिस्तान' की तुलना किससे की गई है?",
    options: [
      "किसी राजा के राजमहल से",
      "मन के भीतर खिलने वाली रंग-बिरंगी वृत्तियों से",
      "बाजार की चहल-पहल से",
      "युद्ध के मैदान से"
    ],
    correct: 1
  },
  {
    question: "'बातचीत' निबंध किस कोटि (प्रकार) का निबंध है?",
    options: [
      "ललित निबंध",
      "ऐतिहासिक निबंध",
      "वैज्ञानिक निबंध",
      "राजनीतिक निबंध"
    ],
    correct: 0
  },
  {
    question: "निबंधकार के अनुसार वक्ता को 'पुलपिट' (मंच) पर खड़े होकर क्या करने का अवसर मिलता है?",
    options: [
      "चुपचाप खड़े रहने का",
      "रोने का",
      "केवल कविता पढ़ने का",
      "नाज-नखरा जाहिर करने और लच्छेदार बातें कहने का"
    ],
    correct: 3
  },
  {
    question: "'करतलध्वनि' का क्या अर्थ होता है?",
    options: [
      "ढोल की आवाज",
      "ताली बजाने की आवाज",
      "शंख की ध्वनि",
      "रोने की आवाज"
    ],
    correct: 1
  },
  {
    question: "बातचीत का मजा खोने से बचने के लिए लोग किस बात को भी सह लेते हैं?",
    options: [
      "भूखे रहना",
      "अपमानित होना",
      "अपना बड़ा हर्जा होना (नुकसान होना)",
      "बीमार होना"
    ],
    correct: 2
  },
  {
    question: "\"जब तक मनुष्य बोलता नहीं तब तक उसका गुण-दोष प्रकट नहीं होता।\" यह पंक्ति किस पाठ की है?",
    options: [
      "उसने कहा था",
      "बातचीत",
      "संपूर्ण क्रांति",
      "अर्धनारीश्वर"
    ],
    correct: 1
  },
  {
    question: "\"हमारी भीतरी मनोवृत्ति प्रतिक्षण नए-नए रंग दिखाया करती है...\" यह पंक्ति किस निबंध से उद्धृत है?",
    options: [
      "बातचीत",
      "ओ सदानीरा",
      "प्रगीत और समाज",
      "एक लेख और एक पत्र"
    ],
    correct: 0
  },
  {
    question: "यूरोप के विद्वानों की बातचीत में किस बात का विशेष ध्यान रखा जाता है?",
    options: [
      "केवल संस्कृत बोली जाए",
      "एक-दूसरे से बदला लिया जाए",
      "ताली जरूर बजाई जाए",
      "किसी बात में रसाभास पैदा न हो और बात सरस रहे"
    ],
    correct: 3
  },
  {
    question: "दो खिलाड़ियों की बातचीत में मुख्य रूप से किसकी चर्चा होती है?",
    options: [
      "देश की अर्थव्यवस्था की",
      "फिल्मों की",
      "अपनी-अपनी तारीफ और खेल की सलाह की",
      "किताबों की"
    ],
    correct: 2
  },
  {
    question: "'बातचीत' निबंध के अनुसार संलाप (हार्दिक बातचीत) का असली मज़ा कहाँ मिलता है?",
    options: [
      "बड़ी-बड़ी सभाओं में",
      "केवल दो व्यक्तियों की आत्मीय बातचीत में",
      "बाजार के शोरगुल में",
      "नेताओं के भाषण में"
    ],
    correct: 1
  },
  {
    question: "लेखक के अनुसार 'राम-रमौवल' किस प्रकार की बातचीत को कहा जाता है?",
    options: [
      "चार से अधिक लोगों की फॉर्मैलिटी और व्यर्थ बातचीत",
      "दो संतों की धार्मिक बातचीत",
      "पिता और पुत्र की बातचीत",
      "गुरु और शिष्य का संवाद"
    ],
    correct: 0
  },
  {
    question: "'बातचीत' पाठ में 'काँव-काँव' शब्द का प्रयोग किसके लिए किया गया है?",
    options: [
      "बच्चों के रोने के लिए",
      "पक्षियों की आवाज के लिए",
      "नेताओं की रैलियों के लिए",
      "पंडितों के नीरस शास्त्रार्थ के लिए"
    ],
    correct: 3
  },
  {
    question: "'सद्भाव का अभाव' बालकृष्ण भट्ट की किस विधा की रचना है?",
    options: [
      "नाटक",
      "निबंध",
      "उपन्यास",
      "प्रहसन"
    ],
    correct: 2
  },
  {
    question: "बालकृष्ण भट्ट ने किस पत्रिका में नियमित रूप से सामाजिक, साहित्यिक, नैतिक विषयों पर निबंध लिखे?",
    options: [
      "हिंदी प्रदीप",
      "सरस्वती",
      "हंस",
      "क्रांति"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट की गद्य भाषा की जड़ें किसमें समाई हुई हैं?",
    options: [
      "केवल कल्पना में",
      "परिवेश और यथार्थ में",
      "अंग्रेजी साहित्य में",
      "पुरानी किंवदंतियों में"
    ],
    correct: 1
  },
  {
    question: "\"सच है, जब तक मनुष्य बोलता नहीं तब तक उसका गुण-दोष प्रकट नहीं होता\" - यह कथन बालकृष्ण भट्ट ने किसके मत का समर्थन करते हुए लिखा है?",
    options: [
      "बेन जॉनसन के",
      "एडिसन के",
      "रामचंद्र शुक्ल के",
      "नामवर सिंह के"
    ],
    correct: 0
  },
  {
    question: "'बातचीत' निबंध में लेखक ने मनुष्य को अपने मन को वश में करने के लिए किसका दमन करने की सलाह दी है?",
    options: [
      "भोजन का",
      "नींद का",
      "मित्रों का",
      "अपनी वाक्शक्ति और जिह्वा का संयम"
    ],
    correct: 3
  },
  {
    question: "'बातचीत' निबंध के अनुसार किसी तीसरे व्यक्ति के आ जाने से क्या होता है?",
    options: [
      "बातचीत और मजेदार हो जाती है",
      "तीनों मिलकर गाना गाने लगते हैं",
      "दोनों अपनी बातचीत से निरस्त हो जाते हैं या बात बदल जाती है",
      "कोई फर्क नहीं पड़ता"
    ],
    correct: 2
  },
  {
    question: "'बातचीत' निबंध आधुनिक हिंदी साहित्य के किस युग की चेतना को उजागर करता है?",
    options: [
      "भारतेंदु युग / नवजागरण काल",
      "छायावाद",
      "प्रगतिवाद",
      "प्रयोगवाद"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट द्वारा रचित 'बातचीत' निबंध का अंतिम उद्देश्य क्या है?",
    options: [
      "भाषा का व्याकरण सिखाना",
      "मनुष्य में बातचीत की कला और आत्म-संवाद का कौशल विकसित करना",
      "विदेशी भाषाओं की निंदा करना",
      "केवल मनोरंजन करना"
    ],
    correct: 1
  }
];



