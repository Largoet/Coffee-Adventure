


document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.tuto-button');
  const hiddenButton = document.querySelector('.hidden-button');


button.addEventListener("click", function() {
  button.style.display = 'none';
  hiddenButton.style.display = 'block';
});

hiddenButton.addEventListener("click", function(){
  hiddenButton.style.display = 'none';
});})