// // --------------------------------------------------------------------------------
// // -----------------------------Only for Documentation Sid-------------------------------

var selectedLang = "matlang";
var selectedTab = "Home";
var mSidebar = [];
var pSidebar = [];

// MatLangCodeExamples

function showExampleMatlang() {
  let matres = "";

  exampleShowCaseMatLang.forEach((item) => {
    matres += createExampleCard(item);
  });

  document.getElementById("MatLangCodeExamples").innerHTML = matres;
}

function createExampleCard(item) {
  return `  
    <a href="./docs.html" 
   class="block w-full max-w-sm mx-auto md:max-w-md h-auto min-h-[24rem] p-3 sm:p-4 
          rounded-lg transition-transform duration-300 ease-in-out hover:scale-105
          bg-opacity-50 backdrop-blur-sm
          animate-fade-in relative"
   style="box-shadow: 0 10px 25px 0 black">
    
    <h2 class="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-4">${item.title}</h2>
    
    <span class="text-white text-sm sm:text-base block mb-4">${item.exp}</span>
    
    <aside class="bg-black text-white p-4 sm:p-6 rounded-lg w-full 
                  font-mono max-h-48 sm:max-h-56 overflow-y-auto stylish-scrollbar">
        <div class="flex justify-between items-center">
            <div class="flex space-x-2 text-red-500">
                <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
                <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
                <div class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-xs sm:text-sm">bash</p>
        </div>
        <div class="mt-3 sm:mt-4">
            <pre class="text-sm sm:text-base break-words whitespace-pre-wrap">${item.code}</pre>
        </div>
    </aside>
</a>
  `;
}

function formatCode(code) {
  return code
    .trim() // Remove any leading/trailing whitespace
    .replace(/</g, "&lt;") // Escape HTML special characters
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/\n/g, "<br/>"); // Each line in the code will now break to a new line
}

document.addEventListener("DOMContentLoaded", () => {
  for (let item in MatLangData) {
    mSidebar.push(item);
  }
  for (let item in PythonData) {
    pSidebar.push(item);
  }
  selectedTab = mSidebar[0];

  if (window.location.href.includes("/docs.html")) {
    renderSidebar(mSidebar);
  }
  if (window.location.href.includes("/index.html")) {
    showExampleMatlang();
  }
});

//redirection to the playground
function redirectToPlayground() {
  // Redirect to the playground.html page
  window.location.href = "../playground.html";
}
function redirectToPage(link) {
  // console.log("i'm working");

  window.open(link, "_blank");
}
