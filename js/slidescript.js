let sliderImages = document.querySelectorAll(".slide"),
  arrowleft = document.querySelector("#arrow-left"),
  arrowright = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideleft() {
  reset();

  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideright() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// left arrow click
arrowleft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideleft();
});

// right arrow click
arrowright.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideright();
});

startSlide();
