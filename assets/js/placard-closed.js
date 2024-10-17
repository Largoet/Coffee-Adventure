// VOYAGE VOYAGE
document.querySelector("#openplacard").addEventListener("click", function () {
  window.location.href = "/pages/placard-open/placard-open.html";
});

document.querySelector("#classroom").addEventListener("click", function () {
  window.location.href = "/pages/roomjls/roomjls.html";
});

// affiche et masque l'inventaire//

const inventoryButton = document.getElementById("inventoryButton");
const inventoryMenu = document.getElementById("inventoryMenu");

inventoryButton.addEventListener("click", () => {
  inventoryMenu.classList.toggle("show");
});

// INVENTAIRE ET OBJET

// MUG

const mug = {
  brand: "mug zelda",
  image: "../assets/images/png_files/objet-tasse-cofee_adventure.png",
  description:
    "Un mug magnifique avec link et l'épée légendaire, il peut contenir un café",
};

function addItemToInventory(mug) {
  localStorage.setItem(item.mug, JSON.stringify(mug));
}

document.getElementById("mug").addEventListener("click", function () {
  addItemToInventory(mug);
  updateInventoryDisplay(); // Pour afficher l'inventaire mis à jour
});

// CAFE

const cafe = {
  brand: "Carte Noire",
  image: "../assets/images/png_files/objet-café-cofee_adventure.png",
  description: "Un paquet de café de marque Carte Noire",
};

function addItemToInventory(cafe) {
  localStorage.setItem(item.cafe, JSON.stringify(cafe));
}

document.getElementById("cafe").addEventListener("click", function () {
  addItemToInventory(cafe);
  updateInventoryDisplay(); // Pour afficher l'inventaire mis à jour
});

// EAU
const eau = {
  brand: "eau de source de chiotte",
  image: "../assets/images/png_files/objet-dirty_water-cofee_adventure.png",
  description: "une eau de source fraichement puisée dans les toilettes",
};

function addItemToInventory(eau) {
  localStorage.setItem(item.eau, JSON.stringify(eau));
}

document.getElementById("eau").addEventListener("click", function () {
  addItemToInventory(eau);
  updateInventoryDisplay();
});

// FILTRE
const filtre = {
  brand: "filtre en chaussette sale",
  image: "../assets/images/png_files/objet-dirty_water-cofee_adventure.png",
  description:
    "Un filtre à café composé de chausettes sales bio made in china sans aluminium",
};

function addItemToInventory(filtre) {
  localStorage.setItem(item.filtre, JSON.stringify(filtre));
}

document.getElementById("filtre").addEventListener("click", function () {
  addItemToInventory(filtre);
  updateInventoryDisplay(); // Pour afficher l'inventaire mis à jour
});
