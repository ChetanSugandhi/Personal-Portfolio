let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

// Function to move the slides
function autoSlide() {
    // Move to the next slide
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Loop back to the first slide
    }

    // Change the position of the carousel to show the current slide
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`; // Adjust the position to show the current slide
}

// Initialize the carousel with the first slide
autoSlide();

// Change slide every 3 seconds
setInterval(autoSlide, 3000); // Change slide every 3 seconds
