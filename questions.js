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
// =====================================================================================================================================================================
window.quizDatabase[5] = window.quizDatabase[5] || {};
window.quizDatabase[5].ch_3 = window.quizDatabase[5].ch_3 || {};
window.quizDatabase[5].ch_3.dpp_2 = [
  {
    question: "अमेरिका में पढ़ाई करने के कारण जेपी के विरोधी उन्हें कटुता में क्या कहकर पुकारते थे?",
    options: [
      "'रूसी एजेंट'",
      "'अमेरिका का दलाल'",
      "'पूँजीपति का चमचा'",
      "'ब्रिटिश समर्थक'"
    ],
    correct: 1
  },
  {
    question: "जेपी के अमेरिका से लौटने पर उनके विरोधियों ने कौन-सा नारा लगाया था?",
    options: [
      "\"जयप्रकाश वापस जाओ\"",
      "\"निक्सन को दो तार, जयप्रकाश की हो गई हार\"",
      "\"अमेरिका मुर्दाबाद\"",
      "\"जयप्रकाश मुर्दाबाद\""
    ],
    correct: 1
  },
  {
    question: "'फ्री प्रेस' के मालिक सदानंद जी ने उमाशंकर दीक्षित को क्या उपाधि दी थी?",
    options: [
      "'बॉम्बे का राजा'",
      "'ब्रेन ऑफ बॉम्बे' (Brain of Bombay)",
      "'गुजरात का रत्न'",
      "'कांग्रेस का शेर'"
    ],
    correct: 1
  },
  {
    question: "1932-33 के आंदोलन के दौरान बंबई (मुंबई) में 'अंडरग्राउंड' रहकर आंदोलन चलाने वाले नेता कौन थे?",
    options: [
      "उमाशंकर दीक्षित",
      "गंगा बाबू",
      "दिनकर जी",
      "रामनाथ गोयनका"
    ],
    correct: 0
  },
  {
    question: "जेपी ने सर्वोदय आंदोलन में किस वर्ष और किस स्थान पर अपनी निष्ठा समर्पित की?",
    options: [
      "1950 में पटना में",
      "1954 में गया (बिहार) में",
      "1974 में मुजफ्फरपुर में",
      "1962 में दिल्ली में"
    ],
    correct: 1
  },
  {
    question: "जयप्रकाश नारायण पूर्व प्रधानमंत्री जवाहरलाल नेहरू को किस संबोधन से बुलाते थे?",
    options: [
      "'पंडित जी'",
      "'नेहरू जी'",
      "'भाई'",
      "'नेता जी'"
    ],
    correct: 2
  },
  {
    question: "जेपी और जवाहरलाल नेहरू के बीच किन विदेश नीति के मामलों पर गंभीर मतभेद थे?",
    options: [
      "तिब्बत, चीन और हंगरी के मामलों पर",
      "अमेरिका और रूस के मामलों पर",
      "पाकिस्तान और कश्मीर के मामलों पर",
      "इंगलैंड और फ्रांस के मामलों पर"
    ],
    correct: 0
  },
  {
    question: "\"व्यक्ति से नहीं हमें तो नीतियों से झगड़ा है, सिद्धांतों से झगड़ा है, कार्यों से झगड़ा है।\" - यह प्रसिद्ध कथन जेपी के भाषण में किसके संदर्भ में है?",
    options: [
      "इंदिरा गांधी एवं सरकार की गलत नीतियों के संदर्भ में",
      "अंग्रेजों के संदर्भ में",
      "छात्रों के संदर्भ में",
      "पुलिस अधिकारियों के संदर्भ में"
    ],
    correct: 0
  },
  {
    question: "जेपी के अनुसार महात्मा गाँधी की सबसे बड़ी महत्ता क्या थी?",
    options: [
      "वे कभी भाषण नहीं देते थे",
      "वे कटु आलोचना का भी बुरा नहीं मानते थे और प्रेम से समझाते थे",
      "वे किसी को जेल नहीं जाने देते थे",
      "वे कभी किसी से बहस नहीं करते थे"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार वर्तमान राजनीति में भ्रष्टाचार की सबसे प्रमुख और मुख्य जड़ क्या है?",
    options: [
      "बेरोजगारी",
      "चुनाव का बेहद खर्चीला होना (इलेक्शन का खर्च)",
      "शिक्षा की कमी",
      "विदेशी कर्ज"
    ],
    correct: 1
  },
  {
    question: "'दलविहीन लोकतंत्र' (Partyless Democracy) किस विचार का मुख्य राजनीतिक सिद्धांत है?",
    options: [
      "मार्क्सवाद का",
      "सर्वोदय विचार का",
      "पूँजीवाद का",
      "फासीवाद का"
    ],
    correct: 1
  },
  {
    question: "मार्क्सवाद और लेनिनवाद के अनुसार जैसे-जैसे समाज साम्यवाद की ओर बढ़ता है, वैसे-वैसे राज्य (State) का क्या होता है?",
    options: [
      "राज्य बहुत मजबूत हो जाता है",
      "राज्य का क्षय (विघटन) होता जाता है और शासन-मुक्त समाज बनता है",
      "राज्य में तानाशाही आती है",
      "राज्य का आकार बढ़ता है"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार लोकतंत्र में जनता का अपने प्रतिनिधियों पर चुनाव जीतने के बाद क्या होना चाहिए?",
    options: [
      "कोई अंकुश नहीं होना चाहिए",
      "कड़ा अंकुश और नियंत्रण होना चाहिए",
      "केवल 5 साल बाद ही बात होनी चाहिए",
      "पूर्ण समर्पण होना चाहिए"
    ],
    correct: 1
  },
  {
    question: "जनप्रतिनिधियों के आचरण पर नियंत्रण रखने और चुनाव में सही उम्मीदवार खड़ा करने के लिए जेपी ने किन समितियों के गठन पर बल दिया?",
    options: [
      "छात्र-संघर्ष और जन-संघर्ष समितियाँ",
      "सतर्कता समितियाँ",
      "राजनीतिक दल समितियाँ",
      "पुलिस समितियाँ"
    ],
    correct: 0
  },
  {
    question: "जेपी की कल्पना के अनुसार जन-संघर्ष समितियों का कार्य केवल सरकार से लड़ना ही नहीं, बल्कि और क्या है?",
    options: [
      "चुनाव लड़कर मंत्री बनना",
      "समाज के हर अन्याय, घूसखोरी, अनीति और बेनामी बंदोबस्तियों के खिलाफ लड़ना",
      "केवल कर (Tax) वसूलना",
      "हड़ताल कराना"
    ],
    correct: 1
  },
  {
    question: "\"अगर कोई डिमॉक्रेसी का दुश्मन है, तो वे लोग दुश्मन हैं, जो जनता के शांतिमय कार्यक्रमों में बाधा डालते हैं...\" यह कथन जेपी ने किसके लिए कहा?",
    options: [
      "शांतिपूर्ण प्रदर्शनकारियों को रोकने वाली सरकार और पुलिस अधिकारियों के लिए",
      "छात्रों के लिए",
      "विदेशी ताकतों के लिए",
      "अपने सहयोगियों के लिए"
    ],
    correct: 0
  },
  {
    question: "जेपी के भाषण के अनुसार किस शहर से पटना आ रही जनता और छात्रों की गाड़ियों व ट्रेनों को रोककर लाठियाँ चलाई गई थीं?",
    options: [
      "मुजफ्फरपुर और अन्य क्षेत्रों की रिपोर्ट के अनुसार",
      "केवल दिल्ली से",
      "केवल कोलकाता से",
      "केवल रांची से"
    ],
    correct: 0
  },
  {
    question: "\"जयप्रकाश नारायण नहीं होते तो बिहार जल गया होता।\" - यह बात जेपी ने किसके मुँह से सुनने का उल्लेख किया?",
    options: [
      "जवाहरलाल नेहरू",
      "उमाशंकर दीक्षित",
      "इंदिरा गांधी",
      "रामनाथ गोयनका"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार संपूर्ण क्रांति का प्रारंभिक चरण क्या था?",
    options: [
      "आर्थिक क्रांति",
      "सत्ता परिवर्तन",
      "सामाजिक सुधार",
      "शैक्षणिक सुधार"
    ],
    correct: 1
  },
  {
    question: "1974 के बिहार छात्र आंदोलन के समय जेपी ने युवाओं को क्या नारा दिया था?",
    options: [
      "\"इंकलाब जिंदाबाद\"",
      "\"संपूर्ण क्रांति\"",
      "\"करो या मरो\"",
      "\"जय हिंद\""
    ],
    correct: 1
  },
  {
    question: "जेपी ने अमेरिका में रविवार और छुट्टियों के दिन किस प्रकार के काम करके पैसे बचाए?",
    options: [
      "होटलों में कमोड (टॉयलेट) साफ करके और 'ऑड टाइम्स' में काम करके",
      "गाड़ी चलाकर",
      "किताबें बेचकर",
      "खेती करके"
    ],
    correct: 0
  },
  {
    question: "अमेरिका में गरीबी के दिनों में जेपी अपने दोस्तों के साथ कमरे में किस तरह रहते थे?",
    options: [
      "एक ही चारपाई/कमरे में कई लड़के मिलकर रहते थे",
      "बड़े आलिशान बंगले में",
      "हॉस्टल के अलग-अलग कमरों में",
      "होटल के सुइट में"
    ],
    correct: 0
  },
  {
    question: "जेपी के अनुसार आजादी के बाद 'गरीबी हटाओ' के नारों के बावजूद देश में क्या स्थिति हुई?",
    options: [
      "गरीबी पूरी तरह मिट गई",
      "गरीबी और बेरोजगारी पिछले वर्षों में और बढ़ी है",
      "सभी को नौकरी मिल गई",
      "महँगाई खत्म हो गई"
    ],
    correct: 1
  },
  {
    question: "जेपी ने अपने भाषण में किस अस्पताल की दुर्दशा का जिक्र करते हुए कहा कि वहाँ 3 घंटे में भी तैयारी न हो पाती?",
    options: [
      "विलिंगडन अस्पताल",
      "पटना का अस्पताल",
      "दिल्ली का अस्पताल",
      "वेल्लोर का अस्पताल"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार यदि आज रामवृक्ष बेनीपुरी जी जीवित होते तो उनके लेखन की क्या विशेषता होती?",
    options: [
      "उनके एक-एक शब्द में अंगार होते और वे जुलूस का ओजस्वी वर्णन करते",
      "वे शांत रहते",
      "वे सरकार का समर्थन करते",
      "वे राजनीति पर नहीं लिखते"
    ],
    correct: 0
  },
  {
    question: "जेपी के अनुसार यदि दिनकर जी जीवित होते तो वे क्या करते?",
    options: [
      "नए भारत के नवनिर्माण के लिए अमर कविता रचते",
      "आंदोलन का विरोध करते",
      "विदेश चले जाते",
      "मौन व्रत धारण करते"
    ],
    correct: 0
  },
  {
    question: "जेपी ने अपने भाषण में किस बात पर बल दिया कि वे नाम के लिए क्या नहीं बनना चाहते?",
    options: [
      "प्रधानमंत्री",
      "केवल नाम के नेता (डिक्टेट होने वाला नेता)",
      "मुख्यमंत्री",
      "राज्यपाल"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार जब देश में आपातकाल (Emergency) की आशंका और जनतांत्रिक अधिकारों का दमन होने लगा, तब कहाँ के छात्रों का आक्रोश फूटा?",
    options: [
      "केवल दिल्ली के",
      "बिहार, गुजरात सहित समूचे देश के",
      "केवल पंजाब के",
      "केवल तमिलनाडु के"
    ],
    correct: 1
  },
  {
    question: "जेपी ने अपने भाषण में 'आई.एससी.' (I.Sc.) में किस संकाय/विषय के छात्र होने का उल्लेख किया है?",
    options: [
      "कला (Arts)",
      "विज्ञान (Science)",
      "वाणिज्य (Commerce)",
      "कृषि (Agriculture)"
    ],
    correct: 1
  },
  {
    question: "राजेंद्र बाबू के सचिव या मंत्री जो जेपी के निकट साथी थे, वे कौन थे?",
    options: [
      "मथुरा बाबू और फूलदेव सहाय वर्मा",
      "रामनाथ गोयनका",
      "उमाशंकर दीक्षित",
      "ईश्वर अय्यर"
    ],
    correct: 0
  },
  {
    question: "जेपी के मन में किस महामना नेता के लिए बनारस हिंदू विश्वविद्यालय (BHU) के संदर्भ में श्रद्धा व पूज्य भाव था?",
    options: [
      "मदन मोहन मालवीय जी",
      "बाल गंगाधर तिलक",
      "लाला लाजपत राय",
      "गोपाल कृष्ण गोखले"
    ],
    correct: 0
  },
  {
    question: "जेपी सरकारी मदद से चलने वाले विश्वविद्यालय में दाखिला क्यों नहीं लेना चाहते थे?",
    options: [
      "क्योंकि वह दूर था",
      "क्योंकि वह पूर्ण रूप से राष्ट्रीय या स्वतंत्र विद्यालय नहीं था और सरकारी रुपयों से चलता था",
      "क्योंकि फीस बहुत अधिक थी",
      "क्योंकि वहाँ विज्ञान की पढ़ाई नहीं थी"
    ],
    correct: 1
  },
  {
    question: "जेपी के पिता जी बाद में किस विभाग में जिलदार और रेवेन्यू असिस्टेंट बने थे?",
    options: [
      "नहर विभाग में",
      "शिक्षा विभाग में",
      "पुलिस विभाग में",
      "डाक विभाग में"
    ],
    correct: 0
  },
  {
    question: "अमेरिका में जेपी ने किस शहर के लोहा कारखाने में काम किया था?",
    options: [
      "न्यूयॉर्क",
      "शिकागो",
      "सैन फ्रांसिस्को",
      "वाशिंगटन"
    ],
    correct: 1
  },
  {
    question: "जेपी ने विस्कंसिन और मेडिसन में पढ़ाई के दौरान किस विचारधारा के ग्रंथों को अंग्रेजी में पढ़ डाला था?",
    options: [
      "पूँजीवाद",
      "मार्क्सवाद",
      "साम्राज्यवाद",
      "धर्मशास्त्र"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार लोकतंत्र में चुनाव के बाद यदि कोई प्रतिनिधि गलत रास्ता पकड़ता है, तो जन-संघर्ष समितियों को क्या करना चाहिए?",
    options: [
      "उसे 5 साल तक सहना चाहिए",
      "उसे इस्तीफा देने के लिए बाध्य करना चाहिए",
      "उसे पुरस्कार देना चाहिए",
      "चुप रहना चाहिए"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार गाँव में छोटे अफसरों और पुलिस कर्मचारियों में फैली किस बुराई के खिलाफ संघर्ष समितियों को लड़ना होगा?",
    options: [
      "घूसखोरी / भ्रष्टाचार",
      "कामचोरी",
      "अशिक्षा",
      "गरीबी"
    ],
    correct: 0
  },
  {
    question: "जेपी की कल्पना के अनुसार गाँव में बड़े किसानों द्वारा की गई किस गलत प्रथा का विरोध संघर्ष समितियाँ करेंगी?",
    options: [
      "बेनामी या फर्जी बंदोबस्तियाँ",
      "अधिक अनाज उगाना",
      "नई तकनीक का उपयोग",
      "खाद की खरीद"
    ],
    correct: 0
  },
  {
    question: "जेपी के भाषण के अनुसार 'संपूर्ण क्रांति' का अंतिम लक्ष्य कैसा परिवर्तन है?",
    options: [
      "केवल सत्ता बदलना",
      "व्यापक सामाजिक, आर्थिक और नैतिक परिवर्तन",
      "केवल चुनाव प्रणाली बदलना",
      "केवल कर घटाना"
    ],
    correct: 1
  },
  {
    question: "जेपी ने अपने भाषण में देश के नवनिर्माण के लिए किनकी भागीदारी को मुख्य माना?",
    options: [
      "केवल नेताओं की",
      "देश के युवकों, छात्रों, साधारण नर-नारियों की",
      "केवल पुलिस अधिकारियों की",
      "केवल उद्योगपतियों की"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार बापू (महात्मा गाँधी) से मतभेद होने पर भी बापू उन्हें क्या करते थे?",
    options: [
      "डाँटकर भगा देते थे",
      "बुलाकर प्रेम से समझाते थे",
      "जेल भेज देते थे",
      "पार्टी से निकाल देते थे"
    ],
    correct: 1
  },
  {
    question: "जेपी के अनुसार भारत में तत्कालीन शिक्षा व्यवस्था युवाओं को क्या बना रही थी?",
    options: [
      "आत्मनिर्भर और ज्ञानी",
      "नौकरियों के लिए दर-दर की ठोकरें खाने वाला बेरोजगार",
      "महान वैज्ञानिक",
      "सफल उद्योगपति"
    ],
    correct: 1
  },
  {
    question: "जेपी ने अपने भाषण में किस बात पर गहरा दुख जताया कि सभा में तालियाँ बजाने से ज्यादा जरूरी क्या है?",
    options: [
      "नारे लगाना",
      "बात को ध्यान से सुनना और समझना",
      "शोर मचाना",
      "झंडे फहराना"
    ],
    correct: 1
  },
  {
    question: "पटना के गाँधी मैदान में जेपी का भाषण सुनने के लिए कितनी संख्या में लोग एकत्र हुए थे?",
    options: [
      "कुछ सौ लोग",
      "कुछ हजार लोग",
      "लाखों-लाख की संख्या में (ऐतिहासिक जन-सम्मर्द)",
      "केवल छात्र"
    ],
    correct: 2
  },
  {
    question: "जेपी के अनुसार लोकतंत्र का वास्तविक मालिक कौन है?",
    options: [
      "पुलिस",
      "नेता और मंत्री",
      "देश की जनता",
      "सरकारी कर्मचारी"
    ],
    correct: 2
  },
  {
    question: "'इंफ्रास्ट्रक्चर' (Infrastructure) शब्द का क्या अर्थ है?",
    options: [
      "आधारभूत ढाँचा",
      "ऊपरी सजावट",
      "बड़ी इमारत",
      "सरकारी तंत्र"
    ],
    correct: 0
  },
  {
    question: "'हृदयग्राही' शब्द का क्या अर्थ होता है?",
    options: [
      "हृदय को आकर्षित या प्रभावित करने वाला",
      "कठोर दिल वाला",
      "दुखी करने वाला",
      "डराने वाला"
    ],
    correct: 0
  },
  {
    question: "'बुर्जुआ क्लास' (Bourgeois Class) का क्या अर्थ है?",
    options: [
      "मजदूर वर्ग",
      "पूँजीपति वर्ग और उसमें निष्ठा रखने वाला",
      "किसान वर्ग",
      "छात्र वर्ग"
    ],
    correct: 1
  },
  {
    question: "'उच्छृंखल' शब्द का क्या अर्थ होता है?",
    options: [
      "नियम-कायदा तोड़ने वाला, असंयत",
      "शांत रहने वाला",
      "नियम का पालन करने वाला",
      "दयालु प्रवृत्ति का"
    ],
    correct: 0
  },
  {
    question: "'स्वच्छंद' शब्द का क्या अर्थ होता है?",
    options: [
      "गुलाम",
      "स्वतंत्र, अपने मन मुताबिक चलने वाला",
      "नियमों में बँधा हुआ",
      "दूसरों पर आश्रित"
    ],
    correct: 1
  }
];
window.quizDatabase[1].ch_2 = window.quizDatabase[1].ch_2 || {};
window.quizDatabase[1].ch_2.dpp_1 = [
  {
    question: "P(A) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>3</span></span>, P(B) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>4</span></span>, P(A ∩ B) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>5</span></span> ⇒ P(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>B</span><span style='border-top:1px solid; display:block;'>A</span></span>) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2</span><span style='border-top:1px solid; display:block;'>5</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3</span><span style='border-top:1px solid; display:block;'>5</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>5</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>4</span><span style='border-top:1px solid; display:block;'>5</span></span>"
    ],
    correct: 1
  },
  {
    question: "एक सिक्के को 10 बार उछाला जाता है। ठीक छह चित आने की प्रायिकता है:",
    options: [
      "¹⁰C₆ (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>)⁶",
      "¹⁰C₆ (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>)⁷",
      "¹⁰C₆ (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>)⁸",
      "¹⁰C₆ (<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>)¹⁰"
    ],
    correct: 3
  },
  {
    question: "P(A) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>6</span><span style='border-top:1px solid; display:block;'>11</span></span>, P(B) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5</span><span style='border-top:1px solid; display:block;'>11</span></span>, P(A ∪ B) = <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>7</span><span style='border-top:1px solid; display:block;'>11</span></span> ⇒ P(A ∩ B) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>4</span><span style='border-top:1px solid; display:block;'>11</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5</span><span style='border-top:1px solid; display:block;'>11</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>7</span><span style='border-top:1px solid; display:block;'>11</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>9</span><span style='border-top:1px solid; display:block;'>11</span></span>"
    ],
    correct: 0
  },
  {
    question: "xy-तल का समीकरण है:",
    options: [
      "x = 0",
      "y = 0",
      "z = 0",
      "इनमें से कोई नहीं"
    ],
    correct: 2
  },
  {
    question: "z-अक्ष की दिक-कोज्याएँ हैं:",
    options: [
      "(1, 0, 1)",
      "(0, 0, 1)",
      "(0, 1, 0)",
      "(0, 0, 0)"
    ],
    correct: 1
  },
  {
    question: "बिंदुओं (4, 3, 7) और (1, -1, -5) के बीच की दूरी है:",
    options: [
      "13",
      "15",
      "12",
      "5"
    ],
    correct: 0
  },
  {
    question: "∫ (x + cos 2x) dx =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>x sin 2x + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>4</span></span>cos 2x + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>x sin 2x - <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>4</span></span>cos 2x + c",
      "2x sin 2x + 4cos 2x + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x²</span><span style='border-top:1px solid; display:block;'>2</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>sin 2x</span><span style='border-top:1px solid; display:block;'>2</span></span> + c"
    ],
    correct: 3
  },
  {
    question: "∫ eˣ {sin⁻¹x + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>1 - x²</span></span></span></span>} dx =",
    options: [
      "eˣ · <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>1 - x²</span></span></span></span> + c",
      "eˣ · sin⁻¹x + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>e²</span><span style='border-top:1px solid; display:block;'>2</span></span> + c",
      "eˣ · cos⁻¹x + c"
    ],
    correct: 1
  },
  {
    question: "∫ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>dx</span><span style='border-top:1px solid; display:block;'>x(x + 2)</span></span> =",
    options: [
      "log|<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>x + 2</span></span>| + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span> log|<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>x + 2</span></span>| + c",
      "log|x| + c",
      "log|x + 2| + c"
    ],
    correct: 1
  },
  {
    question: "∫ <span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>a² - x²</span></span> dx =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>2</span></span><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>a² - x²</span></span> dx",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>a²</span><span style='border-top:1px solid; display:block;'>2</span></span>sin⁻¹<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>a</span></span> + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>2</span></span><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>a² - x²</span></span> + <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>a²</span><span style='border-top:1px solid; display:block;'>2</span></span>sin⁻¹<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>a</span></span> + c",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>2</span></span><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>x² - a²</span></span> - <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>a²</span><span style='border-top:1px solid; display:block;'>2</span></span>sin⁻¹<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>x</span><span style='border-top:1px solid; display:block;'>a</span></span> + c"
    ],
    correct: 2
  },
  {
    question: "∫₋<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span>⁺<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> sin⁷x dx =",
    options: [
      "-1",
      "0",
      "1",
      "2"
    ],
    correct: 1
  },
  {
    question: "∫₀ᵃ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>x</span></span></span><span style='border-top:1px solid; display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>x</span></span> + <span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>a - x</span></span></span></span> dx =",
    options: [
      "a",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>a</span><span style='border-top:1px solid; display:block;'>2</span></span>",
      "2a",
      "3a"
    ],
    correct: 1
  },
  {
    question: "∫₀⁺<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> cos 2x dx =",
    options: [
      "0",
      "1",
      "-1",
      "2"
    ],
    correct: 0
  },
  {
    question: "∫₀⁺<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>6</span></span> cos x · cos 2x dx =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5</span><span style='border-top:1px solid; display:block;'>12</span></span>",
      "-<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5</span><span style='border-top:1px solid; display:block;'>12</span></span>"
    ],
    correct: 2
  },
  {
    question: "∫₋π⁺π tan x dx =",
    options: [
      "-1",
      "0",
      "2",
      "-2"
    ],
    correct: 1
  },
  {
    question: "∫₁⁴ <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>x</span></span></span></span> dx =",
    options: [
      "2",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>4</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span>"
    ],
    correct: 0
  },
  {
    question: "cos⁻¹(-<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span>"
    ],
    correct: 0
  },
  {
    question: "x ∈ [-1, 1], cos⁻¹x =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> - cot⁻¹x",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> - sin⁻¹x",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> - tan⁻¹x",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span> - sec⁻¹x"
    ],
    correct: 1
  },
  {
    question: "x ∈ [-1, 1], sin⁻¹(-x) =",
    options: [
      "-sin⁻¹x",
      "sin⁻¹x",
      "-cos⁻¹x",
      "cos⁻¹x"
    ],
    correct: 0
  },
  {
    question: "cosec⁻¹x = ........ ; x ≥ 1 or ≤ -1",
    options: [
      "sin⁻¹x",
      "sin⁻¹(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>x</span></span>)",
      "cos⁻¹x",
      "cos⁻¹(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>x</span></span>)"
    ],
    correct: 1
  },
  {
    question: "tan[tan⁻¹(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>3</span></span>) + tan⁻¹(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>)] =",
    options: [
      "1",
      "0",
      "2",
      "3"
    ],
    correct: 0
  },
  {
    question: "sin(cot⁻¹x) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>1 + x²</span></span>",
      "x",
      "(1 + x²)<sup style='font-size:0.8em;'>-<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3</span><span style='border-top:1px solid; display:block;'>2</span></span></sup>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'><span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>1 + x²</span></span></span></span>"
    ],
    correct: 3
  },
  {
    question: "cos⁻¹(cos <span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>7π</span><span style='border-top:1px solid; display:block;'>6</span></span>) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>7π</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>5π</span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>6</span></span>"
    ],
    correct: 1
  },
  {
    question: "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>3</span></span> - sin⁻¹(-<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>) =",
    options: [
      "0",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>2</span></span>",
      "π"
    ],
    correct: 2
  },
  {
    question: "tan⁻¹<span style='display:inline-block; vertical-align:middle;'><span style='font-size:1.1em;'>√</span><span style='border-top:1px solid; padding-top:1px; display:inline-block; margin-left:-1px;'>3</span></span> - sec⁻¹(-2) =",
    options: [
      "-<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2π</span><span style='border-top:1px solid; display:block;'>3</span></span>",
      "π"
    ],
    correct: 0
  }
];
