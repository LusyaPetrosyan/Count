const leftButton = document.querySelector(".leftButton");
const centerButton = document.querySelector(".centerButton");
const rightButton = document.querySelector(".rightButton");
const num = document.getElementById("num");
// console.log("leftButton ", leftButton);
// console.log("rightButton ", rightButton);

let i = 0;
leftButton.addEventListener("click", function minus() {
    i--;
    num.innerHTML = i;
});

rightButton.addEventListener("click", function pulus() {
    i++;
    num.innerHTML = i;
});

centerButton.addEventListener("click", function reset() {
    i = 0;
    num.innerHTML = i;
});