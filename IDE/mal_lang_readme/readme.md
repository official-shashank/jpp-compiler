# MatLang  

## Introduction  
*MatLang* is a high-level programming language designed to make coding accessible for beginners and non-technical users. By blending Hindi and English keywords, it simplifies the learning curve while retaining the power to compile into JavaScript. MatLang introduces intuitive constructs for variables, loops, functions, and conditionals, enabling users to grasp programming concepts quickly and effectively.  

This language aims to bridge the gap between traditional programming syntax and natural language, allowing users to focus on logic and creativity rather than syntax intricacies.

---

## Project Type  
Frontend | Backend | Fullstack  

---

## Deployed App  
Compiler: [https://matlang-compiler.whatever](https://matlang-compiler.whatever)  

---

## Directory Structure  

MatLang/
├─ compiler/
│  ├─ parser.js
│  ├─ tokenizer.js
│  ├─ interpreter.js
│  ├─ ...
├─ examples/
│  ├─ basics.mat
│  ├─ loops.mat
│  ├─ functions.mat
│  ├─ ...
├─ docs/
│  ├─ syntax-guide.md
│  ├─ examples.md
│  ├─ ...
├─ tests/
│  ├─ test-parser.js
│  ├─ test-tokenizer.js
│  ├─ ...


---

## Features  

1. *Hindi-English Syntax*  
   - Use natural keywords like mana (declare), jod (add), and dikhai (print).  

2. *Variable Declarations*  
   - Simplified syntax using mana.  

3. *Control Flow*  
   - Intuitive constructs for if-else, switch-case, for loops, and while loops.  

4. *Functions*  
   - Define reusable blocks of code using the samasya keyword.  

5. *Objects and Arrays*  
   - Easy declaration and manipulation of data structures.  

6. *Compilation to JavaScript*  
   - All MatLang code is transpiled into JavaScript, ensuring compatibility with modern browsers and environments.  

7. *Error Handling*  
   - Custom error detection and feedback using agar (if) statements.  

8. *Input/Output*  
   - User-friendly console output with dikhai.  

---

## Design Decisions or Assumptions  

- *User-Friendly Keywords:* The mix of Hindi and English makes the language approachable for users familiar with both languages.  
- *Simplified Syntax:* Designed for beginners to quickly understand and write code.  
- *JavaScript Compatibility:* Ensures the generated code can run seamlessly in any environment supporting JavaScript.  

---

## Installation & Getting Started  

1. Clone the repository:  
   bash
   git clone https://github.com/your-repo/matlang.git
   cd matlang
     

2. Install dependencies:  
   bash
   npm install
     

3. Run the compiler:  
   bash
   npm start
     

4. Compile a MatLang file:  
   bash
   node compiler/parser.js examples/basics.mat
     

---

## Usage  

### Writing and Compiling Code  
1. Write your MatLang code in a .mat file.  
2. Compile it using the MatLang parser to generate JavaScript output.  

#### Example Code (MatLang):  
matlang
mana a = 5;
mana b = 10;
mana sum = jod a b;
dikhai "The sum is " + sum;
  

#### Compiled JavaScript:  
javascript
let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum is " + sum);
  

---

## Credentials  
No user authentication is required for this compiler.  

---

## APIs Used  
This project does not use any external APIs. All compilation and interpretation logic is implemented internally.  

---

## Technology Stack  

- *Frontend:* N/A (CLI-based application)  
- *Backend:* Node.js  
- *Compiler Components:*  
  - Tokenizer  
  - Parser  
  - Interpreter  
- *Testing Framework:* Jest  

---

## Full Example Code  

### MatLang Example:  
matlang
mana x = 10;
mana y = 20;

agar x bada y {
    dikhai "x is greater than y";
} nahi {
    dikhai "x is less than or equal to y";
}

samasya add(a, b) {
    mana sum = jod a b;
    kaam sum;
}

mana result = add(x, y);
dikhai "The sum is " + result;
  

### Compiled JavaScript:  
javascript
let x = 10;
let y = 20;

if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is less than or equal to y");
}

function add(a, b) {
    let sum = a + b;
    return sum;
}

let result = add(x, y);
console.log("The sum is " + result);
  

---

## Video Walkthrough  

- *MatLang Overview and Features:* [Link to video]  
- *Compilation Process Demo:* [Link to video]

CDN Links
Language Files
MatLang Compiler: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/language/mat-lang/compiler.js
Code Generator: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/Codegenerator.js
Lexer: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/lexer.js
Parser: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/parser.js