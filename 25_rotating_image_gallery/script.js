const imageContainerEl = document.querySelector('.image-container');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');

let x = 0;

// Event Listeners
prevEl.addEventListener('click', () => {
    x = x + 45;
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `prespective(1000px) rotateY(${x}deg)`;
}