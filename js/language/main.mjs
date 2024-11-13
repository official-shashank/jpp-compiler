import MatLangCompiler from "./mat-lang/compiler.mjs";

const compiler = new MatLangCompiler();

const codeSnippets = [
    "mana x = 10;",
    "samasya add(x, y) { kaam x jod y; }",
    "dikhai(x);",
    "agar (x bada y) { dikhai(x); } nahi { dikhai(y); }",
    "chalo i se 1 tak 5 step 1 { dikhai(i); }",
    "mana result = {key: 'value'};",
    "try { dikhai(result); } catch (error) { dikhai(error); }",
    "chalo item bhar [1, 2, 3] { dikhai(item); }",
    "samasya greet(name = 'Guest') { dikhai('Hello, ' + name); }",
    "mana arr = [1, 2, 3]; arr jodo 4;", 
    "class Car { constructor(name, speed) { this.name = name; this.speed = speed; } accelerate() { dikhai(this.name + ' is accelerating'); } }",
    "mana result = (x > y) ? x : y;",
    "mana name = 'World'; dikhai(`Hello, ${name}!`);",
    "mana arr1 = [1, 2, 3]; mana arr2 = [...arr1, 4, 5];",
    "mana [a, b] = [1, 2, 3];",
    "switch (x) { case 1: dikhai('One'); break; case 2: dikhai('Two'); break; default: dikhai('Other'); }",
    "import { add } from 'math';",
    "async samasya fetchData() { let result = await apiCall(); dikhai(result); }"
];

// Compile and log each test case
codeSnippets.forEach((snippet) => {
    console.log("Mat-Lang Code:\n", snippet);
    console.log("Compiled JavaScript:\n", compiler.compile(snippet));
    console.log("\n---------------------------------\n");
});