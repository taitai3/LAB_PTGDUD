// Coding Challenge #1 - Part 2
// Task 2: Calculate both their BMIs using the formula

// Test Data 1
console.log("=== TEST DATA 1 ===");
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

// Calculate BMI using formula: BMI = mass / height ** 2
const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;

console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);

// Alternative calculation using (height * height)
const markBMI1_alt = markMass1 / (markHeight1 * markHeight1);
const johnBMI1_alt = johnMass1 / (johnHeight1 * johnHeight1);

console.log("\nAlternative calculation:");
console.log("Mark's BMI:", markBMI1_alt);
console.log("John's BMI:", johnBMI1_alt);
