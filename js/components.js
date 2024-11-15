const funcTitle = (title, subtitle) => {
  return `
    <div class="py-4 px-4  flex flex-col  items-start justify-start p-12  mb-4 rounded  dark:bg-gray-800">

            <h2 id="title" class="text-5xl mb-8 text-gray-200 font-bold dark:text-white">${title}</h2>

            <!-- navigation button -->
            <div class="navigation w-full pt-8  flex  ">
               <!-- Previous Button -->
               <a href="#"
                  class="flex items-center justify-center px-5 h-8 text-sm font-medium text-white bg-blue-700 border-blue-700 border-gray-300  hover:bg-blue-800 hover: dark:bg-blue-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Home
               </a>
               <!-- Next Button -->
               <a href="#"
                  class="flex items-center justify-center px-5 h-8 text-sm font-medium text-white bg-blue-700 border-blue-700 border-gray-300  hover:bg-blue-800 hover: dark:bg-blue-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
               </a>
            </div>

            <hr class="w-full h-px my-8 mb-10 bg-gray-400 border-0 dark:bg-gray-700">

            <!-- Sub-Heading -->
            <p id="subtitle" class="mb-3 text-gray-300 dark:text-gray-400">${subtitle}
            
            </p>

            <hr class="w-full h-px my-8 mb-10 bg-gray-400 border-0 dark:bg-gray-700">
</div>
    
    
    `;
};

const funcDescription = (disc) => `
 <p id="subtitle" class="mb-3 text-gray-300 dark:text-gray-400">${disc}
            
            </p>



`;

const tableContent = (tableData) => {
  let tempeRes = "";

  tableData.map((item) => {
    tempeRes += `

        <li class="font-medium text-gray-300  hover:text-blue-700 dark:text-blue-700 hover:underline">
        ${item}
        </li>


         `;
  });

  return `
       <div class="p-4 flex flex-col justify-center items-start gap-4 h-auto mb-4  dark:bg-gray-800">
             ${tempeRes}
           </div>
       
       
       `;
};

const syntax = (syntax) => {
  return `
        <div class="bg-gray-800 text-sm font-medium py-2 px-4 rounded-lg border border-gray-700 shadow-md text-white">
        <code>${syntax}</code>
      </div>
        
        
        `;
};

const codeEditor = (data) => {
  let tempRes = "";

  data.forEach((item) => {
    tempRes += `
         <div class="grid  w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-4">
               <div
                  class="px-4 py-4 flex flex-col justify-start items-start gap-4 rounded bg-gray-600 h-auto dark:bg-gray-800">
                  

                  <!-- Dropdown menu -->
                  <div
                     class=" p-4 flex flex-col justify-start items-start w-full text-gray-200   bg-gray-800 h-auto dark:bg-gray-800">
                     <div class="code text-left ">
${item.input}
               </div>
                  </div>
                  <div class="flex w-full h-auto items-center justify-center ">
                     <button type="button"
                        class="text-gray-900 bg-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Run</button>
                     <div class=" code p-1 w-full h-auto bg-gray-900 text-white">>>
                     </div>
                  </div>
               </div>
               <div
                  class=" px-4 py-4 flex flex-col justify-start items-start gap-4 rounded bg-gray-600 h-auto dark:bg-gray-800">
                

                  <!-- Dropdown menu -->
                  
                  <div
                     class=" p-4 flex flex-col justify-start items-start w-full text-gray-200   bg-gray-800 h-auto dark:bg-gray-800">
                     <div class="code text-left ">
${item.output}
               </div>
                  </div>
                  <div class="flex w-full h-auto items-center justify-center ">
                     <button type="button"
                        class="text-gray-900 bg-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Run</button>
                     <div class=" code p-1 w-full h-auto bg-gray-900 text-white">>>
                     </div>
                  </div>
               </div>
            </div>

            
        
        `;
  });

  return tempRes;
};


const funcWithQuesEditor=(data)=>{
   let tempRes=""
   data.forEach((item)=>{
     tempRes+=`
      <div class="p-4 flex flex-col justify-center items-start gap-4 h-auto mb-4  dark:bg-gray-800">
            <h3 class="text-3xl font-bold text-gray-200 dark:text-white">${item.Ques}
            </h3>
            <p class="text-gray-200 dark:text-gray-400">${item.sol1}</p>
            
         </div>
     
     `
     item.code1.forEach((item)=>{
      tempRes+=`
      
      <div class="grid  w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4 mt-4">
               <div
                  class="px-4 py-4 flex flex-col justify-start items-start gap-4 rounded bg-gray-600 h-auto dark:bg-gray-800">
                  

                  <!-- Dropdown menu -->
                  <div
                     class=" p-4 flex flex-col justify-start items-start w-full text-gray-200   bg-gray-800 h-auto dark:bg-gray-800">
                     <div class="code text-left ">
${item.code}
               </div>
                  </div>
             
               </div>
               
            </div>

      
      `
     })
     
   })

   
   return tempRes;
}
const hr = `<hr class="w-full h-px my-0 mb-0 bg-gray-600 border-0 dark:bg-gray-700">`;

const editorQues = `    `;

const bottomPrevNext = `<div class="navigation w-full pt-8  flex">
            <!-- Previous Button -->
            <a href="#"
               class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Previous
            </a>

            <!-- Next Button -->
            <a href="#"
               class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Next
            </a>
         </div>`;
