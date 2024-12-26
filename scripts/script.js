const imageWrapper = document.querySelector(".image-wrapper");
const afterImage = document.querySelector(".after-image");

let isDragging = false;

// Start dragging (on mouse down or touch start)
imageWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  updateClipPathFromEvent(e);
});

imageWrapper.addEventListener("touchstart", (e) => {
  isDragging = true;
  updateClipPathFromEvent(e.touches[0]);
});

// While dragging (on mouse move or touch move)
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    updateClipPathFromEvent(e);
  }
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    updateClipPathFromEvent(e.touches[0]);
  }
});

// Stop dragging (on mouse up or touch end)
document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

// Update the clip-path based on mouse/touch position
function updateClipPathFromEvent(e) {
  const rect = imageWrapper.getBoundingClientRect(); // Get the size of the image wrapper
  const mouseX = (e.clientX || e.touches[0].clientX) - rect.left; // Get the mouse/touch position relative to the image
  const percentage = (mouseX / rect.width) * 100; // Calculate the percentage of the image being revealed

  // Ensure percentage is within bounds (0 to 100)
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  // Update the clip-path style to reveal the "after" image
  afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}
