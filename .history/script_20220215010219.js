const leftButton = document.querySelector(".leftButton");
const centerButton = document.querySelector(".centerButton");
const rightButton = document.querySelector(".rightButton");
const num = document.getElementById("num");
const addAB = document.querySelector(".addAB");
const valueOfSum = document.getElementById("valueOfSum");
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const plyus = document.querySelector(".plyus")
const equals = document.querySelector(".equals")

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

function add(a) {
    return function name(b) {
        return a + b;
    }
}

addAB.addEventListener("click", function() {
    plyus.innerText = "+"
    equals.innerText = "="
    let inputNum1Value = Number(inputNum1.value);
    let inputNum2Value = Number(inputNum2.value);
    valueOfSum.innerText = add(inputNum1Value)(inputNum2Value)
});