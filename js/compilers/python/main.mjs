import PythonToJsCompiler from "./codeGenerator.mjs";
import PythonLexer from "./lexer.mjs";
import PythonParser from "./parser.mjs";


// The code to be tokenized and parsed
const code = `

a = 5
b = 6
d = 8
res=a+b+d
print(res)
`;

// Step 1: Tokenize the code
const lexer = new PythonLexer();
const tokens = lexer.tokenize(code);
console.log('Tokens:', tokens);

// Step 2: Parse the tokens to generate the AST
const parser = new PythonParser(tokens);
const ast = parser.parse();
console.log('AST:', JSON.stringify(ast, null, 2));

// Step 3: Generate JavaScript code from the AST
const codeGenerator = new PythonToJsCompiler();
const jsCode = codeGenerator.generate(ast);
console.log('Generated JavaScript Code:\n', jsCode);



print(name+dghdhgdh)