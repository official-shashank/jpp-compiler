document.addEventListener("DOMContentLoaded", () => {
  // sid-bar content loader
  sideBar.innerHTML = "";
  sideBarHead.forEach((item) => {
    sideBar.innerHTML += `
        <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-600 dark:hover:bg-gray-700 group">
               <span class="ms-3">${item}</span>
            </a>
         </li>
        `;
  });
});
