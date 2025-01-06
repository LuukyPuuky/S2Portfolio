document.addEventListener("DOMContentLoaded", () => {
  // Initialize all carousels
  document.querySelectorAll("[data-gallery]").forEach((galleryNew) => {
    const viewport = galleryNew.querySelector(".carousel-track"); // Locate the carousel track
    const slides = viewport.querySelectorAll(".carousel-slide"); // All slides
    const prevButton = galleryNew.querySelector("[data-gallery-prev]"); // Prev button
    const nextButton = galleryNew.querySelector("[data-gallery-next]"); // Next button

    let currentIndex = 0; // Track the current slide

    // Update the carousel view
    const updateGallery = () => {
      // Translate the viewport to the current slide
      viewport.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Enable/disable buttons based on the current index
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    };

    // Event listener for the previous button
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
      }
    });

    // Event listener for the next button
    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateGallery();
      }
    });

    // Initialize the gallery view
    updateGallery();
  });
});
