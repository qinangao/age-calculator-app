// Part 1- Calculate Age:

function calculateAge() {
  let dayValue = parseInt(document.getElementById("days_id").value);
  let monthValue = parseInt(document.getElementById("month_id").value);
  let yearValue = parseInt(document.getElementById("year_id").value);
  let dayResult = document.getElementById("day_result");
  let monthResult = document.getElementById("month_result");
  let yearResult = document.getElementById("year_result");

  const today = new Date();
  const birthDate = new Date(yearValue, monthValue - 1, dayValue); // month is 0-based

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // If the birth date has not occurred this year yet
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }

  // Adjust days for negative values
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  yearResult.innerHTML = years;
  monthResult.innerHTML = months;
  dayResult.innerHTML = days;
}

// let inputBorders = document.querySelectorAll(".input_box");
// let birthday = document.querySelectorAll(".birthday");
// let errorMessages = document.querySelectorAll(".error_msg");

// let dateError = document.getElementById("date_error");
// let monthError = document.getElementById("month_error");
// let yearError = document.getElementById("year_error");

// function checker() {
//   if (dayValue === "" && monthValue === "" && yearValue === "") {
//     birthday.forEach((item) => {
//       item.style.color = "var(--Light-red)";
//     });
//     inputBorders.forEach((item) => {
//       item.style.border = "3px solid var(--Light-red)";
//     });
//     errorMessages.forEach((item) => {
//       item.style.display = "block";
//     });
//   }
//   if (dayValue < 1 || dayValue > 31) {
//     dateError.innerHTML = "Must be a valid day";
//   }
//   if (monthValue < 1 || monthValue > 13) {
//     monthError.innerHTML = "Must be a valid month";
//   }
//   if (monthValue > currentYear) {
//     yearError.innerHTML = "Must be in the past";
//   }
// }
