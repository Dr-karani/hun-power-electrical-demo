
document.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
let reviews = document.querySelectorAll(".review");
let index = 0;

setInterval(() => {
  reviews[index].classList.remove("active");
  index = (index + 1) % reviews.length;
  reviews[index].classList.add("active");
}, 4000);
