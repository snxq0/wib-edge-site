// slider.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

    // Автопрокрутка (опционально)
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
        showSlide(currentIndex);
    }, 5000); // каждые 5 секунд

    // Инициализация
    showSlide(currentIndex);
});
