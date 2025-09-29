// todo.js

function createTodoManager() {
  let tasks = []; // private with closure

  // Add a task
  function addTask(text) {
    tasks.push({ text, completed: false });
  }

  // Toggle task completion
  function toggleTask(index) {
    if (tasks[index]) {
      tasks[index].completed = !tasks[index].completed;
    }
  }

  // Remove a task
  function removeTask(index) {
    if (tasks[index]) {
      tasks.splice(index, 1);
    }
  }

  // List tasks
  function listTasks() {
    return tasks.map(
      (t, i) => `${i}. ${t.text} [${t.completed ? "✓" : " "}]`
    );
  }

  // Return public API
  return {
    addTask,
    toggleTask,
    removeTask,
    listTasks,
  };
}

// Example of using 'this' in an object method
const manager = {
  name: "MyTodoManager",
  printName() {
    console.log(`This is: ${this.name}`);
  },
};

// ----- TRY IT OUT -----
const todo = createTodoManager();

// Adding tasks
todo.addTask("Learn closures");
todo.addTask("Understand this");

// Listing tasks
console.log(todo.listTasks()); 
// ["0. Learn closures [ ]", "1. Understand this [ ]"]

// Toggling a task
todo.toggleTask(0);
console.log(todo.listTasks()); 
// ["0. Learn closures [✓]", "1. Understand this [ ]"]

// Removing a task
todo.removeTask(1);
console.log(todo.listTasks()); 
// ["0. Learn closures [✓]"]

// Using 'this' in object method
manager.printName(); // "This is: MyTodoManager"
