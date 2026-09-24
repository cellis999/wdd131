// 1. functions
function nameOfFunction(name) {
    console.log("Hello, world!");
    console.log(`your name is ${name}`);
}
nameOfFunction("Connor");
// 2. event listeners
let selectBox = document.querySelector("#theme-select");
let pageContent = document.querySelector('body');
selectBox.addEventListener("change", changeTheme);

function changeTheme(event) {
    console.log(event.target.value);
    let theme = selectBox.value;
    if (theme === "ocean") {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    }
    else if (theme === "forest") {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    }
    else if (theme == "desert") {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    }
    else {
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}

// 3. if statements

