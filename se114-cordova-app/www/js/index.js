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
  console.log("-- push add note page --");
  var navigator = document.querySelector("ons-navigator");
  navigator.pushPage("template-add");
}

// navigator.pop current pushed page
function popPage() {
  var navigator = document.querySelector("ons-navigator");
  navigator.popPage();
}

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// delete note function
async function deleteNote() {
  var temp = 0;
  await ons.notification.confirm({
    message: "Are you sure you want to delete this note?",
    callback: function (event) {
      temp = event;
      return;
    },
  });
  console.log(temp);
  return temp;
  // var dialog = document.getElementById("my-alert-dialog");

  // if (dialog) {
  //   dialog.show();
  // } else {
  //   ons
  //     .createElement("alert-dialog.html", { append: true })
  //     .then(function (dialog) {
  //       dialog.show();
  //     });
  // }
}

var hideAlertDialog = function () {
  document.getElementById("my-alert-dialog").hide();
};

function displayHomeView() {
  const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons ons-icon");

  // getting new date, current year and month
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

  // storing full name of all months in array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      // creating li of previous month last days
      liTag += `<ons-list-item class="inactive">${
        lastDateofLastMonth - i + 1
      }</ons-list-item>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      // creating li of all days of current month
      // adding active class to li if the current day, month, and year matched
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<ons-list-item class="${isToday}">${i}</ons-list-item>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      // creating li of next month first days
      liTag += `<ons-list-item class="inactive">${
        i - lastDayofMonth + 1
      }</ons-list-item>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
  };
  renderCalendar();
  prevNextIcon.forEach((icon) => {
    // getting prev and next icons
    icon.addEventListener("click", () => {
      // adding click event on both icons
      // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
      currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

      if (currMonth < 0 || currMonth > 11) {
        // if current month is less than 0 or greater than 11
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

// initialize variables
const titlesArray = [];
const contentsArray = [];

// initialize variables and events for the app
document.addEventListener("init", function (event) {
  const page = event.target;

  if (page.matches("#home-page")) {
    displayHomeView();
  } else if (page.matches("#note-page")) {
    // document.addEventListener("init", function (pageEvent) {
    //   const newPage = pageEvent.target;
    //   if (newPage.matches("#note-page-list")) {
    //     var list = document.getElementById("myList");
    //     for (var i = 0; i < titlesArray.length; i++) {
    //       var li = document.createElement("li");
    //       var para = document.createElement("p");
    //       var span = document.createElement("span");
    //       var title = document.createTextNode(titlesArray[i]);
    //       var content = document.createTextNode(contentsArray[i]);
    //       para.appendChild(title);
    //       span.appendChild(content);
    //       li.appendChild(para);
    //       li.appendChild(span);
    //       list.appendChild(li);
    //     }
    //     list.onclick = async function (event) {
    //       let target = getEventTarget(event);
    //       let li = target.closest("li"); // get reference by using closest
    //       let nodes = Array.from(li.closest("ul").children); // get array
    //       let index = nodes.indexOf(li);
    //       console.log(index);
    //       let confirmDelete = await deleteNote();
    //       if (confirmDelete === 1) {
    //         console.log("aaa");
    //         console.log(titlesArray);
    //         console.log(contentsArray);
    //         titlesArray.splice(index, 1);
    //         contentsArray.splice(index, 1);
    //         console.log(titlesArray);
    //         console.log(contentsArray);
    //         fn.load("html/note.html");
    //       }
    //     };
    //   } else if (newPage.matches("#note-page-add")) {
    //     var newTitle = document.getElementById("new-title");
    //     var newContent = document.getElementById("new-content");
    //     var addButton = document.getElementById("add-button");
    //     addButton.addEventListener("click", function () {
    //       var newTitleText = newTitle.value.trim();
    //       var newContentText = newContent.value.trim();
    //       if (newTitleText !== "" && newContentText !== "") {
    //         // push the input to the arrays
    //         titlesArray.push(newTitleText);
    //         contentsArray.push(newContentText);
    //         // resets the value for the inputs
    //         newTitle.value = "";
    //         newContent.value = "";
    //         // popPage();
    //         fn.load("html/note.html");
    //       }
    //     });
    //   }
    // });
  } else if (page.matches("#note-page-list")) {
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

    list.onclick = async function (event) {
      let target = getEventTarget(event);
      let li = target.closest("li"); // get reference by using closest
      let nodes = Array.from(li.closest("ul").children); // get array
      let index = nodes.indexOf(li);
      console.log(index);
      let confirmDelete = await deleteNote();
      if (confirmDelete === 1) {
        titlesArray.splice(index, 1);
        contentsArray.splice(index, 1);
        fn.load("html/note.html");
      }
    };
  } else if (page.matches("#note-page-add")) {
    var newTitle = document.getElementById("new-title");
    var newContent = document.getElementById("new-content");
    var addButton = document.getElementById("add-button");
    addButton.addEventListener("click", function () {
      var newTitleText = newTitle.value.trim();
      var newContentText = newContent.value.trim();
      if (newTitleText !== "" && newContentText !== "") {
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
  } else if (page.matches("#settings-page")) {
  } else if (page.matches("home-page")) {
    renderCalendar();
  }
});
