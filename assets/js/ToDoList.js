const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const clearBtn = document.querySelector("#clear-btn");

// get todos from API
let todos = [];

function getTodos() {
  fetch("https://crudcrud.com/api/3cbb6d3953274443bf8f76745d44723f/ToDoList")
    .then((response) => response.json())
    .then((data) => {
      todos = data;
      renderTodos();
    });
}

// render todos
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
            <input type="checkbox" class="checkbox mr-2" ${
              todo.completed ? "checked" : ""
            }>
            <span class="${todo.completed ? "completed" : ""}">${
      todo.text
    }</span>
            <button type="button" class="close ml-2" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          `;
    const checkbox = li.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      updateTodo(todo._id, todo);
      renderTodos();
    });
    const span = li.querySelector("span");
    span.addEventListener("click", () => {
      todo.completed = !todo.completed;
      updateTodo(todo._id, todo);
      renderTodos();
    });
    const closeButton = li.querySelector(".close");
    closeButton.addEventListener("click", () => {
      deleteTodo(todo._id);
      renderTodos();
    });
    todoList.appendChild(li);
  });
}

// add todo
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const todo = {
      text,
      completed: false,
    };
    createTodo(todo);
    input.value = "";
  }
});

// clear todos
clearBtn.addEventListener("click", () => {
  clearTodos();
  renderTodos();
});

// create todo
function createTodo(todo) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todos),
  };
}
