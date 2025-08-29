// =======================
// Part 1: JavaScript Basics
// =======================

// Variables & Data Types
let userAge = 18;
const siteName = "JavaScript Basics Project";

// Conditional Statement Example
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Capturing user input & displaying output (via DOM)
document.getElementById('greetBtn').addEventListener('click', function () {
    let name = document.getElementById('username').value;
    if (name) {
        document.getElementById('message').textContent = `Hello, ${name}! Welcome to ${siteName}.`;
    } else {
        document.getElementById('message').textContent = "Please enter your name.";
    }
});

// =======================
// Part 2: Functions
// =======================

// Function 1: Calculate Total Price
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total cost: $" + calculateTotal(10, 3));

// Function 2: Format String
function formatString(str) {
    return str.trim().toUpperCase();
}
console.log(formatString("   javascript is fun   "));

// =======================
// Part 3: Loops
// =======================

// Loop 1: for loop to display numbers
const loopList = document.getElementById('loopList');
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    li.textContent = `Number ${i}`;
    loopList.appendChild(li);
}

// Loop 2: while loop countdown in console
let count = 5;
while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}

// =======================
// Part 4: DOM Manipulation
// =======================

// DOM Interaction 1: Change text dynamically on input (done above in greet button)
// DOM Interaction 2: Toggle text visibility
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', function () {
    if (toggleText.style.display === "none") {
        toggleText.style.display = "block";
    } else {
        toggleText.style.display = "none";
    }
});

// DOM Interaction 3: Change color on click
document.getElementById('title').addEventListener('click', function () {
    this.style.color = this.style.color === "blue" ? "black" : "blue";
});
