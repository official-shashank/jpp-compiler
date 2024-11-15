let selectedTab = "Matlang Home";
let selectedLang="matlang"

function getDataOfSelectedTab() {
  if (selectedLang === "python") {
    return PyhtonData[selectedTab];
  } else if (selectedLang === "matlang") {
    return MatLangData[selectedTab];
  }
}

function renderData(data) {
  document.getElementById("title").innerText = data["title"];
  document.getElementById("subtitle").innerText = data["subtitle"];
}

renderData(getDataOfSelectedTab());


document.getElementById("language").addEventListener("change",(e)=>{
  if(e.target.value=="python"){
    selectedLang=e.target.value;
    renderSidebar(pythonSidebar);
  }
  else if(e.target.value==="matlang"){
    selectedLang=e.target.value;
    renderSidebar(matLangSidebar);
    renderData(getDataOfSelectedTab())
  }
})

const sideBar = document.getElementById("sidebarTarg");

function renderSidebar(data) {
  const sidebarTarg = document.getElementById("sidebarTarg");
  sidebarTarg.innerHTML = ""; 
  
  data.forEach((item, idx) => {
    const listItem = document.createElement("li");
    listItem.classList.add("sidebar-item");
    
   
    listItem.innerHTML = `
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
        <span id="list${idx}" class="text-gray-400 highlight ms-3 ">${item}</span>
      </a>
    `;

    listItem.classList.toggle("bg-green")

    sidebarTarg.appendChild(listItem);


    listItem.addEventListener("click", () => {
      selectedTab = item;
      console.log("Selected Tab:",selectedLang ,selectedTab);

      const data=getDataOfSelectedTab();
      renderData(data);
    });
  });
}


