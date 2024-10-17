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

  room.start(room.firstRoom);

  // startTimer();

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

// Minuteur
let dizaine = 0;
let unites = 1;
let minutes = 1;

const styleTimer = document.querySelector(".timer-container")
const timerMinutes = document.querySelector("#timer-min");
const timerSecondsUnites = document.querySelector("#timer-sec-unites");
const timerSecondsDizaine = document.querySelector("#timer-sec-dizaine");

timerMinutes.innerHTML = minutes;
timerSecondsDizaine.innerHTML = dizaine;
timerSecondsUnites.innerHTML = unites;

function startTimer() {
  setInterval(function() {
    unites--;
    if ( unites >= 0 ){
    timerSecondsUnites.innerHTML = unites;}

    if (unites == -1 ) {
      unites = 9;
      dizaine--;
      timerSecondsDizaine.innerHTML = dizaine;
      timerSecondsUnites.innerHTML = unites;
      } else if (minutes > 0 && dizaine == 0 && unites == 0) {
      minutes--;
      dizaine = 5;
      unites = 9;
      timerSecondsUnites.innerHTML = unites;
      timerSecondsDizaine.innerHTML = dizaine;
      timerMinutes.innerHTML = minutes;
      if (minutes == 0) {
       
        setInterval(() => {
          styleTimer.classList.toggle('colorred');
          if (minutes == 0 && dizaine == 1 && unites == 3 ){
            const alertSound = document.getElementById("timer-alert");
            alertSound.volume = .5;
            alertSound.play();
           }
        }, 1000);
      }
    } else if (minutes == 0 && dizaine == 0 && unites == 0) {
      window.location.href = "https://img.freepik.com/vecteurs-libre/game-over-effet-glitch_225004-661.jpg?t=st=1729001229~exp=1729004829~hmac=ca5442e3bdf4d27878606bdc20748629afa9c20f7661ab45f4a5c3d2f664dc8c&w=1380";
    }
  }, 1000);
}