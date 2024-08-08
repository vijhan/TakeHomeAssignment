const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(todo){
  todos.push(todo);
}
function removeTodo(index){
  todos.splice(index, 1);
}
function editTodo(index, title, description){
  todos[index].title = title;
  todos[index].description = description;
}
function markTodoComplete(index){
  todos[index].complete = true;
}
function displayTodoLength(){
  console.log(todos.length);
}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  let ok = {
    title: "ok",
    description: "ok",
    complete: false
  }
  // You will need to call your methods above this comment to edit the todos array
  addTodo(ok);
  console.log(todos);
  editTodo(1,"happy", "happy");
  console.log(todos);
  removeTodo(1);
  console.log(todos);
  markTodoComplete(0);
  console.log(todos); 
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment
  displayTodoLength();
  // Print the length of the todos array above this comment
  // Iterare over the todos array and console.log each todo below this comment
  console.log(todos);
}

app();