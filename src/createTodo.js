
 
const myTodo = [];

class createTodo {
    constructor(title, description, dueDate, priority ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todoID =  uuidv4();
    }
}


function TodoValues() {
    // var title = document.getElementById("").value;
    // var description = document.getElementById("").value;
    // var dueDate = document.getElementById("").value;
    // var priority = document.getElementById("").value;

    // addTodo(title, description, dueDate, priority);
    console.log("ldldlld")
}

function addTodo(title, description, dueDate, priority) {
    const TodoList = new createTodo (title, description, dueDate, priority)
    myTodo.push(TodoList);
    console.log("hello")
}
console.log(myTodo)

export {addTodo, TodoValues}