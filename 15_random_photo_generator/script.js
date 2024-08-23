//event listener to reload
const reloadButton = document.getElementById("reload");

reloadButton.addEventListener('click', function () {
    location.reload();
});

//event listner to load-more

const containerEl = document.querySelector(".image-container");

const loadMoreButton = document.getElementById("load-more");

loadMoreButton.addEventListener('click', () => {
    addImages();
});

function addImages() {
    for (let i = 0; i < 3; i++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 2000)}`;
        newImgEl.alt = "random-image";
        containerEl.appendChild(newImgEl);
    }

};