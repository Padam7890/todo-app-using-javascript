const text = document.getElementById("text");
const list = document.getElementById("lists");

const todoApp = JSON.parse(localStorage.getItem("data")) || [];

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
    save();
  }
}

function updateCompleted(index) {
  todoApp[index].completed = document.getElementById(
    `checkbox${index}`
  ).checked;
  todos();
  save();
}

function deleteTask(index) {
  todoApp.splice(index, 1);
  todos();
  save();
}

function editTask(index) {
  const newData = prompt("Edit Todo List message", todoApp[index].title);
  if (newData !== null && newData.trim() !== "") {
    todoApp[index].title = newData;
    todos();
    save();
  }
}

function todos() {
  list.innerHTML = "";

  for (let index = 0; index < todoApp.length; index++) {
    const element = todoApp[index];
    list.innerHTML += `
      <li>
        <input type="checkbox" class="task-checkbox" id="checkbox${index}" onclick="updateCompleted(${index})" ${
      element.completed ? "checked" : ""
    }>
        <label>${element.title}</label>
        <div class="action-buttons">
        <button class="edit" onclick="editTask(${index})">Edit </button>
        <button class="delete" onclick="deleteTask(${index})">Delete </button>
           </div>
        </li>
    `;
  }
}

function save() {
  localStorage.setItem("data", JSON.stringify(todoApp));
}

todos();
