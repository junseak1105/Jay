<script>
      let sliderImages = document.querySelectorAll(".slide"),   /*.slide 포함한 모든 슬라이드 선택*/
          arrowLeft = document.querySelector("#arrow-left"),    /*arrow-left 선택*/
          arrowRight = document.querySelector("#arrow-right"), 
                                                              /*arrow-right 선택*/
          current = 0;                                          /*slide number*/    

      // Clear all images
      function reset() {                                        
       for (let i = 0; i < sliderImages.length; i++) {
         sliderImages[i].style.display = "none";
       }
      }

      // Init slider
      function startSlide() {
       reset();
       sliderImages[0].style.display = "block";                   /*set to block to show image*/
      }

      // Show prev
      function slideLeft() {
       reset();
      sliderImages[current - 1].style.display = "block";
      current--;
      }

      // Show next
      function slideRight() {
       reset();
      sliderImages[current + 1].style.display = "block";
      current++;
      }

      // Left arrow click
      arrowLeft.addEventListener("click", function() {           /*when slider num =0 go to last slide*/
       if (current === 0) {
        current = sliderImages.length;
      }
       slideLeft();
      });

      // Right arrow click                                      /*when last slide , go to 1st slide*/
      arrowRight.addEventListener("click", function() {
       if (current === sliderImages.length - 1) {
        current = -1;
      }
      slideRight();
      });

      startSlide();
</script>