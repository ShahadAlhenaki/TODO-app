
const todos = [" Do assignment", "Do laundry", "Play with my cat"]
const container = document.querySelector(".container")


const ul = document.createElement("ul")
container.appendChild(ul)

todos.forEach((element) => {
    const li = document.createElement("li")
    li.classList.add("todo")
    li.textContent = element
    ul.appendChild(li)
});

const form = document.getElementById("add-todo")

const addTodoBtn = document.querySelector("#submit-btn")


const newTodo = document.querySelector(".todo-input").value
    
addTodoBtn.addEventListener("click", function (e) {
    
    const value = document.querySelector(".todo-input").value
    const li = document.createElement('li')
    console.log("newTodo:", newTodo)

    li.textContent = value
    ul.appendChild(li)
    e.preventDefault()

})



