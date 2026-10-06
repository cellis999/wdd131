let menuButton = document.querySelector('.menu-btn');
let links = document.querySelectorAll('.links');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('change');
    links.forEach(link => link.classList.toggle('active'));
});