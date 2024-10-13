import {soundManager} from './sound-manager.js';
// import {panel} from './panel-manager.js';

const inventoryWrapperOnClic = {
  isOpen: false,
  element: document.querySelector(".inventory-bag")
}

const inventory = document.querySelector(".bg-inventory");

const inventoryManager = function (pWidth, pIsOpen) {
  const isOpen = pIsOpen ? inventory.classList.add('unroll', 'hover') : inventory.classList.remove('unroll', 'hover');

  inventory.style.width = pWidth;
  inventoryWrapperOnClic.isOpen = pIsOpen;
}

window.addEventListener('load', () => {
  soundManager.play();
  soundManager.keydownManager();
  soundManager.setting();
  soundManager.clickManager();

  const soundSetting = document.querySelector('.sound-setting-wrapper');
  soundSetting.addEventListener('click', () => {
    const settingPanel = document.querySelector('#setting-panel');

    const isDisplayNone = window.getComputedStyle(settingPanel).visibility === 'hidden';

    if (isDisplayNone) {
      settingPanel.style.visibility = 'visible';
    } else {
      settingPanel.style.visibility = 'hidden';
    }
  })
})

inventoryWrapperOnClic.element.addEventListener('click', () => {
  if (!inventoryWrapperOnClic.isOpen) {
    inventoryManager("350%", true);
  }
})

document.addEventListener('mouseover', (event) => {
  if (event.target === inventoryWrapperOnClic.element || event.target === inventory) {
    inventory.classList.add('hover');
    console.log('Class hover ajouté !');

  } else {
    inventory.classList.remove('hover');

    if (inventoryWrapperOnClic.isOpen) {
      inventoryManager("100%", false);
    }
  }
})