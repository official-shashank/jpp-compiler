let selectedTab = "";

function getDataOfSelectedTag() {
  return PyhtonData[selectedTab];
}

function renderData(data) {
  document.getElementById("title").innerText = data["title"];
  document.getElementById("subtitle").innerText = data["subtitle"];
}

// this function will render only specific data which is unidentical in the data object
// i.e (Python Home, Python Intro and MatLang Home, Matlang Intro)
function renderSpecificsData(data) {
  const mainContainer = document.getElementById("main-core-div");
  // mainContainer.innerHTML = "";
  mainContainer.innerHTML = data;
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarList = document.getElementsByClassName("sidebar-item");
  Array.from(sidebarList).forEach((element) => {
    element?.addEventListener("click", (e) => {
      selectedTab = e.target.innerText;
      console.log(selectedTab);
      let data = getDataOfSelectedTag();
      console.log(data.length);
      (!data["title"] || !data["subtitle"]) && data.length > 1 // if one of them is undefined which means we have keys but value is different.
        ? renderSpecificsData(data)
        : renderData(data);
    });
  });
});
