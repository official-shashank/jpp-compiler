let curRef;
// Data Set for sidebar
const sideBarHead = [
  "Python Home",
  "Python Intro",
  "Python Getting Started",
  "Python Syntax",
  "Python Component",
  "Python Variable",
  "Python Data Types",
  "Python Numbers",
  "Shivam",
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

const sideBar = document.getElementById("sidebarTarg");

function renderData(id) {
  if (curRef) {
    const curRefEle = document.getElementById(curRef);
    curRefEle.classList.remove("highlight");
    console.log(id);
    console.log(curRefEle.innerText);
  }
  curRef = `pyRef${id}`;
  highlightRef(curRef);
}
function highlightRef(ele) {
  const pyReference = document.getElementById(ele);
  pyReference.classList.add("highlight");
}
