// ! Creiamo le immagini in modo dinamico
// creo le immagini e recupero la galleria
const carouselGallery = document.getElementById('gallery');
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 
'img/05.webp']

//creo stringa vuota
let img = '';

for ( let i = 0; i < sources.length; i++) {
    img += `<img src="${sources[i]}">`
}

carouselGallery.innerHTML = img;
console.log(carouselGallery);

//recupero le immagini
const images = document.querySelectorAll('#carousel img');
console.log(images);

//Rendiamo active la prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');