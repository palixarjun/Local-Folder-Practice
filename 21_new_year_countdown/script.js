let yearEl = document.querySelector(".year");
let monthsEl = document.getElementById("months");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

//add this to function, so that it should refresh itself
let date = new Date();


console.log(date);
console.log(date.getFullYear());

nextYear = date.getFullYear() + 1;
console.log(nextYear);
yearEl.innerText = nextYear;

