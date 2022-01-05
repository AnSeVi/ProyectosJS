document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElement, {
        duration: 150
    });
});