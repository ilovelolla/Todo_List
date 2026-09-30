import { Tabs} from "./switchTab";
import { createForm } from "./modal";


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
    defaultText.innerHTML = "+";
    // defaultText.addEventListener("click", ()=> {
    //   createForm
    // })
    
    
    
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    // defaultTab.appendChild(defaultText);
    tabContent.appendChild(defaultTab);
    Tabs()    
}


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
    
    //append
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    tabContent.appendChild(tab);
    Tabs()
     
};

createDefaultTab()

// wrapper.addEventListener("click", switchTab, false);
addfolder.addEventListener("click", createFolder);


export { createFolder, createDefaultTab, tabContent}