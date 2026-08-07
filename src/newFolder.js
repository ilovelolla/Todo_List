const addfolder = document.getElementById("addFolder")
const sidenav = document.querySelector(".sidenav")
const wrapper = document.querySelector(".wrapper")
addfolder.addEventListener("click", addTest)


var names = document.querySelector("#folderTitle")

export var Todofolders = [];


export function addTest(e){ 
     e.preventDefault();
    if(Todofolders.includes(names.value)) {
        alert("already added")
    } else {
    Todofolders.push(names.value);
    for(let i=0; i<Todofolders.length; i++) {
        // create buttons
        var btns =  document.createElement("button");
        btns.id = `${Todofolders.length-1}`
        btns.innerHTML += `${names.value}`

        wrapper.appendChild(btns)
    }  
    }
}

// function createFolders() {
  
// for(let i=0; i<Todofolders.length; i++) {
//         // create buttons
//         var btns =  document.createElement("button");
//         btns.id = `${Todofolders.length-1}`
//         btns.innerHTML += `${names}`

//         wrapper.appendChild(btns)
//     }
// }







// function createFolder(e) {
//     e.preventDefault();
//      let nameFolder = document.getElementById("folderTitle").value;
//      addtoTodofolders(nameFolder);
//      console.log(nameFolder);

// }

// class Folders {
//     #nameFolder;
//     constructor(nameFolder) {
//         this.nameFolder = nameFolder
//         this.folderID =  uuidv4() 
//     }
// }

// function addtoTodofolders(nameFolder) {
//  const newFolder = new Folders(nameFolder)
//  Todofolders.push(newFolder);
//  displayFolders();
// }

// function displayFolders(){
//     document.getElementsByClassName("folders").innerHTML = "";
//     for(let i=0; i<Todofolders.length; i++) {

//         let card = document.createElement("div");
//             card.classList.add("cards");
//             card.id = myLibrary[i].bookID;
//             card.classList.add(`${myLibrary.bookid}`)



//         let nameFolder = document.createElement("p");
//             nameFolder.textContent = Todofolders[i].nameFolder;
           
//     }
// }




// export {Todofolders}

