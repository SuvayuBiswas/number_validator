const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const form = document.getElementById("validator-form");
const copyBtn = document.getElementById("copy-btn");
const langSelect = document.getElementById("lang-select");
const tooltipText = document.getElementById("tooltip-text");

let currentLang = "en";

// 📦 Language Translations
const translations = {
  en: {
    label: "Indian Phone Number",
    placeholder: "+91-9000012345",
    helper: "Format: +91-XXXXXXXXXX",
    validate: "Validate",
    clear: "Clear",
    copy: "📋 Copy Number",
    valid: "✔ Valid Indian number",
    invalid: "✖ Invalid Indian number",
    empty: "Please enter a phone number.",
    tooltip: "Accepts +91, 91, or 0 prefix. Starts with 6-9 and must be 10 digits."
  },
  hi: {
    label: "भारतीय फ़ोन नंबर",
    placeholder: "+91-९००००१२३४५",
    helper: "प्रारूप: +91-XXXXXXXXXX",
    validate: "सत्यापित करें",
    clear: "साफ़ करें",
    copy: "📋 नंबर कॉपी करें",
    valid: "✔ मान्य भारतीय नंबर",
    invalid: "✖ अमान्य नंबर",
    empty: "कृपया एक नंबर दर्ज करें।",
    tooltip: "+91, 91, या 0 से शुरू, 6-9 और 10 अंकों वाला नंबर आवश्यक।"
  },
  bn: {
    label: "ভারতীয় ফোন নম্বর",
    placeholder: "+91-৯০০০০১২৩৪৫",
    helper: "ফরম্যাট: +91-XXXXXXXXXX",
    validate: "যাচাই করুন",
    clear: "পরিষ্কার",
    copy: "📋 নম্বর কপি করুন",
    valid: "✔ বৈধ ভারতীয় নম্বর",
    invalid: "✖ অবৈধ ভারতীয় নম্বর",
    empty: "একটি ফোন নম্বর লিখুন।",
    tooltip: "+91, 91 বা 0 প্রিফিক্স গ্রহণযোগ্য। ৬-৯ দিয়ে শুরু এবং ১০ ডিজিট হতে হবে।"
  },
  ta: {
    label: "இந்திய தொலைபேசி எண்",
    placeholder: "+91-9000012345",
    helper: "வடிவம்: +91-XXXXXXXXXX",
    validate: "சரிபார்க்கவும்",
    clear: "அழிக்கவும்",
    copy: "📋 நகலெடுக்கவும்",
    valid: "✔ செல்லுபடியாகும் இந்திய எண்",
    invalid: "✖ செல்லாத இந்திய எண்",
    empty: "தொலைபேசி எண்ணை உள்ளிடவும்.",
    tooltip: "+91, 91, அல்லது 0 முன்பதிவை ஏற்கிறது. 6-9 முதல் ஆரம்பித்து 10 இலக்கங்கள்."
  }
};

langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  setLanguage(currentLang);
});

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("label-phone").childNodes[0].textContent = t.label + " ";
  userInput.placeholder = t.placeholder;
  document.getElementById("helper-text").textContent = t.helper;
  checkBtn.textContent = t.validate;
  clearBtn.textContent = t.clear;
  copyBtn.textContent = t.copy;
  tooltipText.textContent = t.tooltip;
}

// 📞 Validation logic
const indianPhoneRegex = /^(?:\+91[\s-]?|91[\s-]?|0)?[6-9]\d{9}$/;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const phone = userInput.value.trim();
  resultsDiv.className = "";

  if (phone === "") {
    resultsDiv.textContent = translations[currentLang].empty;
    resultsDiv.classList.add("invalid");
  } else if (indianPhoneRegex.test(phone)) {
    resultsDiv.textContent = translations[currentLang].valid;
    resultsDiv.classList.add("valid");
  } else {
    resultsDiv.textContent = translations[currentLang].invalid;
    resultsDiv.classList.add("invalid");
  }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
  resultsDiv.className = "";
  userInput.focus();
});

copyBtn.addEventListener("click", () => {
  if (userInput.value.trim()) {
    navigator.clipboard.writeText(userInput.value);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyBtn.textContent = translations[currentLang].copy;
    }, 1500);
  }
});
