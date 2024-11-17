# Python to JavaScript Compiler

This project provides a Python-to-JavaScript compiler that allows users to write Python code and convert it into equivalent JavaScript code. The goal of this project is to simplify learning syntax for multiple programming languages by enabling developers to focus on Python and then automatically translate their code to JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How It Works](#how-it-works)
- [Usage](#usage)

- [Example Workflow](#example-workflow)
- [API Reference](#api-reference)
- [CDN Links](#cdn-links)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Learning multiple programming languages can be challenging due to varying syntax. This project simplifies the process by allowing users to write code in Python and convert it to JavaScript. By leveraging a **lexer**, **parser**, and **code generator**, this tool provides a robust solution for syntax conversion.

---

## Features

- Tokenizes Python code using a lexer.
- Parses tokens into an Abstract Syntax Tree (AST) with a parser.
- Converts the AST into equivalent JavaScript code using a code generator.
- Supports variable assignments, arithmetic operations, and basic I/O.

---

## How It Works

1. **Lexer**: Breaks Python code into a series of tokens.
2. **Parser**: Analyzes the tokenized input to produce an Abstract Syntax Tree (AST).
3. **Code Generator**: Converts the AST into JavaScript code.

---

## Usage

```bash
// Tokenization
const lexer = new PythonLexer();
const tokens = lexer.tokenize(code);
console.log('Tokens:', tokens);

// Parsing
const parser = new PythonParser(tokens);
const ast = parser.parse();
console.log('AST:', JSON.stringify(ast, null, 2));

// Code Generation
const codeGenerator = new PythonToJsCompiler();
const jsCode = codeGenerator.generate(ast);
console.log('Generated JavaScript Code:\n', jsCode);
```

### Prerequisites

- Node.js installed on your system.
- Basic understanding of Python and JavaScript.

### Steps to Use

### Method 1 :-

1. Clone the repository or download the files.
2. Import the modules (`lexer.mjs`, `parser.mjs`, and `codeGenerator.mjs`) into your project.
3. Add your Python code as a string input.
4. Run the steps to tokenize, parse, and generate JavaScript code.


### Method 2 :- 

1. Use CDN Links 

```bash
https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/lexer.js

```

```bash
https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/parser.js

```

```bash
https://cdn.jsdelivr.net/gh/official-shashank/jpp-compiler@main/js/compilers/python/Codegenerator.js
```
---



## Badges

Add badges from somewhere like: [Repository](https://github.com/official-shashank/jpp-compiler)



