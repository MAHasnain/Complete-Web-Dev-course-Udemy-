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
    renderTask(newTask);
    todoInput.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.complete) li.classList.add("complete");
    li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.complete = !task.complete;
      li.classList.toggle("complete");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id === task.id);
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
