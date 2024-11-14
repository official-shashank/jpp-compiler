document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const outputDiv = document.querySelector('.output');
  
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command) {
          executeCommand(command);
          input.value = '';
        }
      }
    });
  
    function executeCommand(command) {
      let output = '';
      switch (command) {
        case '--version':
          output = '1.22.2\n3aeede733d9a3098f7b4bdc1f66b63b0f48c1ef9\nx64';
          break;
        case '--list-extensions':
          output = `
            DavidAnson.vscode-markdownlint\n
            dbaeumer.vscode-eslint\n
            eg2.tslint\n
            msjsdiag.debugger-for-chrome\n
            robertohuertasm.vscode-icons\n
            streetsidesoftware.code-spell-checker
          `;
          break;
        default:
          output = `'${command}' is not recognized as an internal or external command.`;
      }
      appendOutput(`C:\\> ${command}\n${output}`);
    }
  
    function appendOutput(text) {
      const pre = document.createElement('pre');
      pre.textContent = text;
      outputDiv.appendChild(pre);
      outputDiv.scrollTop = outputDiv.scrollHeight;
    }
  });
  