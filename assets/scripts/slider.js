document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider__item-list');
    const slides = document.querySelectorAll('.slider__item');
    const nextButton = document.querySelector('button[name="next-slide"]');
    const prevButton = document.querySelector('button[name="prev-slide"]');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
  
    function goToSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      goToSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex);
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    // Swipe functionality
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
  
    slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const diffX = startX - currentX;
  
      if (diffX > 50) {
        nextSlide();
        isDragging = false;
      } else if (diffX < -50) {
        prevSlide();
        isDragging = false;
      }
    });
  
    slider.addEventListener('touchend', () => {
      isDragging = false;
    });
  
    // Desktop drag functionality
    slider.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = true;
      e.preventDefault(); // Prevent text selection
    });
  
    slider.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      const diffX = startX - currentX;
  
      if (diffX > 50) {
        nextSlide();
        isDragging = false;
      } else if (diffX < -50) {
        prevSlide();
        isDragging = false;
      }
    });
  
    slider.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  });
  