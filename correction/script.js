/* JavaScript */
let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");

button.onclick = function() {
paragraph.innerHTML = "Bravo, vous avez cliqué sur le bouton!";
paragraph.classList.add("highlight");
};
