let inventoryWrapperOnClic = {
  isOpen: false,
  element: document.querySelector(".bg-inventory")
}

inventoryWrapperOnClic.element.addEventListener('click', () => {
  console.log(inventoryWrapperOnClic.isOpen);
  if (!inventoryWrapperOnClic.isOpen) {
    inventoryWrapperOnClic.element.style.width = "500px";
    inventoryWrapperOnClic.isOpen = true;
  } else {
    inventoryWrapperOnClic.element.style.width = "100px";
    inventoryWrapperOnClic.isOpen = false;
  }
  console.log(inventoryWrapperOnClic.isOpen);
})