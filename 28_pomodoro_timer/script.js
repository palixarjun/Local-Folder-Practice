//Elements declaration
let timerEl = document.getElementById("timer");
let startEl = document.getElementById("start");
let stopEl = document.getElementById("stop");
let resetEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;
//updateTimer function 
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
};

//stop timer function 
function stopTimer() {
    clearInterval(interval);
}

//reset function
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}
//event-listeners
startEl.addEventListener("click", () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft = 1500;
        }
        console.log("start");
    }, 1000);
});

stopEl.addEventListener("click", () => {
    stopTimer();
    console.log("stop");
});

resetEl.addEventListener("click", () => {
    resetTimer();
});