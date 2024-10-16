import {soundManager} from './sound-manager.js';
import {room} from './roomManager_fabrice.js';

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
  soundManager.keydownManager();
  soundManager.clickManager();

  const loadRoom = document.querySelector('#currentRoom');
  loadRoom.setAttribute('src', room.loadRoom('toiletMain'));
  room.loadArrows();

  const soundSetting = document.querySelector('.sound-setting-wrapper');
  soundSetting.addEventListener('click', (event) => {
    const settingPanel = document.querySelector('#setting-panel');
    const isDisplayNone = window.getComputedStyle(settingPanel).visibility === 'hidden';

    if (isDisplayNone) {
      settingPanel.style.visibility = 'visible';
    } else {
      settingPanel.style.visibility = 'hidden';
    }
  })

  time.decrease();
})

const close = document.querySelector('#close');// close the panel
const settingPanel = document.querySelector('#setting-panel');

close.addEventListener('click', (event) => {
  
  if (event.target === close) {
    settingPanel.style.visibility = 'hidden';
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    settingPanel.style.visibility = 'hidden';
  }

  room.keydown(room.loadRoom(event.code));
})

inventoryWrapperOnClic.element.addEventListener('click', () => {
  if (!inventoryWrapperOnClic.isOpen) {
    inventoryManager("350%", true);
  }
})

document.addEventListener('mouseover', (event) => {
  if (event.target === inventoryWrapperOnClic.element || event.target === inventory) {
    inventory.classList.add('hover');
  } else {
    inventory.classList.remove('hover');

    if (inventoryWrapperOnClic.isOpen) {
      inventoryManager("100%", false);
    }
  }
})