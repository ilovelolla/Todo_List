const form = document.getElementById("myForm");
const folders = document.getElementsByClassName("folders");
form.addEventListener("submit", createFolder);


var Todofolders = [];

function createFolder(e) {
    e.preventDefault();
     let nameFolder = document.getElementById("folderTitle").value;
     addtoTodofolders(nameFolder);
     console.log(nameFolder);

}

class Folders {
    #nameFolder;
    constructor(nameFolder) {
        this.nameFolder = nameFolder
        this.folderID =  uuidv4() 
    }
}

function addtoTodofolders(nameFolder) {
 const newFolder = new Folders(nameFolder)
 Todofolders.push(newFolder);
 displayFolders();
}

function displayFolders(){
    document.getElementsByClassName("folders").innerHTML = "";
    for(let i=0; i<Todofolders.length; i++) {

        let card = document.createElement("div");
            card.classList.add("cards");
            card.id = myLibrary[i].bookID;
            card.classList.add(`${myLibrary.bookid}`)



        let nameFolder = document.createElement("p");
            nameFolder.textContent = Todofolders[i].nameFolder;
           
    }
}




export {Todofolders}

