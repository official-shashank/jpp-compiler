// // --------------------------------------------------------------------------------
// // -----------------------------Only for Documentation Side-------------------------------




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

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.includes("/docs.html")) {
    renderSidebar(matLangSidebar);
  }
  if (window.location.href.includes("/index.html")) {
    showExampleMatlang();
  }

});



<<<<<<< HEAD
=======
  if (radio2.checked) {
    renderSidebar(pythonSidebar);
  } else if (radio1.checked) {
    renderSidebar(matLangSidebar);
  }
>>>>>>> 39340224445461222a9aaa03fcf6f9f02ff5226d


