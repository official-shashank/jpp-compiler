# Complete Documentation for MatLang Language  

MatLang is a high-level language designed to be intuitive and simple, making it accessible to people who may not be familiar with traditional programming languages. This language uses a hybrid of Hindi and English, making it more relatable for non-technical users while still being powerful enough to compile into JavaScript. Below is a comprehensive guide covering all aspects of MatLang with code examples and their JavaScript equivalents.  

## Table of Contents  
1. [Introduction](#introduction)  
2. [Variable Declarations](#variable-declarations)  
3. [Data Types](#data-types)  
4. [Basic Arithmetic Operations](#basic-arithmetic-operations)  
5. [Control Flow Statements](#control-flow-statements)  
   - [If-Else](#if-else)  
   - [Switch-Case](#switch-case)  
6. [Loops](#loops)  
   - [For Loop](#for-loop)  
   - [While Loop](#while-loop)  
7. [Functions](#functions)  
8. [Objects](#objects)  
9. [Arrays](#arrays)  
10. [Error Handling](#error-handling)  
11. [Input/Output](#inputoutput)  
12. [Compilation Process](#compilation-process)  
13. [Full Example Code](#full-example-code)  



## 1. Introduction
MatLang is designed to be beginner-friendly while maintaining the expressive power of JavaScript. It introduces programming concepts with more natural language constructs that are easy to understand and use. The language features such as loops, conditionals, functions, and objects are mapped to simple words in Hindi and English.

## 2. Variable Declarations
In MatLang, variables are declared using the keyword mana which is the Hindi word for "variable" or "assign". The syntax is simple and intuitive.

### Syntax:
matlang
Copy code
mana <variable_name> = <value>;
Example 1:
matlang
Copy code
mana age = 25;
mana name = "John";
Output (compiled JavaScript):
javascript
Copy code
let age = 25;
let name = "John";
## 3. Data Types
MatLang supports several basic data types, including:

Integer: Numbers (positive/negative)
Float: Decimal numbers
String: Text enclosed in double quotes
Boolean: True/False
Null: Empty or uninitialized value
Example 2:
matlang
Copy code
mana a = 10;       // Integer
mana b = 3.14;     // Float
mana c = "Hello";  // String
mana isTrue = sach; // Boolean (true)
mana nothing = kuchNahi; // Null
Output (compiled JavaScript):
javascript
Copy code
let a = 10;
let b = 3.14;
let c = "Hello";
let isTrue = true;
let nothing = null;
## 4. Basic Arithmetic Operations
MatLang supports standard arithmetic operations like addition, subtraction, multiplication, and division, using Hindi terms for these operations.

Addition: jod
Subtraction: ghata
Multiplication: guna
Division: divide
Example 3:
matlang
Copy code
mana sum = jod 5 3;    // 5 + 3
mana diff = ghata 8 2;  // 8 - 2
mana prod = guna 4 2;   // 4 * 2
mana quotient = divide 10 2; // 10 / 2
Output (compiled JavaScript):
javascript
Copy code
let sum = 5 + 3;
let diff = 8 - 2;
let prod = 4 * 2;
let quotient = 10 / 2;
# 5. Control Flow Statements
## 5.1 If-Else
The agar keyword represents if, and nahi represents else. The comparison operators in MatLang include:

Bada (greater than)
Chhota (less than)
Barabar (equal to)
Syntax:
matlang
Copy code
agar <condition> {
    <statements>;
} nahi {
    <statements>;
}
Example 4:
matlang
Copy code
mana x = 10;
agar x bada 5 {
    dikhai "x is greater than 5";
} nahi {
    dikhai "x is less than or equal to 5";
}
Output (compiled JavaScript):
javascript
Copy code
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}
## 5.2 Switch-Case
MatLang provides switch for branching based on the value of a variable. case represents the value being compared, and default is used for any unmatched case.

Syntax:
matlang
Copy code
switch <variable> {
    case <value>:
        <statements>;
        break;
    default:
        <statements>;
}
Example 5:
matlang
Copy code
mana day = 2;
switch day {
    case 1:
        dikhai "Monday";
        break;
    case 2:
        dikhai "Tuesday";
        break;
    default:
        dikhai "Weekend";
}
Output (compiled JavaScript):
javascript
Copy code
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Weekend");
}
# 6. Loops
## 6.1 For Loop
MatLang supports the chalo keyword for creating loops. The chalo loop follows a structure similar to JavaScript’s for loop.

Syntax:
matlang
Copy code
chalo <variable> se <start_value> tak <end_value> tak {
    <statements>;
}
Example 6:
matlang
Copy code
chalo i se 0 tak 5 tak {
    dikhai i;
}
Output (compiled JavaScript):
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
## 6.2 While Loop
The chalo keyword is also used for creating while loops. You can specify the condition using jab tak (while).

Syntax:
matlang
Copy code
mana <variable> = <value>;
chalo <variable> jab tak <condition> tak {
    <statements>;
}
Example 7:
matlang
Copy code
mana i = 0;
chalo i jab tak i chhota 5 tak {
    dikhai i;
    mana i = i + 1;
}
Output (compiled JavaScript):
javascript
Copy code
let i = 0;
while (i < 5) {
    console.log(i);
    i = i + 1;
}
## 7. Functions
Functions in MatLang are defined with the keyword samasya (problem in Hindi) followed by the function name, parameters, and the function body. The kaam keyword is used to return a value.

Syntax:
matlang
Copy code
samasya <function_name>(<parameters>) {
    <statements>;
    kaam <return_value>;
}
Example 8:
matlang
Copy code
samasya add(x, y) {
    mana sum = jod x y;
    kaam sum;
}
Output (compiled JavaScript):
javascript
Copy code
function add(x, y) {
    let sum = x + y;
    return sum;
}
## 8. Objects
In MatLang, objects are declared using the mana keyword. Key-value pairs are used to represent object properties.

Syntax:
matlang
Copy code
mana <object_name> = { <key1>: <value1>, <key2>: <value2>, ... };
Example 9:
matlang
Copy code
mana person = {name: "John", age: 30, city: "New York"};
Output (compiled JavaScript):
javascript
Copy code
let person = {name: "John", age: 30, city: "New York"};
## 9. Arrays
Arrays are declared in a similar way to objects, but they contain a list of values. Use mana followed by the array name and the array elements.

Syntax:
matlang
Copy code
mana <array_name> = [<value1>, <value2>, <value3>];
Example 10:
matlang
Copy code
mana fruits = ["Apple", "Banana", "Cherry"];
Output (compiled JavaScript):
javascript
Copy code
let fruits = ["Apple", "Banana", "Cherry"];
## 10. Error Handling
MatLang doesn’t have native exception handling, but you can manually check for errors using conditionals and provide feedback to users.

Example 11:
matlang
Copy code
mana a = "hello";
agar a barabar kuchNahi {
    dikhai "Error: Variable is not initialized!";
}
Output (compiled JavaScript):
javascript
Copy code
let a = "hello";
if (a === null) {
    console.log("Error: Variable is not initialized!");
}
## 11. Input/Output
For user input and output, the dikhai keyword is used to print output to the console.

Example 12:
matlang
Copy code
mana name = "John";
dikhai "Hello " + name;
Output (compiled JavaScript):
javascript
Copy code
let name = "John";
console.log("Hello " + name);
## 12. Compilation Process
The MatLang compiler parses the script, converts the Hindi-English syntax into valid JavaScript code, and outputs the corresponding JavaScript code. This allows MatLang to be executed in web browsers and environments that support JavaScript.

## 13. Full Example Code
Here’s a full example that demonstrates variables, functions, loops, conditionals, and object handling.

matlang
Copy code
mana x = 10;
mana y = 20;
mana name = "John";

agar x bada y {
    dikhai name + " says x is greater than y!";
} nahi {
    dikhai name + " says x is less than or equal to y!";
}

samasya add(x, y) {
    mana sum = jod x y;
    kaam sum;
}

mana result = add(x, y);
dikhai "The sum is " + result;
Output (compiled JavaScript):
javascript
Copy code
let x = 10;
let y = 20;
let name = "John";

if (x > y) {
    console.log(name + " says x is greater than y!");
} else {
    console.log(name + " says x is less than or equal to y!");
}

function add(x, y) {
    let sum = x + y;
    return sum;
}

let result = add(x, y);
console.log("The sum is " + result);
Conclusion
MatLang offers a simple and intuitive approach to coding using Hindi and English constructs. This guide provides an extensive overview of the language features, syntax, and examples. By compiling to JavaScript, MatLang ensures that its code can be executed directly in any JavaScript environment, making it accessible and functional.