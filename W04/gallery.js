let gallery = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

gallery.addEventListener('click', (e) => {
    console.log(e.target.src);
    if(e.target.src != undefined) {
    modalImage.src = e.target.src.replace('-sm', '-full');
    modal.showModal();
    }
});