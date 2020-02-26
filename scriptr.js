const clicks1 = document.getElementById("btn1");
const clicks2 = document.getElementById("btn2");
const level1 = document.getElementById("btn3");
const level2 = document.getElementById("btn4");
const level3 = document.getElementById("btn5");
const results=document.getElementById("result");


clicks1.addEventListener("click", () => {
    clicks2.style.display = "block";
} ) 

clicks2.addEventListener("click", () => {
    level1.style.display = "block";
    level2.style.display = "block";
    level3.style.display = "block";

} ) 

level1.addEventListener("click", () => {
    results.style.display = "block";
} ) 
