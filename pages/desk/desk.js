


document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.tuto-button');
  const hiddenButton = document.querySelector('.hidden-button');
  const arrow = document.querySelector('.arrow-img')

button.addEventListener("click", function() {
  button.style.display = 'none';
  hiddenButton.style.display = 'block';

});


hiddenButton.addEventListener("click", function(){
  hiddenButton.style.display = 'none';
  arrow.style.display = 'block';
});

arrow.addEventListener("click", function(){
  window.location.href = "http://www.w3schools.com";
})

})