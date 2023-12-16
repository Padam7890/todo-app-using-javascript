const text = document.getElementById("text");
const list = document.getElementById("lists");
const task_text = document.getElementById("task_text");

const todoApp = [];

//add task from button click
function addTask() {
  if (text.value === "") {
    alert("No text entered.");
  } else {
    todoApp.push({
      title: text.value,
      completed: false,
    });
    text.value = "";
    todos();
  }
}

//delete task after button click
function deleteTask(index) {
  todoApp.splice(index, 1);

  //render todos
  todos();
}

//edittask After button click , display prompt box and show previous data
function editTask(index) {
  const newData = prompt("Edit this Data", todoApp[index].title);
  if (newData !== null && newData.trim() !== "") {
    todoApp[index].title = newData;
  }

  //render todos
  todos();
}

//main todos function to display todos list
function todos() {
  list.innerHTML = "";

  //forloop todolist items
  for (let index = 0; index < todoApp.length; index++) {
    const element = todoApp[index];

    //show all list in html views where all elements are html inside js
    //deleteTask{index}   calling a function and transfering all data to function through index
    list.innerHTML += `
      <li>
         
        <label> Title: ${element.title}</label>
        <p class="completed"> Completed: ${element.completed}</p>
        <button onclick="deleteTask(${index})" class="delete"> Delete </button>
        <button onclick="editTask(${index})"  class="edit"> Edit </button>

      </li>
    `;
  }
}
