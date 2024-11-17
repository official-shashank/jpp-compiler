# MatLang  

## Introduction  
**MatLang** is a high-level programming language designed to make coding accessible for beginners and non-technical users. By blending Hindi and English keywords, it simplifies the learning curve while retaining the power to compile into JavaScript. MatLang introduces intuitive constructs for variables, loops, functions, and conditionals, enabling users to grasp programming concepts quickly and effectively.  

This language aims to bridge the gap between traditional programming syntax and natural language, allowing users to focus on logic and creativity rather than syntax intricacies.

---

## Project Type  
Frontend | Backend | Fullstack  

---

## Deployed App  
Compiler: [https://matlang-compiler.whatever](https://matlang-compiler.whatever)  

---

## Directory Structure  
```
MatLang/
├─ compiler/

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
├─ tests/visualizer
│  ├─ Mat_Lang_script.js
│  ├─ Javascript_parser.js
│  ├─ visualizer.js
│  ├─ ...
```

---

## Features  

1. **Hindi-English Syntax**  
   - Use natural keywords like `mana` (declare), `jod` (add), and `dikhai` (print).  

2. **Variable Declarations**  
   - Simplified syntax using `mana`.  

3. **Control Flow**  
   - Intuitive constructs for `if-else`, `switch-case`, `for loops`, and `while loops`.  

4. **Functions**  
   - Define reusable blocks of code using the `samasya` keyword.  

5. **Objects and Arrays**  
   - Easy declaration and manipulation of data structures.  

6. **Compilation to JavaScript**  
   - All MatLang code is transpiled into JavaScript, ensuring compatibility with modern browsers and environments.  

7. **Error Handling**  
   - Custom error detection and feedback using `agar` (if) statements.  

8. **Input/Output**  
   - User-friendly console output with `dikhai`.  

---

## Design Decisions or Assumptions  

- **User-Friendly Keywords:** The mix of Hindi and English makes the language approachable for users familiar with both languages.  
- **Simplified Syntax:** Designed for beginners to quickly understand and write code.  
- **JavaScript Compatibility:** Ensures the generated code can run seamlessly in any environment supporting JavaScript.  

---

## Installation & Getting Started  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/matlang.git
   cd matlang
   ```  

2. Compile a MatLang file:  
   ```bash
   node compiler/parser.js examples/basics.mat
   ```  

---

## Usage  


## Quick Start

To begin using MatLang, include its production-ready core library and utilities via MatLang's Content Delivery Network (CDN). This eliminates the need for complex build steps, allowing you to quickly prototype and develop.

### Steps to Get Started:

1. **Create an `index.html` File**
   - This file will serve as the main entry point for your application.
   - Add the following boilerplate HTML code to it:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>MatLang Compiler</title>
   </head>
   <body>
       <h1>This is CDN usage for MatLang</h1>
   </body>
   </html>
   ```

2. **Add Your MatLang Script**
   - Create a new file named `script.mat` in the same directory. This file will contain your custom MatLang code. Example:

     ```matlang
     // Example MatLang Code
     print("Hello, MatLang!");
     ```

   - Link your custom MatLang file to the `index.html` file. Add the following `<script>` tags to the end of the `<body>` section:

     ```html
     <!-- Include user's custom MatLang script -->
     <script src="script.mat" type="text/matlang"></script>

     <!-- Include the MatLang Compiler from CDN -->
     <script src="https://cdn.matlang.com/compiler.js"></script>
     ```

3. **Add the MatLang Compilation Script**
   - Dynamically fetch and compile your MatLang code by adding the following script after including the MatLang Compiler:

     ```javascript
     <script>
         (async () => {
             try {
                 const response = await fetch('script.mat');
                 const matLangCode = await response.text();
                 const generatedCode = MatLangCompiler.compile(matLangCode);

                 // Output the compiled code
                 console.log("Generated Code:", generatedCode);
             } catch (error) {
                 console.error("Error occurred:", error);
             }
         })();
     </script>
     ```

4. **Run Your Project on a Live Server**
   - Use a live server to test your project. You can use the **Live Server Extension** in your code editor or tools like `http-server` or `python -m http.server`.
   - Open your browser and navigate to the project URL. If everything is set up correctly:
     - You'll see the heading **"This is CDN usage for MatLang"** on the page.
     - The compiled MatLang code will appear in the browser console.



### Writing and Compiling Code  
1. Write your MatLang code in a `.mat` file.  
2. Compile it using the MatLang parser to generate JavaScript output.  

#### Example Code (MatLang):  
```matlang
mana a = 5;
mana b = 10;
mana sum = jod a b;
dikhai "The sum is " + sum;
```  

#### Compiled JavaScript:  
```javascript
let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum is " + sum);
```  

---

## Credentials  
No user authentication is required for this compiler.  

---

## APIs Used  
This project does not use any external APIs. All compilation and interpretation logic is implemented internally.  

---

## Technology Stack  

- **Frontend:**  
  - **HTML**, **CSS**, **JavaScript**: Core technologies for the user interface.  
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development.  
  - **FontAwesome**: Icon library used for enhancing visual design.  
  - **Google Fonts**: Custom fonts used for a more polished UI experience.  

- **Compiler Components:**  
  - **Tokenizer**: Breaks code into smaller units (tokens).  
  - **LEXER**: Analyzes tokens for syntax rules.  
  - **Parser**: Parses tokens into an abstract syntax tree (AST).  
  - **Generator**: Converts AST to JavaScript.  

- **Generated JS:** JavaScript output from the MatLang compiler that can be run in any modern JavaScript environment.  

- **Testing Framework:** **Jest**: Ensures that the compiler's features and output are accurate and robust.  

- **CDN (Content Delivery Network):** Used for fast, reliable access to resources like **FontAwesome** and **Google Fonts**.  
---

## Full Example Code  

## Mat-lang example for CDN code:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MatLang Compiler</title>
</head>
<body>
    <h1>This is CDN usage for MatLang</h1>

    <!-- Include user's custom script file -->
    <script src="custom-script.mat" type="text/matlang"></script>

    <script src="https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/language/mat-lang/compiler.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", async () => {
            try {
                // Fetch the custom MatLang script dynamically
                const scriptElement = document.querySelector('script[type="text/matlang"]');
                const scriptSrc = scriptElement?.src;

                if (scriptSrc && typeof MatLangCompiler !== "undefined") {
                    // Fetch the content of the custom script file
                    const response = await fetch(scriptSrc);
                    if (!response.ok) throw new Error("Failed to load the MatLang script.");
                    
                    const code = await response.text();
                    let  compiler;
                    let generatedCode;
                    // Compile the code using MatLangCompiler
                   try{
                    compiler = new MatLangCompiler();
                    generatedCode = compiler.compile(code);
                   }catch(err){
                    console.log(err);
                   }

                    // Output the compiled code
                    console.log("Generated Code:", generatedCode);
                } else {
                    console.error("Custom MatLang script or MatLangCompiler is not defined.");
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    </script>
</body>
</html>

### MatLang Example:  
```matlang
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
```  

### Compiled JavaScript:  
```javascript
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
```  

---

## Video Walkthrough  

- **MatLang Overview and Features:** [Link to video]  
- **Compilation Process Demo:** [Link to video]

CDN Links
Language Files
MatLang Compiler: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/language/mat-lang/compiler.js
Code Generator: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/Codegenerator.js
Lexer: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/lexer.js
Parser: https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/parser.js