//ELEMENTS
const todoInput = document.getElementById(todo-input);
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {
    getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () =>{
    // get TodoList from LocalStorage and load to UI
}

//Form => Submit event vs. button => clicl event
// form.addEventListener("submit", () => {})
addBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    if(todoInput.value.trim() === ""){
        alert("Please, enter an item");
        // return;
    }
    else{
    alert("Clicked");
    }
})