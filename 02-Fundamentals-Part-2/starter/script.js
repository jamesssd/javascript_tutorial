// Challenge
/* Write your code below. Good luck! 🙂 */
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Part 2 Challenge
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */
// console.log("Mark's BMI (" + BMIMark.toFixed(2)  +") is higher than John's (" + BMIJohn.toFixed(2) +")!")


// String Literals
// let firstName = 'James';
// let job = 'Developer';
// let birthYear = 1994;
// const year = 2024;

// const james = "I'm  " + firstName + ", a " + (year-birthYear) + " year old " + job;
// console.log(james);

// const jamesNew = ` I'm ${firstName}! I'm a ${year - birthYear} year old ${job}`;
// console.log(jamesNew);