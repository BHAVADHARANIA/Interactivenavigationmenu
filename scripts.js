document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#222";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", function() {
      this.style.color = "#ff9900";
    });
    link.addEventListener("mouseout", function() {
      this.style.color = "white";
    });
  });
});