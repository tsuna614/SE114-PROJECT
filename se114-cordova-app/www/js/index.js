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
  navigator.pushPage("template-add");
}

function popPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.popPage();
}

document.addEventListener("init", function (event) {
  const page = event.target;
  var titlesArray = [];
  var contentsArray = [];

  if (page.matches("#home-page")) {
    console.log("Init home page");
  } else if (page.matches("#note-page")) {
    console.log("Init note page");

    document.addEventListener("init", function (pageEvent) {
      const newPage = pageEvent.target;
      if (newPage.matches("#note-page-list")) {
        console.log("Init note page list");
      } else if (newPage.matches("#note-page-add")) {
        console.log("Init note page add");

        var addButton = document.getElementById("add-button");
        addButton.addEventListener("click", function () {
          console.log("Hello worlddddd");
        });
      }
    });
    // const template = document.getElementById("notelist.html");
    // template?.content
    //   .getElementById("plus-btn")
    //   .addEventListener("click", () => {
    //     console.log("thanh cong");
    //   });
  } else if (page.matches("#settings-page")) {
    console.log("Init settings page");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   var button = document.querySelector("#test");
//   button.innerHTML = "abc";

//   // // templateNote = document.getElementById("note.html");
//   // // templateList = templateNote.content.getElementById("notelist.html");
//   // // templateAdd = templateNote.content.getElementById("addpage.html");
//   // // // Get the todo list element
//   // // var todoList = templateList.content.getElementById("todo-list");
//   // // // Get the new todo input element
//   // // var newTodoInput = templateAdd.content.getElementById("new-todo");
//   // // // Get the add button element
//   // // var addButton = templateAdd.content.getElementById("add-button");
//   // templateList = document.getElementById("notelist.html");
//   // templateAdd = document.getElementById("addpage.html");
//   // // Get the todo list element
//   // var todoList = templateList.content.getElementById("todo-list");
//   // // Get the new todo input element
//   // var newTodoInput = templateAdd.content.getElementById("new-todo");
//   // // Get the add button element
//   // var addButton = templateAdd.content.getElementById("add-button");
//   // // Add event listener for the add button
//   // addButton.addEventListener("click", function () {
//   //   console.log("aaa");
//   //   // var newTodoText = newTodoInput.value.trim();
//   //   // if (newTodoText !== "") {
//   //   //   var listItem = document.createElement("ons-list-item");
//   //   //   listItem.innerHTML = newTodoText;
//   //   //   var deleteButton = document.createElement("ons-button");
//   //   //   deleteButton.innerHTML = "Delete";
//   //   //   deleteButton.addEventListener("click", function () {
//   //   //     listItem.remove();
//   //   //   });
//   //   //   listItem.appendChild(deleteButton);
//   //   //   todoList.appendChild(listItem);
//   //   //   newTodoInput.value = "";
//   //   // }
//   // });
// });

// document.addEventListener("init", function (event) {
//   var content = document.getElementById("content");

//   content.addEventListener("pageinit", function () {
//     setTimeout(() => {
//       var button = content.getElementById("test");

//       button.innerText = "abc";
//     }, 500);
//   });
// });
