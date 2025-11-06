// const toggleButton = document.getElementById("nav-toggle");
// const navLinks = document.getElementById("nav-links-toggle");

// toggleButton.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links-toggle");
const overlay = document.getElementById("overlay");
const body = document.body;

toggleButton.addEventListener("click", () => {
    navLinks.classList.add("active");
    overlay.classList.add("active");
    body.classList.add("menu-active");
});

overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-active");
});

