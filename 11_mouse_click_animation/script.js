const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {

    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");

    spanEl.style.top = yPos + 'px';
    spanEl.style.left = xPos + 'px';
    bodyEl.appendChild(spanEl);

    const size = Math.random();
    spanEl.style.width = size*100 + 'px';
    spanEl.style.height = size*100 + 'px';
    
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});