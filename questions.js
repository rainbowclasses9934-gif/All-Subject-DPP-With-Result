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
    "537964" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "577698" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "241724" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "185428" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "855048" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
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
window.quizDatabase[1].ch_3.dpp_6 = [
  {
    question: "जब किसी सेल में धारा उसके ऋण ध्रुव से धन ध्रुव की ओर प्रवाहित होती है, तो सेल किस स्थिति में होता है?",
    options: [
      "आवेशन की स्थिति में",
      "निरावेशन की स्थिति में",
      "अतिचालकता की स्थिति में",
      "उदासीन स्थिति में"
    ],
    correct: 1
  },
  {
    question: "सेल के निरावेशन की स्थिति में उसके विद्युत वाहक बल (ई.एम.एफ.) को किस चिन्ह से प्रदर्शित किया जाता है?",
    options: [
      "ऋणात्मक चिन्ह",
      "शून्य",
      "धनात्मक चिन्ह",
      "काल्पनिक चिन्ह"
    ],
    correct: 2
  },
  {
    question: "जब धारा का प्रवाह सेल में निरावेशन के विपरीत (धन ध्रुव से ऋण ध्रुव की ओर) होता है, तो सेल किस स्थिति में होता है?",
    options: [
      "आवेशन की स्थिति में",
      "निरावेशन की स्थिति में",
      "लघुपातन की स्थिति में",
      "स्थायी स्थिति में"
    ],
    correct: 0
  },
  {
    question: "सेल के आवेशन की स्थिति में उसके विद्युत वाहक बल (ई.एम.एफ.) को किस चिन्ह से प्रदर्शित किया जाता है?",
    options: [
      "धनात्मक चिन्ह",
      "ऋणात्मक चिन्ह",
      "गुणात्मक चिन्ह",
      "उदासीन चिन्ह"
    ],
    correct: 1
  },
  {
    question: "एकांक आवेश को पूरे परिपथ में प्रवाहित करने में सेलों द्वारा किए गए कार्य को क्या कहा जाता है?",
    options: [
      "प्रतिरोध",
      "विद्युत वाहक बल",
      "सेल स्थिरांक",
      "धारा घनत्व"
    ],
    correct: 1
  },
  {
    question: "सेल के विद्युत वाहक बल को सामान्यतः किस प्रतीक द्वारा प्रदर्शित किया जाता है?",
    options: [
      "R",
      "K",
      "G",
      "ε"
    ],
    correct: 3
  },
  {
    question: "यदि q आवेश को पूरे परिपथ में प्रवाहित करने में किया गया कार्य W हो, तो सेल के विद्युत वाहक बल (ε) का सही सूत्र क्या होगा?",
    options: [
      "ε = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>W</span><span style='border-top:1px solid; display:block;'>q</span></span>",
      "ε = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>q</span><span style='border-top:1px solid; display:block;'>W</span></span>",
      "ε = W × q",
      "ε = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>W × q</span></span>"
    ],
    correct: 0
  },
  {
    question: "सेल के विद्युत वाहक बल (ε) का एसआई (SI) मात्रक क्या होता है?",
    options: [
      "वोल्ट",
      "ऐम्पीयर",
      "ओम",
      "कूलॉम"
    ],
    correct: 0
  },
  {
    question: "सेल का विद्युत वाहक बल (ε) वास्तव में क्या होता है?",
    options: [
      "यांत्रिक बल",
      "घर्षण बल",
      "विभवांतर",
      "गुरुत्वीय बल"
    ],
    correct: 2
  },
  {
    question: "जब किसी सेल में धारा का प्रवाह नहीं हो रहा हो, तो उसके इलेक्ट्रोडों के बीच के विभवांतर को क्या कहते हैं?",
    options: [
      "विशिष्ट प्रतिरोध",
      "सेल स्थिरांक",
      "चालकत्व",
      "विद्युत वाहक बल"
    ],
    correct: 3
  },
  {
    question: "शुष्क सेल का विद्युत वाहक बल (EMF) कितना होता है?",
    options: [
      "1.08 वोल्ट",
      "1.5 वोल्ट",
      "2.0 वोल्ट",
      "0.5 वोल्ट"
    ],
    correct: 1
  },
  {
    question: "डेनियल सेल के विद्युत वाहक बल (EMF) का मान निम्नलिखित में से कितना होता है?",
    options: [
      "1.5 वोल्ट",
      "2.1 वोल्ट",
      "1.08 वोल्ट",
      "3.0 वोल्ट"
    ],
    correct: 2
  },
  {
    question: "लेक्लांशी सेल का विद्युत वाहक बल (EMF) कितना होता है?",
    options: [
      "1.5 वोल्ट",
      "1.08 वोल्ट",
      "2.0 वोल्ट",
      "1.2 वोल्ट"
    ],
    correct: 0
  },
  {
    question: "वोल्टीय सेल के विद्युत वाहक बल का मान कितना होता है?",
    options: [
      "1.5 वोल्ट",
      "2.5 वोल्ट",
      "0.5 वोल्ट",
      "1.08 वोल्ट"
    ],
    correct: 3
  },
  {
    question: "जब किसी सेल में धारा ऋण ध्रुव से धन ध्रुव की ओर प्रवाहित होती है, तो सेल किस स्थिति में होता है?",
    options: [
      "आवेशन",
      "निरावेशन",
      "साम्यावस्था",
      "अतिभारण"
    ],
    correct: 1
  },
  {
    question: "सेल के निरावेशन की स्थिति में उसके विद्युत वाहक बल को किस चिह्न से प्रदर्शित किया जाता है?",
    options: [
      "ऋणात्मक चिह्न",
      "उदासीन",
      "धनात्मक चिह्न",
      "शून्य"
    ],
    correct: 2
  },
  {
    question: "जब सेल आवेशन की स्थिति में होता है, तो इसके विद्युत वाहक बल को किस चिह्न से प्रदर्शित किया जाता है?",
    options: [
      "ऋणात्मक चिह्न",
      "धनात्मक चिह्न",
      "गुणात्मक चिह्न",
      "इनमें से कोई नहीं"
    ],
    correct: 0
  },
  {
    question: "जब सेल के इलेक्ट्रोडों को तार से संयोजित किया जाता है, तो विद्युत अपघट्य के घोल में धारा के मार्ग में उत्पन्न बाधा को क्या कहते हैं?",
    options: [
      "बाह्य प्रतिरोध",
      "विशिष्ट चालकता",
      "विभवांतर",
      "सेल का आंतरिक प्रतिरोध"
    ],
    correct: 3
  },
  {
    question: "जब किसी सेल से धारा प्रवाहित होती है, तो उसके दोनों इलेक्ट्रोडों के मध्य उत्पन्न विभवांतर को क्या कहा जाता है?",
    options: [
      "सेल का आंतरिक प्रतिरोध",
      "विशिष्ट प्रतिरोध",
      "सेल की टर्मिनल वोल्टता",
      "चालकत्व"
    ],
    correct: 2
  },
  {
    question: "सेल की टर्मिनल वोल्टता को निम्नलिखित में से किस प्रतीक द्वारा प्रदर्शित किया जाता है?",
    options: [
      "V",
      "R",
      "I",
      "K"
    ],
    correct: 0
  },
  {
    question: "सेल की टर्मिनल वोल्टता और उसके विद्युत वाहक बल के मध्य सही संबंध कौन-सा है?",
    options: [
      "टर्मिनल वोल्टता > विद्युत वाहक बल",
      "टर्मिनल वोल्टता ≤ विद्युत वाहक बल",
      "टर्मिनल वोल्टता = 2 × विद्युत वाहक बल",
      "टर्मिनल वोल्टता ≥ 2 × विद्युत वाहक बल"
    ],
    correct: 1
  },
  {
    question: "किसी सेल के टर्मिनल विभवांतर (V), विद्युत वाहक बल (ε) एवं आंतरिक प्रतिरोध (r) के बीच सही संबंध निम्नलिखित में से कौन-सा है (यदि परिपथ में प्रवाहित धारा 'i' हो एंव सेल से धारा ली जा रही हो)?",
    options: [
      "V = ε + ir",
      "V = ir - ε",
      "V = ε - ir",
      "V = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>i</span><span style='border-top:1px solid; display:block;'>ε - r</span></span>"
    ],
    correct: 2
  },
  {
    question: "सेलों के श्रेणी क्रम संयोजन में संयोजन का कुल विद्युत वाहक बल किसके बराबर होता है?",
    options: [
      "प्रत्येक सेल के विद्युत वाहक बल के गुणनफल के",
      "प्रत्येक सेल के विद्युत वाहक बल के योग के",
      "प्रत्येक सेल के विद्युत वाहक बल के अंतर के",
      "शून्य के"
    ],
    correct: 1
  },
  {
    question: "सेलों के श्रेणी क्रम संयोजन में संयोजन का कुल आंतरिक प्रतिरोध किसके बराबर होता है?",
    options: [
      "प्रत्येक सेल के आंतरिक प्रतिरोध के योग के",
      "प्रत्येक सेल के आंतरिक प्रतिरोध के गुणनफल के",
      "प्रत्येक सेल के आंतरिक प्रतिरोध के अंतर के",
      "प्रत्येक सेल के आंतरिक प्रतिरोध के अनुपात के"
    ],
    correct: 0
  },
  {
    question: "किसी निश्चित समय में विद्युत वाहक बल स्रोत द्वारा विद्युत परिपथ में धारा प्रवाह के लिए किया गया कुल कार्य क्या कहलाता है?",
    options: [
      "विद्युत शक्ति",
      "विद्युत विभवांतर",
      "विद्युत ऊर्जा",
      "विद्युत धारा"
    ],
    correct: 2
  },
  {
    question: "विद्युत ऊर्जा का एसआई (SI) मात्रक निम्नलिखित में से क्या होता है?",
    options: [
      "वाट",
      "जूल",
      "ऐम्पीयर",
      "वोल्ट"
    ],
    correct: 1
  },
  {
    question: "जूल के अतिरिक्त विद्युत ऊर्जा का मात्रक निम्नलिखित में से कौन-सा है?",
    options: [
      "वाट-सेकंड",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वाट</span><span style='border-top:1px solid; display:block;'>सेकंड</span></span>",
      "वोल्ट-ऐम्पीयर",
      "ओम-मीटर"
    ],
    correct: 0
  },
  {
    question: "यदि किसी तार में I धारा t समय तक प्रवाहित होती है, तो प्रवाहित आवेश (Q) का मान क्या होगा?",
    options: [
      "Q = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I</span><span style='border-top:1px solid; display:block;'>t</span></span>",
      "Q = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>t</span><span style='border-top:1px solid; display:block;'>I</span></span>",
      "Q = I² × t",
      "Q = I × t"
    ],
    correct: 3
  },
  {
    question: "यदि विभवांतर V, धारा I तथा समय t हो, तो परिपथ में किया गया कार्य (W) का सूत्र क्या होगा?",
    options: [
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>I t</span></span>",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I t</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "W = V I t",
      "W = V² I t"
    ],
    correct: 2
  },
  {
    question: "धारा I, प्रतिरोध R तथा समय t के पदों में विद्युत ऊर्जा या कार्य (W) का सही सूत्र क्या है?",
    options: [
      "W = I² R t",
      "W = I R² t",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I R</span><span style='border-top:1px solid; display:block;'>t²</span></span>",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>I²</span><span style='border-top:1px solid; display:block;'>R t</span></span>"
    ],
    correct: 0
  },
  {
    question: "सूत्र W = I² R t के अनुसार, उत्पन्न विद्युत ऊर्जा (W) प्रवाहित धारा (I) के साथ किस प्रकार संबंधित है?",
    options: [
      "धारा के व्युत्क्रमानुपाती",
      "धारा के समानुपाती",
      "धारा के वर्ग के समानुपाती",
      "धारा से स्वतंत्र"
    ],
    correct: 2
  },
  {
    question: "विभवांतर V, प्रतिरोध R तथा समय t के पदों में विद्युत ऊर्जा (W) व्यक्त करने का सही सूत्र क्या है?",
    options: [
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>R²</span></span> t",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V² × R</span><span style='border-top:1px solid; display:block;'>t</span></span>",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>V²</span></span> t",
      "W = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V²</span><span style='border-top:1px solid; display:block;'>R</span></span> t"
    ],
    correct: 3
  },
  {
    question: "नियत विभवांतर पर विद्युत ऊर्जा (W) परिपथ के प्रतिरोध (R) के साथ किस प्रकार संबंधित होती है?",
    options: [
      "प्रतिरोध के व्युत्क्रमानुपाती",
      "प्रतिरोध के समानुपाती",
      "प्रतिरोध के वर्ग के समानुपाती",
      "कोई संबंध नहीं होता"
    ],
    correct: 0
  },
  {
    question: "बिजली का मूल्य जिस आधार पर ज्ञात किया जाता है, उस विद्युत ऊर्जा का व्यावसायिक मात्रक निम्नलिखित में से क्या है?",
    options: [
      "किलोवाट",
      "किलोवाट-घंटा",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>वाट</span><span style='border-top:1px solid; display:block;'>घंटा</span></span>",
      "जूल-सेकंड"
    ],
    correct: 1
  },
  {
    question: "एक किलोवाट शक्ति वाले परिपथ में 1 घंटे में व्यय होने वाली ऊर्जा की मात्रा को क्या कहते हैं?",
    options: [
      "1 वाट",
      "1 ऐम्पीयर",
      "1 जूल",
      "1 किलोवाट-घंटा"
    ],
    correct: 3
  },
  {
    question: "किलोवाट-घंटा (kWh) को अन्य किस नाम से जाना जाता है?",
    options: [
      "बोर्ड ऑफ ट्रेड यूनिट",
      "वाट प्रति घंटा",
      "इंटरनेशनल यूनिट",
      "मानक जूल यूनिट"
    ],
    correct: 0
  },
  {
    question: "1 किलोवाट-घंटा (1 kWh) का मान कितने जूल के बराबर होता है?",
    options: [
      "3.6 × 10⁵ J",
      "1.6 × 10⁻¹⁹ J",
      "3.6 × 10⁶ J",
      "746 J"
    ],
    correct: 2
  },
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
  }
];
window.quizDatabase[2].ch_3 = window.quizDatabase[2].ch_3 || {};
window.quizDatabase[2].ch_3.dpp_4 = [
  {
    question: "वैद्युत अपघटन के समय दो या दो से अधिक धन आयनों की उपस्थिति में कैथोड पर सबसे पहले कौन-सा धन आयन मुक्त होता है?",
    options: [
      "जिसकी ऑक्सीकारक शक्ति दुर्बल हो",
      "जिसकी ऑक्सीकारक शक्ति प्रबल हो",
      "जिसका द्रव्यमान सबसे अधिक हो",
      "जो उदासीन अणु हो"
    ],
    correct: 1
  },
  {
    question: "किसी चालक या वैद्युत अपघट्य विलयन द्वारा विद्युत धारा के प्रवाह में उत्पन्न रुकावट को क्या कहा जाता है?",
    options: [
      "चालकता",
      "प्रतिरोधकता",
      "प्रतिरोध",
      "सांद्रता"
    ],
    correct: 2
  },
  {
    question: "किसी चालक के प्रतिरोध (R), लंबाई (l), अनुप्रस्थ काट के क्षेत्रफल (A) और विशिष्ट प्रतिरोध (ρ) के बीच सही संबंध दर्शाने वाला मुख्य सूत्र कौन सा है?",
    options: [
      "R = ρ<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "R = ρ<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "R = l<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "R = A<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ρ</span><span style='border-top:1px solid; display:block;'>l</span></span>"
    ],
    correct: 1
  },
  {
    question: "वैद्युत अपघट्य विलयन के अवरोध या प्रतिरोध की इकाई क्या होती है?",
    options: [
      "ओम (Ω)",
      "महो (mho)",
      "सीमेंस (S)",
      "ओम-मीटर (Ω-m)"
    ],
    correct: 0
  },
  {
    question: "किसी चालक की प्रतिरोधकता या विशिष्ट प्रतिरोध, उसके प्रतिरोध का वह मान है जो उस चालक के कितने आयतन में होता है?",
    options: [
      "1 घन मीटर",
      "10 घन सेमी",
      "1 घन मिलीमीटर",
      "1 घन सेमी"
    ],
    correct: 3
  },
  {
    question: "प्रतिरोधकता या विशिष्ट प्रतिरोध (ρ) ज्ञात करने का सही सूत्र क्या है? (जहाँ R = प्रतिरोध, A = क्षेत्रफल, l = लंबाई)",
    options: [
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>Rl</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>Rl</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>RA</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "ρ = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>RA</span></span>"
    ],
    correct: 2
  },
  {
    question: "किसी विद्युतीय चालक द्वारा प्रदत्त प्रतिरोध के व्युत्क्रम को क्या कहा जाता है?",
    options: [
      "प्रतिरोधकता",
      "विशिष्ट चालकत्व",
      "चालकत्व",
      "विशिष्ट प्रतिरोध"
    ],
    correct: 2
  },
  {
    question: "चालकत्व को प्रायः किन अक्षरों द्वारा सूचित किया जाता है?",
    options: [
      "R",
      "G",
      "K",
      "S"
    ],
    correct: 1
  },
  {
    question: "यदि R प्रतिरोध है, तो चालकत्व (G) ज्ञात करने का सही सूत्र क्या है?",
    options: [
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "G = R",
      "G = R²",
      "G = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R²</span></span>"
    ],
    correct: 0
  },
  {
    question: "इनमें से कौन चालकत्व की इकाई है?",
    options: [
      "Ω",
      "Ω m",
      "Ω⁻¹",
      "Ω cm"
    ],
    correct: 2
  },
  {
    question: "चालकत्व का एक अन्य मात्रक 'S' होता है, जिसे क्या कहा जाता है?",
    options: [
      "सीमेन्ज",
      "साइमन",
      "सेकेण्ड",
      "स्टेरेडियन"
    ],
    correct: 0
  },
  {
    question: "इनमें से कौन चालकत्व का एक अन्य प्रचलित मात्रक है?",
    options: [
      "ओम",
      "ओम-मीटर",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>ओम</span><span style='border-top:1px solid; display:block;'>सेमी</span></span>",
      "म्हो"
    ],
    correct: 3
  },
  {
    question: "किसी चालक के विशिष्ट प्रतिरोध के व्युत्क्रम को क्या कहा जाता है?",
    options: [
      "चालकता",
      "प्रतिरोध",
      "विशिष्ट चालकत्व या चालकता",
      "सेल स्थिरांक"
    ],
    correct: 2
  },
  {
    question: "विशिष्ट चालकत्व को किस ग्रीक अक्षर से सूचित किया जाता है?",
    options: [
      "ᴋ (कप्पा)",
      "ρ (रो)",
      "λ (लैम्ब्डा)",
      "α (अल्फा)"
    ],
    correct: 0
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
    question: "विशिष्ट चालकत्व (K), प्रतिरोध (R), स्तंभ की लंबाई (l) और अनुप्रस्थ काट के क्षेत्रफल (A) के बीच सही संबंध दर्शाने वाला सूत्र कौन-सा है?",
    options: [
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R</span></span> × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>",
      "K = R × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>R</span></span> × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>A</span><span style='border-top:1px solid; display:block;'>l</span></span>",
      "K = R × <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span>"
    ],
    correct: 0
  },
  {
    question: "किसी चालक सेल की लंबाई (l) तथा उसके अनुप्रस्थ काट के क्षेत्रफल (A) के अनुपात <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>l</span><span style='border-top:1px solid; display:block;'>A</span></span> को क्या कहा जाता है?",
    options: [
      "चालकत्व",
      "मोलर चालकत्व",
      "सेल स्थिरांक",
      "प्रतिरोधकता"
    ],
    correct: 2
  },
  {
    question: "सेल स्थिरांक को निम्नलिखित में से किस प्रतीक द्वारा सूचित किया जाता है?",
    options: [
      "G",
      "G*",
      "K",
      "Λm"
    ],
    correct: 1
  },
  {
    question: "सेल स्थिरांक (G*), विशिष्ट चालकत्व (K) और प्रतिरोध (R) के बीच सही संबंध दर्शाने वाला सूत्र कौन-सा है?",
    options: [
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>K</span><span style='border-top:1px solid; display:block;'>R</span></span>",
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>R</span><span style='border-top:1px solid; display:block;'>K</span></span>",
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>K × R</span></span>",
      "G* = K × R"
    ],
    correct: 3
  },
  {
    question: "सेल स्थिरांक (G*), विशिष्ट चालकत्व (K) और चालकत्व (G) के पदों में किस प्रकार व्यक्त किया जाता है?",
    options: [
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>K</span><span style='border-top:1px solid; display:block;'>G</span></span>",
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>G</span><span style='border-top:1px solid; display:block;'>K</span></span>",
      "G* = K × G",
      "G* = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>K × G</span></span>"
    ],
    correct: 0
  },
  {
    question: "विशिष्ट चालकत्व (K), चालकत्व (G) और सेल स्थिरांक (G*) के बीच सही संबंध दर्शाने वाला सूत्र क्या है?",
    options: [
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>G</span><span style='border-top:1px solid; display:block;'>G*</span></span>",
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>G*</span><span style='border-top:1px solid; display:block;'>G</span></span>",
      "K = G × G*",
      "K = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>G × G*</span></span>"
    ],
    correct: 2
  },
  {
    question: "विशिष्ट चालकत्व (K) की इकाई निम्नलिखित में से कौन-सी है?",
    options: [
      "Ω cm",
      "Ω cm⁻¹",
      "Ω⁻¹ cm",
      "Ω⁻¹ cm⁻¹"
    ],
    correct: 3
  },
  {
    question: "विशिष्ट चालकत्व का एक अन्य मात्रक निम्नलिखित में से कौन-सा है?",
    options: [
      "S cm⁻¹",
      "S cm",
      "S cm²",
      "S⁻¹ cm⁻¹"
    ],
    correct: 0
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
    question: "मोलर चालकत्व को प्रायः किन प्रतीकों द्वारा सूचित किया जाता है?",
    options: [
      "G या C",
      "Λm या μ",
      "K या ρ",
      "R या G*"
    ],
    correct: 1
  },
  {
    question: "मोलर चालकत्व (Λm), विशिष्ट चालकत्व (K) और आयतन (V) के बीच सही संबंध क्या है?",
    options: [
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>K</span><span style='border-top:1px solid; display:block;'>V</span></span>",
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>V</span><span style='border-top:1px solid; display:block;'>K</span></span>",
      "Λm = K × V",
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>K × V</span></span>"
    ],
    correct: 2
  },
  {
    question: "विशिष्ट चालकत्व (K) तथा मोलरता (M) के पदों में मोलर चालकत्व (Λm) का सही सूत्र कौन-सा है?",
    options: [
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>M × 1000</span><span style='border-top:1px solid; display:block;'>K</span></span>",
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>K × 1000</span><span style='border-top:1px solid; display:block;'>M</span></span>",
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>K × M</span><span style='border-top:1px solid; display:block;'>1000</span></span>",
      "Λm = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1000</span><span style='border-top:1px solid; display:block;'>K × M</span></span>"
    ],
    correct: 1
  },
  {
    question: "मोलर चालकत्व (Λm) की इकाई निम्नलिखित में से कौन-सी है?",
    options: [
      "S cm mol⁻¹",
      "S cm² mol⁻¹",
      "S cm⁻² mol",
      "S⁻¹ cm² mol⁻¹"
    ],
    correct: 1
  },
  {
    question: "किसी वैद्युत अपघट्य के अनंत तनुता पर मोलर चालकत्व, उसके धनायन और ऋणायन के मोलर चालकताओं के योग के बराबर होता है। यह कथन किस नियम को निरूपित करता है?",
    options: [
      "फैराडे का नियम",
      "हेनरी का नियम",
      "कोलराँश का नियम",
      "ओम का नियम"
    ],
    correct: 2
  },
  {
    question: "कोलराँश के नियमानुसार, किसी वैद्युत अपघट्य की मोलर चालकता उसके धनायन और ऋणायन के मोलर चालकताओं के योग के बराबर किस स्थिति में होती है?",
    options: [
      "अनंत तनुता पर",
      "उच्च सांद्रता पर",
      "कमरे के ताप पर",
      "शून्य दाब पर"
    ],
    correct: 0
  },
  {
    question: "कोलराँश के नियम के अनुसार, अनंत तनुता पर किसी वैद्युत अपघट्य का कुल मोलर चालकत्व किसके योग के बराबर होता है?",
    options: [
      "केवल धनायनों की मोलर चालकता",
      "केवल ऋणायनों की मोलर चालकता",
      "प्रतिरोध और विशिष्ट प्रतिरोध",
      "धनायन और ऋणायन के मोलर चालकताओं"
    ],
    correct: 3
  },
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
  }
];
window.quizDatabase[2].ch_3 = window.quizDatabase[2].ch_3 || {};
window.quizDatabase[2].ch_3.dpp_4 = [
  {
    question: "'सौ अजान एक सुजान' किसकी औपन्यासिक कृति है?",
    options: [
      "बालकृष्ण भट्ट",
      "प्रताप नारायण मिश्र",
      "राधाचरण गोस्वामी",
      "बदरी नारायण चौधरी"
    ],
    correct: 0
  },
  {
    question: "निम्नलिखित में से कौन-सा उपन्यास बालकृष्ण भट्ट द्वारा रचित है?",
    options: [
      "रहस्य कथा",
      "गोदान",
      "तितली",
      "गबन"
    ],
    correct: 0
  },
  {
    question: "'गुप्त वैरी' और 'रसातल यात्रा' बालकृष्ण भट्ट की किस विधा की रचनाएँ हैं?",
    options: [
      "नाटक",
      "उपन्यास",
      "कहानी",
      "निबंध"
    ],
    correct: 1
  },
  {
    question: "'हमारी घड़ी' और 'सद्भाव का अभाव' उपन्यासों के रचनाकार कौन हैं?",
    options: [
      "अज्ञेय",
      "जैनेंद्र",
      "बालकृष्ण भट्ट",
      "फणीश्वरनाथ रेणु"
    ],
    correct: 2
  },
  {
    question: "'दमयंती स्वयंवर' (नल दमयंती) नाटक के लेखक कौन हैं?",
    options: [
      "बालकृष्ण भट्ट",
      "भारतेंदु हरिश्चंद्र",
      "मोहन राकेश",
      "जगदीशचंद्र माथुर"
    ],
    correct: 0
  },
  {
    question: "'पद्मावती' और 'किरातार्जुनीय' किसकी नाट्य रचनाएँ हैं?",
    options: [
      "जयशंकर प्रसाद",
      "बालकृष्ण भट्ट",
      "रामवृक्ष बेनीपुरी",
      "उदय प्रकाश"
    ],
    correct: 1
  },
  {
    question: "'वेणी संहार' और 'शिशुपाल वध' नाटक के रचनाकार कौन हैं?",
    options: [
      "बालकृष्ण भट्ट",
      "सूर्यकांत त्रिपाठी 'निराला'",
      "सुभद्रा कुमारी चौहान",
      "महादेवी वर्मा"
    ],
    correct: 0
  },
  {
    question: "'शिक्षादान' और 'चंद्रसेन' नाटक के लेखक कौन हैं?",
    options: [
      "यशपाल",
      "बालकृष्ण भट्ट",
      "भगवतीचरण वर्मा",
      "वृंदावनलाल वर्मा"
    ],
    correct: 1
  },
  {
    question: "'सीता बनवास' और 'पतित पंचम' किसकी रचनाएँ हैं?",
    options: [
      "बालकृष्ण भट्ट",
      "प्रेमचंद",
      "हजारीप्रसाद द्विवेदी",
      "हरिवंश राय बच्चन"
    ],
    correct: 0
  },
  {
    question: "'कट्टर सूम की एक नकल' और 'मेघनाद वध' नाटक के रचनाकार कौन हैं?",
    options: [
      "भारतेंदु हरिश्चंद्र",
      "बालकृष्ण भट्ट",
      "मैथिलीशरण गुप्त",
      "रामकुमार वर्मा"
    ],
    correct: 1
  },
  {
    question: "'रेल का विकट खेल' नाटक किसने लिखा है?",
    options: [
      "प्रताप नारायण मिश्र",
      "बालकृष्ण भट्ट",
      "राधाचरण गोस्वामी",
      "बदरीनारायण चौधरी"
    ],
    correct: 1
  },
  {
    question: "'बालविवाह' नाटक के लेखक कौन हैं?",
    options: [
      "बालकृष्ण भट्ट",
      "चंद्रधर शर्मा गुलेरी",
      "जयप्रकाश नारायण",
      "रामधारी सिंह दिनकर"
    ],
    correct: 0
  },
  {
    question: "'जैसा काम वैसा परिणाम' बालकृष्ण भट्ट की किस विधा की रचना है?",
    options: [
      "उपन्यास",
      "प्रहसन",
      "कविता",
      "कहानी"
    ],
    correct: 1
  },
  {
    question: "'नई रोशनी का विष' और 'आचार विडंबन' किस विधा के अंतर्गत आते हैं?",
    options: [
      "प्रहसन",
      "महाकाव्य",
      "एकांकी",
      "आत्मकथा"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट 1888 में किस कॉलेज में संस्कृत के अध्यापक नियुक्त हुए थे?",
    options: [
      "बनारस हिंदू यूनिवर्सिटी",
      "प्रयाग की कायस्थ पाठशाला इंटर कॉलेज",
      "पटना कॉलेज",
      "लंगट सिंह कॉलेज, मुजफ्फरपुर"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट को किस कारण अपनी अध्यापन की नौकरी छोड़नी पड़ी थी?",
    options: [
      "स्वास्थ्य खराब होने से",
      "उग्र स्वभाव के कारण",
      "तबादला हो जाने के कारण",
      "पैतृक व्यापार संभालने के लिए"
    ],
    correct: 1
  },
  {
    question: "जीवन के अंतिम दिनों में बालकृष्ण भट्ट को 'हिंदी शब्दकोश' के संपादन हेतु किसने काशी आमंत्रित किया था?",
    options: [
      "आचार्य रामचंद्र शुक्ल ने",
      "श्याम सुंदर दास ने",
      "महावीर प्रसाद द्विवेदी ने",
      "डॉ० रामविलास शर्मा ने"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट किस संस्था/सभा द्वारा 'हिंदी प्रदीप' पत्रिका निकालते थे?",
    options: [
      "नागरी प्रचारिणी सभा",
      "हिंदी वर्द्धिनी सभा, प्रयाग",
      "साहित्य अकादमी",
      "आर्य समाज"
    ],
    correct: 1
  },
  {
    question: "बालकृष्ण भट्ट ने 1881 में किसकी युक्तिपूर्ण समीक्षा की थी?",
    options: [
      "वेदों की",
      "उपनिषदों की",
      "रामायण की",
      "महाभारत की"
    ],
    correct: 0
  },
  {
    question: "बालकृष्ण भट्ट आधुनिक हिंदी गद्य के किस रूप में पहचाने जाते हैं?",
    options: [
      "आदि निर्माता और उन्नायक रचनाकार",
      "केवल महाकाव्यकार",
      "केवल लोकगीतकार",
      "छायावादी कवि"
    ],
    correct: 0
  },
  {
    question: "'बातचीत' निबंध के अनुसार ईश्वर द्वारा मनुष्य को दी गई सबसे महत्वपूर्ण अनुपम शक्ति कौन-सी है?",
    options: [
      "देखने की शक्ति",
      "सुनने की शक्ति",
      "वाक्शक्ति",
      "सोचने की शक्ति"
    ],
    correct: 2
  },
  {
    question: "यदि मनुष्य में वाक्शक्ति न होती तो समस्त सृष्टि कैसी प्रतीत होती?",
    options: [
      "गूँगी और असहाय",
      "बहुत खुशहाल",
      "अंधकारमय",
      "बहरी"
    ],
    correct: 0
  },
  {
    question: "वाक्शक्ति के अनेक फायदों में लेखक ने किन दो रूपों का विशेष उल्लेख किया है?",
    options: [
      "पढ़ना और लिखना",
      "स्पीच और बातचीत",
      "गाना और बजाना",
      "सोचना और समझना"
    ],
    correct: 1
  },
  {
    question: "'स्पीच' और 'बातचीत' में मुख्य अंतर क्या है?",
    options: [
      "स्पीच में केवल दो लोग बात करते हैं",
      "बातचीत में मंच पर ताली बजवाई जाती है",
      "स्पीच घर में होती है और बातचीत जनसभाओं में",
      "स्पीच में वक्ता को नाज-नखरा दिखाने का मौका रहता है, जबकि बातचीत में मन रमाने का ढंग होता है"
    ],
    correct: 3
  },
  {
    question: "स्पीच का मुख्य उद्देश्य क्या होता है?",
    options: [
      "श्रोताओं के मन में जोश और उत्साह पैदा करना",
      "लोगों को सुलाना",
      "व्यक्तिगत शिकायतें करना",
      "समय नष्ट करना"
    ],
    correct: 0
  },
  {
    question: "घरेलू बातचीत का मुख्य ढंग क्या होता है?",
    options: [
      "ताली बजवाने का",
      "बहस करने का",
      "मन रमाने का",
      "शास्त्रार्थ करने का"
    ],
    correct: 2
  },
  {
    question: "'बातचीत' निबंध के अनुसार मनुष्य की जिंदगी को मजेदार बनाने के लिए किसकी अत्यंत आवश्यकता है?",
    options: [
      "केवल खाने-पीने की",
      "बातचीत की",
      "केवल घूमने-फिरने की",
      "धन कमाने की"
    ],
    correct: 1
  },
  {
    question: "हमारे चित्त में जमा मवाद या धुँआ बातचीत के जरिए किस रूप में बाहर निकल जाता है?",
    options: [
      "भाप बनकर",
      "पानी बनकर",
      "आँसू बनकर",
      "आग बनकर"
    ],
    correct: 0
  },
  {
    question: "बातचीत करने से मनुष्य का मन या चित्त कैसा हो जाता है?",
    options: [
      "भारी और दुखी",
      "अत्यंत क्रोधी",
      "भ्रमित",
      "हल्का और स्वच्छ"
    ],
    correct: 3
  },
  {
    question: "जिन लोगों को बातचीत करने की लत पड़ जाती है, वे इसके लिए क्या छोड़ बैठते हैं?",
    options: [
      "सोना",
      "खाना-पीना",
      "पढ़ाई",
      "घूमना"
    ],
    correct: 1
  },
  {
    question: "रॉबिंसन क्रूसो को कितने वर्षों तक मनुष्य का मुख देखने को नहीं मिला था?",
    options: [
      "10 वर्ष",
      "12 वर्ष",
      "16 वर्ष",
      "20 वर्ष"
    ],
    correct: 2
  },
  {
    question: "16 वर्षों के उपरांत रॉबिंसन क्रूसो ने किसके मुख से पहली बार बात सुनी थी?",
    options: [
      "संडे के",
      "एडिसन के",
      "बेन जॉनसन के",
      "फ्राइडे के"
    ],
    correct: 3
  },
  {
    question: "\"बोलने से ही मनुष्य के रूप का साक्षात्कार होता है\" - यह कथन किसका है?",
    options: [
      "एडिसन का",
      "बेन जॉनसन का",
      "शेक्सपियर का",
      "जॉन मिल्टन का"
    ],
    correct: 1
  },
  {
    question: "\"असल बातचीत सिर्फ दो व्यक्तियों में ही हो सकती है\" - यह किसका सिद्धांत/मत है?",
    options: [
      "एडिसन का",
      "बेन जॉनसन का",
      "बालकृष्ण भट्ट का",
      "रामचंद्र शुक्ल का"
    ],
    correct: 0
  },
  {
    question: "एडिसन के अनुसार दो व्यक्तियों के बीच बातचीत का मुख्य रहस्य क्या है?",
    options: [
      "वे औपचारिकता निभाते हैं",
      "वे गुप्त बातें छिपाते हैं",
      "वे अपना दिल एक-दूसरे के सामने खोलते हैं",
      "वे एक-दूसरे से झगड़ते हैं"
    ],
    correct: 2
  },
  {
    question: "जब तीन लोग आपस में बातचीत करते हैं, तो बातचीत का रूप कैसा हो जाता है?",
    options: [
      "त्रिकोण जैसा",
      "वृत्ताकार",
      "चौकोर",
      "सीधी रेखा जैसा"
    ],
    correct: 0
  },
  {
    question: "तीन व्यक्तियों की बातचीत के संदर्भ में कौन-सी कहावत चरितार्थ होती है?",
    options: [
      "एक और एक ग्यारह होते हैं",
      "अंधों में काना राजा",
      "दूर के ढोल सुहावने",
      "छह कानों में पड़ी बात खुल जाती है"
    ],
    correct: 3
  },
  {
    question: "चार व्यक्तियों की बातचीत में क्या बात समाप्त हो जाती है?",
    options: [
      "गौरव और संजीदगी",
      "बेतकल्लुफी (खुलकर बात करना)",
      "औपचारिकता",
      "दिखावा"
    ],
    correct: 1
  },
  {
    question: "चार से अधिक लोगों के बीच होने वाली बातचीत को लेखक ने क्या नाम दिया है?",
    options: [
      "संलाप",
      "सुहृद् गोष्ठी",
      "राम-रमौवल",
      "शास्त्रार्थ"
    ],
    correct: 2
  },
  {
    question: "दो वृद्धों (बूढ़ों) की बातचीत का मुख्य प्रकरण प्रायः क्या होता है?",
    options: [
      "जमाने की शिकायत और पुराने समय की तारीफ",
      "नए खेलों की चर्चा",
      "आधुनिक फैशन की बातें",
      "परीक्षा के नतीजों पर चर्चा"
    ],
    correct: 0
  }
];

