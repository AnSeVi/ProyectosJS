document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElement, {
        duration: 150,
        dist: 5,
        shift: 10,
        padding: 0,
        numVisible: 3,
        indicators: true
    });
});