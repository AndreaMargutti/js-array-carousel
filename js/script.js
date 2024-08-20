// ! Creiamo le immagini in modo dinamico
// creo le immagini e recupero la galleria
const carouselGallery = document.getElementById('gallery');
const thumbnails = document.getElementById('thumbnails');
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 
'img/05.webp']

//creo stringa vuota
let img = '';

for ( let i = 0; i < sources.length; i++) {
    img += `<img src="${sources[i]}">`
}

carouselGallery.innerHTML = img;
thumbnails.innerHTML = img;
console.log(carouselGallery);

//recupero le immagini
const images = document.querySelectorAll('#carousel img');
console.log(images);

//Rendiamo active la prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

// # Eventi Dinamici
//recupero i due bottoni
const preBtn = document.getElementById('pre');
const nextBtn = document.getElementById('next');

//creazione evento per next
nextBtn.addEventListener('click', function(){
    //rimuovo active da immagine attiva
    images[currentActiveIndex].classList.remove('active');
    
    //incremento di uno l'index
    currentActiveIndex++;

    //creo ciclo infinto
    if (currentActiveIndex > sources.length - 1) currentActiveIndex = 0;

    //aggiungo classe actiuve su prossima immagine
    images[currentActiveIndex].classList.add('active');
})

//creazione evento per pre
preBtn.addEventListener('click', function() {
    //rimuovo active da img attiva
    images[currentActiveIndex].classList.remove('active')

    //decremento currentActiveIndex di 1
    currentActiveIndex--;

    //creo ciclo infinto
    if (currentActiveIndex < 0) currentActiveIndex = images.length - 1; 

    //inserisco active in immagine precednete
    images[currentActiveIndex].classList.add('active')
})