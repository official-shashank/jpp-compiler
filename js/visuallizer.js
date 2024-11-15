document.getElementById("visual-code").addEventListener("change", (e) => {
  let ast;
  console.log(e.target.value);
  const lexer = new PythonLexer();
  const tokens = lexer.tokenize(e.target.value);
  document.getElementById("lexer").innerText = JSON.stringify(tokens, null, 2);

  try {
    const parser = new PythonParser(tokens);
     ast = parser.parse();
    document.getElementById("parser").innerText = JSON.stringify(ast, null, 2);
  } catch (error) {
    document.getElementById("parser").innerText =
      "Error while parsing the code !";
    document.getElementById("visualizer-terminal").innerHTML = error;
  }

  try {
    const codeGenerator = new PythonToJsCompiler();
    const jsCode = codeGenerator.generate(ast);
    
    document.getElementById("generated-script").innerHTML=jsCode;
  } catch (error) {
    document.getElementById("visualizer-terminal").innerHTML = error;
  }

  //   console.log("AST:", JSON.stringify(ast, null, 2));

  const code = new PythonToJsCompiler();
  const generatedcode = code.generate(ast);

//   console.log(generatedcode);
});
