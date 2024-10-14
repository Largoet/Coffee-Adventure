


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
    window.location.href = "/pages/desk/morpheus.html";
  }, totaltime);
}); 


})


