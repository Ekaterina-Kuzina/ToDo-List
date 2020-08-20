// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption =document.querySelector(".filter-todo")

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);
//Functions

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    // Clear TODO input value
    todoInput.value = "";
}

function deleteCheck(e){
    event.preventDefault();
    const target =e.target;
    // DELETE TODO
    if(target.classList[0] === "trash-btn"){
        const todo = target.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }
    //CHECK MARK
    if(target.classList[0] === "completed-btn"){
        const todo = target.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
}