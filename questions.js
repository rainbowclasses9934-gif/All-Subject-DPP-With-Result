// यह उन छात्रों की पंजीकृत आईडी (IDs) की लिस्ट है जो DPP दे सकते हैं
window.validStudentIDs = [
    "Cm2007", "Omi2009", "pk2010", "1012010", "Nc 2009", "1234", 
    "Prity.rc2010.classes", "8710", "1012011", "29/05/2009", "2500138", 
    "2027", "Le beta", "N Roy 99991", "2026 -27", "amanraosahab", 
    "9561", "15 Aug", "Kajal  kumari", "J245", "Royal", 
    "Sharma pritee 8210", "3763", "Ut8406", "Juli123", "@neha roy12345", 
    "1234 Tanya", "Khushbu 1234", "2011", "22/08/....", "2009", 
    "123456", "Ayush raj", "Ankush kumar", "Yadav123", "Ahiran 302", 
    "sak1234", "8210", "848506", "ओलिविया", "Lakshmi @10", "rcprince"
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
