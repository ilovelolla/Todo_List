const addfolder = document.getElementById("addFolder");
const sidenav = document.querySelector(".sidenav");
const wrapper = document.querySelector(".wrapper");
const tabContent = document.querySelector(".tab-content");
var names = document.querySelector("#folderTitle");



const createDefaultTab = () => {
   var list = document.createElement("li");
   list.className = "active"
   list.id = "tab1"
    //add anchor
    var a = document.createElement("a");
    a.href = "#default";
    a.innerHTML = "Default Tab";

    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete`
    deleteBtn.className = "delete"
    deleteBtn.onclick = () => {
      list.remove()
    }

    // tab content
    var defaultTab = document.createElement("div")
    defaultTab.id = "default"
    defaultTab.className = "tab-pane active"

    var defaultText = document.createElement("div");
    defaultText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure quos cum, saepe reprehenderit minima quasi architecto numquam nesciunt dicta.
    Qui excepturi recusandae vitae maiores, inventore sequi? Rerum, odio omnis.`;
    
    list.appendChild(a);
    list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    defaultTab.appendChild(defaultText);
    tabContent.appendChild(defaultTab);
}


const createFolder = (e) => {
    e.preventDefault();
    const folderName = names.value;
      //add list
    var list = document.createElement("li");
    //add anchor
    var a = document.createElement("a");
    a.href = "#" + folderName;
    a.innerHTML = folderName;

    //delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `Delete`
    deleteBtn.className = "delete"

    // tab content
    var tab = document.createElement("div")
    tab.id = folderName
    tab.className = "tab-pane"

    var text = document.createElement("div")
    text.innerHTML =  '<h2>+</h2><br><br><div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </div>';

    //append
    list.appendChild(a);
     list.appendChild(deleteBtn);
    wrapper.appendChild(list);
    tab.appendChild(text);
    tabContent.appendChild(tab);
};



//switch tab

const switchTab = (event) => {
    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
};
 
// delete folders

document.addEventListener('click', function (e) {
  if (e.target.matches('.delete'))
    e.target.parentNode.remove()
}, false);


wrapper.addEventListener("click", switchTab, false);
addfolder.addEventListener("click", createFolder);
createDefaultTab();

export {switchTab, createFolder}

