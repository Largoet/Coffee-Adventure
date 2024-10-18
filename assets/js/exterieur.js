// import { soundManager } from "../assets/js/";
let dizaine = sessionStorage.getItem('dizaine') ? parseInt(sessionStorage.getItem('dizaine')) : 5;
let unites = sessionStorage.getItem('unites') ? parseInt(sessionStorage.getItem('unites')) : 9;
let minutes = sessionStorage.getItem('minutes') ? parseInt(sessionStorage.getItem('minutes')) : 4;

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
            alertSound.play();
           }
        }, 2000);
      }
    } else if (minutes == 0 && dizaine == 0 && unites == 0) {
      window.location.href = "https://img.freepik.com/vecteurs-libre/game-over-effet-glitch_225004-661.jpg?t=st=1729001229~exp=1729004829~hmac=ca5442e3bdf4d27878606bdc20748629afa9c20f7661ab45f4a5c3d2f664dc8c&w=1380";
    }
    sessionStorage.setItem('minutes', minutes);
    sessionStorage.setItem('dizaine', dizaine);
    sessionStorage.setItem('unites', unites);
  }, 1000);
};


window.addEventListener('load', () => {
  console.log('coucou');

  startTimer(); 
})


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
