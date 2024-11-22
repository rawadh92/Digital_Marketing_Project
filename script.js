// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  services.forEach(service => {
      observer.observe(service);
  });
});

// Button interaction
const ctaButton = document.querySelector(".cta");
ctaButton.addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});