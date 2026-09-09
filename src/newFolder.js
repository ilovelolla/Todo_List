import { Tabs } from "./switchTab";


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
  //    deleteBtn.onclick = function() {
  //   list.remove();
  // }

    // tab content
    var defaultTab = document.createElement("div")
    defaultTab.id = "default"
    defaultTab.className = "b-tabs active"

    var defaultText = document.createElement("div");
    defaultText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.
    Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.`;
    
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    defaultTab.appendChild(defaultText);
    tabContent.appendChild(defaultTab);
    Tabs()
}


function createFolder(e) {
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
  //   deleteBtn.onclick = function() {
  //   list.remove();
  // }

    // tab content
    var tab = document.createElement("div")
    tab.id = folderName
    tab.className = "b-tabs"
    tab.innerHTML =  '<h2>+</h2><br><br><div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </div>';

    //append
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    tabContent.appendChild(tab);
    Tabs()
};



//switch tab

// const switchTab = (event) => {
//   //   let activeTabs = document.querySelectorAll('.active');

//   //   activeTabs.forEach(function(tab) {
//   //   tab.className = tab.className.replace('active', '');
//   // });

//   // event.target.parentElement.className += ' active';
//   // document.getElementById(event.target.href.split('#')[1]).className += ' active';

// };
 

document.addEventListener('click', function (e) {
  if (e.target.matches('.delete'))
    e.target.parentNode.remove()
}, false);


// wrapper.addEventListener("click", switchTab, false);
addfolder.addEventListener("click", createFolder);
createDefaultTab()


export { createFolder, createDefaultTab}