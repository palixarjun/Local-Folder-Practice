const inputVal = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputVal.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody() {
    if(inputVal.checked){
        bodyEl.style.background = "black";
    }
    else {
        bodyEl.style.backgroundColor = "#f0f0f0";
    }
};

inputVal.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputVal.checked));

}