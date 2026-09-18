const pi = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = 'wdd 131';
if (true) {
    let student = 'Connor';
    console.log(student);
    console.log(course);
    favoriteColor = 'blue'; // this is a global variable because it is not declared with var, let, or const
}
console.log(course);
console.log(student); // this will throw an error because it is declared in the block scope not global

document.querySelector('h1').style.color = favoriteColor;