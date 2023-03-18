const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const clearBtn = document.querySelector('#clear-btn');

// get todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// render todos
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <input type="checkbox" class="checkbox mr-2" ${todo.completed ? 'checked' : ''}>
      <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <button type="button" class="close ml-2" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });
    const span = li.querySelector('span');
    span.addEventListener('click', () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });
    const closeButton = li.querySelector('.close');
    closeButton.addEventListener('click', () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });
    todoList.appendChild(li);
  });
}

// add todo
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    const todo = {
      text,
      completed: false
    };
    todos.push(todo);
    saveTodos();
    input.value = '';
    renderTodos();
  }
});

// clear todos
clearBtn.addEventListener('click', () => {
  todos = [];
  saveTodos();
  renderTodos();
});

// save todos to localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// initial render
renderTodos();
