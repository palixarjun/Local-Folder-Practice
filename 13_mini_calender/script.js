const monthName = document.getElementById("month-name");
const weekdayEl = document.getElementById("weekday");
const dateNum = document.getElementById('date-num');
const yearNum = document.getElementById('year');

const date = new Date();


monthName.innerText = date.toLocaleString("en", {
    month: 'long'
});

weekdayEl.innerText = date.toLocaleString("en", {
    weekday: 'long'
});

dateNum.innerText = date.getDate();

yearNum.innerText = date.getFullYear();
