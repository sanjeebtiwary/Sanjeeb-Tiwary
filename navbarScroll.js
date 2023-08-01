
// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

setTimeout(() => {
    const fadeContainer = document.getElementById('fade-in-container');
    fadeContainer.classList.add('fade-in');
  }, 2000);


const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Function to show the previous slide
function prevSlide() {
  slideIndex = Math.max(slideIndex - 1, 0);
  showSlide(slideIndex);
}

// Function to show the next slide
function nextSlide() {
  slideIndex = Math.min(slideIndex + 1, slides.childElementCount - 1);
  showSlide(slideIndex);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


