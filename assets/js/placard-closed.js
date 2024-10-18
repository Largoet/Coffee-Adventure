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
