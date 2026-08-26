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
window.quizDatabase[5].ch_1 = window.quizDatabase[5].ch_1 || {};
window.quizDatabase[5].ch_1.dpp_2 = [
  {
    question: "'कछुआ धरम' किसकी प्रसिद्ध निबंध रचना है?",
    options: [
      "हजारी प्रसाद द्विवेदी",
      "चंद्रधर शर्मा गुलेरी",
      "रामचंद्र शुक्ल",
      "बालकृष्ण भट्ट"
    ],
    correct: 1
  },
  {
    question: "'मारेसि मोहिं कुठाँव' निबंध के लेखक कौन हैं?",
    options: [
      "अज्ञेय",
      "चंद्रधर शर्मा गुलेरी",
      "मोहन राकेश",
      "दिनकर"
    ],
    correct: 1
  },
  {
    question: "'पुरानी हिंदी' किसकी बहुचर्चित रचना है?",
    options: [
      "चंद्रधर शर्मा गुलेरी",
      "डॉ० नामवर सिंह",
      "रामविलास शर्मा",
      "महावीर प्रसाद द्विवेदी"
    ],
    correct: 0
  },
  {
    question: "इनमें से कौन-सा निबंध चंद्रधर शर्मा गुलेरी द्वारा लिखा गया है?",
    options: [
      "देवानां प्रिय",
      "अशोक के फूल",
      "निंदा रस",
      "गेहूं और गुलाब"
    ],
    correct: 0
  },
  {
    question: "'ए पोयम बाय भास' (A Poem by Bhasa) निबंध के लेखक कौन हैं?",
    options: [
      "महादेवी वर्मा",
      "चंद्रधर शर्मा गुलेरी",
      "जयशंकर प्रसाद",
      "प्रेमचंद"
    ],
    correct: 1
  },
  {
    question: "'ए कमेंटरी ऑन वात्स्यायन्स कामसूत्र' किसकी अंग्रेजी निबंध रचना है?",
    options: [
      "रामचंद्र शुक्ल",
      "चंद्रधर शर्मा गुलेरी",
      "सर्वपल्ली राधाकृष्णन",
      "बालकृष्ण भट्ट"
    ],
    correct: 1
  },
  {
    question: "'दि लिटरेरी क्रिटिसिज्म' नामक निबंध के रचयिता कौन हैं?",
    options: [
      "चंद्रधर शर्मा गुलेरी",
      "डॉ० नामवर सिंह",
      "हजारी प्रसाद द्विवेदी",
      "अज्ञेय"
    ],
    correct: 0
  },
  {
    question: "गुलेरी जी बीसवीं शती के प्रथम चरण में किस युग के प्रमुख निबंधकार थे?",
    options: [
      "भारतेंदु युग",
      "द्विवेदी युग",
      "छायावादी युग",
      "प्रगतिवादी युग"
    ],
    correct: 1
  },
  {
    question: "गुलेरी जी को हिंदी और संस्कृत के अलावा किन भाषाओं का ज्ञान था?",
    options: [
      "अंग्रेजी, प्राकृत और अपभ्रंश",
      "केवल तमिल और तेलुगु",
      "अरबी और फारसी",
      "केवल उर्दू और पंजाबी"
    ],
    correct: 0
  },
  {
    question: "केवल तीन कहानियाँ लिखकर हिंदी साहित्य में अमर हो जाने वाले कहानीकार कौन हैं?",
    options: [
      "प्रेमचंद",
      "चंद्रधर शर्मा गुलेरी",
      "अज्ञेय",
      "फणीश्वर नाथ रेणु"
    ],
    correct: 1
  },
  {
    question: "हिंदी कहानी के विकास में 'मील का पत्थर' किस कहानी को माना जाता है?",
    options: [
      "कफन",
      "उसने कहा था",
      "पंच परमेश्वर",
      "रोज"
    ],
    correct: 1
  },
  {
    question: "'उसने कहा था' कहानी पर किस प्रसिद्ध फिल्मकार ने फिल्म बनाई थी?",
    options: [
      "राज कपूर",
      "गुरु दत्त",
      "बिमल राय",
      "सत्यजीत रे"
    ],
    correct: 2
  },
  {
    question: "\"उसने कहा था में पक्के यथार्थवाद के बीच सुरुचि की चरम मर्यादा के भीतर भावुकता का चरम उत्कर्ष है।\" यह कथन किसका है?",
    options: [
      "आचार्य रामचंद्र शुक्ल",
      "डॉ० नामवर सिंह",
      "हजारी प्रसाद द्विवेदी",
      "रामविलास शर्मा"
    ],
    correct: 0
  },
  {
    question: "'उसने कहा था' कहानी सबसे पहले किस पत्रिका में प्रकाशित हुई थी?",
    options: [
      "सरस्वती",
      "हंस",
      "माधुरी",
      "प्रताप"
    ],
    correct: 0
  },
  {
    question: "'सरस्वती' पत्रिका में 'उसने कहा था' कहानी किस महीने और वर्ष में छपी थी?",
    options: [
      "जनवरी 1911 में",
      "जून 1915 में",
      "मार्च 1914 में",
      "दिसंबर 1915 में"
    ],
    correct: 1
  },
  {
    question: "'सरस्वती' पत्रिका के संपादक कौन थे जिन्होंने 'उसने कहा था' कहानी प्रकाशित की थी?",
    options: [
      "आचार्य महावीर प्रसाद द्विवेदी",
      "बालकृष्ण भट्ट",
      "भारतेंदु हरिश्चंद्र",
      "प्रताप नारायण मिश्र"
    ],
    correct: 0
  },
  {
    question: "'भारतवर्ष' और 'डिंगल' निबंधों के रचनाकार कौन हैं?",
    options: [
      "दिनकर",
      "चंद्रधर शर्मा गुलेरी",
      "मोहन राकेश",
      "अज्ञेय"
    ],
    correct: 1
  },
  {
    question: "'संस्कृत की टिपारी' निबंध के लेखक कौन हैं?",
    options: [
      "चंद्रधर शर्मा गुलेरी",
      "हजारी प्रसाद द्विवेदी",
      "नामवर सिंह",
      "बालकृष्ण भट्ट"
    ],
    correct: 0
  },
  {
    question: "'खोज की खाज' और 'क्रियाहीन हिंदी' किसकी प्रसिद्ध टिप्पणियाँ हैं?",
    options: [
      "प्रेमचंद",
      "चंद्रधर शर्मा गुलेरी",
      "रामचंद्र शुक्ल",
      "राहुल सांकृत्यायन"
    ],
    correct: 1
  },
  {
    question: "गुलेरी जी की रचनाओं में मुख्य रूप से क्या दिखाई पड़ता है?",
    options: [
      "गूढ़ एवं विदग्ध हास-परिहास तथा व्यंग्य",
      "कोरी काल्पनिक भावुकता",
      "केवल धार्मिक उपदेश",
      "केवल राजनीतिक विचार"
    ],
    correct: 0
  },
  {
    question: "'उसने कहा था' कहानी की शुरुआत किस शहर के भीड़भरे बाज़ार से होती है?",
    options: [
      "लुधियाना",
      "जालंधर",
      "अमृतसर",
      "लाहौर"
    ],
    correct: 2
  },
  {
    question: "अमृतसर के बंबूकार्टवालों की बोली को लेखक ने क्या नाम दिया है?",
    options: [
      "कड़वा ज़हर",
      "मीठी छुरी",
      "तीखा तीर",
      "कोड़ों की मार"
    ],
    correct: 1
  },
  {
    question: "अमृतसर की तंग गलियों में बंबूकार्टवाले हटने के लिए क्या कहते हैं?",
    options: [
      "'हट जा, जीणे जोगिए'",
      "'रास्ता छोड़ो'",
      "'आगे से हटो'",
      "'गाड़ी आ रही है'"
    ],
    correct: 0
  },
  {
    question: "'हट जा, जीणे जोगिए' का अर्थ लेखक ने क्या बताया है?",
    options: [
      "तू मरने योग्य है",
      "तू जीने योग्य है",
      "तू भाग जा",
      "तू रुक जा"
    ],
    correct: 1
  },
  {
    question: "चौक की दुकान पर मिले लड़के की उम्र कितनी थी?",
    options: [
      "8 वर्ष",
      "10 वर्ष",
      "12 वर्ष",
      "15 वर्ष"
    ],
    correct: 2
  },
  {
    question: "दुकान पर मिली छोटी लड़की की उम्र क्या थी?",
    options: [
      "6 वर्ष",
      "8 वर्ष",
      "10 वर्ष",
      "12 वर्ष"
    ],
    correct: 1
  },
  {
    question: "लड़का दुकान पर क्या खरीदने आया था?",
    options: [
      "मामा के केश धोने के लिए दही",
      "रसोई के लिए बड़ियाँ",
      "खाने के लिए मिठाई",
      "फल और सब्ज़ी"
    ],
    correct: 0
  },
  {
    question: "लड़की दुकान पर किस काम से आई थी?",
    options: [
      "दही लेने",
      "रसोई के लिए बड़ियाँ लेने",
      "साबुन खरीदने",
      "सब्जी लेने"
    ],
    correct: 1
  },
  {
    question: "लड़का मूल रूप से किस स्थान का रहने वाला था?",
    options: [
      "मगरा",
      "माँझा",
      "आनंदपुर",
      "कांगड़ा"
    ],
    correct: 1
  },
  {
    question: "लड़की का घर कहाँ था?",
    options: [
      "माँझा में",
      "मगरा में",
      "गुरुबाज़ार में",
      "पटियाला में"
    ],
    correct: 1
  },
  {
    question: "लड़की अमृतसर में किसके यहाँ आई थी?",
    options: [
      "अपने पिता के यहाँ",
      "अपने चाचा के यहाँ",
      "अपने मामा अतरसिंह के यहाँ",
      "अपनी नानी के यहाँ"
    ],
    correct: 2
  },
  {
    question: "लहना सिंह के मामा का घर अमृतसर में कहाँ था?",
    options: [
      "चौक में",
      "गुरुबाज़ार में",
      "कटरा में",
      "मगरा में"
    ],
    correct: 1
  },
  {
    question: "लड़का बार-बार लड़की से कौन-सा प्रश्न पूछता था?",
    options: [
      "\"तेरा नाम क्या है?\"",
      "\"तेरी कुड़माई हो गई?\"",
      "\"तू कहाँ रहती है?\"",
      "\"तेरे मामा कौन हैं?\""
    ],
    correct: 1
  },
  {
    question: "'कुड़माई' शब्द का अर्थ क्या होता है?",
    options: [
      "सगाई या मँगनी",
      "विवाह",
      "विदाई",
      "गौना"
    ],
    correct: 0
  },
  {
    question: "शुरुआत में 'तेरी कुड़माई हो गई?' पूछने पर लड़की क्या कहकर भाग जाती थी?",
    options: [
      "'हाँ'",
      "'नहीं'",
      "'धत्'",
      "'चुप रहो'"
    ],
    correct: 2
  },
  {
    question: "एक दिन चिढ़ाने पर लड़की ने कुड़माई का क्या उत्तर दिया?",
    options: [
      "'अभी नहीं हुई'",
      "'हाँ, हो गई... कल'",
      "'मेरी सगाई कभी नहीं होगी'",
      "'तुमसे मतलब?'"
    ],
    correct: 1
  },
  {
    question: "लड़की ने अपनी कुड़माई (सगाई) हो जाने का क्या प्रमाण दिखाया?",
    options: [
      "सोने की चूड़ी",
      "रेशम के फूलों वाला सालू (दुपट्टा)",
      "हाथ की अंगूठी",
      "मेंहदी रंगे हाथ"
    ],
    correct: 1
  },
  {
    question: "पाठ में प्रयुक्त 'सालू' शब्द का क्या अर्थ है?",
    options: [
      "लहँगा",
      "दुपट्टा",
      "साड़ी",
      "फ्रॉक"
    ],
    correct: 1
  },
  {
    question: "सगाई की बात सुनकर लहना सिंह ने गुस्से में कुत्ते को क्या किया?",
    options: [
      "लाठी से मारा",
      "पत्थर मारा",
      "भगा दिया",
      "पुचकारा"
    ],
    correct: 1
  },
  {
    question: "लहना सिंह ने गुस्से में किसके ठेले में दूध उड़ेल दिया था?",
    options: [
      "फलवाले के",
      "गोभीवाले के",
      "चायवाले के",
      "सब्जीवाले के"
    ],
    correct: 1
  }
];

