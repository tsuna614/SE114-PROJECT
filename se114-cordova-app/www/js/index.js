

window.fn = {};



// open the side drawer/menu
window.fn.open = function () {
  var menu = document.getElementById("menu");
  menu.open();
};

// load the pages
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

// navigator.push new page
function pushNewPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.pushPage("template-add");
}

// navigator.pop current pushed page
function popPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.popPage();
}

function displayHomeView()
{
  
  const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons ons-icon");
  
  // getting new date, current year and month
  let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
  
  // storing full name of all months in array
  const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
  
  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
  
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<ons-list-item class="inactive">${lastDateofLastMonth - i + 1}</ons-list-item>`;
    }
  
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<ons-list-item class="${isToday}">${i}</ons-list-item>`;
    }
  
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<ons-list-item class="inactive">${i - lastDayofMonth + 1}</ons-list-item>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
  }
  renderCalendar();
  prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
  
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
  });
}

// initialize variables and events for the app
document.addEventListener("init", function (event) {
  const page = event.target;
  var titlesArray = [];
  var contentsArray = [];

  if (page.matches("#home-page")) {
    console.log("Init home page");
    displayHomeView();
    
  } else if (page.matches("#note-page")) {
    console.log("Init note page");

    document.addEventListener("init", function (pageEvent) {
      const newPage = pageEvent.target;
      if (newPage.matches("#note-page-list")) {
        console.log("Init note page list");

        var list = document.getElementById("myList");

        for (var i = 0; i < titlesArray.length; i++) {
          var li = document.createElement("li");
          var para = document.createElement("p");
          var span = document.createElement("span");
          var title = document.createTextNode(titlesArray[i]);
          var content = document.createTextNode(contentsArray[i]);
          para.appendChild(title);
          span.appendChild(content);
          li.appendChild(para);
          li.appendChild(span);
          list.appendChild(li);
        }
      } else if (newPage.matches("#note-page-add")) {
        console.log("Init note page add");

        var newTitle = document.getElementById("new-title");
        var newContent = document.getElementById("new-content");
        var addButton = document.getElementById("add-button");
        addButton.addEventListener("click", function () {
          var newTitleText = newTitle.value.trim();
          var newContentText = newContent.value.trim();
          if (newTitleText !== "" && newContentText !== "") {
            console.log(newTitleText);
            console.log(newContentText);
            // push the input to the arrays
            titlesArray.push(newTitleText);
            contentsArray.push(newContentText);
            // resets the value for the inputs
            newTitle.value = "";
            newContent.value = "";
            // popPage();
            fn.load("html/note.html");
          }
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
  else if(page.matches("home-page"))
  {
    renderCalendar();
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


