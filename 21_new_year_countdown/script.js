let yearEl = document.querySelector(".year");
let monthsEl = document.getElementById("months");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let msEl = document.getElementById("milisecs");

updateClock();

//add this to function, so that it should refresh itself
function updateClock() {
    const date = new Date();

    //present date values
    presentYear = date.getFullYear();
    presentMonth = date.getMonth();
    presentHour = date.getHours();
    presentMinutes = date.getMinutes();
    presentSeconds = date.getSeconds();
    presentMs = date.getMilliseconds();

    //for the new year countdown,
    //we need the next year value.
    //i.e. obtained through the following code
    nextYear = presentYear + 1;
    yearEl.innerText = nextYear;

    //remaining date values
    let remainingMonths = 12 - presentMonth;

    let lastDate = new Date(presentYear, presentMonth + 1, 0).getDate();
    let remainingDays = lastDate - date.getDate();

    let remainingHours = 23 - presentHour;
    let remainingMinutes = 59 - presentMinutes;
    let remainingSeconds = 59 - presentSeconds;
    let remaingingMs = 1000 - presentMs;

    //remaining time for everything
    remainingMonths = remainingMonths < 10 ? '0' + remainingMonths : remainingMonths;
    remainingDays = remainingDays < 10 ? '0' + remainingDays : remainingDays;
    remainingHours = remainingHours < 10 ? '0' + remainingHours : remainingHours;
    remainingMinutes = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    remaingingMs = remaingingMs < 10 ? '0' + remaingingMs : remaingingMs;

    //changing the elements in the html document
    daysEl.innerText = remainingDays;
    monthsEl.innerText = remainingMonths;
    hoursEl.innerText = remainingHours;
    minutesEl.innerText = remainingMinutes;
    secondsEl.innerText = remainingSeconds;
    msEl.innerText = remaingingMs;
};

setInterval(updateClock, 80);
