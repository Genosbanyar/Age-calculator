const ageList = document.getElementsByClassName("age-list")[0];
const inputDay = document.getElementById("dd");
const inputMoth = document.getElementById("mm");
const inputYear = document.getElementById("yy");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let dayOne = parseInt(inputDay.value, 10);
  let monthOne = parseInt(inputMoth.value, 10);
  let yearOne = parseInt(inputYear.value, 10);
  if (dayOne && monthOne && yearOne) {
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (currentDay < dayOne) {
      currentDay += months[currentMonth - 1];
      currentMonth -= 1;
    }
    if (currentMonth < monthOne) {
      currentMonth += 12;
      currentYear -= 1;
    }
    let dayText = currentDay - dayOne;
    let monthText = currentMonth - monthOne;
    let yearText = currentYear - yearOne;
    ageList.textContent = `${dayText} days, ${monthText} months and ${yearText} years old`;
  } else {
    alert("Please Fill All Input Values");
  }
});
