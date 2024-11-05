document.addEventListener("DOMContentLoaded", () => {
  let todoInput = document.querySelector("#todo-input");
  let addTaskBtn = document.querySelector(".submit-btn");
  let todoList = document.querySelector(".todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskBtn.addEventListener("click", () => {
    let taskText = todoInput.value.trim();

    if (taskText === "") return;

    let newTask = {
      id: Date.now(),
      text: taskText,
      complete: false,
    };

    tasks.push(newTask);
    saveTasks();
    todoInput.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
    `;
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
