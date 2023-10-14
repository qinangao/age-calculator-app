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
  let birthdayTitle = document.querySelectorAll(".birthday");
  let dash = document.querySelectorAll(".dash");

  const today = new Date();
  const currentYear = today.getFullYear();
  const birthDate = new Date(yearValue, monthValue - 1, dayValue);

  var thereIsAnError = false;

  // Check if the year input is a valid number
  if (!dayValue || !monthValue || !yearValue) {
    birthdayTitle.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    errorMessages.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    dash.forEach((item) => {
      item.innerHTML = "--";
    });
    thereIsAnError = true;
  }

  if (yearValue > currentYear || yearValue <= 0) {
    yearError.style.color = "var(--Light-red)";
    yearError.innerHTML = "Must be in the past";
    yearResult.innerHTML = "--";
    monthResult.innerHTML = "--";
    dayResult.innerHTML = "--";
    birthdayTitle.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    thereIsAnError = true;
  }

  // Check if the month input is valid (between 1 and 12)

  if (monthValue < 1 || monthValue > 12) {
    monthError.style.color = "var(--Light-red)";
    monthError.innerHTML = "Must be a valid month";
    yearResult.innerHTML = "--";
    monthResult.innerHTML = "--";
    dayResult.innerHTML = "--";
    birthdayTitle.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    thereIsAnError = true;
  }

  // Check if the day input is valid for the selected month
  const maxDaysInMonth = new Date(yearValue, monthValue, 0).getDate();
  if (dayValue < 1 || dayValue > maxDaysInMonth) {
    dateError.style.color = "var(--Light-red)";
    dateError.innerHTML = "Must be a valid date";
    yearResult.innerHTML = "--";
    monthResult.innerHTML = "--";
    dayResult.innerHTML = "--";
    birthdayTitle.forEach((item) => {
      item.style.color = "var(--Light-red)";
    });
    inputBorders.forEach((item) => {
      item.style.border = "3px solid var(--Light-red)";
    });
    thereIsAnError = true;
  }

  // Check if the input year is in the past
  // if (birthDate > today) {
  //   dateError.style.color = "var(--Light-red)";
  //   dateError.innerHTML = "Must be a valid date";
  //   birthdayTitle.forEach((item) => {
  //     item.style.color = "var(--Light-red)";
  //   });
  //   inputBorders.forEach((item) => {
  //     item.style.border = "3px solid var(--Light-red)";
  //   });

  //   return;
  // }
  if (thereIsAnError) return;

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

function cleanError{
  
}

