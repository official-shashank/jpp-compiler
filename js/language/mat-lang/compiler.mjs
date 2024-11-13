export default class MatLangCompiler {
    compile(code) {
        // Define replacements as an array of [regex, replacementFunction]
        const replacements = [
            { regex: /\bmana\b\s+(\w+)\s*=\s*(.*?);/g, replacement: 'let $1 = $2;' },
            { regex: /\bsamasya\b\s+(\w+)\((.*?)\)\s*{/g, replacement: 'function $1($2) {' },
            { regex: /\bkaam\b\s+(.*?);/g, replacement: 'return $1;' },
            { regex: /\bdikhai\b\s*\((.*?)\);/g, replacement: 'console.log($1);' },
            { regex: /\bagar\b\s*\((.*?)\)\s*{/g, replacement: 'if ($1) {' },
            { regex: /\bnahi\b\s*{/g, replacement: 'else {' },
            { regex: /\bchalo\s+(\w+)\s+se\s+(\d+)\s+tak\s+(\d+)(?:\s+step\s+(\d+))?\s*\{/g, replacement: (match, varName, start, end, step) => `for (let ${varName} = ${start}; ${varName} <= ${end}; ${varName} += ${step || 1}) {` },
            { regex: /\baur\b/g, replacement: '&&' },
            { regex: /\bya\b/g, replacement: '||' },
            { regex: /\bbada\b/g, replacement: '>' },
            { regex: /\bchhota\b/g, replacement: '<' },
            { regex: /\b(jod|ghata|guna|divide)\b/g, replacement: (match) => {
                switch (match) {
                    case 'jod': return '+';
                    case 'ghata': return '-';
                    case 'guna': return '*';
                    case 'divide': return '/';
                    default: return match;
                }
            }},
            { regex: /\bchalo\s+(\w+)\s+jab\s+(.*?)\s+tak\b/g, replacement: 'while ($2) {' },
            { regex: /\bswitch\s+(\w+)\s*{/g, replacement: 'switch ($1) {' },
            { regex: /\bret\b/g, replacement: 'return' },
            { regex: /\bmana\s+(\w+)\s*=\s*\{([^}]+)\};/g, replacement: 'let $1 = {$2};' },
            { regex: /\bsamasya\s+(\w+)\((.*?)\)\s*\{/, replacement: 'function $1($2) {' },
            { regex: /\bagar\s*\((.*?)\)\s+(bada|chhota)\s+(.*?)\)/g, replacement: (match, left, operator, right) => {
                if (operator === 'bada') return `if (${left} > ${right})`;
                if (operator === 'chhota') return `if (${left} < ${right})`;
                return match;
            }},
            { regex: /\bchalo\s+(\w+)\s+bhar\s+\[(.*?)\]\s+\{(.*?)\}/g, replacement: '[$2].forEach($1 => { $3 });' },
            { regex: /\btry\s*\{(.*?)\}\s*\bcatch\s*\((\w+)\)\s*\{(.*?)\}/g, replacement: 'try { $1 } catch ($2) { $3 }' },

            // New functionalities

            // Handling array manipulation: `arr jodo` to `push()`
            { regex: /\b(\w+)\s+jodo\s+(.*?);/g, replacement: '$1.push($2);' },

            // Handling destructuring assignment (both object and array)
            { regex: /\bmana\s+\[(.*?)\]\s*=\s*(.*?);/g, replacement: 'let [$1] = $2;' },
            { regex: /\bmana\s+\{(.*?)\}\s*=\s*(.*?);/g, replacement: 'let {$1} = $2;' },

            // Handling spread operator for arrays and objects
            { regex: /\b(\w+)\s+bhar\s+\[(.*?)\]\s*\{(.*?)\}/g, replacement: '[$2].forEach($1 => { $3 });' },
            { regex: /\bmana\s+(\w+)\s*=\s*(\w+)\s+bhar\s+\[(.*?)\]/g, replacement: 'let $1 = [...$2, $3];' },

            // Handling class methods and `this` keyword (for method definition)
            { regex: /\bclass\s+(\w+)\s*\{([^\}]+)\}/g, replacement: (match, className, body) => {
                return `class ${className} {${body.replace(/\bdikhai\b/g, 'console.log')}}`;
            }},

            // Handling default function argument values (using '=')
            { regex: /\bsamasya\s+(\w+)\((.*?=\s*[^)]+)?\)\s*\{/g, replacement: (match, funcName, args) => {
                const formattedArgs = args ? args.split(',').map(arg => arg.trim()).join(', ') : '';
                return `function ${funcName}(${formattedArgs}) {`;
            }},
        ];

        // Apply all replacements in one pass
        let compiledCode = code;
        for (const { regex, replacement } of replacements) {
            compiledCode = compiledCode.replace(regex, replacement);
        }

        // Format the final code for better readability
        return this.formatCode(compiledCode);
    }

    formatCode(code) {
        // Format the code to ensure proper spacing
        return code.replace(/(\{|\})/g, ' $1 ').replace(/\s+/g, ' ').trim();
    }
}
