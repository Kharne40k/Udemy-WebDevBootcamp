var todos = [];

while (input !== "quit") {
  var input = prompt("What would you like to do?");

  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
}
console.log("You have quit the app.");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added " + newTodo +" to todo list");
}

function deleteTodo(){
  var index = prompt("Enter index of todo list to delete");
  console.log("Deleting " + todos[index] + " from todo list");
  todos.splice(index, 1);
}
