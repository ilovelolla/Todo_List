const addfolder = document.getElementById("addFolder");
const sidenav = document.querySelector(".sidenav");
const wrapper = document.querySelector(".wrapper");
const tabContent = document.querySelector(".tab-content");
addfolder.addEventListener("click", displayFolders);


var names = document.querySelector("#folderTitle");

export var Todofolders = [];

export function displayFolders(e){ 
     e.preventDefault(e);
     const folderName = names.value;
    if(Todofolders.includes(folderName)) {
        alert("already added")
    } else {
    Todofolders.push(folderName);
     createFolder(folderName)
    }
}

function createFolder(folderName) {
    //add list
    var list = document.createElement("li");
    //add anchor
    var a = document.createElement("a");
    a.href = "#" + folderName;
    a.textContent = folderName;

    // tab content
    var tab = document.createElement("div")
    tab.id = folderName
    tab.className = "tab-pane"

    var text = document.createElement("div")
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."


    //append
    list.appendChild(a);
    wrapper.appendChild(list);
    tab.appendChild(text);
    tabContent.appendChild(tab);

}



export function showTab(event) {
    let activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

wrapper.addEventListener("click", showTab, false)
// export {Todofolders}

