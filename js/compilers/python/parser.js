 class PythonParser {
  constructor(tokens) {
    this.tokens = tokens;
    this.position = 0;
  }

  peek() {
    return this.tokens[this.position];
  }


  advance() {
    this.position++;
  }

  parse() {
    const ast = [];
    while (this.position < this.tokens.length) {
      const token = this.peek();
      if (token.type === 'KEYWORD') {
        if (token.value === 'def') {
          this.advance();
          ast.push(this.parseFunctionDefinition());
        } else if (token.value === 'return') {
          this.advance();
          ast.push(this.parseReturnStatement());
        } else if (token.value === 'print') {
          this.advance();
          ast.push(this.parsePrintStatement());
        } else if (token.value === 'if') {
          this.advance();
          ast.push(this.parseIfStatement());
        } else if (token.value === 'else') {
          this.advance();
          ast.push(this.parseElseStatement());
        } else if (token.value === 'while') {
          this.advance();
          ast.push(this.parseWhileLoop());
        } else if (token.value === 'for') {
          this.advance();
          ast.push(this.parseForLoop());
        } else {
          console.error(`Unexpected keyword: ${token.value}`);
          this.advance();
        }
      } else if (token.type === 'IDENTIFIER') {
        if (this.peekNext() && this.peekNext().type === 'PUNCTUATION' && this.peekNext().value === '(') {
          ast.push(this.parseFunctionCall());
        } else {
          ast.push(this.parseAssignment());
        }
      } else {
        console.error(`Unexpected token: ${token.type}`);
        this.advance();
      }
    }
    return ast;
  }

  // Parse assignment (e.g., a = 5)
  parseAssignment() {
    const identifier = this.peek().value;
    this.advance();
    this.expect('OPERATOR', '=');
    const value = this.parseExpression(); // Now we correctly parse an expression on the right-hand side
    return {
      type: 'ASSIGNMENT',
      variable: identifier,
      value
    };
  }

  // Parse function definition (e.g., def greet(name):)
  parseFunctionDefinition() {
    const funcName = this.peek().value;
    this.advance();

    // Skip open parenthesis
    this.expect('PUNCTUATION', '(');
    const parameters = [];
    while (this.peek().type === 'IDENTIFIER') {
      parameters.push(this.peek().value);
      this.advance();
      if (this.peek().type === 'PUNCTUATION' && this.peek().value === ',') {
        this.advance();
      }
    }
    this.expect('PUNCTUATION', ')');

    // Expect colon
    this.expect('PUNCTUATION', ':');

    // Parse function body (statements inside the function)
    const body = [];
    while (this.peek() && this.peek().type !== 'KEYWORD' && this.peek().value !== 'def') {
      const statement = this.parseStatement();
      if (statement) {
        body.push(statement);
      }
    }

    return { type: 'FUNCTION_DECLARATION', name: funcName, params: parameters, body };
  }

  // Parse statements inside the function (like return, print)
  parseStatement() {
    const token = this.peek();
    if (token.type === 'KEYWORD' && token.value === 'return') {
      return this.parseReturnStatement();
    } else if (token.type === 'KEYWORD' && token.value === 'print') {
      return this.parsePrintStatement();
    } else if (token.type === 'KEYWORD' && token.value === 'if') {
      return this.parseIfStatement();
    } else if (token.type === 'KEYWORD' && token.value === 'while') {
      return this.parseWhileLoop();
    } else if (token.type === 'KEYWORD' && token.value === 'for') {
      return this.parseForLoop();
    }
    return null;
  }

  // Parse a return statement (e.g., return a + b)
  parseReturnStatement() {
    const expr = this.parseExpression();
    return { type: 'RETURN_STATEMENT', expression: expr };
  }

  // Parse a print statement (e.g., print(a + b))
  parsePrintStatement() {
    this.expect('PUNCTUATION', '(');
    const args = [];
    while (this.peek().type === 'IDENTIFIER' || this.peek().type === 'NUMBER' || this.peek().type === 'STRING' || this.peek().type === 'OPERATOR') {
      args.push(this.parseExpression());
      if (this.peek().type === 'PUNCTUATION' && this.peek().value === ',') {
        this.advance();
      }
    }
    this.expect('PUNCTUATION', ')');
    return { type: 'PRINT_STATEMENT', args };
  }

  // Parse expressions (e.g., a + b, a * (b + c))
  parseExpression() {
    let left = this.parseTerm();
    while (this.peek() && (this.peek().type === 'OPERATOR' && ['+', '-'].includes(this.peek().value))) {
      const operator = this.peek().value;
      this.advance();
      const right = this.parseTerm();
      left = { type: 'BINARY_OPERATION', left, operator, right };
    }
    return left;
  }

  // Parse terms in an expression (e.g., identifiers, numbers, or parenthesized expressions)
  parseTerm() {
    let token = this.peek();
    if (token.type === 'IDENTIFIER' || token.type === 'NUMBER') {
      const value = token.value;
      this.advance();
      return { type: 'LITERAL', value };
    } else if (token.type === 'STRING') {
      const value = token.value;
      this.advance();
      return { type: 'LITERAL', value };
    } else if (token.type === 'PUNCTUATION' && token.value === '(') {
      this.advance();
      const expr = this.parseExpression();
      this.expect('PUNCTUATION', ')');
      return expr;
    }
    console.error(`Unexpected token: ${token.type}`);
    return null;
  }

  // Parse an if statement (e.g., if x > 5: ...)
  parseIfStatement() {
    this.expect('PUNCTUATION', '(');
    const condition = this.parseExpression();
    this.expect('PUNCTUATION', ')');
    this.expect('PUNCTUATION', ':');

    const body = [];
    while (this.peek() && (this.peek().type !== 'KEYWORD' || this.peek().value !== 'else')) {
      const statement = this.parseStatement();
      if (statement) {
        body.push(statement);
      }
    }

    return { type: 'IF_STATEMENT', condition, body };
  }

  // Parse an else statement (e.g., else: ...)
  parseElseStatement() {
    this.expect('PUNCTUATION', ':');
    const body = [];
    while (this.peek() && (this.peek().type !== 'KEYWORD' || this.peek().value !== 'elif')) {
      const statement = this.parseStatement();
      if (statement) {
        body.push(statement);
      }
    }

    return { type: 'ELSE_STATEMENT', body };
  }

  // Parse a while loop (e.g., while x < 10: ...)
  parseWhileLoop() {
    this.expect('PUNCTUATION', '(');
    const condition = this.parseExpression();
    this.expect('PUNCTUATION', ')');
    this.expect('PUNCTUATION', ':');

    const body = [];
    while (this.peek() && (this.peek().type !== 'KEYWORD' || this.peek().value !== 'for')) {
      const statement = this.parseStatement();
      if (statement) {
        body.push(statement);
      }
    }

    return { type: 'WHILE_LOOP', condition, body };
  }

  // Parse a for loop (e.g., for i in range(10): ...)
  parseForLoop() {
    this.expect('PUNCTUATION', '(');
    const loopVariable = this.peek().value;
    this.advance();
    this.expect('KEYWORD', 'in');
    const iterable = this.parseExpression(); // Handle iterables like range()
    this.expect('PUNCTUATION', ')');
    this.expect('PUNCTUATION', ':');

    const body = [];
    while (this.peek() && (this.peek().type !== 'KEYWORD' || this.peek().value !== 'for')) {
      const statement = this.parseStatement();
      if (statement) {
        body.push(statement);
      }
    }

    return { type: 'FOR_LOOP', variable: loopVariable, iterable, body };
  }

  // Parse function call (e.g., greet("World"))
  parseFunctionCall() {
    const funcName = this.peek().value;
    this.advance();

    // Skip open parenthesis
    this.expect('PUNCTUATION', '(');
    const args = [];
    while (this.peek().type === 'IDENTIFIER' || this.peek().type === 'NUMBER' || this.peek().type === 'STRING' || this.peek().type === 'OPERATOR') {
      args.push(this.parseExpression());
      if (this.peek().type === 'PUNCTUATION' && this.peek().value === ',') {
        this.advance();
      }
    }
    this.expect('PUNCTUATION', ')');
    return { type: 'FUNCTION_CALL', name: funcName, args };
  }

  // Helper methods
  expect(type, value) {
    const token = this.peek();
    if (token.type !== type || (value && token.value !== value)) {
      throw new Error(`Expected ${type}: ${value} but found ${token.type}: ${token.value}`);
    }
    this.advance();
  }

  peekNext() {
    return this.tokens[this.position + 1];
  }
}
