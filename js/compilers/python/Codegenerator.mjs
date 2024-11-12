class PythonToJsCompiler {
    generate(ast) {
        let jsCode = '';
        for (let node of ast) {
            jsCode += this.generateNode(node) + '\n';
        }
        return jsCode.trim();
    }

    generateNode(node) {
        switch (node.type) {
            case 'ASSIGNMENT':
                return this.generateAssignment(node);
            case 'BINARY_OPERATION':
                return this.generateBinaryOperation(node);
            case 'IF_ELSE':
                return this.generateIfElse(node);
            case 'WHILE':
                return this.generateWhile(node);
            case 'FOR_LOOP':
                return this.generateForLoop(node);
            case 'FUNCTION':
            case 'FUNCTION_DEF':
                return this.generateFunction(node);
            case 'FUNCTION_CALL':
                return this.generateFunctionCall(node);
            case 'CLASS':
                return this.generateClass(node);
            case 'RETURN':
                return this.generateReturn(node);
            case 'PRINT_STATEMENT':
                return this.generatePrintStatement(node);
            case 'IMPORT':
                return this.generateImport(node);
            case 'LITERAL':
                return this.generateLiteral(node);
            case 'LIST_COMPREHENSION':
                return this.generateListComprehension(node);
            case 'LAMBDA':
                return this.generateLambda(node);
            case 'TRY_EXCEPT':
                return this.generateTryExcept(node);
            case 'VARIABLE':
                return this.generateVariable(node); // New method for variable references
            case 'ELSE_IF':
                return this.generateElseIf(node);
            default:
                throw new Error(`Unsupported node type: ${node.type}`);
        }
    }

    generateAssignment(node) {
        let value = this.generateNode(node.value);
        return `let ${node.variable} = ${value};`;
    }

    generateBinaryOperation(node) {
        let left = this.generateNode(node.left);
        let right = this.generateNode(node.right);
        return `${left} ${node.operator} ${right}`;
    }

    generateIfElse(node) {
        let condition = this.generateNode(node.condition);
        let trueBlock = this.generateBlock(node.trueBlock);
        let falseBlock = node.falseBlock ? `else {\n${this.generateBlock(node.falseBlock)}\n}` : '';
        return `if (${condition}) {\n${trueBlock}\n} ${falseBlock}`;
    }

    generateElseIf(node) {
        let condition = this.generateNode(node.condition);
        let block = this.generateBlock(node.block);
        return `else if (${condition}) {\n${block}\n}`;
    }

    generateWhile(node) {
        let condition = this.generateNode(node.condition);
        let body = this.generateBlock(node.body);
        return `while (${condition}) {\n${body}\n}`;
    }

    generateForLoop(node) {
        let varName = node.varName;
        let iterable = this.generateNode(node.iterable);
        let body = this.generateBlock(node.body);
        return `for (let ${varName} of ${iterable}) {\n${body}\n}`;
    }

    generateFunction(node) {
        let params = node.params.join(', ');
        let body = this.generateBlock(node.body);
        return `function ${node.name}(${params}) {\n${body}\n}`;
    }

    generateFunctionCall(node) {
        let args = node.args.map(this.generateNode.bind(this)).join(', ');
        return `${node.name}(${args});`;
    }

    generateClass(node) {
        let methods = node.methods.map(this.generateNode.bind(this)).join('\n');
        return `class ${node.name} {\n${methods}\n}`;
    }

    generateReturn(node) {
        let expression = this.generateNode(node.expression);
        return `return ${expression};`;
    }

    generatePrintStatement(node) {
        let expression = this.generateNode(node.args[0]);
        return `console.log(${expression});`;
    }

    generateImport(node) {
        return `import ${node.module};`;
    }

    generateLiteral(node) {
        // Wrap in quotes only if it's a string literal
        if (typeof node.value === 'string') {
            return `"${node.value}"`;
        }
        return node.value.toString(); // Convert numbers and booleans directly without quotes
    }

    generateVariable(node) {
        return node.name; // Return variable name directly, without any additional quotes
    }

    generateListComprehension(node) {
        let expression = this.generateNode(node.expression);
        let iterable = this.generateNode(node.iterable);
        return `[...${iterable}.map(${node.varName} => ${expression})]`;
    }

    generateLambda(node) {
        let params = node.params.join(', ');
        let body = this.generateNode(node.body);
        return `(${params}) => ${body}`;
    }

    generateTryExcept(node) {
        let tryBlock = this.generateBlock(node.tryBlock);
        let exceptBlock = this.generateBlock(node.exceptBlock);
        return `try {\n${tryBlock}\n} catch (error) {\n${exceptBlock}\n}`;
    }

    generateBlock(block) {
        return block.map(this.generateNode.bind(this)).join('\n');
    }
}

export default PythonToJsCompiler;
