// this is the hiragana letters correct data
const kana = [
    { char: "あ", romaji: "a" },
    { char: "い", romaji: "i" },
    { char: "う", romaji: "u" },
    { char: "え", romaji: "e" },
    { char: "お", romaji: "o" },
    { char: "か", romaji: "ka" },
    { char: "き", romaji: "ki" },
    { char: "く", romaji: "ku" },
    { char: "け", romaji: "ke" },
    { char: "こ", romaji: "ko" },
    { char: "さ", romaji: "sa" },
    { char: "し", romaji: "shi" },
    { char: "す", romaji: "su" },
    { char: "せ", romaji: "se" },
    { char: "そ", romaji: "so" },
    { char: "た", romaji: "ta" },
    { char: "ち", romaji: "chi" },
    { char: "つ", romaji: "tsu" },
    { char: "て", romaji: "te" },
    { char: "と", romaji: "to" },
    { char: "な", romaji: "na" },
    { char: "に", romaji: "ni" },
    { char: "ぬ", romaji: "nu" },
    { char: "ね", romaji: "ne" },
    { char: "の", romaji: "no" },
    { char: "は", romaji: "ha" },
    { char: "ひ", romaji: "hi" },
    { char: "ふ", romaji: "fu" },
    { char: "へ", romaji: "he" },
    { char: "ほ", romaji: "ho" },
    { char: "ま", romaji: "ma" },
    { char: "み", romaji: "mi" },
    { char: "む", romaji: "mu" },
    { char: "め", romaji: "me" },
    { char: "も", romaji: "mo" },
    { char: "や", romaji: "ya" },
    { char: "ゆ", romaji: "yu" },
    { char: "よ", romaji: "yo" },
    { char: "ら", romaji: "ra" },
    { char: "り", romaji: "ri" },
    { char: "る", romaji: "ru" },
    { char: "れ", romaji: "re" },
    { char: "ろ", romaji: "ro" },
    { char: "わ", romaji: "wa" },
    { char: "を", romaji: "wo" },
    { char: "ん", romaji: "n" }
];


let correct = 0;
let wrong = 0;
let currentIndex = Math.floor(Math.random() * kana.length);

// these are the Dom elements 
const kanaEl = document.getElementById("kana");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const correctEl = document.getElementById("correct");
const wrongEl = document.getElementById("wrong");
const totalEl = document.getElementById("total");
const form = document.getElementById("quiz-form");
const skipBtn = document.getElementById("skip-btn");

// this block will show you / give you a random character 
function showNext() {
    currentIndex = Math.floor(Math.random() * kana.length);
    kanaEl.textContent = kana[currentIndex].char;
    answerEl.value = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "";
    answerEl.focus();
}

// this block of code gives you the answer 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const userInput = answerEl.value.trim().toLowerCase();
    const rightAnswer = kana[currentIndex].romaji;

    if (userInput === "") return;

    if (userInput === rightAnswer) {
        correct = correct + 1;
        feedbackEl.textContent = "✅ Correct!";
        feedbackEl.className = "correct";
    } else {
        wrong = wrong + 1;
        feedbackEl.textContent = "❌ Wrong! It was: " + rightAnswer;
        feedbackEl.className = "wrong";
    }

    correctEl.textContent = correct;
    wrongEl.textContent = wrong;
    totalEl.textContent = correct + wrong;

    setTimeout(showNext, 1000);
});

// just a skip button
skipBtn.addEventListener("click", function () {
    feedbackEl.textContent = "⏭ Skipped! It was: " + kana[currentIndex].romaji;
    feedbackEl.className = "wrong";
    setTimeout(showNext, 1000);
});

// starts the app
showNext();
