
 
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
   console.log(myTodo)
   var json = JSON.stringify(myTodo);
   console.log(json)

;
}









export {getValues, myTodo}