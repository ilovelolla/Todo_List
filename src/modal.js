//  import { tabContent, createDefaultTab } from "./newFolder";


//  function createForm() {
//     //container 
//     const container =  document.createElement('div')
//     container.className = "container"
//     //header
//     const header = document.createElement("div")
//     header.classList = "headerModal"
//     const headerText = document.createElement("h2")
//     headerText.textContent = "Todo List"
    
//     const closeBtn = document.createElement("span")
//     closeBtn.textContent = "-"
//     closeBtn.classList = "closeBtn_modal";

    
//     //form
//     const myForm = document.createElement('form');
//     myForm.id = "myForm"
//     myForm.classList = "modalForm"
//     //title
//     const labelTitle = document.createElement('label');
//     labelTitle.textContent = 'Title';
//     labelTitle.htmlFor = 'Title'
//     const title = document.createElement('input');
//     title.type = 'text';
//     title.name = 'title';
//     title.placeholder = 'Name of your Todo';

//     //description
//     const labelDescription = document.createElement('label');
//     labelDescription.textContent = 'Description';
//     labelDescription.htmlFor = 'description'

//     const description = document.createElement('input');
//     description.type = 'text';
//     description.name = 'description';
//     description.placeholder = 'Description of your Todo';

//     //dueDate
//     const labelDate = document.createElement('label');
//     labelDate.textContent = 'Date';
//     labelDate.htmlFor = 'date'

//     const date = document.createElement('input')
//     date.type = "date"
//     date.id = "setDate"
//     date.required = "required"

//     //priority
//     const labelPrio = document.createElement('label');
//     labelPrio.textContent = 'Priority';
//     labelPrio.htmlFor = 'priority';

//     const newList = document.createElement("select");
//     newList.appendChild(new Option("High", "High"));
//     newList.appendChild(new Option("Medium", "Medium"));
//     newList.appendChild(new Option("Low", "Low"));
    
//     // submit
//     const submitBtn = document.createElement("input")
//     submitBtn.type = "submit"
//     submitBtn.value = "submit"
//     submitBtn.id = "submitbtn"

//      header.appendChild(headerText);
//      header.appendChild(closeBtn);
//      container.appendChild(header);
//      myForm.appendChild(labelTitle);
//      myForm.appendChild(title);
//      myForm.appendChild(labelDescription);
//      myForm.appendChild(description);
//      myForm.appendChild(labelDate);
//      myForm.appendChild(date);
//      myForm.appendChild(labelPrio);
//      myForm.appendChild(newList)
//      myForm.appendChild(submitBtn)
//      container.appendChild(myForm)
     
//      return container
// }

// export function openModal(defaultText) {
    
//     const modalBtn = document.getElementsByClassName("modalBtn")
//     modalBtn.addEventListener("click", () => {
//         console.log("hello this works")
//     })
// }
