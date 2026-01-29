

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;


const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

console.log("Step 1: Variables stored");
console.log("Mark: " + markMass + " kg, " + markHeight + " m");
console.log("John: " + johnMass + " kg, " + johnHeight + " m");

// Task 2: Calculate both their BMIs
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log("\nStep 2: BMI calculated");
console.log("Mark's BMI:", markBMI.toFixed(2));
console.log("John's BMI:", johnBMI.toFixed(2));

// Task 3: Create Boolean variable
const markHigherBMI = markBMI > johnBMI;

console.log("\nStep 3: Comparison result");
console.log("Mark has higher BMI than John:", markHigherBMI);
