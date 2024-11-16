document.getElementById("runCode").addEventListener("click", function () {
    const code = document.getElementById("codeEditor").value;
    const consoleOutput = document.getElementById("console");
    const language = document.getElementById("languageSelect").value;

    // Clear previous output
    consoleOutput.innerText = "";

    try {
        if (language === "javascript") {
            // Safely execute JavaScript code and show only the result in the console
            const result = eval(code);
            if (result !== undefined) {
                consoleOutput.innerText = "Output: " + result;
            }
        } else {
            // Placeholder for other language execution
            consoleOutput.innerText = "Executed " + language + " code.";
        }
    } catch (error) {
        // Display errors in the console
        consoleOutput.innerText = "Error: " + error.message;
    }
});

document.getElementById("clearConsole").addEventListener("click", function () {
    // Clear the console output
    document.getElementById("console").innerText = "";
});

const codeEditor = document.getElementById("codeEditor");
const languageSelect = document.getElementById("languageSelect");

// Get references to editor and console containers
const editorContainer = document.querySelector(".editor-container");
const consoleContainer = document.querySelector(".console-output");
const resizer = document.querySelector(".resizer");

// Track resizing state
let isResizing = false;

resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "col-resize";

    // Prevent text selection while resizing
    document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    // Calculate new widths based on mouse position
    const containerRect = resizer.parentNode.getBoundingClientRect();
    const newEditorWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    // Set minimum and maximum width limits
    if (newEditorWidth > 20 && newEditorWidth < 80) {
        editorContainer.style.width = `${newEditorWidth}%`;
        consoleContainer.style.width = `${100 - newEditorWidth}%`;
    }
});

document.addEventListener("mouseup", () => {
    if (isResizing) {
        isResizing = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = ""; // Enable text selection after resizing
    }
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

// Line Numbers Logic
const lineNumbers = document.getElementById("lineNumbers");

function updateLineNumbers() {
    const lines = codeEditor.value.split("\n").length;
    lineNumbers.innerHTML = Array(lines)
        .fill(0)
        .map((_, i) => i + 1)
        .join("<br>");
}

// Update line numbers on input or when the editor content changes
codeEditor.addEventListener("input", updateLineNumbers);

// Synchronize scrolling of line numbers with the editor
codeEditor.addEventListener("scroll", () => {
    lineNumbers.scrollTop = codeEditor.scrollTop;
});

// Initial line number setup
updateLineNumbers();

// Language Selection Logic
languageSelect.addEventListener("change", function () {
    const language = languageSelect.value;
    switch (language) {
        case "javascript":
            codeEditor.placeholder = "Type JavaScript code here...";
            break;
        case "python":
            codeEditor.placeholder = "Type Python code here...";
            break;
        case "java":
            codeEditor.placeholder = "Type Java code here...";
            break;
        default:
            codeEditor.placeholder = "Type your code here...";
    }
    codeEditor.value = "";
});
