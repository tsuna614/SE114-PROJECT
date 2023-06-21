// document.addEventListener("DOMContentLoaded", function () {
//   // templateNote = document.getElementById("note.html");
//   // templateList = templateNote.content.getElementById("notelist.html");
//   // templateAdd = templateNote.content.getElementById("addpage.html");

//   // // Get the todo list element
//   // var todoList = templateList.content.getElementById("todo-list");
//   // // Get the new todo input element
//   // var newTodoInput = templateAdd.content.getElementById("new-todo");
//   // // Get the add button element
//   // var addButton = templateAdd.content.getElementById("add-button");

//   templateList = document.getElementById("notelist.html");
//   templateAdd = document.getElementById("addpage.html");

//   // Add event listener for the add button
//   addButton.addEventListener("click", function () {
//     // var newTodoText = newTodoInput.value.trim();
//     // if (newTodoText !== "") {
//     //   var listItem = document.createElement("ons-list-item");
//     //   listItem.innerHTML = newTodoText;
//     //   var deleteButton = document.createElement("ons-button");
//     //   deleteButton.innerHTML = "Delete";
//     //   deleteButton.addEventListener("click", function () {
//     //     listItem.remove();
//     //   });
//     //   listItem.appendChild(deleteButton);
//     //   todoList.appendChild(listItem);
//     //   newTodoInput.value = "";
//     // }
//   });
// });

window.fn = {};

// open the side drawer/menu
window.fn.open = function () {
  var menu = document.getElementById("menu");
  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById("content");
  var menu = document.getElementById("menu");
  content.load(page).then(menu.close.bind(menu));
};

function showSelectedDate() {
  const datePicker = document.getElementById("date-picker");
  const selectedDate = datePicker.value;
  document.getElementById("selected-date").innerText =
    "Selected Date: " + selectedDate;
}

function debugOut() {
  console.log("Hello");
}

function pushNewPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.pushPage("addpage.html");
}

function popPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.popPage();
}
