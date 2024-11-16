class PythonLexer {
    constructor() {
        this.keywords = new Set([
            'if', 'else', 'def', 'return', 'class', 'while', 'for', 'import', 'print', 'and', 'or', 'not',
            'is', 'in', 'lambda', 'try', 'except', 'finally', 'with', 'as', 'yield'
        ]);
        this.operators = new Set([
            '=', '==', '!=', '+', '-', '*', '/', '%', '>', '<', '>=', '<=', '**', '//', 
            '+=', '-=', '*=', '/=', '%=', '**=', '//='
        ]);
        this.punctuation = new Set([',', '(', ')', ':', '{', '}', '.', '[', ']', '->']);
        this.tokenPatterns = {
            whitespace: /^\s+/,
            number: /^[0-9]+(\.[0-9]+)?/,  // Match integers and floating-point numbers
            identifier: /^[a-zA-Z_][a-zA-Z_0-9]*/,  // Match identifiers (variables, functions, etc.)
            operator: /^(==|!=|>=|<=|[=+\-*\/%><!&|^]+|\/\/|>>|<<|\*\*)/,
            punctuation: /^[,(){}:.]/,
            string: /^"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,  // Handle string literals (single or double quotes)
            newline: /^[\n\r]+/,
            comment: /^#.*$/,  // Handle single-line comments starting with '#'
            multiLineString: /^(\'\'\'[\s\S]*?\'\'\'|\"\"\"[\s\S]*?\"\"\")/,  // Handle multi-line string literals (triple quotes)
        };
    }

    tokenize(code) {
        let tokens = [];
        let i = 0;
        let length = code.length;

        while (i < length) {
            let char = code[i];

            // Skip whitespace
            if (this.tokenPatterns.whitespace.test(code.slice(i))) {
                i++;
                continue;
            }

            // Match comments (single-line comments starting with '#')
            if (this.tokenPatterns.comment.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.comment)[0];
                tokens.push({ type: 'COMMENT', value });
                i += value.length;
                continue;
            }

            // Match multi-line strings (triple quotes)
            if (this.tokenPatterns.multiLineString.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.multiLineString)[0];
                tokens.push({ type: 'STRING', value });
                i += value.length;
                continue;
            }

            // Match number (integers and floating-point numbers)
            if (this.tokenPatterns.number.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.number)[0];
                tokens.push({ type: 'NUMBER', value });
                i += value.length;
                continue;
            }

            // Match string literals (single or double quotes)
            if (this.tokenPatterns.string.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.string)[0];
                tokens.push({ type: 'STRING', value });
                i += value.length;
                continue;
            }

            // Match identifiers (including keywords)
            if (this.tokenPatterns.identifier.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.identifier)[0];
                if (this.keywords.has(value)) {
                    tokens.push({ type: 'KEYWORD', value });
                } else {
                    tokens.push({ type: 'IDENTIFIER', value });
                }
                i += value.length;
                continue;
            }

            // Match operators
            if (this.tokenPatterns.operator.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.operator)[0];
                tokens.push({ type: 'OPERATOR', value });
                i += value.length;
                continue;
            }

            // Match punctuation (e.g., commas, parentheses, etc.)
            if (this.tokenPatterns.punctuation.test(code.slice(i))) {
                let value = code.slice(i).match(this.tokenPatterns.punctuation)[0];
                tokens.push({ type: 'PUNCTUATION', value });
                i += value.length;
                continue;
            }

            // Match newlines
            if (this.tokenPatterns.newline.test(code.slice(i))) {
                tokens.push({ type: 'NEWLINE', value: char });
                i++;
                continue;
            }

            // If we get here, something is unexpected
            console.error(`Unexpected character: ${char} at position ${i}`);
            i++;
        }

        return tokens;
    }
}
