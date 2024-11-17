document.getElementById("visual-code").addEventListener("input", (e) => {
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
    document.getElementById("parser").innerText = "Error while parsing the code!";
    document.getElementById("visualizer-terminal").innerHTML = error;
  }

  try {
    const codeGenerator = new PythonToJsCompiler();
    const jsCode = codeGenerator.generate(ast);
    document.getElementById("generated-script").innerHTML = jsCode;
  } catch (error) {
    document.getElementById("visualizer-terminal").innerHTML = "Error generating code!";
  }


  const code = new PythonToJsCompiler();
  const generatedcode = code.generate(ast);
  //   console.log(generatedcode);
});

document.getElementById("runBtn").addEventListener("click", () => {
  let code = document.getElementById("generated-script").innerHTML;
  console.log("This is the generated code", code);
  executeCode(code);
});

function executeCode(incorrectCode) {
  // Fix the code by modifying the incorrect patterns
  const fixedCode = incorrectCode
    // Fix variable assignments (convert "5" to 5, but leave non-numeric strings intact)
    .replace(/let\s+(\w+)\s*=\s*"(\d+)";/g, 'let $1 = Number($2);') // Converts "5" to 5
    // Handle string concatenation with variables (e.g., "a" + "b" becomes a + b)
    .replace(/"(\w+)"\s*\+\s*"(\w+)"/g, '$1 + $2')  // Handles "a" + "b" -> a + b
    .replace(/"(\w+)"\s*\+\s*(\w+)/g, '$1 + $2')    // Handles "a" + b -> a + b
    .replace(/(\w+)\s*\+\s*"(\\w+)"/g, '$1 + $2')    // Handles a + "b" -> a + b
    // Ensure arithmetic with numbers works correctly (e.g., "5" + "3" -> 5 + 3)
    .replace(/"(\d+)"\s*\+\s*"(\d+)"/g, '$1 + $2')  // Converts "5" + "3" -> 5 + 3
    // Fix console.log calls (remove quotes around variable names)
    .replace(/console\.log\("(\w+)"\);/g, 'console.log($1);')
    .replace(/console\.log\("(.*?)"\);/g, 'console.log("$1");'); // preserve string literals properly

  // Debugging: Log the fixed code to see changes
  console.log("Fixed Code:\n" + fixedCode);

  try {
    // Capture the console output and display it in the terminal element
    let output = "";
    const originalConsoleLog = console.log;  // Save the original console.log function

    console.log = function (message) {
      output += message + "\n";  // Capture the log message
    };

    // Execute the fixed code using eval
    eval(fixedCode);

    // Restore the original console.log
    console.log = originalConsoleLog;

    // Display the captured output in the "visualizer-terminal" element
    document.getElementById("visualizer-terminal").innerText = output;

  } catch (error) {
    console.error("Execution Error:", error);
    document.getElementById("visualizer-terminal").innerText = "Execution Error: " + error.message;
  }
}
