const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function updateClock()  {
    const dateFunction = new Date();

    // console.log(dateFunction);

    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
};

setInterval(updateClock, 1000);



