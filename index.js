let todos = [{
   title: "Do assignment",
   description:"JS assignment before midnight",
},
   {  
    title: "Do laundry", 
    description:" wash black clothes",
},
   { 
    title:"Play with my cat",
    description:"12 min",
   }
]

const form = document.getElementById("add-todo")
const deleteAllBtn = document.getElementById("delete-all")
const ul = document.createElement("ul")


function renderTodos(array) {
ul.innerHTML = ""
const container = document.querySelector(".container")

ul.classList.add("todos")
container.appendChild(ul)

array.forEach((task) => {
    const li = document.createElement("li")
    const title = document.createElement("span")
    const description = document.createElement("p")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("btn", "delete-btn")
    deleteBtn.addEventListener("click", (e) => {
       const todo = e.target.parentNode
       const selectedTodo = todo.querySelector("span").textContent

       
        removeTodo(selectedTodo)
    })

    li.classList.add("todo")
    title.textContent = task.title
    description.textContent = task.description

    li.append(title, description)
    li.appendChild(deleteBtn)
    li.appendChild(checkbox)
    ul.appendChild(li)
})
}
function addTodo(value){
    const ul = document.querySelector(".todos")
    const li = document.createElement("li")
    const title = document.createElement("span")
    const  description = document.createElement("p")
    const deleteBtn = document.createElement("button")
    const todo = {
        title: value,
        description:"to be ",
    }
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("btn", "delete-btn")

    deleteBtn.addEventListener("click", (e) => {
       const todo = e.target.parentNode
       const selectedTodo = todo.querySelector("span").textContent

       removeTodo(selectedTodo)
    })

    todos.push(todo)

    title.textContent = todo.title
    description.textContent = todo.description
    li.classList.add("todo")

    li.append(title, description, deleteBtn)
    li.appendChild(checkbox)
    ul.appendChild(li)
}

function removeTodo(selectedTodo) {
const filteredTodo = todos.filter((todo) => {
return todo.title !== selectedTodo
})
todos = filteredTodo
renderTodos(filteredTodo)
}

form.addEventListener("submit" , (e) => {
const value = document.querySelector(".todo-input").value
addTodo(value)

e.preventDefault()
})

deleteAllBtn.addEventListener("click", () => {
todos = []
renderTodos(todos)
})

window.addEventListener("load", () => {
    renderTodos(todos)
})




 