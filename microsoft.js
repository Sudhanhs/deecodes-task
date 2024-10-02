function iconclick() {
    const dropdown = document.querySelector(".all-list");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

    let icon=document.getElementById('icon');
    let iconclick=icon.getAttribute("class");
    if(iconclick === "bi bi-list"){
        icon.setAttribute("class", "bi bi-x-lg");
    }
    else{
        icon.setAttribute("class", "bi bi-list")
    }
}

function btnclick(dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

    let icon =document.querySelector('.bi bi-chevron-down');

    let iconclick=icon[0].getAttribute("class");
    if(iconclick === "bi bi-chevron-down"){
        icon.setAttribute("class", "bi bi-chevron-up");
    }
    else{
        icon.setAttribute("class", "bi bi-chevron-down");
    }
}


// slider

let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');

function moveToSlide(n) {
    currentSlide = n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        const icon = indicator.querySelector('i');
        if (index === currentSlide) {
            icon.className = 'bi bi-circle-fill';
        } else {
            icon.className = 'bi bi-circle';
        }
    });
}

document.getElementById('prev').addEventListener('click', () => moveToSlide(currentSlide - 1));
document.getElementById('next').addEventListener('click', () => moveToSlide(currentSlide + 1));

indicators.forEach(indicator => {
    indicator.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.currentTarget.getAttribute('data-slide'));
        moveToSlide(slideIndex);
    });
});

setInterval(() => {
    moveToSlide(currentSlide + 1);
}, 5000);

