# 📝 Todo Manager (JavaScript, Closures & `this`)

A simple todo list manager built in **plain JavaScript** to practice **closures** and **`this`**.  
All tasks are stored privately inside a closure, so they can only be managed via the exposed API.  

---

## 🚀 Features
- Add new tasks
- Toggle task completion
- Remove tasks
- List all tasks
- Clear all completed tasks
- Get a task safely by index
- Print a summary using `this`

---

## 📦 Usage
```js
const todo = createTodoManager();

// Add tasks
todo.addTask("Learn closures");
todo.addTask("Understand this");
todo.addTask("Build small projects");

// Toggle completion
todo.toggleTask(0);

// List tasks
console.log(todo.listTasks());
// ["0. Learn closures [✓]", "1. Understand this [ ]", "2. Build small projects [ ]"]

// Print summary (uses `this`)
todo.printSummary();

// Clear completed
todo.clearCompleted();
console.log(todo.listTasks());
