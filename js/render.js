


function getDataOfSelectedTab() {
  if (selectedLang === "python") {
    return PythonData[selectedTab];
  } else if (selectedLang === "matlang") {
    return MatLangData[selectedTab];
  }
}



document.getElementById("language").addEventListener("change",(e)=>{
  if(e.target.value=="python"){
    selectedLang=e.target.value;
    renderSidebar(pSidebar);
    selectedTab=pSidebar[0];
    renderData(getDataOfSelectedTab());
  }
  else if(e.target.value==="matlang"){
    selectedLang=e.target.value;
    renderSidebar(mSidebar);
    selectedTab=mSidebar[0];
    renderData(getDataOfSelectedTab())
  }
})

const sideBar = document.getElementById("sidebarTarg");

function renderSidebar(data) {
  const sidebarTarg = document.getElementById("sidebarTarg");
  sidebarTarg.innerHTML = ""; 
  
  let lastSelectedItem = null; // Variable to keep track of the last selected item
  
  data.forEach((item, idx) => {
    const listItem = document.createElement("li");
    listItem.classList.add("sidebar-item");

    listItem.innerHTML = `
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
        <span id="list${idx}" class="text-gray-400 ms-3">${item}</span>
      </a>
    `;
  
    sidebarTarg.appendChild(listItem);

    listItem.addEventListener("click", () => {
      // Remove the highlight class from the previous item if there was one
      if (lastSelectedItem) {
        lastSelectedItem.classList.remove("highlight");
      }

      // Add the highlight class to the clicked item
      listItem.classList.add("highlight");

      // Store the current selected item
      lastSelectedItem = listItem;

      selectedTab = item;
      console.log("Selected Tab:", selectedTab);

      const data = getDataOfSelectedTab();
      renderData(data);
    });
  });
}



function renderData(data) {
  let finalResult="";
  if(data["title"] || data["subtitle"]){
    finalResult+=funcTitle(data["title"],data["subtitle"]);
  }
  
  if(data["description"]){
    finalResult+=funcDescription(data["description"]);
  }
  
  if(data["tableOfContents"]){
    finalResult+=tableContent(data["tableOfContents"]);
  }

  if(data["syntax"]){
    finalResult+=syntax(data["syntax"]);
  }

  if(data["example"]){
     finalResult+=codeEditor(data["example"]);
  }

  if(data["Ques"]){

    
  }

  
 

  document.getElementById("data-container").innerHTML=finalResult;
}

renderData(getDataOfSelectedTab());



