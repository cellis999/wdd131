let menuButton = document.getElementById("menu");
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');
let gallery = document.querySelector('.gallery');

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


gallery.addEventListener('click', (e) => {
    modalImage.src = e.target.src.replace('-sm', '-full');
    modal.showModal();
});

menuButton.addEventListener("click", function() {
    let navLinks = document.querySelector(".nav-links");
    let nav = document.querySelector("nav");
    nav.classList.toggle("active");
    navLinks.classList.toggle("active");
});