document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let rotationAngle = 0;

    const anglePerItem = 360 / totalItems;

    nextBtn.addEventListener('click', () => {
        rotationAngle -= anglePerItem;
        carousel.style.transform = `rotateY(${rotationAngle}deg)`;
    });

    prevBtn.addEventListener('click', () => {
        rotationAngle += anglePerItem;
        carousel.style.transform = `rotateY(${rotationAngle}deg)`;
    });
});