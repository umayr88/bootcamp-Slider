const iconPrevs = Array.from(document.querySelectorAll('.icon-prev'))
const iconNexts = Array.from(document.querySelectorAll('.icon-next'))
const slides = Array.from(document.querySelectorAll('.slide'))

let numberSlide = 1;

let curSlide = slides.filter(slide => +slide.dataset.slide === +numberSlide)[0]

let nextSlide = slides.filter(slide => +slide.dataset.slide !== +numberSlide)[0]




iconPrevs.map(icon => icon.addEventListener('click', function() {
    numberSlide = numberSlide === 1 ? 2 : 1;

    curSlide = slides.filter(slide => +slide.dataset.slide !== +numberSlide)[0]

    let nextSlide = slides.filter(slide => +slide.dataset.slide === +numberSlide)[0]
    
    console.log(curSlide)



    curSlide.style.display = 'none'
    nextSlide.style.display = 'flex'

}) )

iconNexts.map(icon => icon.addEventListener('click', function() {
    numberSlide = numberSlide === 2 ? 1 : 2;

    curSlide = slides.filter(slide => +slide.dataset.slide !== +numberSlide)[0]

    let nextSlide = slides.filter(slide => +slide.dataset.slide === +numberSlide)[0]
    
    console.log(curSlide)

    curSlide.style.display = 'none'
    nextSlide.style.display = 'flex'
}) )