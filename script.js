const h3 = document.createElement("h3");
h3.textContent = "Meet the Cast of Characters";
const characters = document.querySelector("div#characters")
characters.insertBefore(h3, characters.firstChild);
//using the dom to add a header for the characters section
