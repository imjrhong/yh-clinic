const slides = Array.from(document.querySelectorAll(".hero-image"));
const dots = Array.from(document.querySelectorAll(".dot"));
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === index);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function startSlider() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => {
    showSlide((activeSlide + 1) % slides.length);
  }, 5200);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    startSlider();
  });
});

startSlider();
