// Part 1- Check valid:

function calculateAge() {
  let dayValue = parseInt(document.getElementById("days_id").value);
  let monthValue = parseInt(document.getElementById("month_id").value);
  let yearValue = parseInt(document.getElementById("year_id").value);
  let dayResult = document.getElementById("day_result");
  let monthResult = document.getElementById("month_result");
  let yearResult = document.getElementById("year_result");

  let dateError = document.getElementById("date_error");
  let monthError = document.getElementById("month_error");
  let yearError = document.getElementById("year_error");

  let inputBorders = document.querySelectorAll(".input_box");
  let errorMessages = document.querySelectorAll(".error_msg");

  // Check if the year input is a valid number
  if (yearValue > 2023 || yearValue <= 0) {
    yearError.innerHTML = "Must be in the past";
    yearResult.innerHTML = "--";
    errorMessages.forEach((item) => {
      item.style.display = "block";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    return;
  }

  // Check if the month input is valid (between 1 and 12)
  if (monthValue < 1 || monthValue > 12) {
    monthError.innerHTML = "Must be a valid month";
    yearResult.innerHTML = "--";
    errorMessages.forEach((item) => {
      item.style.display = "block";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    return;
  }

  // Check if the day input is valid for the selected month
  const maxDaysInMonth = new Date(yearValue, monthValue, 0).getDate();
  if (dayValue < 1 || dayValue > maxDaysInMonth) {
    dateError.innerHTML = "Must be a valid date";
    yearResult.innerHTML = "--";
    errorMessages.forEach((item) => {
      item.style.display = "block";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    return;
  }

  const today = new Date();
  const birthDate = new Date(yearValue, monthValue - 1, dayValue); // month is 0-based

  // Check if the input year is in the past
  if (birthDate > today) {
    dateError.innerHTML = "Must be a valid date";
    yearResult.innerHTML = "--";
  }

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
