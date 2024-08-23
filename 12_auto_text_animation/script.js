const containerEl = document.querySelector(".container");
const bodyEl = document.querySelector("body");

const arrayValues = [' name is Arjun.', ' age is 20.', ' favourite color: Purple.'];

let elementIndex = 0;

let characterIndex = 0;


updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>My${arrayValues[elementIndex].slice(0, characterIndex)}</h1>`;
    if (characterIndex === arrayValues[elementIndex].length) {
        elementIndex++;
        characterIndex = 0;
    };

    if (elementIndex === arrayValues.length) {
        elementIndex = 0;
    };

    if (elementIndex === 2) {
        bodyEl.style.background = '#74017F';

    }

    else {
        bodyEl.style.backgroundColor = '#324';
    };

    setTimeout(updateText, 350);
};