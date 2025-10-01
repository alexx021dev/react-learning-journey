

async function fetchTodos() {
  try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      
      if(!res.ok) {
          console.log("serever error");
          return;
      }
      const data = await res.json();
      const completed = data.filter(x => x.completed);
      
      console.log("first 5 completed todos");
      completed.slice(0, 5).forEach(x => {
      console.log(`- [${x.id}] ${x.title}`);
    });
      
  }catch (err) {
    console.error("Failed to fetch todos:", err.message);
  }
}

fetchTodos();


