import quotes from "./quotes.json" assert { type: "json" };

const quote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];

document.getElementById("quote").innerText = quote.quote;
document.getElementById("author").innerText = `- ${quote.author}`;

const greenButton = document.getElementById("green-btn");
const blueButton = document.getElementById("blue-btn");
const yellowButton = document.getElementById("yellow-btn");
const orangeButton = document.getElementById("orange-btn");

const quoteBox = document.getElementById("quote-box");

greenButton.addEventListener("click", () => {
    console.log("Green button clicked");
    quoteBox.style.backgroundColor = "#006600";    
    quoteBox.style.color = "#bfffbf";
});

blueButton.addEventListener("click", () => {
    console.log("Blue button clicked");
    quoteBox.style.backgroundColor = "#001f7d";
    quoteBox.style.color = "#bfcfff";
});

yellowButton.addEventListener("click", () => {
    console.log("Yellow button clicked");
    quoteBox.style.backgroundColor = "#ffff4d";
    quoteBox.style.color = "#8a7625";
});

orangeButton.addEventListener("click", () => {
    console.log("Orange button clicked");
    quoteBox.style.backgroundColor = "#ffc862";
    quoteBox.style.color = "#5f3a05";
});

const heroBtn = document.getElementById("hero-btn");

heroBtn.addEventListener("click", () => {
    let amount = document.getElementById("hero-input").value;
    let scale = document.getElementById("hero-select").value;
    let result = 100;
    
    if (amount === "") {
        alert("Please enter a number");
        return;
    } else if (scale === "kg-to-pound") {
        result = amount * 2.20462;
    } else if (scale === "pound-to-kg") {
        result = amount / 2.20462;
    }

    document.getElementById("hero-result").innerText = `Result: ${result}`;
}
);

const numberInput = document.getElementById("number-input");

numberInput.addEventListener("input", () => {
    var inputValues = numberInput.value

    const numbersInput = inputValues.split(",");
    let numbers = [];

    for (let i = 0; i < numbersInput.length; i++) {
        const trimmedValue = numbersInput[i].trim();
        if (trimmedValue !== "") {
            numbers.push(Number(trimmedValue));
        }
    }

    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    let reverseArr = numbers.slice().reverse().join(', ');

    document.getElementById("max").innerText = `Max: ${max}`;
    document.getElementById("min").innerText = `Min: ${min}`;
    document.getElementById("sum").innerText = `Sum: ${sum}`;
    document.getElementById("average").innerText = `Average: ${average}`;
    document.getElementById("reverse").innerText = `Reverse: ${reverseArr}`;

});


const clearAll = document.getElementById("clear-all");
const capitalize = document.getElementById("capitalize");
const sort = document.getElementById("sort");
const reverseText = document.getElementById("reverse-text");
const stripBlank = document.getElementById("strip-blank");
const addNumbers = document.getElementById("add-numbers");
const shuffle = document.getElementById("shuffle");

const magicTextarea = document.getElementById("magic-textarea");

clearAll.addEventListener("click", () => {
    magicTextarea.value = "";
});

capitalize.addEventListener("click", () => {
    if (magicTextarea.value === magicTextarea.value.toUpperCase()) {
        magicTextarea.value = magicTextarea.value.toLowerCase();
    } else {
        magicTextarea.value = magicTextarea.value.toUpperCase();
    }
});

var sortedMagicBox = false;

sort.addEventListener("click", () => {
    let text = magicTextarea.value.split("\n");
    if (sortedMagicBox === false) {
        text.sort();
        sortedMagicBox = true;
    } else {
        text.reverse();
        sortedMagicBox = false;
    }
    magicTextarea.value = text.join("\n");
}
);

reverseText.addEventListener("click", () => {
    let text = magicTextarea.value.split("\n");
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].split("").reverse().join("");
    }
    magicTextarea.value = text.join("\n");
});


stripBlank.addEventListener("click", () => {
    let text = magicTextarea.value.split("\n");
    for (let i = 0; i < text.length; i++) {
        if (text[i].trim() != "") {
            text[i] = text[i].trim();
        } else {
            text.splice(i, 1);
            i--;
        }
    }
    magicTextarea.value = text.join("\n");

});

let numberAdded = false;

addNumbers.addEventListener("click", () => {
    if (numberAdded === false) {
        let text = magicTextarea.value.split("\n");
        for (let i = 0; i < text.length; i++) {
            text[i] = `${i + 1}. ${text[i]}`;
        }
        magicTextarea.value = text.join("\n");
        numberAdded = true;
    }
});

shuffle.addEventListener("click", () => {
    let text = magicTextarea.value.split("\n");
    for (let i = text.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [text[i], text[j]] = [text[j], text[i]];
    }
    magicTextarea.value = text.join("\n");
});