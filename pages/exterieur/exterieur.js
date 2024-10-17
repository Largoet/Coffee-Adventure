import { soundManager } from "../assets/js/";

window.addEventListener("load", () => {
  soundManager.keydownManager();
  soundManager.clickManager();
});

// Fait disparaitre le bouton texte//
document.getElementById("deadbody").addEventListener("click", function () {
  this.style.display = "none";
});

// affiche et masque l'inventaire//

const inventoryButton = document.getElementById("inventoryButton");
const inventoryMenu = document.getElementById("inventoryMenu");

inventoryButton.addEventListener("click", () => {
  // Toggle the 'show' class on the inventory menu to show or hide it
  inventoryMenu.classList.toggle("show");
});
