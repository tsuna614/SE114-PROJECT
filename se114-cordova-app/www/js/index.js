document.addEventListener("DOMContentLoaded", function () {
  // var templateNote = document.querySelector("#note.html");
  // var templateNote_clone = templateNote.content.cloneNode(true);
  // var templateList = templateNote_clone.querySelector("#notelist.html");
  // var templateList_clone = templateList.content.cloneNode(true);
  // var templateAdd = templateNote_clone.querySelector("#addpage.html");
  // var templateAdd_clone = templateAdd.content.cloneNode(true);

  templateNote = document.getElementById("note.html");
  templateList = templateNote.content.getElementById("notelist.html");
  templateAdd = templateNote.content.getElementById("addpage.html");

  // Get the todo list element
  var todoList = templateList.content.getElementById("todo-list");
  // Get the new todo input element
  var newTodoInput = templateAdd.content.getElementById("new-todo");
  // Get the add button element
  var addButton = templateAdd.content.getElementById("add-button");

  // Add event listener for the add button
  addButton.addEventListener("click", function () {
    console.log("aaaaaaaaa");
    // var newTodoText = newTodoInput.value.trim();
    // if (newTodoText !== "") {
    //   var listItem = document.createElement("ons-list-item");
    //   listItem.innerHTML = newTodoText;

    //   var deleteButton = document.createElement("ons-button");
    //   deleteButton.innerHTML = "Delete";
    //   deleteButton.addEventListener("click", function () {
    //     listItem.remove();
    //   });

    //   listItem.appendChild(deleteButton);

    //   todoList.appendChild(listItem);
    //   newTodoInput.value = "";
    // }
  });
});

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
