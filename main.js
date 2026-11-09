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
javascript
// Task 8.1: Arrays

// Exercise 1: Creating arrays

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements

console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

// Modifying arrays

fruits.push("grape");
console.log("After adding grape:", fruits);

fruits.unshift("mango");
console.log("After adding mango:", fruits);

fruits.pop();
console.log("After removing last fruit:", fruits);

fruits.shift();
console.log("After removing first fruit:", fruits);


// Exercise 2: Array methods

const numberList = [1, 2, 3, 4, 5];

// forEach

numberList.forEach(num => {
    console.log("Doubled:", num * 2);
});

// map

const doubledNumbers = numberList.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// filter

const evenNumbers = numberList.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find

const firstEven = numberList.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// reduce

const totalSum = numberList.reduce((total, num) => total + num, 0);
console.log("Total sum:", totalSum);

// includes

console.log("Includes 3:", numberList.includes(3));


// Build: Using array methods

const testNumbers = [5, 12, -3, 20, -8, 7];

// Double all numbers

const doubleResults = testNumbers.map(num => num * 2);
console.log("Doubled:", doubleResults);

// Filter out negative numbers

const positiveResults = testNumbers.filter(num => num >= 0);
console.log("Positive numbers:", positiveResults);

// Find first number greater than 10

const firstGreater = testNumbers.find(num => num > 10);
console.log("First number greater than 10:", firstGreater);

// Calculate product of all numbers

const productResult = testNumbers.reduce((total, num) => total * num, 1);
console.log("Product:", productResult);
Task 8.2 – Objects
Writing



javascript
// Task 8.2: Objects

// Exercise 1: Creating objects

const person = {
    firstName: "Amina",
    lastName: "Otieno",
    age: 21,
    isStudent: true,
    hobbies: ["reading", "coding", "football"],

    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties

console.log("First name:", person.firstName);
console.log("Last name:", person["lastName"]);
console.log("City:", person.address.city);

// Modifying properties

person.age = 22;
console.log("Updated age:", person.age);

// Adding a property

person.phone = "0712345678";
console.log("Phone:", person.phone);

// Removing a property

delete person.isStudent;
console.log("Updated person:", person);


// Exercise 2: Object methods

const calculator = {

    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(10, 4));
console.log("Multiplication:", calculator.multiply(5, 2));


// Exercise 3: Object iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys

console.log("Keys:", Object.keys(scores));

// Get values

console.log("Values:", Object.values(scores));

// Get entries

console.log("Entries:", Object.entries(scores));

// Loop through object

for (const [subject, score] of Object.entries(scores)) {
    console.log(subject + ": " + score);
}
Task 8.3 – Array of Objects
Writing



javascript
// Task 8.3: Array of Objects

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names

const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);

// 2. Get students with grade above 80

const highAchievers = students.filter(student => student.grade > 80);
console.log("High achievers:", highAchievers);

// 3. Find Charlie

const charlieStudent = students.find(student => student.name === "Charlie");
console.log("Charlie:", charlieStudent);

// 4. Calculate average grade

const totalGrades = students.reduce((total, student) => {
    return total + student.grade;
}, 0);

const averageGrade = totalGrades / students.length;
console.log("Average grade:", averageGrade);

// 5. Get CS majors only

const computerStudents = students.filter(student => student.major === "CS");
console.log("CS students:", computerStudents);

// 6. Sort by grade (highest first)

const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by grade:", sortedStudents);

// 7. Check if any student has grade above 90

const hasTopStudent = students.some(student => student.grade > 90);
console.log("Has top student:", hasTopStudent);

// 8. Check if all students are passing

const allStudentsPassing = students.every(student => student.grade >= 60);
console.log("All students passing:", allStudentsPassing);
Task 8.4 – JSON (Data as Text)
Writing



javascript
// Task 8.4: JSON

// Exercise 1: Converting JSON text into an object

const jsonData = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

const studentData = JSON.parse(jsonData);

console.log("Student name:", studentData.name);
console.log("Math grade:", studentData.grades.math);

// Convert object into JSON text

const convertedJson = JSON.stringify(studentData, null, 2);

console.log("Converted JSON:", convertedJson);
console.log("Data type:", typeof convertedJson);


// Exercise 2: Working with posts

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse JSON into an array

const posts = JSON.parse(postsJson);

console.log("All posts:", posts);

// 2. Keep only published posts

const publishedPosts = posts.filter(post => post.published);

console.log("Published posts:", publishedPosts);

// 3. Sort by likes, highest first

const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);

console.log("Sorted posts:", sortedPosts);

// 4. Map posts to strings

const postMessages = sortedPosts.map(post => {
    return `${post.title} (${post.likes} likes)`;
});

console.log("Post messages:", postMessages);

// 5. Convert the filtered array back to JSON text

const finalPostsJson = JSON.stringify(sortedPosts, null, 2);

console.log("Final JSON:", finalPostsJson);
