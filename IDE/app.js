document.getElementById("runCode").addEventListener("click", function () {
    const code = document.getElementById("codeEditor").value;
    const consoleOutput = document.getElementById("console");

    try {
        consoleOutput.innerText = "Code output: " + eval(code);
    } catch (error) {
        consoleOutput.innerText = "Error: " + error.message;
    }
});

document.getElementById("clearConsole").addEventListener("click", function () {
    document.getElementById("console").innerText = "";
});

// Resizable Divider Logic
const resizer = document.querySelector(".resizer");
const editorContainer = document.querySelector(".editor-container");
const consoleContainer = document.querySelector(".console-output");

let isResizing = false;

resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "col-resize";
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const containerWidth = resizer.parentNode.offsetWidth;
    const newEditorWidth = (e.clientX / containerWidth) * 100;
    const newConsoleWidth = 100 - newEditorWidth;

    editorContainer.style.flex = `0 0 ${newEditorWidth}%`;
    consoleContainer.style.flex = `0 0 ${newConsoleWidth}%`;
});

document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
});

// Theme Toggle Logic
document.getElementById("toggleTheme").addEventListener("click", function () {
    const body = document.body;
    
    // Toggle between dark and light modes
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
    } else {
        body.classList.replace("light-mode", "dark-mode");
    }
    
    // Toggle mode on editor
    editorContainer.classList.toggle("dark-mode");
    editorContainer.classList.toggle("light-mode");
    
    // Toggle mode on console output
    consoleContainer.classList.toggle("dark-mode");
    consoleContainer.classList.toggle("light-mode");
});
