// Import the MatLangCompiler class (if you are using modules)
// import MatLangCompiler from './MatLangCompiler';

import MatLangCompiler from "./mat-lang/compiler.mjs";

// Initialize the compiler
const compiler = new MatLangCompiler();

// Test case 1: Testing variable declaration (mana -> let)
const code1 = `
mana x = 10;
mana y = 20;
`;
const expected1 = `
let x = 10;
let y = 20;
`;
const result1 = compiler.compile(code1);
console.assert(result1 === expected1, `Test 1 failed: \nExpected: ${expected1}\nGot: ${result1}`);

// Test case 2: Testing function declaration (samasya -> function)
const code2 = `
samasya add(x, y) {
    mana sum = x + y;
    kaam sum;
}
`;
const expected2 = `
function add(x, y) {
    let sum = x + y;
    return sum;
}
`;
const result2 = compiler.compile(code2);
console.assert(result2 === expected2, `Test 2 failed: \nExpected: ${expected2}\nGot: ${result2}`);

// Test case 3: Testing if condition (agar -> if)
const code3 = `
agar x bada 5 {
    dikhai "x is greater than 5";
} nahi {
    dikhai "x is less than or equal to 5";
}
`;
const expected3 = `
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}
`;
const result3 = compiler.compile(code3);
console.assert(result3 === expected3, `Test 3 failed: \nExpected: ${expected3}\nGot: ${result3}`);

// Test case 4: Testing for loop (chalo -> for)
const code4 = `
chalo i se 0 tak 5 tak {
    dikhai i;
}
`;
const expected4 = `
for (let i = 0; i < 5; i++) {
    console.log(i);
}
`;
const result4 = compiler.compile(code4);
console.assert(result4 === expected4, `Test 4 failed: \nExpected: ${expected4}\nGot: ${result4}`);

// Test case 5: Testing while loop (chalo jab tak -> while)
const code5 = `
chalo i jab tak i chhota 5 tak {
    dikhai i;
    mana i = i + 1;
}
`;
const expected5 = `
while (i < 5) {
    console.log(i);
    let i = i + 1;
}
`;
const result5 = compiler.compile(code5);
console.assert(result5 === expected5, `Test 5 failed: \nExpected: ${expected5}\nGot: ${result5}`);

// Test case 6: Testing object literal (mana obj = {key: value} -> let obj = {key: value})
const code6 = `
mana person = {name: "John", age: 30};
`;
const expected6 = `
let person = {name: "John", age: 30};
`;
const result6 = compiler.compile(code6);
console.assert(result6 === expected6, `Test 6 failed: \nExpected: ${expected6}\nGot: ${result6}`);

// Test case 7: Testing math operations (jod, ghata, guna, divide -> +, -, *, /)
const code7 = `
mana sum = jod 5 10;
mana diff = ghata 20 5;
mana prod = guna 3 4;
mana quotient = divide 10 2;
`;
const expected7 = `
let sum = 5 + 10;
let diff = 20 - 5;
let prod = 3 * 4;
let quotient = 10 / 2;
`;
const result7 = compiler.compile(code7);
console.assert(result7 === expected7, `Test 7 failed: \nExpected: ${expected7}\nGot: ${result7}`);

// Test case 8: Testing comparison in conditionals (agar ... bada ... chhota -> if ... > <)
const code8 = `
agar x chhota 10 {
    dikhai "x is less than 10";
} agar x bada 20 {
    dikhai "x is greater than 20";
}
`;
const expected8 = `
if (x < 10) {
    console.log("x is less than 10");
} if (x > 20) {
    console.log("x is greater than 20");
}
`;
const result8 = compiler.compile(code8);
console.assert(result8 === expected8, `Test 8 failed: \nExpected: ${expected8}\nGot: ${result8}`);

// Test case 9: Testing switch statement (switch -> switch)
const code9 = `
switch x {
    case 1:
        dikhai "x is 1";
        break;
    case 2:
        dikhai "x is 2";
        break;
    default:
        dikhai "x is unknown";
}
`;
const expected9 = `
switch(x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    default:
        console.log("x is unknown");
}
`;
const result9 = compiler.compile(code9);
console.assert(result9 === expected9, `Test 9 failed: \nExpected: ${expected9}\nGot: ${result9}`);

// If all tests pass
console.log('All tests passed!');
