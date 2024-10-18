const button = document.getElementById('koalatak');
let posX = 70;
let posY = 70;

function moveButton() {

if (posX == 70 && posY == 70){
  posX = 20;
  button.style.left = posX + '%';
  button.style.transform = "rotate(0deg)";
} else if (posX == 20 && posY == 70) {
  posY = 20;
  button.style.top = posY + '%';
  button.style.transform = "rotate(90deg)";
} else if (posX == 20 && posY == 20) {
  posX = 70;
  button.style.left = posX + '%';
  button.style.transform = "rotate(180deg)";
} else {
  posY = 70;
  button.style.top = posY + '%';
  button.style.transform = "rotate(270deg)";
}
 
}
setInterval(moveButton, 1000);
let i = 0

button.addEventListener("click", function(){
i++;
if (i==1){
alert('Tu viens de tirer sur un koala ?!');}
if (i==2){
  alert('Une fois peut être un accident... mais deux ?');}
  if (i==3){
    alert('Les services de protection des animaux ont été contactés!');}
    if (i==4){
      alert('Par pitié.... stop !');}

if (i >= 5){
  window.location.href = "/pages/desk/desk.html";
}
});
