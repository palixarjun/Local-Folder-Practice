const testimonials = [
    {
        name: "Hinata Shoyo",
        refAnime: "Haikyuu!",
        quote: `"When you give up, that's when the game is over. There's no wall that you can't overcome as long as you try hard enough. No matter how much you fail, keep trying, because that effort will never betray you. Only those who try will be rewarded in the end."`,
        imageUrl: "images/image-01.jpg"
    },
    {
        name: "Vash the Stampede",
        refAnime: "Trigun",
        quote: `"To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have had. If you have time to regret, just move forward. If you keep pursuing the meaning of life, you can accomplish many things."`,
        imageUrl: "images/image-02.jpg"
    },
    {
        name: "Yami Sukehiro",
        refAnime: "Black Clover",
        quote: `"If you really want to be strong, stop caring about what your surrounding thinks of you. Stop being afraid of people and their words. All you need is a strong will, a belief in yourself, and an unwavering determination to succeed."`,
        imageUrl: "images/image-03.jpg"
    },
    {
        name: "Naruto Uzumaki",
        refAnime: "Naruto Shippuden",
        quote: `"It’s not the face that makes someone a monster; it’s the choices they make with their lives. Everyone has the power to change themselves, but it’s up to them whether they use it or not."`,
        imageUrl: "images/image-04.jpg"
    },
    {
        name: "Nico Robin",
        refAnime: "One Piece",
        quote: `"If you only look at what’s in front of you, you’ll lose sight of the bigger picture. Sometimes, you have to take a step back to see the whole view. When you do, you might discover something you’ve never noticed before."`,
        imageUrl: "images/image-05.jpg"
    },
    {
        name: "Donquixote Doflamingo",
        refAnime: "One Piece",
        quote: `"Pirates are evil? The Marines are righteous? These terms have always changed throughout the course of history! Kids who have never seen peace and kids who have never seen war have different values! Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!"`,
        imageUrl: "images/image-06.jpg"
    }
];

const image_element = document.querySelector("img");
const user_name = document.getElementById("username");
const ref_anime = document.getElementById("ref");
const quote_desc = document.getElementById("desc");

let index_value = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, refAnime, quote, imageUrl} = testimonials[index_value];
    user_name.innerText = name;
    ref_anime.innerText = refAnime;
    quote_desc.innerText = quote;
    image_element.src = imageUrl;
    index_value++;

    if(index_value === testimonials.length){
        index_value = 0;
    };

    setTimeout(() => {
        updateTestimonial();
    }, 3000);

}