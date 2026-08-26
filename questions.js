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
    "cm010" : " Hello",
    "537964" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "577698" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "241724" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
    "185428" : "तुम community पर note टाइप करके msg send करना (Dpp बनाने के बाद ) , ताकि note का pdf कहा मिलेगा वो बताएँगे वंही।",
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

