// // --------------------------------------------------------------------------------
// // -----------------------------Only for Documentation Sid-------------------------------

let selectedLang="matlang";
let selectedTab = "Home" ;
let mSidebar=[];
let pSidebar=[];


// MatLangCodeExamples

function showExampleMatlang() {
  let matres = "";

  exampleShowCaseMatLang.map((item) => {
    matres += `
  <a href="../pages/docs.html" class=" flex flex-col mt-12 h-96 max-w-md gap-4 p-4 rounded-lg transition-transform transform duration-300 ease-in-out hover:scale-110 animate-fade-in" style="box-shadow: 0 10px 25px 0 black">
  <h2 class="text-white font-bold">${item.title}</h2>
  <span class="text-white">${item.exp}</span>
  <aside class="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono max-h-56 overflow-y-auto stylish-scrollbar">
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 text-red-500">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p class="text-sm">bash</p>
    </div>
    <div class="mt-4">
       ${item.code}
    </div>
  </aside>
</a>
  
  `;
  });

  document.getElementById("MatLangCodeExamples").innerHTML = matres;
}

document.addEventListener("DOMContentLoaded", () => {




for(let item in MatLangData ){
  mSidebar.push(item);
}
for(let item in PythonData ){
  pSidebar.push(item);
}
selectedTab = mSidebar[0] ;


  if (window.location.href.includes("/docs.html")) {
    renderSidebar(mSidebar);
  }
  if (window.location.href.includes("/index.html")) {
    showExampleMatlang();
  }
});

// utility function
function sideBarUtility(id) {}

// Radio Button functionality
// Function to check the initial selection on page load
window.addEventListener("DOMContentLoaded", (event) => {
  const radio1 = document.getElementById("default-radio-1");
  const radio2 = document.getElementById("default-radio-2");

  if (radio2.checked) {
    renderSidebar(pythonSidebar);
  } else if (radio1.checked) {
    renderSidebar(matLangData);
  }

  radio1.addEventListener("change", () => {
    if (radio1.checked) {
      renderSidebar(pythonSidebar);
    }
  });

  radio2.addEventListener("change", () => {
    if (radio2.checked) {
      renderSidebar(matLangSidebar);
    }
  });
});
