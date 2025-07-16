const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
let index = 0;

const updateCarousel = () => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('bg-green-700', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
    });
};

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
}, 4000); // Auto slide every 4s