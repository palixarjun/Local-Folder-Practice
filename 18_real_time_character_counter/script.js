const textAreaEl = document.getElementById("text-type-area");
const cUsedEl = document.getElementById("cused");
const cRemainingEl = document.getElementById("cremaining");

getUpdateCounter();

textAreaEl.addEventListener("keyup", ()=> {
    getUpdateCounter();
});

function getUpdateCounter() {
    const maxLengthEl = textAreaEl.getAttribute("maxlength");
    cUsedEl.innerText = textAreaEl.value.length;
    cRemainingEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;

    if (textAreaEl.value.length == textAreaEl.getAttribute("maxlength")) {
        cRemainingEl.style.color = "red";
        cUsedEl.style.color = "green";
    }
    else {
        cRemainingEl.style.color = "white";
        cUsedEl.style.color = "yellow";
    };
};