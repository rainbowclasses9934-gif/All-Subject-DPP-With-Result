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
window.quizDatabase[1].ch_1 = window.quizDatabase[1].ch_1 || {};
window.quizDatabase[1].ch_1.dpp_1 = [
  {
    question: "sin(sin⁻¹<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>) =",
    options: [
      "1",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>√3</span><span style='border-top:1px solid; display:block;'>2</span></span>",
      "0"
    ],
    correct: 1
  },
  {
    question: "sin⁻¹x + sin⁻¹y =",
    options: [
      "sin⁻¹{x√(1 - y²) - y√(1 - x²)}",
      "sin⁻¹{x√(1 - y²) + y√(1 - x²)}",
      "sin⁻¹{x√(1 + y²) + y√(1 + x²)}",
      "sin⁻¹{x√(1 + y²) - y√(1 + x²)}"
    ],
    correct: 1
  },
  {
    question: "x ∈ [-1, 1], sin[2(sin⁻¹x + cos⁻¹x)] =",
    options: [
      "0",
      "1",
      "-1",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>2</span></span>"
    ],
    correct: 0
  },
  {
    question: "x ∈ R, cosec(tan⁻¹x + cot⁻¹x) =",
    options: [
      "0",
      "1",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2</span><span style='border-top:1px solid; display:block;'>√3</span></span>",
      "2"
    ],
    correct: 1
  },
  {
    question: "|x| ≥ 1, tan[<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>2</span><span style='border-top:1px solid; display:block;'>3</span></span>(tan⁻¹x + cot⁻¹x)] =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>√3</span></span>",
      "√3",
      "0",
      "1"
    ],
    correct: 1
  },
  {
    question: "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>d</span><span style='border-top:1px solid; display:block;'>dx</span></span>(eˣ + cos 5x) =",
    options: [
      "eˣ + cos 5x",
      "eˣ + 5 sin 5x",
      "eˣ - 5 sin 5x",
      "eˣ - 5 cos 5x"
    ],
    correct: 2
  },
  {
    question: "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>d</span><span style='border-top:1px solid; display:block;'>dx</span></span>(sin 2x + eˣ - cos x) =",
    options: [
      "cos 2x + eˣ - sin x",
      "2 cos 2x + eˣ + sin x",
      "2 cos 2x + eˣ - sin x",
      "-2 cos 2x + eˣ + sin x"
    ],
    correct: 1
  },
  {
    question: "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>d</span><span style='border-top:1px solid; display:block;'>dx</span></span>(<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>4</span></span> sec 4x) =",
    options: [
      "sec 4x · tan 4x",
      "sec² 4x",
      "tan² 4x",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>16</span></span> sec 4x · tan 4x"
    ],
    correct: 0
  },
  {
    question: "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>d</span><span style='border-top:1px solid; display:block;'>dx</span></span>(logₑ 10x) =",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>10x</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>10</span><span style='border-top:1px solid; display:block;'>x</span></span>",
      "10x",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>1</span><span style='border-top:1px solid; display:block;'>x</span></span>"
    ],
    correct: 3
  },
  {
    question: "तल 3x - 4y + 6z = 11 की मूल बिन्दु से दूरी है :",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3</span><span style='border-top:1px solid; display:block;'>√61</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>11</span><span style='border-top:1px solid; display:block;'>√61</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>6</span><span style='border-top:1px solid; display:block;'>√61</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>6</span><span style='border-top:1px solid; display:block;'>√61</span></span>"
    ],
    correct: 1
  },
  {
    question: "तल x - 8y - 9z = 12 के समांतर एक तल का समीकरण है :",
    options: [
      "x + 8y + 9z = 12",
      "x - 8y - 9z = 2023",
      "8x - y - 9z = 12",
      "x - 9y - 8z = 12"
    ],
    correct: 1
  },
  {
    question: "(3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 4<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>k</span>)² =",
    options: [
      "1",
      "25",
      "7",
      "49"
    ],
    correct: 1
  },
  {
    question: "सदिश 3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 9<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>j</span> की दिशा में इकाई सदिश है",
    options: [
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 9<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>j</span></span><span style='border-top:1px solid; display:block;'>-6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 9<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>j</span></span><span style='border-top:1px solid; display:block;'>6</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 9<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>j</span></span><span style='border-top:1px solid; display:block;'>√90</span></span>",
      "<span style='display:inline-block; vertical-align:middle; text-align:center; font-size:0.9em;'><span style='display:block;'>3<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>i</span> - 9<span style='display:inline-block; text-align:center;'><span style='display:block; font-size:0.6em; line-height:0.4;'>→</span>j</span></span><span style='border-top:1px solid; display:block;'>√70</span></span>"
    ],
    correct: 2
  }
];
