export default class MatLangCompiler {
    // Main method to compile Mat-Lang code into JavaScript
    compile(code) {
        let compiledCode = code;

        // Replace custom keywords with JavaScript equivalents
        compiledCode = this.replaceMana(compiledCode);
        compiledCode = this.replaceSamasya(compiledCode);
        compiledCode = this.replaceKaam(compiledCode);
        compiledCode = this.replaceDikhai(compiledCode);
        compiledCode = this.replaceAgar(compiledCode);
        compiledCode = this.replaceNahi(compiledCode);
        compiledCode = this.replaceChalo(compiledCode);
        compiledCode = this.replaceAur(compiledCode);
        compiledCode = this.replaceYa(compiledCode);
        compiledCode = this.replaceBada(compiledCode);
        compiledCode = this.replaceChhota(compiledCode);
        compiledCode = this.replaceMathOps(compiledCode);    // Add support for math operations
        compiledCode = this.replaceWhile(compiledCode);      // Add support for 'while' loops
        compiledCode = this.replaceSwitch(compiledCode);     // Add support for 'switch' statements
        compiledCode = this.replaceReturn(compiledCode);     // Add support for explicit return usage
        compiledCode = this.replaceObjectLiteral(compiledCode); // Add support for object literals
        compiledCode = this.replaceForEach(compiledCode);    // Add support for 'forEach' loops
        compiledCode = this.replaceTryCatch(compiledCode);   // Add support for 'try-catch' blocks

        // Handle function arguments and conditions
        compiledCode = this.replaceFunctionArgs(compiledCode); // Handle function arguments correctly
        compiledCode = this.replaceComparison(compiledCode);   // Handle comparisons in conditionals

        return compiledCode;
    }

    // Replace 'mana' with 'let' (variable declaration)
    replaceMana(code) {
        return code.replace(/\bmana\b/g, 'let');
    }

    // Replace 'samasya' with 'function' (function declaration)
    replaceSamasya(code) {
        return code.replace(/\bsamasya\b/g, 'function');
    }

    // Replace 'kaam' with 'return' (function return)
    replaceKaam(code) {
        return code.replace(/\bkaam\b/g, 'return');
    }

    // Replace 'dikhai' with 'console.log' (output statement)
    replaceDikhai(code) {
        return code.replace(/\bdikhai\b/g, 'console.log');
    }

    // Replace 'agar' with 'if' (if condition)
    replaceAgar(code) {
        return code.replace(/\bagar\b/g, 'if');
    }

    // Replace 'nahi' with 'else' (else condition)
    replaceNahi(code) {
        return code.replace(/\bnahi\b/g, 'else');
    }

    // Replace 'chalo' with 'for' (loop statement)
    replaceChalo(code) {
        return code.replace(/\bchalo\s(\w+)\sse\s(\d+)\stak\s(\d+)\stak/g, 
            (match, varName, start, end) => {
                return `for (let ${varName} = ${start}; ${varName} < ${end}; ${varName}++)`;
            }
        );
    }

    // Replace 'aur' with '&&' (logical AND)
    replaceAur(code) {
        return code.replace(/\baur\b/g, '&&');
    }

    // Replace 'ya' with '||' (logical OR)
    replaceYa(code) {
        return code.replace(/\bya\b/g, '||');
    }

    // Replace 'bada' with '>' (greater-than comparison)
    replaceBada(code) {
        return code.replace(/\bbada\b/g, '>');
    }

    // Replace 'chhota' with '<' (less-than comparison)
    replaceChhota(code) {
        return code.replace(/\bchhota\b/g, '<');
    }

    // Add support for basic math operations
    replaceMathOps(code) {
        return code.replace(/\b(jod|ghata|guna|divide)\b/g, (match) => {
            if (match === 'jod') return '+';
            if (match === 'ghata') return '-';
            if (match === 'guna') return '*';
            if (match === 'divide') return '/';
            return match;
        });
    }

    // Add support for 'while' loops
    replaceWhile(code) {
        return code.replace(/\bchalo\s(\w+)\sjab\s(.*?)\stak/g, 
            (match, varName, condition) => {
                return `while (${condition}) {`;
            }
        );
    }

    // Add support for 'switch' statements
    replaceSwitch(code) {
        return code.replace(/\bswitch\s(.*?)\s\{/, 
            (match, expression) => {
                return `switch(${expression}) {`;
            }
        );
    }

    // Handle explicit return usage
    replaceReturn(code) {
        return code.replace(/\bret\b/g, 'return');
    }

    // Handle object literals in the form of mana obj = {key: value}
    replaceObjectLiteral(code) {
        return code.replace(/\bmana\s(\w+)\s=\s\{([^}]+)\}/g, (match, objName, properties) => {
            const jsProps = properties.split(',').map(prop => prop.trim()).join(', ');
            return `let ${objName} = { ${jsProps} }`;
        });
    }

    // Handle function arguments (convert from 'samasya' to JavaScript function syntax)
    replaceFunctionArgs(code) {
        return code.replace(/samasya\s(\w+)\((.*?)\)\s\{/, (match, funcName, args) => {
            let jsArgs = args.split(',').map(arg => arg.trim()).join(', ');
            return `function ${funcName}(${jsArgs}) {`;
        });
    }

    // Handle conditionals (comparison inside 'agar' statements)
    replaceComparison(code) {
        return code.replace(/agar\s(.*?)\s(bada|chhota)\s(.*)/g, 
            (match, left, operator, right) => {
                if (operator === 'bada') {
                    return `if (${left} > ${right})`;
                } else if (operator === 'chhota') {
                    return `if (${left} < ${right})`;
                }
                return match;
            }
        );
    }

    // Add support for 'forEach' loops
    replaceForEach(code) {
        return code.replace(/\bchalo\s(\w+)\sbhar\s\[(.*?)\]\s\{(.*?)\}/g, 
            (match, varName, array, body) => {
                return `${array}.forEach(${varName} => { ${body} })`;
            }
        );
    }

    // Add support for 'try-catch' blocks
    replaceTryCatch(code) {
        return code.replace(/\btry\s\{(.*?)\}\s\bcatch\s\((\w+)\)\s\{(.*?)\}/g, 
            (match, tryBlock, errorVar, catchBlock) => {
                return `try { ${tryBlock} } catch (${errorVar}) { ${catchBlock} }`;
            }
        );
    }
}
