// Coding Challenge #1 - Part 3
// Task 3: Create a Boolean variable 'markHigherBMI'

// Test Data 1
console.log("=== TEST DATA 1 ===");
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;

// Create Boolean variable
const markHigherBMI = markBMI1 > johnBMI1;

console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Does Mark have a higher BMI than John?", markHigherBMI);
