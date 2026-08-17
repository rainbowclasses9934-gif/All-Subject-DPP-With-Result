// यह उन छात्रों की पंजीकृत आईडी (IDs) की लिस्ट है जो DPP दे सकते हैं
window.validStudentIDs = [
    "Cm2007",
    "Omi2009",
    "pk2010",
];

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
window.quizDatabase[6].ch_1 = window.quizDatabase[6].ch_1 || {}; 
window.quizDatabase[6].ch_1.dpp_1 = [
  {
    question: "यह प्रश्न उदाहरण के लिए है",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: 0
  },
  {
    question: "यह प्रश्न उदाहरण के लिए है",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: 1
  },
  {
    question: "यह प्रश्न उदाहरण के लिए है",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: 2
  },
  {
    question: "यह प्रश्न उदाहरण के लिए है",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: 3
  },
  {
    question: "यह प्रश्न उदाहरण के लिए है",
    options: ["option 1", "option 2", "option 3", "option 4"],
    correct: 0
  }
];
