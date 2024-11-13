// // --------------------------------------------------------------------------------
// // -----------------------------Only for Documentation Sid-------------------------------
  
const sideBar = document.getElementById("sidebarTarg");

function renderSidebar(data) {
  sideBar.innerHTML = "";
    data.forEach((item, idx) => {
      sideBar.innerHTML += `
          <li class="sidebar-item">
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
                 <span class="ms-3">${item}</span>
              </a>
           </li>
          `;
    });
}

// MatLangCodeExamples

function showExampleMatlang() {
  let matres = "";

  exampleShowCaseMatLang.map((item) => {
    matres += `
  <a href="../pages/docs.html">
  <h2 class="text-white">${item.title}</h2>
  <span class="text-white">${item.exp}</span>
  <aside class="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono">
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



document.addEventListener("DOMContentLoaded",()=>{

  if(window.location.href.includes("/docs.html")){
    renderSidebar(pythonSidebar);
  }
  if(window.location.href.includes("/index.html")){
    showExampleMatlang()
  }
})











