const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 50}%)`;
}

function prevSlide() {
  slideIndex = Math.max(slideIndex - 1, 0);
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = Math.min(slideIndex + 1, slides.childElementCount - 1);
  showSlide(slideIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

