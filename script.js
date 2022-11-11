let slideIndex = 1
showSlides(slideIndex)

// Next or Prev Control
function fwdSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("prof_img");
  console.log(slides.length);
  if(n > slides.length) {slideIndex = 1};
  if(n < 1) {slideIndex = slides.length};

  for(i=0; i<slides.lenght; i++){
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"
}