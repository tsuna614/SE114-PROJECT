window.fn = {};

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
