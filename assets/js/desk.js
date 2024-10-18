
let dizaine = sessionStorage.getItem('dizaine') ? parseInt(sessionStorage.getItem('dizaine')) : 5;
let unites = sessionStorage.getItem('unites') ? parseInt(sessionStorage.getItem('unites')) : 9;
let minutes = sessionStorage.getItem('minutes') ? parseInt(sessionStorage.getItem('minutes')) : 1;

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
        }, 1000);
      }
    } else if (minutes == 0 && dizaine == 0 && unites == 0) {
      window.location.href = "https://img.freepik.com/vecteurs-libre/game-over-effet-glitch_225004-661.jpg?t=st=1729001229~exp=1729004829~hmac=ca5442e3bdf4d27878606bdc20748629afa9c20f7661ab45f4a5c3d2f664dc8c&w=1380";
    }
    sessionStorage.setItem('minutes', minutes);
    sessionStorage.setItem('dizaine', dizaine);
    sessionStorage.setItem('unites', unites);
  }, 1000);
}





document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.tuto-button');
  const hiddenButton = document.querySelector('.hidden-button');
  const arrow = document.querySelector('.arrow-img')

  if (sessionStorage.getItem("button") !== null) {
    sessionStorage.setItem('button', 'true');
    button.style.display = 'none';
    hiddenButton.style.display = 'block';
    const music = document.getElementById("doom-music");
    music.play();
    startTimer();
    hiddenButton.style.display = 'none';
    arrow.style.display = 'block';
    const targetButton = document.querySelector('.nothing-to-see');
    targetButton.disabled = false; 
    targetButton.style.display = "inline-block"; 
  }

button.addEventListener("click", function() {
  sessionStorage.setItem('button', 'true');
  button.style.display = 'none';
  hiddenButton.style.display = 'block';
  const music = document.getElementById("doom-music");
  music.play();
  startTimer();

});




hiddenButton.addEventListener("click", function(){
  hiddenButton.style.display = 'none';
  arrow.style.display = 'block';
});

arrow.addEventListener("click", function(){
  window.location.href = "/pages/room/roomjl.html";
})



document.querySelector(".hidden-button").addEventListener("click", function() {
  const targetButton = document.querySelector('.nothing-to-see');
  targetButton.disabled = false; 
  targetButton.style.display = "inline-block"; 
});

document.querySelector(".nothing-to-see").addEventListener("click", function() {
  const imgDesk = document.querySelector(".Starter");
  const timelaps = 55;
  let totaltime = 0;

  const images = [
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_1.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_2.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_1.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_2.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_1.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_2.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_1.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_2.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_1.png",
    "/assets/images/jpg_files/start/room_start-cofee_adventure_distorsion_2.png"
  ];

  images.forEach((src) => {
    totaltime += timelaps;
    setTimeout(() => {
      imgDesk.src = src;
    }, totaltime);
  });

  totaltime += timelaps;
  setTimeout(() => {
    window.location.href = "/pages/desk/morpheus/morpheus.html";
  }, totaltime);
}); 


})


const mugButton = document.querySelector('.mug-hidden-button');

mugButton.addEventListener('click', () => {
  if (sessionStorage.getItem('tasse') !== 'true' ) {
    sessionStorage.setItem('tasse', 'true');
    alert('Ma tasse est vide... je ferais mieux de me recharger et vite !');}
    if (sessionStorage.getItem("tasseCafe") !== null) {
            window.location.href = 'https://th.bing.com/th/id/R.2e00e495a9c7dc438a9ab7ac6f3c0776?rik=slP2tY4DIpi8tg&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fvictory%2fvictory-10.jpg&ehk=y48YOGvAkviLyZdpyOoR%2bFCD8b3Y9ABQ%2fuAdYAIuJFE%3d&risl=1&pid=ImgRaw&r=0'
    }
});