let birthday = document.querySelectorAll(".birthday");
let errorMessages = document.querySelectorAll(".error_msg");
let inputBorders = document.querySelectorAll(".input_box");
let dayValue = document.getElementById("days_id").value;
let monthValue = document.getElementById("month_id").value;
let yearValue = document.getElementById("year_id").value;

function checker() {
  if (dayValue === "" && monthValue === "" && yearValue === "") {
    birthday.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    errorMessages.forEach((item) => {
      item.style.display = "block";
    });
  } else if (
    dayValue < 0 &&
    dayValue > 31 &&
    monthValue < 0 &&
    monthValue > 12 &&
    yearValue < 0 &&
    yearValue > 2023
  ) {
    birthday.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    errorMessages.forEach((item) => {
      item.style.display = "block";
      item.style.color = "black";
    });
  }
}
