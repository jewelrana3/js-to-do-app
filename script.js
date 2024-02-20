const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const incompleteList = document.querySelector("#items");
const complete = document.querySelector(".complete-list ul");

let createTask = function (task) {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  const listItem = createTask(newTask.value);
  incompleteList.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindIncompletes(listItem, completeTask);
};

let completeTask = function () {
  const listItem = this.parentNode;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList = "delete";
  listItem.appendChild(deleteBtn);

  const checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.remove();

  complete.appendChild(listItem);

  bindComplete(listItem, deleteTask);
};

let bindComplete = function (taskItem, deleteClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteClick;
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindIncompletes = function (taskItem, checkboxClick) {
  const checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

for (let i = 0; i < incompleteList.children.length; i++) {
  bindIncompletes(incompleteList.children[i], completeTask);
}
for (let i = 0; i < complete.children.length; i++) {
  bindComplete(complete.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
