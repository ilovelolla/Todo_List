import { Tabs} from "./switchTab";
import { addTodo, getValues } from "./createTodo";

const addfolder = document.getElementById("addFolder");
const sidenav = document.querySelector(".sidenav");
const wrapper = document.querySelector(".wrapper");
const tabContent = document.querySelector(".tab-content");
var names = document.querySelector("#folderTitle");



function createDefaultTab() {
     var list = document.createElement("li");
  
    //add anchor
    var a = document.createElement("a");
    a.href = "#default";
    a.dataset.tab = "default";
    a.className = "nav-tab  active"
    a.innerHTML = "Default Tab";

    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete`
    deleteBtn.className = "delete"
    
    deleteBtn.onclick = function() {
    list.remove();
    defaultTab.remove()
  }

    // tab content
    var defaultTab = document.createElement("div")
    defaultTab.id = "default"
    defaultTab.className = "b-tabs active"
    defaultTab.appendChild(createForm());
    
    var defaultText = document.createElement("div");
    defaultText.classList = "modalBtn"
    defaultText.innerHTML = "+";
    
    
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    defaultTab.appendChild(defaultText);
    tabContent.appendChild(defaultTab);
    Tabs();  
    
};
createDefaultTab()
function createFolder (e) {
   e.preventDefault();
    const folderName = names.value;
      //add list
    var list = document.createElement("li");
    
    //add anchor
    var a = document.createElement("a");
    a.href = "#" + folderName;
    a.dataset.tab = folderName;
    a.className = "nav-tab";
    a.innerHTML = folderName;

    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete`
    deleteBtn.className = "delete"
    deleteBtn.onclick = function() {
    list.remove();
    tab.remove();
  }

    // tab content
    var tab = document.createElement("div")
    tab.id = folderName
    tab.className = "b-tabs"
    tab.appendChild(createForm())
    // tab.textContent = createForm()

    var createText = document.createElement("div");
    createText.classList = "modalBtn"
    createText.innerHTML = "+";
    
    //append
    list.appendChild(a);
    list.appendChild(deleteBtn);
    tab.appendChild(createText)
    tabContent.appendChild(tab);
    wrapper.appendChild(list);
    Tabs()
     
};


function createForm() {
    //container 
    const container =  document.createElement('div')
    container.className = "container"
    //header
    const header = document.createElement("div")
    header.classList = "headerModal"
    const headerText = document.createElement("h2")
    headerText.textContent = "Todo List"
    
    const closeBtn = document.createElement("span")
    closeBtn.textContent = "-"
    closeBtn.classList = "closeBtn_modal";

    //form
    const myForm = document.createElement('form');
    myForm.id = "myForm"
    myForm.classList = "modalForm"
    // myForm.onclick = modalX()
    //title
    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'Title';
    labelTitle.htmlFor = 'Title'
    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.id = 'title'
    title.placeholder = 'Name of your Todo';

    //description
    const labelDescription = document.createElement('label');
    labelDescription.textContent = 'Description';
    labelDescription.htmlFor = 'description'

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.id = "description"
    description.placeholder = 'Description of your Todo';

    //dueDate
    const labelDate = document.createElement('label');
    labelDate.textContent = 'Date';
    labelDate.htmlFor = 'date'

    const date = document.createElement('input')
    date.type = "date"
    date.id = "dueDate"
    date.required = "required"

    //priority
    const labelPrio = document.createElement('label');
    labelPrio.textContent = 'Priority';
    labelPrio.htmlFor = 'priority';

    const newList = document.createElement("select");
    newList.appendChild(new Option("High", "High"));
    newList.appendChild(new Option("Medium", "Medium"));
    newList.appendChild(new Option("Low", "Low"));
    newList.id = "priority"
    
    // submit
    const submitBtn = document.createElement("input")
    submitBtn.type = "submit"
    submitBtn.value = "submit"
    submitBtn.id = "submitbtn"

     header.appendChild(headerText);
     header.appendChild(closeBtn);
     container.appendChild(header);
     myForm.appendChild(labelTitle);
     myForm.appendChild(title);
     myForm.appendChild(labelDescription);
     myForm.appendChild(description);
     myForm.appendChild(labelDate);
     myForm.appendChild(date);
     myForm.appendChild(labelPrio);
     myForm.appendChild(newList);
     myForm.appendChild(submitBtn);
     container.appendChild(myForm);
     
     return container;
}

function controlModal(e) {
  const target = e.target.closest(".modalBtn"); // Or any other selector.
  const closeModal = e.target.closest(".closeBtn_modal");
  var form = e.target.closest("#myForm");
  var submitform = e.target.closest("#submitbtn")
  var modal = document.querySelectorAll(".container");

[].forEach.call(modal, function(container) {
 
  if(target){
    container.style.display = "block";
   
  }
  if(closeModal) {
    container.style.display = "none";
} 
  if(form && submitform) {
    e.preventDefault();
  //    const formData = new FormData(form);
  // const formProps = Object.fromEntries(formData);
  // console.log(Object.fromEntries(formData))
  getValues(form)
  }
});};




tabContent.addEventListener("click", controlModal)
addfolder.addEventListener("click", createFolder);

export { createFolder, createDefaultTab}