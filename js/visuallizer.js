




document.getElementById("visual-code").addEventListener("change",(e)=>{
    console.log(e.target.value)
    const lexer = new PythonLexer();
    const tokens=lexer.tokenize(e.target.value)
    document.getElementById("lexer").innerText=JSON.stringify(tokens,null,2);
    
    const parser = new PythonParser(tokens);
const ast = parser.parse();
console.log('AST:', JSON.stringify(ast, null, 2));
    
    document.getElementById("parser").innerText=JSON.stringify(ast,null,2)
    
    const code = new PythonToJsCompiler();
    const generatedcode= code.generate(ast)

    console.log(generatedcode)
})