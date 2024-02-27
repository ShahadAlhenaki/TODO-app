let todos = [
  {
    title: "Do assignment",
    description: "JS assignment before midnight",
  },
  {
    title: "Do laundry",
    description: " wash black clothes",
  },
  {
    title: "Play with my cat",
    description: "12 min",
  },
];
const form = document.getElementById("add-todo");
const editForm = document.getElementById("edit-form");
const deleteAllBtn = document.getElementById("delete-all");
const ul = document.createElement("ul");

function renderTodos(array) {
  ul.innerHTML = "";
  const container = document.querySelector(".container");

  ul.classList.add("todos");
  container.appendChild(ul);

  array.forEach((task) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const description = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "edit-btn");

    editBtn.addEventListener("click", (e) => {
      const todo = e.target.parentNode;
      const currentTitle = todo.querySelector("span").textContent;
      const currentDescription = todo.querySelector("p").textContent;
      const titleInput = document.querySelector(".edit-title");
      const descriptionInput = document.querySelector(".edit-description");

      titleInput.value = currentTitle;
      descriptionInput.value = currentDescription;
    });

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      const todo = e.target.parentNode;
      const selectedTodo = todo.querySelector("span").textContent;

      removeTodo(selectedTodo);
    });

    li.classList.add("todo");
    title.textContent = task.title;
    description.textContent = task.description;

    li.append(title, description, deleteBtn, editBtn);
    li.appendChild(checkbox);
    ul.appendChild(li);
  });
}
function addTodo(value) {
  const ul = document.querySelector(".todos");
  const li = document.createElement("li");
  const title = document.createElement("span");
  const description = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const todo = {
    title: value,
    description: "write your description here",
  };
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "edit-btn");

  editBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode;
    const currentTitle = todo.querySelector("span").textContent;
    const currentDescription = todo.querySelector("p").textContent;
    const titleInput = document.querySelector(".edit-title");
    const descriptionInput = document.querySelector(".edit-description");

    titleInput.value = currentTitle;
    descriptionInput.value = currentDescription;
  });

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn", "delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    const todo = e.target.parentNode;
    const selectedTodo = todo.querySelector("span").textContent;

    removeTodo(selectedTodo);
  });

  todos.push(todo);

  title.textContent = todo.title;
  description.textContent = todo.description;
  li.classList.add("todo");

  li.append(title, description, deleteBtn, editBtn);
  li.appendChild(checkbox);
  ul.appendChild(li);
}

function removeTodo(selectedTodo) {
  const filteredTodo = todos.filter((todo) => {
    return todo.title !== selectedTodo;
  });
  todos = filteredTodo;
  renderTodos(filteredTodo);
}

form.addEventListener("submit", (e) => {
  const value = document.querySelector(".todo-input").value;
  addTodo(value);

  e.preventDefault();
});

deleteAllBtn.addEventListener("click", () => {
  todos = [];
  renderTodos(todos);
});

let previousTitle;

window.addEventListener("load", () => {
  renderTodos(todos);

  const editBtns = document.querySelectorAll(".edit-btn");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const todo = e.target.parentNode;
      const currentTitle = todo.querySelector("span").textContent;
      const currentDescription = todo.querySelector("p").textContent;
      const titleInput = document.querySelector(".edit-title");
      const descriptionInput = document.querySelector(".edit-description");

      titleInput.value = currentTitle;
      descriptionInput.value = currentDescription;
    });
  });
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTitle = document.querySelector(".edit-title").value;
  const newDescription = document.querySelector(".edit-description").value;

  const updatedTodos = todos.map((todo) => {
    const isMatch = todo.title === previousTitle;
    if (isMatch) {
      return {
        title: newTitle,
        description: newDescription,
      };
    }
    return todo;
  });
  console.log("DD", updatedTodos);
  renderTodos(updatedTodos);
  e.target.reset();
});
