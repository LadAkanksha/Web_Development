
let val = true;
function changeColor() {
let box = document.getElementById("box");

val = !val;

val?box.style.backgroundColor ="orange":box.style.backgroundColor ="pink";    
}