let date = new Date();


function showDate() {
  let currentDate = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();
  let prevMonthLastDay = new Date(year, month, 0).getDate();
  let currentWeekDay = date.getDay();
  let totalDaysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
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

  //   console.log(prevMonthLastDay);

  // document.getElementById("currentMonth").innerHTML = monthNames[month];

  document.getElementById(
    "currentDate"
  ).innerHTML = `<h3>${monthNames[month]}/${year}</h3>`;

  let allDays = "";
  for (let i = currentWeekDay; i >= 0; i--) {
    allDays += `<div class="pervMonthDay">${prevMonthLastDay - i}</div> `;
  }
  for (let i = 1; i <= totalDaysInMonth; i++) {
    let currentMonth=new Date().getMonth()
    if (i == currentDate && month===currentMonth) {
      allDays += `<div class="currentDay">${i}</div> `;
    } else {
      allDays += `<div class="perday">${i}</div> `;
    }
  }
  document.getElementById("days").innerHTML = allDays;
}
function handlePrev() {
    date.setMonth(date.getMonth()-1)
 

    showDate()
}

function handleNext() {
  date.setMonth(date.getMonth()+1)
  showDate()
}
