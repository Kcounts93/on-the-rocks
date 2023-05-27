// Testimonial Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll(
    ".testimonial-slider .slider-item"
  );
  const prevButton = document.querySelector(
    ".testimonial-slider .slider-control-prev"
  );
  const nextButton = document.querySelector(
    ".testimonial-slider .slider-control-next"
  );
  const sliderInner = document.querySelector(
    ".testimonial-slider .slider-inner"
  );

  let currentIndex = 0;
  const maxIndex = sliderItems.length - 2;

  // Function to update the active testimonial items
  const updateActiveItems = () => {
    sliderItems.forEach((item, index) => {
      if (index >= currentIndex && index < currentIndex + 2) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Function to handle previous button click
  const handlePrevClick = () => {
    if (currentIndex === 0) {
      currentIndex = maxIndex;
    } else {
      currentIndex -= 2;
    }
    updateActiveItems();
  };

  // Function to handle next button click
  const handleNextClick = () => {
    if (currentIndex >= maxIndex) {
      currentIndex = 0;
    } else {
      currentIndex += 2;
    }
    updateActiveItems();
  };

  // Event listeners for previous and next buttons
  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);

  // Automatic scrolling to the next testimonial after 3 seconds
  setInterval(handleNextClick, 3000);
});
