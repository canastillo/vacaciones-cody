let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.querySelector('#lightbox').style.display = 'block';
};

function closeLightbox() {
    document.querySelector('#lightbox').style.display = 'none';
};

function changeSlide(direction) {
    showSlide(slideIndex += direction);
};

function toSlide(index) {
    showSlide(slideIndex = index);
};

function showSlide(index) {
    const slides = document.getElementsByClassName('slide');

    if (index > slides.length) {
        slideIndex = 1;
    };

    if (index < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = 'block';
};