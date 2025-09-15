document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    
    const texts = document.querySelectorAll('.carousel-text');
    let currentIndex = 0;
    const intervalTime = 3000;


    function updateText() {
        texts.forEach(text => {
            text.classList.remove('active');
        });
        texts[currentIndex].classList.add('active');
    }

    function moveCarousel() {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        const imageWidth = images[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        
        updateText();
    }
    setInterval(moveCarousel, intervalTime);
    updateText(); 
});