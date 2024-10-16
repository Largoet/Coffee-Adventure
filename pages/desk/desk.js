
let dizaine = 5;
let unites = 9;
let minutes = 9;

const timerMinutes = document.querySelector("#timer-min");
const timerSecondsUnites = document.querySelector("#timer-sec-unites");
const timerSecondsDizaine = document.querySelector("#timer-sec-dizaine");
timerMinutes.innerHTML = minutes;
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
    } else if (minutes == 0 && dizaine == 0 && unites == 0) {
      window.location.href = "https://img.freepik.com/vecteurs-libre/game-over-effet-glitch_225004-661.jpg?t=st=1729001229~exp=1729004829~hmac=ca5442e3bdf4d27878606bdc20748629afa9c20f7661ab45f4a5c3d2f664dc8c&w=1380";
    }
  }, 1000);
}

startTimer();




document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.tuto-button');
  const hiddenButton = document.querySelector('.hidden-button');
  const arrow = document.querySelector('.arrow-img')

button.addEventListener("click", function() {
  button.style.display = 'none';
  hiddenButton.style.display = 'block';
  const music = document.getElementById("doom-music");
  music.play();

});


hiddenButton.addEventListener("click", function(){
  hiddenButton.style.display = 'none';
  arrow.style.display = 'block';
});

arrow.addEventListener("click", function(){
  window.location.href = "http://www.w3schools.com";
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


