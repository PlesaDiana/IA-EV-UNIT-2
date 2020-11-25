var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByName('dot');
  var consum = document.getElementById("consum");
  var memorie = document.getElementById("memorie");
  var disk = document.getElementById("disk");
  var porturi = document.getElementById("porturi");
  var servicii = document.getElementById("servicii");
  var procese = document.getElementById("procese");

  for(i = 0; i< slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1;
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].classList.add("dot");
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"

  consum.style.display = "none";
  memorie.style.display = "none";
  disk.style.display = "none";
  porturi.style.display = "none";
  servicii.style.display = "none";
  procese.style.display = "none";

  setTimeout(showSlides, 3000) //Changes every 3.5 seconds;

}
