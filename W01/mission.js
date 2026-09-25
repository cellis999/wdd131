let themeSelect = document.querySelector('#theme-select');
let content = document.querySelector('#content');
let logo = document.querySelector('#logo');

themeSelect.addEventListener('change', function(event) {
    console.log(event.target.value);
    if (themeSelect.value === 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        content.style.backgroundColor = 'white';
        content.style.color = 'black';
        document.body.querySelector('h1').style.color = 'black';
        logo.src = 'byui-logo-blue.webp';
    }
    else if (themeSelect.value === 'dark') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        content.style.backgroundColor = 'black';
        content.style.color = 'white';
        document.body.querySelector('h1').style.color = 'white';
        logo.src = 'byui-logo-white.png';
    }
});