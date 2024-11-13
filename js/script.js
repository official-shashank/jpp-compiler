const pythonSidebar = [
  "Python Home",
  "Python Intro",
  "Python Getting Started",
  "Python Syntax",
  "Python Component",
  "Python Variable",
  "Python Data Types",
  "Python Numbers",
  "Python Casting",
  "Python Settings",
  "Python Boolean",
  "Python Operators",
  "Python Lists",
  "Python Tuples",
  "Python Sets",
  "Python Dictionaries",
  "Python If....Else",
  "Python While Loops",
  "Python For Loops",
  "Python Functions",
  "Python Lamdba",
  "Python Arrays",
  "Python Classes/Objects",
  "Python Inheritance",
  "Python Iterators",
  "Python Polymorphism",
  "Python Scope",
  "Python Modules",
  "Python Dates",
  "Python JSON",
  "Python RegEx",
  "Python PHP",
  "Python Try...Except",
  "Python User Input",
  "Python String Formatting",
];

const matLangSidebar = [];

let sidebar = "";

function renderSidebar(sidebarData) {
  sidebarData.map((item, key) => {
    sidebar += `
         <li key=${item} class="sidebar-item">
            <a href="#" class="flex items-center p-2 text-gray-400 rounded-lg dark:text-white hover:bg-gray-700  dark:hover:bg-gray-700 group">
               <span class="ms-3">${item}</span>
            </a>
         </li>
      
      `;
    document.getElementById("sidebarTarg").innerHTML = sidebar;
  });
}

renderSidebar(pythonSidebar);

let sidebarItems = document.getElementsByClassName("sidebar-item");

for (let i = 0; i < sidebarItems.length; i++) {
  sidebarItems[i].addEventListener("click", (e) => {
    console.log(e.target.innerText);
    renderClickedContent(matLangData[e.target.innerText]);
  });
}

function renderClickedContent(data) {
  document.getElementById("title").innerText = data["title"];
  document.getElementById("subtitle").innerText = data["subtitle"];
}
