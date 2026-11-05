// 1. click on button
document.querySelector("#rollButton").addEventListener("click", e => {
    // 2. animate the dice
    setDieImages("assets/die_rolling.gif");
    // 3. land on a new random number
    setTimeout(() => {
        // this waits 1 second before executing the code inside the function
        document.querySelectorAll("#gameboard img").forEach((image) => {
            image.src = `assets/blue_dice_${Math.floor(Math.random() * 6) + 1}.gif`;
        });
    }, 1000);

});

function setDieImages(imagePath) {
    document.querySelectorAll("#gameboard img").forEach(image => {
        image.src = imagePath;
    });
}