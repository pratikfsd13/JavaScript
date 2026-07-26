const input = document.querySelector("#taskInput");
const todoList = document.querySelector("#todoList");

function addTask() {
    //validation
    if (input.value.trim() === "") {
        alert("Please enter a valid task.");
        return;
    }
    //create new li element
    const li = document.createElement("li");
    li.textContent = input.value;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    li.append("", completeBtn, "", deleteBtn);
    todoList.appendChild(li);

    //mark task as complete
    completeBtn.addEventListener("click",() => {
        li.classList.toggle("completed");
    });

    //delete task
    deleteBtn.addEventListener("click",() => {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = "";
}   