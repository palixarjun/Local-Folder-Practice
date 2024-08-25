function digitalClock() {
    let dateFunction = new Date();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();
    let timeFormat = "AM";

    timeFormat = hours >= 12 ? 'PM' : 'AM';
    hours = hours == 0 ? 12 : hours;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat;
};

setInterval(digitalClock, 1000);

let newDatefunction = new Date();

function renderDate() {
    newDatefunction.setDate(1);
    let day = newDatefunction.getDay();

    let currentDate = new Date(
        newDatefunction.getFullYear(),
        newDatefunction.getMonth() + 1, 0
    ).getDate(); //to get the last date of the current month

    let prevDate = new Date(
        newDatefunction.getFullYear(),
        newDatefunction.getMonth(), 0
    ).getDate(); //to get the last date of the prev month

    let addNextDate = new Date(
        newDatefunction.getFullYear(),
        newDatefunction.getMonth() + 1, 0
    ).getDate(); //to get the dates for the next month

    console.log(currentDate, prevDate, addNextDate);

    let addNext = addNextDate + 7;

    let month = newDatefunction.getMonth();
    let year = newDatefunction.getFullYear();

    let monthArr = ['January', 'February', 'March','April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

    document.getElementById('month').innerHTML = monthArr[month] + '-' + year;

    let today = new Date();
    //the below code will display the date in string format
    //uncomment to see in the console@javascript
    // console.log(today.toDateString());
    document.getElementById("date").innerText = today.toDateString();
    let weekDay = today.getDay();
    document.querySelector(`.week :nth-child(${weekDay + 1})`).classList.add('active');


    let DATES = " ";

    for (let x = day; x > 0; x--) {
        DATES += "<div class='prev'>" + (prevDate - x + 1) + "</div>";
    }; //creates the div for previous dates

    for (let i = 1; i <= currentDate; i++) {
        if (i === today.getDate() &&
            newDatefunction.getMonth() == today.getMonth() &&
            newDatefunction.getFullYear() == today.getFullYear()) {
            DATES += "<div class='today'>" + i + "</div>";
        }
        else {
            DATES += "<div>" + i + "</div>";
        } //creates the div for current month
    }

    for (let j = 1; j <= addNext; j++) {
        DATES += '<div class="next">' + j + '</div>';
    } //creates the div for the next month

    // when the next line is uncommented the portion of html code that needs to be written will display in console@javascript
    // console.log(DATES); 

    document.querySelector(".dates").innerHTML = DATES;
    console.log(DATES);


};

function moveDate(para) {
    if (para == 'prev') {
        newDatefunction.setMonth(newDatefunction.getMonth() - 1);
    } 
    if (para == 'next') {
        newDatefunction.setMonth(newDatefunction.getMonth() + 1);
    }

    renderDate();

};


