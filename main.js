// Reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Reviews slider
let reviews = document.querySelectorAll(".review");
let i = 0;

setInterval(() => {
  reviews[i].classList.remove("active");
  i = (i + 1) % reviews.length;
  reviews[i].classList.add("active");
}, 3500);
