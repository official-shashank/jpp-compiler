// Token Types
const TOKEN_TYPES = {
    NUMBER: "NUMBER",
    OPERATOR: "OPERATOR",
    IDENTIFIER: "IDENTIFIER",
    EOF: "EOF",
  };
  
  // Lexer (Tokenizes the input)
  class Lexer {
    constructor(input) {
      this.input = input;
      this.position = 0;
    }
  
    getNextToken() {
      while (this.position < this.input.length) {
        const currentChar = this.input[this.position];
  
        if (/\s/.test(currentChar)) {
          this.position++;
          continue;
        }
  
        if (/[0-9]/.test(currentChar)) {
          let num = "";
          while (/[0-9]/.test(this.input[this.position])) {
            num += this.input[this.position++];
          }
          return { type: TOKEN_TYPES.NUMBER, value: parseInt(num, 10) };
        }
  
        if (/[+\-*\/]/.test(currentChar)) {
          this.position++;
          return { type: TOKEN_TYPES.OPERATOR, value: currentChar };
        }
  
        throw new Error("Invalid character: " + currentChar);
      }
  
      return { type: TOKEN_TYPES.EOF };
    }
  }
  
  // Parser (Creates AST)
  class Parser {
    constructor(lexer) {
      this.lexer = lexer;
      this.currentToken = this.lexer.getNextToken();
    }
  
    eat(type) {
      if (this.currentToken.type === type) {
        this.currentToken = this.lexer.getNextToken();
      } else {
        throw new Error("Unexpected token");
      }
    }
  
    parseExpression() {
      let node = this.parseTerm();
  
      while (this.currentToken.type === TOKEN_TYPES.OPERATOR && /[+-]/.test(this.currentToken.value)) {
        const token = this.currentToken;
        this.eat(TOKEN_TYPES.OPERATOR);
        node = { type: "BinaryOperation", operator: token.value, left: node, right: this.parseTerm() };
      }
  
      return node;
    }
  
    parseTerm() {
      let node = this.parseFactor();
  
      while (this.currentToken.type === TOKEN_TYPES.OPERATOR && /[*\/]/.test(this.currentToken.value)) {
        const token = this.currentToken;
        this.eat(TOKEN_TYPES.OPERATOR);
        node = { type: "BinaryOperation", operator: token.value, left: node, right: this.parseFactor() };
      }
  
      return node;
    }
  
    parseFactor() {
      const token = this.currentToken;
      if (token.type === TOKEN_TYPES.NUMBER) {
        this.eat(TOKEN_TYPES.NUMBER);
        return { type: "NumberLiteral", value: token.value };
      }
      throw new Error("Invalid expression");
    }
  
    parse() {
      return this.parseExpression();
    }
  }
  
  // Code Generator (Generates JavaScript Code)
  class CodeGenerator {
    generate(node) {
      if (node.type === "NumberLiteral") {
        return node.value.toString();
      } else if (node.type === "BinaryOperation") {
        return `(${this.generate(node.left)} ${node.operator} ${this.generate(node.right)})`;
      }
      throw new Error("Unknown node type: " + node.type);
    }
  }
  
  // Usage
  function compilePythonToJS(input) {
    const lexer = new Lexer(input);
    const parser = new Parser(lexer);
    const ast = parser.parse();
    const codeGenerator = new CodeGenerator();
    return codeGenerator.generate(ast);
  }
  
  // Test
  const pythonCode = `print("hello")`;
  const jsCode = compilePythonToJS(pythonCode);
  console.log("Python Code:", pythonCode);
  console.log("Generated JS Code:", jsCode);
  