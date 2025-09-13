document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    let currentIndex = 0;
    const intervalTime = 3000; // 3 segundos

    function moveCarousel() {
        const imageWidth = images[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }

    setInterval(moveCarousel, intervalTime);
});