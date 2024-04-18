// Vent med at starte slideshowet, indtil DOM'en er indlæst
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      
      // Skjul alle billeder
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      // Opdater slideIndex og vis det næste billede
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1; // Start forfra, hvis vi når det sidste billede
      }
      slides[slideIndex - 1].style.display = "block";
      
      // Skift billede hvert 2 sekund (2000 ms)
      setTimeout(showSlides, 2000);
    }
  });
  