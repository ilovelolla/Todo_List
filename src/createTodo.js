
 
var myTodo = [];

console.log(myTodo)

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
    var datas = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
    ...memo,
    [key]: value,
  }), {});
  myTodo.push(datas)
   const uniqueArray = myTodo.filter((o, index, arr) =>
    arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
);
console.log(datas)
}







function addTodo(title, description, dueDate, priority) {
    const TodoList = new createTodo (title, description, dueDate, priority)
    myTodo.push(TodoList);
    console.log("hello")
}


export {addTodo, getValues, myTodo}