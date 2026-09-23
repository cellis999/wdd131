// select an html element from the DOM-saves to local variable
let heading = document.querySelector("h1");
console.log(heading);

heading.style.color = "blue";
heading.style.fontSize = "3em";
heading.style.backgroundColor = "#df1ad9";
heading.style.border = "2px solid black";

// doing everything in one line
document.querySelector("p").style.color = "red";

// there are different ways to select elements from the DOM
// select from id
document.getElementById("topics").style.color = "green";

// you can select more than one element at a time
// returns the first item on the list and changes the color to orange
document.querySelectorAll(".list")[0].style.color = "orange";

// apply a class to an element (the class i defined does not exist) (use .add to add and .remove to remove)
document.querySelector("h1").classList.add("highlight");

//classList.toggle will add the class if it does not exist and remove it if it does exist

// using .className can retrieve the active class or apply a new class to an element
document.querySelector("h1").className = "highlight";


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                