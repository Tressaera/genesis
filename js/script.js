
const navSlide = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle'); 

    })
};

navSlide();


let sliderAreas = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for(let i=0; i<sliderAreas.length; i++) {
        sliderAreas[i].style.display = 'none';

    }
}

function startSlide() {
    reset();
    sliderAreas[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderAreas[current-1].style.display = 'block';
    current--;
}

function slideRight() {
    reset();
    sliderAreas[current+1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function(){
    if(current ===0){
        current = sliderAreas.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(current === sliderAreas.length -1){
        current = -1;
    }
    slideRight();
});

startSlide();

ScrollReveal().reveal('.ani-delay', { 
    delay: 500, 
});

ScrollReveal().reveal('.ani-delay-2', { 
    delay: 1000, 
});


ScrollReveal().reveal('.ani-fade-up', { 
    opacitiy: 0,
    easing: 'ease-in' 
});

ScrollReveal().reveal('.ani-left', { 
    origin: 'left',
    distance: '10rem',
    duration: 1000, 
    easing: 'ease-in' 
});

ScrollReveal().reveal('.ani-right', { 
    origin: 'right',
    distance: '10rem',
    duration: 1000, 
    easing: 'ease-in' 
});

ScrollReveal().reveal('.ani-bottom', { 
    origin: 'bottom',
    distance: '10rem',
    duration: 1000, 
    easing: 'ease-in' 
});
