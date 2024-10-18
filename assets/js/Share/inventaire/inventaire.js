const inventoryButton = document.getElementById('inventory-button');
const inventoryMenu = document.getElementById('inventory-menu');
const addItemButton = document.getElementById('add-item-button');
const inventory = document.getElementById('inventory');

// Afficher ou cacher le menu de l'inventaire
inventoryButton.addEventListener('click', () => {
  if (inventoryMenu.style.display === 'none' || inventoryMenu.style.display === '') {
    inventoryMenu.style.display = 'flex'; // Ouvre le menu
  } else {
    inventoryMenu.style.display = 'none'; // Ferme le menu
  }
});

// Ajouter un objet dans le menu de l'inventaire
addItemButton.addEventListener('click', () => {
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = "Objet";
  inventory.appendChild(newItem);
});