/*
    Hi.
    The purpose is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    In this problem set, we focus specifically on lists, loops (for), and functions.
    I.e. use litst and loops, dont use "fancy" alternatives.

    DO NOT change the code provided unless the task specifically says you should.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print out all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
  let person = people[index];
  console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    You are given a list (Array) named "tall."
    Write the code that will ensure the variable "sum" contains the sum of all the numbers in the list (i.e., tal1 + tal2 + tal3 + tal4 + ... and so on).
*/
console.log("Task: A");

const tall = [1, 2, 3, 4, 5];

let sumOfTall = 0;

for (let index = 0; index < tall.length; index++) {
  sumOfTall += tall[index];
}

console.log(sumOfTall);

/* -----------------------------------------------------------------------------
    Task: B
    Below is a function "summer," which is incomplete; it should return the sum of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: B");

function summer(liste) {
  let sumOfTall = 0;

  for (let index = 0; index < liste.length; index++) {
    sumOfTall += liste[index];
  }

  return sumOfTall;
}

const sum = summer(tall);

if (sum === 15) {
  console.log("🎉 Task B is most likely correct");
} else {
  console.log("😱 Task B has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
    Task: C
    You are given a list (Array) named "andreTall."
    Write the code that will ensure the variable "differans" contains the difference of all the numbers in the list (i.e., tal1 - tal2 - tal3 - tal4 - ... and so on).
*/
console.log("Task: C");

const andreTall = [6, 7, 8, 9];

let tallDifference = andreTall[0];

for (let index = 1; index < andreTall.length; index++) {
  tallDifference -= andreTall[index];
}

console.log(tallDifference);

/* -----------------------------------------------------------------------------
    Task: D
    Below is a function "differansier," which is incomplete; it should return the difference of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: D");

function differansier(liste) {
  let tallDifference = liste[0];

  for (let index = 1; index < liste.length; index++) {
    tallDifference -= liste[index];
  }

  return tallDifference;
}

const diff = differansier(andreTall);

if (diff === -18) {
  console.log("🎉 Task D is most likely correct");
} else {
  console.log("😱 Task D has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
    Task: E
    Create a function named "multipliser." This function should take (as a parameter) a list of numbers.
    The function should return the product of the numbers (i.e., tal1 * tal2 * tal3 * ... and so on).
*/

const moreTall = [10, 11, 12, 13];

function multipliser(liste) {
  let tallMultipliser = 1;

  for (let index = 0; index < liste.length; index++) {
    tallMultipliser *= liste[index];
  }

  return tallMultipliser;
}

const multi = multipliser(moreTall);

if (multi === 17160) {
  console.log("🎉 Task E is most likely correct");
} else {
  console.log("😱 Task E has some issues, but you can fix it 👍");
}