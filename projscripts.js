let slideIndex = 0;
let autoSlideTimeout;
let activeSection = ''; 

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName(`mySlides ${activeSection}`);
    let dots = document.getElementsByClassName(`dot ${activeSection}`);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(showSlides, 4000);
}


function currentSlide(n) {
    clearTimeout(autoSlideTimeout); 
    slideIndex = n;
    showSlides();
}

function smoothScrollTo(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600; // Duration of the scroll in milliseconds
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Progress from 0 to 1
        const scrollY = startPosition + distance * easeInOutQuad(progress);
        window.scrollTo(0, scrollY);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5
            ? 2 * t * t
            : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

function showSection(sectionId) {
    
    clearTimeout(autoSlideTimeout);


    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.classList.add('active');
        activeSection = sectionId; 
        slideIndex = 0; 
        showSlides(); 
        

         // Smooth scroll to the section
         smoothScrollTo(sectionElement);
    }
}