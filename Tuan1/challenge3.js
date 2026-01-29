// Coding Challenge #3
// Gymnastics competition between Dolphins and Koalas

console.log("=== CODING CHALLENGE #3 ===\n");

// ========== DATA 1 ==========
console.log("--- DATA 1 ---");
const dolphinsScore1 = [96, 108, 89];
const koalasScore1 = [88, 91, 110];

// Task 1: Calculate average score
const dolphinsAvg1 = (dolphinsScore1[0] + dolphinsScore1[1] + dolphinsScore1[2]) / 3;
const koalasAvg1 = (koalasScore1[0] + koalasScore1[1] + koalasScore1[2]) / 3;

console.log(`Dolphins average score: ${dolphinsAvg1.toFixed(1)}`);
console.log(`Koalas average score: ${koalasAvg1.toFixed(1)}`);

// Task 2: Compare and determine winner
if (dolphinsAvg1 > koalasAvg1) {
    console.log("🏆 Dolphins win the trophy!");
} else if (koalasAvg1 > dolphinsAvg1) {
    console.log("🏆 Koalas win the trophy!");
} else {
    console.log("🤝 It's a draw!");
}

// ========== DATA BONUS 1 ==========
console.log("\n--- DATA BONUS 1 (Minimum score 100) ---");
const dolphinsScore2 = [97, 112, 101];
const koalasScore2 = [109, 95, 123];

const dolphinsAvg2 = (dolphinsScore2[0] + dolphinsScore2[1] + dolphinsScore2[2]) / 3;
const koalasAvg2 = (koalasScore2[0] + koalasScore2[1] + koalasScore2[2]) / 3;

console.log(`Dolphins average score: ${dolphinsAvg2.toFixed(1)}`);
console.log(`Koalas average score: ${koalasAvg2.toFixed(1)}`);

// Task 3: Winner must have average >= 100 AND higher score
if (dolphinsAvg2 > koalasAvg2 && dolphinsAvg2 >= 100) {
    console.log("🏆 Dolphins win the trophy!");
} else if (koalasAvg2 > dolphinsAvg2 && koalasAvg2 >= 100) {
    console.log("🏆 Koalas win the trophy!");
} else if (dolphinsAvg2 === koalasAvg2 && dolphinsAvg2 >= 100 && koalasAvg2 >= 100) {
    console.log("🤝 It's a draw!");
} else {
    console.log("❌ No team wins the trophy (minimum score not met)");
}

// ========== DATA BONUS 2 ==========
console.log("\n--- DATA BONUS 2 (Draw requires both >= 100) ---");
const dolphinsScore3 = [97, 112, 101];
const koalasScore3 = [109, 95, 106];

const dolphinsAvg3 = (dolphinsScore3[0] + dolphinsScore3[1] + dolphinsScore3[2]) / 3;
const koalasAvg3 = (koalasScore3[0] + koalasScore3[1] + koalasScore3[2]) / 3;

console.log(`Dolphins average score: ${dolphinsAvg3.toFixed(1)}`);
console.log(`Koalas average score: ${koalasAvg3.toFixed(1)}`);

// Task 4: Draw only if both have same score AND both >= 100
if (dolphinsAvg3 > koalasAvg3 && dolphinsAvg3 >= 100) {
    console.log("🏆 Dolphins win the trophy!");
} else if (koalasAvg3 > dolphinsAvg3 && koalasAvg3 >= 100) {
    console.log("🏆 Koalas win the trophy!");
} else if (dolphinsAvg3 === koalasAvg3 && dolphinsAvg3 >= 100 && koalasAvg3 >= 100) {
    console.log("🤝 It's a draw!");
} else {
    console.log("❌ No team wins the trophy");
}
