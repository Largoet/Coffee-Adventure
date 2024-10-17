const button = document.getElementById('koalatak');
let posX = 90;
let posY = 90;

function moveButton() {

if (posX == 90 && posY == 90){
  posX = 0;
  button.style.left = posX + '%';
  button.style.transform = "rotate(0deg)";
} else if (posX == 0 && posY == 90) {
  posY = 0;
  button.style.top = posY + '%';
  button.style.transform = "rotate(90deg)";
} else if (posX == 0 && posY == 0) {
  posX = 90;
  button.style.left = posX + '%';
  button.style.transform = "rotate(180deg)";
} else {
  posY = 90;
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
