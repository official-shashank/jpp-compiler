let selectedTab=""

function getDataOfSelectedTag(){
    return PyhtonData[selectedTab]
}

function renderData(data){
    document.getElementById("title")?.innerText=data["title"]
    document.getElementById("subtitle")?.innerText=data["subtitle"]
}

document.addEventListener("DOMContentLoaded", () => {
    const sidebarList = document.getElementsByClassName("sidebar-item");
    Array.from(sidebarList).forEach(element => {
        element?.addEventListener("click", (e) => {
            selectedTab=e.target.innerText;
            // console.log(selectedTab)
            let data = getDataOfSelectedTag();
            renderData(data);
            
        });
    });
    
});


