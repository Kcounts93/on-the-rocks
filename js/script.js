document.addEventListener("DOMContentLoaded", function () {
  const sliderInner = document.querySelector(
    ".testimonial-slider .slider-inner"
  );
  const sliderItems = document.querySelectorAll(
    ".testimonial-slider .slider-item"
  );
  const totalItems = sliderItems.length;
  let currentIndex = 0;

  // Function to scroll to the next testimonial
  const scrollToNextTestimonial = () => {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
    }
    sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Automatic scrolling to the next testimonial after 3 seconds
  setInterval(scrollToNextTestimonial, 5000);
});
