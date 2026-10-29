
 
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


function getValues(form) {
    var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  console.log(Object.fromEntries(formData));
}

function addTodo(title, description, dueDate, priority) {
    const TodoList = new createTodo (title, description, dueDate, priority)
    myTodo.push(TodoList);
    console.log("hello")
}
console.log(myTodo)

export {addTodo, getValues}