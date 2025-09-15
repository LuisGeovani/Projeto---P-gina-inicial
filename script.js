document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-track img');
    const texts = document.querySelectorAll('.carousel-text');

    let currentIndex = 0;
    const intervalTime = 3000;

    /**
     * Função centralizada para mostrar um slide específico (imagem e texto).
     * @param {number} index - O índice do slide a ser exibido.
     */
    function showSlide(index) {
        const imageWidth = images[0].clientWidth;
        track.style.transform = `translateX(-${index * imageWidth}px)`;

        texts.forEach(text => {
            text.classList.remove('active');
        });
        texts[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex++;
        
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showSlide(currentIndex);
    }

    setInterval(nextSlide, intervalTime);

    showSlide(0);
});