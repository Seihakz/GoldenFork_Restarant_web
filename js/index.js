
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  // If user scrolls down more than 50px, add the class
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});