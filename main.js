// JavaScript Variable Practice

// 1. Variable declarations
let myName = "magdalene";
let myAge = 21;
const birthYear = 2005;

// 2. Check data types
console.log("Name data type:", typeof myName);
console.log("Age data type:", typeof myAge);
console.log("Boolean data type:", typeof true);

// 3. Practice let and const
let score = 100;
score = 150;

console.log("My score is:", score);

const PI = 3.14159;
console.log("Value of PI:", PI);

// 4. Exercise: Variable Practice

// My name
let studentName = "magdalene";

// My age
let studentAge = 21;

// Whether I am a student
let isStudent = true;

// My favorite colors
let favoriteColors = ["Blue", "yellow", "Pink"];

// Today's date
let today = new Date();

// 5. Display each variable
console.log("My name is:", studentName);
console.log("My age is:", studentAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);
// Task 7.1: Basic Math

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;

count++;
console.log(count);

count--;
console.log(count);


// Task 7.2: String Operations

let firstName = "Amina";
let lastName = "Otieno";

let fullName = firstName + " " + lastName;

console.log(fullName);

let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

console.log(greeting);
console.log(message);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Amina"));


// Task 7.3: Comparison and Logical Operators

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);


// Task 7.4: If and Else Statements

function getGrade(score) {

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85));


// Switch Statements

function getDayName(dayNumber) {

    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(1));


// For Loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// While Loop

let number = 0;

while (number < 5) {
    console.log(number);
    number++;
}


// For of Loop

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}


// Print numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// Print even numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// FizzBuzz

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Triangle of stars

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
