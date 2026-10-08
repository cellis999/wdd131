let menuButton = document.getElementById("menu");
menuButton.addEventListener("click", function() {
    let navLinks = document.querySelector(".nav-links");
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
    navLinks.classList.toggle("active");
});