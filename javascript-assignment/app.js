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
    quoteBox.style.color = "#b39a36";
});

orangeButton.addEventListener("click", () => {
    console.log("Orange button clicked");
    quoteBox.style.backgroundColor = "#ff9400";
    quoteBox.style.color = "#b36800";
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

numberInput.addEventListener("keypress", () => {
    var inputValues = numberInput.value

    const numbersInput = inputValues.split(",");
    let numbers = [];

    for (let i = 0; i < numbersInput.length; i++) {
        if (numbersInput[i] != "" || numbersInput[i] != " " || isNaN(numbersInput[i]) === false) {
        numbers[i] = Number(numbersInput[i]);
    }}

    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    let reverseArr = numbers.reverse();

    document.getElementById("max").innerText = `Max: ${max}`;
    document.getElementById("min").innerText = `Min: ${min}`;
    document.getElementById("sum").innerText = `Sum: ${sum}`;
    document.getElementById("average").innerText = `Average: ${average}`;
    document.getElementById("reverse").innerText = `Reverse: ${reverseArr}`;
});

// <section id="magic-box-section">
//       <!-- Magic!:
// The HTML structure is given below, we must add JavaScript code to make the UI respond when
// the user clicks the buttons.
// Add the following behavior to the buttons:
// Clear All: Deletes all text from the text area.
// Capitalize: Converts the text to upper/lower case. Button will work as toggle.
// Sort: Rearranges the lines into sorted alphabetical order.
// Reverse: Reverses the order of the text in each line.
// Strip Blank: Removes any empty lines from the text area. Also remove empty space at beginning
// or end of any line.
// Add Numbers: Places a number in front of each line, such as "1. " (Ignore previous numbers in
// front of them.)
// Shuffle: Rearranges the lines into a random order. Js do not have this built in, use
// Math.random().
// Hints: Use getElementById to get String, which has a split method to break it into smaller string
// array. Then apply various native methods of array to get most of the things done. -->
//       <div id="magic-box">
//         <h1>Magic Box</h1>
//         <textarea id="magic-textarea" placeholder="Enter text here"></textarea>
//         <div id="magic-buttons">
//           <button id="clear-all">Clear All</button>
//           <button id="capitalize">Capitalize</button>
//           <button id="sort">Sort</button>
//           <button id="reverse-text">Reverse</button>
//           <button id="strip-blank">Strip Blank</button>
//           <button id="add-numbers">Add Numbers</button>
//           <button id="shuffle">Shuffle</button>
//         </div>
//       </div>
//     </section>

//     <script type="module" src="app.js"></script>
//   </body>
// </html>


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